# [Superpowers](https://github.com/obra/Superpowers)

[[toc]]

14个核心skill组成的虚拟工程团队，覆盖从想法到上线的完整开发流程，基于obra/superpowers v5.1.z-0

## 完整开发流程图

:::tip
阅读说明：每一层都有：所处阶段、使用的skill、触发方式、输入/输出、关键规则/门控。  
🟢 自动触发 🟡 手动触发 🔵 被其他skill调用 🔴 HARD_GATE门控（不通过不能继续）
:::

### L0. 工作空间隔离层 🟡 手动/🔵 被调用

| 使用 Skill  |      输入      |  输出 | 🔴 门控 |
| ------------- | :-----------: | ----: |----: |
|/using-git-worktrees|当前git仓库+功能名称|独立 worktree+基线测试全绿报告|基线测试不通过->必须先修复，不能继续|

:::info
**这一层做什么**：在开始任何开发前，先把工作隔离到一个独立的git worktree（独立分支）。优先用平台原生工具，没有则使用 git worktree add。创建后自动检测项目类型并安装依赖，然后跑一遍全量测试确认基线干净。  
**为什么重要**：防止开发中的变更污染主分支；基线干净才能分辨是新 bug 还是老问题
:::

Step 0：检测是否已在 worktree -> 选工具（原生/git回退） -> 安装依赖 -> 跑基线测试 -> 就绪、报告  
被调用自：subagent-driven-development、executing-plans 执行前均自动调用此层

### L1. 需求澄清与设计层 🟡 手动触发 🔴 HARD-GATE

| 使用 Skill  |      输入      |  输出 | 🔴 门控 |
| ------------- | :-----------: | ----: |----: |
|/brainstorming|用户的模糊想法/需求描述|用户批准的spec设计文档(.md)|没有批准的spec->禁止写任何代码|

:::info
**这一层做什么：** 通过9步对话流程，把模糊的想法转变为清晰的设计。先探索代码库上下文->问3-5个关键澄清问题->提出2-3个实现方案->分段展示设计并获得确认->写spec文档->自我审查->用户批准。完成后强制调用writing-plans（没有其他出路）。
**为什么重要：** AI编码失误的首要原因是误解需求。没有spec，任何实现都可能跑偏。
:::

9步流程：探索上下文 -> 视觉草图 —> 澄清提问 -> 提2-3方案 -> 展示设计 —> 写spec -> 自我审查 -> 用户批准 -> 调用 writing-plans

### L2. 任务拆解与计划层 🔵 由 brainstorming 调用

| 使用 Skill  |      输入      |  输出 | 🔴 门控 |
| ------------- | :-----------: | ----: |----: |
|/writing-plans|用户批准的spec文档|完整实现计划.md，含所有代码和命令|TBD/TODO/占位符/类似Task N|

:::info
**这一层做什么：** 把spec编程“工程师可无脑执行”的详细任务清单，每个任务含：精确文件路径(Create/Modify/Test)、完整代码块（不省略）、精确命令+预期输出。每步2-5分钟粒度，TDD节奏（写测试->跑失败->写实现->跑通过->提交）。完成后三步自检：spec覆盖检查、占位符扫描、类型一致性检查，然后让用户选执行方式。
:::

结构： 文件清单->任务1（写测试->跑->实现->跑->提交）->任务 N... -> 3项自检 -> 用户选执行方式

### L3. 计划执行层（二选一） 🔵 由 writing-plans 调用

<table>
    <thead>
        <tr>
            <th>A. Subagent 驱动 （推荐）</th>
            <th>B. 内联执行（备选）</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>skill</td>
        <td>/subagent-driven-development</td>
        <td>/executing-plans</td>
    </tr>
    <tr>
        <td>具体</td>
        <td>
            <ul>
                <li>每个任务派一个全新子agent，零上下文污染</li>
                <li>子agent必须使用TDD完成任务</li>
                <li>没任务完成后自动派两个reviewer agent(spec审查+代码质量)</li>
                <li>所有任务完成后调用finishing-a-development-branch</li>
                <li>持续执行不暂停，任务间自动衔接</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>在当前session中按顺序执行任务</li>
                <li>每个任务有人工检查点可暂停确认</li>
                <li>批量执行，积累上下文，不切换agent</li>
                <li>完成后同样调用finish-a-development-branch</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>适用场景</td>
        <td>支持子agent的平台、多任务计划、需要隔离执行的场景</td>
        <td>任务强耦合、不支持子agent的平台、需要人工逐步确认</td>
    </tr>
    </tbody>
</table>

### L4. TDD实现循环层 🔵 子agent内部强制使用 🔴 iron Law

| 使用 Skill  |      触发条件       |  输出 | 🔴 IRON LAW |
| ------------- | :-----------: | ----: | ----: |
|/test-driven-development|计划中的单个任务（含测试要求）|通过测试的代码+git commit|没有先写失败测试->不能写生产代码|

:::info
**这一层做什么：** 每个实现任务都必须走红绿重构循环。先写失败测试（RED）->确认测试确实失败（必须验证，跳过此步=违规）->写最小实现让测试通过（GREEN）->重构（REFACTOR）->commit。禁止在没有失败测试的情况下写任何生产代码；禁止在生产代码之前写测试但不先运行确认失败。  
:::

RED：写失败测试->运行确认失败->GREEN：写最小实现->运行确认通过-> REFACTOR: 优化代码-> commit

### L5. 两阶段代码审查层 🔵 每任务完成后自动触发

<table>
    <thead>
        <tr>
            <th>第一阶段：Spec合规审查</th>
            <th>第二阶段：代码质量审查</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>具体</td>
        <td>
            <ul>
                <li>专门派一个reviewer子agent</li>
                <li>对比：计划vs实际代码变更</li>
                <li>检查：有么有多做？有么有少做？</li>
                <li>输入：DESCRIPTION+PLAN_OR_REQUIREMENTS+git diff</li>
                <li>输出：AUTO-FIX（自动修复）/ASK（询问）/DONE</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>第一阶段通过后才进行</li>
                <li>另一个reviewer子agent独立审查</li>
                <li>检查：架构、命名、安全、性能、可维护性</li>
                <li>使用/receiving-code-review</li>
                <li>YAGNI检查：拒绝“专业化”多余功能</li>
            </ul>
        </td>
    </tr>
    </tbody>
</table>

:::danger
两阶段顺序不能颠倒：先确认“做对了事”（spec合规），再确认“事做对了”（代码质量）。先spec不先质量，是因为质量低的正确实现可以重构，但高质量的错误实现是浪费。
:::

### L6. 审查意见处理层 🟡 有意见时手动调用

| 使用 Skill  |      输入      |  输出 | 🔴 禁止 |
| ------------- | :-----------: | ----: |----: |
|/receving-code-review|审查意见列表（来自reviewer agent）|逐条处理后的代码修改or有依据的拒绝|盲目接受/“表演式同意”|

:::info
**这一层做什么：** 6步流程处理每条意见：阅读->理解->验证技术正确性->评估是否必要（YAGNI检查）->做出回应->实现。关键：不是照单全收，而是批判性评估。如果审查意见本身有错误，要明确指出并拒绝。如果是“专业化但不必要”的建议，直接拒绝。
:::

### L7. 完成前验证层 🔵 所欲“声称完成”前强制走 🔴 iron Law

| 使用 Skill  |      触发条件      |  输出 | 🔴 IRON LAW |
| ------------- | :-----------: | ----: |----: |
|/verification-before-completion|准备声称“完成/修复/通过”之前|实际运行的命令+真实输出+结论|未运行验证命令->不能说“完成/通过/修复”|

:::info
**这一层做什么：** 5步门控函数：识别验证命令->运行完整命令->读取全部输出->核实输出收费支持结论->才做声明。禁止说“应该通过了”、“看起来正确”、“好像洗好了”、必须说“跑了，输出是：34/34通过”。来自24次失败教训：AI说“完成”但实际有bug导致信任崩溃，这是建立该层的直接原因。
:::

触发来源：systematic-debugging 末尾要求，任何任务完成声明前、commit/PR创建前

### L8. Bug调试层（随时触发）🟡 遇到报错/失败时应主动触发 🔴 iron Law

| 使用 Skill  |      输入      |  输出 | 🔴 IRON LAW |
| ------------- | :-----------: | ----: |----: |
|/systematic-debugging|报错信息/失败的测试/异常行为|根因分析+修复代码+验证通过|没有根因->不能提出修复方案|

:::info
**这一层做什么：** 4阶段调试流程：1.收集证据（错误信息、堆栈、日志、最近变更）->2.找正常工作的对照样本->3.形成假设（用“因为......所以......”结构）->4.实现修复（TDD:先写复现bug的测试，再修复）。3次修复失败->必须质疑架构假设。修复完成后调用verification-before-completion独立验证
:::

4阶段： 1.收集证据->2.找对照样本->3.形成假设->4.TDD修复->verification-before-completion

### L9. 并行加速层（可选）🟡 判断有多个独立问题时主动触发

| 使用 Skill  |      触发条件       | 不适用场景 |
| ------------- | :-----------: | ----: |
|/dispatching-parallel-agents|3个以上相互独立的失败/问题|失败有级联关系、共享状态、可能冲突|

:::info
**这一层做什么：** 当存在3+个独立失败子系统时，同时派N个子agent并行处理，而不是串行排队。每个子agent独立走systematic-debugging流程。控制agent汇总结果，检查变更冲突后合并。  
**关键判断：** 失败是否相互独立？如果失败A的根因可能影响失败B，则不应并行。
:::

### L10. 分支收尾与发布层 🔵 由执行类skill自动调用

| 使用 Skill  |      输入      |  输出 | 🔴 前置条件 |
| ------------- | :-----------: | ----: |----: |
|/finish-a-development-branch|完成全部任务的worktree|合并/PR/保留/丢弃，worktree已清理|测试必须全通过才能执行发布动作|

:::info
**这一层做什么：** 5步收尾流程：1.验证所有测试通过->2.检测git环境（是否在worktree？能否创建PR？）->3.确定目标基础分支（main/master/develop）->4.向用户呈现4个选项（本地合并/PR/保留分支不操作/丢弃变更）->5.执行选择并清理worktree。最终完成开发闭环，回到干净的主工作区。
:::

选项： 1. 本地合并到主分支 2.创建pr 3.保持现状不合并 4. 丢弃分支

## 特殊路径：并行问题 & 写新Skill

<table>
    <thead>
        <th>并行调试路径（L8+L9组合）</th>
        <th>写新Skill路径</th>
    </thead>
    <tbody>
        <tr>
            <td>
                发现多个独立失败->进入L8开始时判断数
                ↓ 3个以上且互相独立？
                ↓ 是 → 进入L9 /dispatching-parallel-agents
                ↓ 同时派 N 个子agent，各自跑L8
                ↓ 汇总结果，检查变更冲突
                ↓ 合并后回到正常L5审查流程
            </td>
            <td>
                发现可复用的方法论/反复出现的违规
                ↓ /writing-skills
                ↓ RED: 不带skill跑agent，记录所有违规行为
                ↓ GREEN：写skill解决那些违规
                ↓ REFACTOR：补充漏洞，防止合理化借口
                ↓ 部署+更新工具清单文档
            </td>
        </tr>
    </tbody>
</table>

## 技能联动关系

|关系|说明|
|--|:---|
|brainstorming → writing-plans： |brainstorming完成，用户批准spec后，强制调用writing-plans（唯一的下一步）  |
|writing-plans → subagent-driven-development| 计划完成后，推荐选择subagent驱动执行   |
|writing-plans → executing-plans:| 计划完成后的备选执行方式（不支持子agent平台）  |
|subagent-driven-development → using-git-worktrees| 执行前确保隔离工作空间存在（必需）  |
|subagent-driven-development → test-driven-development| 要求每个实现子agent使用TDD（必需）  |
|subagent-driven-development → requesting-code-review| 每任务完成后自动派spec审查+代码质量审查子agent|  
|subagent-driven-development → finishing-a-development-branch| 所有任务完成后，最终代码审查通过后调用收尾 | 
|executing-plans → using-git-worktrees| 执行前确保隔离工作空间（必需） | 
|executing-plans → finishing-a-development-branch| 所有任务完成并验证后调用收尾  |
|systematic-debugging → test-driven-development| 第四阶段第一步：创建能复现bug的失败测试  |
|systematic-debugging → verification-before-completion| 修复完成后，声称成功前必需独立验证 | 
|writing-skills → test-driven-development| 写skill是把TDD应用到文档，必需先理解TDD  |
|finishing-a-development-branch → using-git-worktrees| 收尾时清理 using-git-worktrees 创建的worktree  |
|dispatching-parallel-agents → systematic-debugging| 每个并行子agent内部各自走系统化调试流程|

## 技能详解

|skill|层|详情|触发时机|选择|调用|被调用|
|--|:---|:---|:---|:---|:---|:---|
|/brainstorming|规划层|把模糊想法转化为经过验证的设计文档。通过对话逐步澄清需求，提出方案，写出spec，用户批准后才能写代码。|任何新功能、修改行为、构建组件之前。这是硬门控——没有spec不能写代码|手动触发，必须先用|→ writing-plans（唯一的下一步）|
|/writing-plans|规划层|把spec转化为工程师可无脑执行的详细计划。每步2-5分钟，含精确路径、完整代码、精确命令。TDD节奏。禁止任何占位符|有了spec之后，在执行之前。通常由brainstorming自动调用|自动触发|← brainstorming|→ subagent-driven-development（推荐）<br/>→ executing-plans（备选）|
|/using-git-worktrees|执行层|确保工作在隔离环境中进行。优先用原生EnterWorktree工具，回退到git worktree.创建自运行项目初始化和基线测试|开始功能开发前，或执行计划前。被subagent-driven-development和executing-plans要求调用|被调用，手动可用|← subagent-driven-development<br/>← executing-plans|→ finishing-a-development-branch|
|/subagent-driven-development|执行层|流水线工厂：每任务派一个全新隔离子agent，任务完成后走两阶段审查（spec合规→代码质量），持续执行不停顿。用最低算力模型完成任务。|有实现计划、任务基本独立、在支持子agent的平台（推荐选项）|手动选择|← writing-plans（推荐）|→ using-git-worktrees · test-driven-development<br/>→ requesting-code-review · finishing-a-developmnet-branch|
|/executing-plans|执行层|在当前session自己按计划执行，带检查点。适合任务强耦合或不支持子agent的平台。遇阻立刻停下来问，不要猜。|任务间有强依赖、不支持子agent、或用户选择内联执行|手动选择|← writing-plans（备选）|→ using-git-worktrees · test-driven-development|
|/test-driven-development|质量层|铁律：没有失败的测试，就没有生产代码。红绿重构循环：先写测试、亲眼看它失败、写最小实现、看它通过、重构。先写测试再实现，不能反过来。|实现任何功能或修复bug之前。subagent-driven-development要求子agent使用。|被要求使用，手动触发|← subagent-driven-development（要求子agent用）<br/>← systematic-debugging（第四阶段）|
|/requesting-code-review|审查层|作为代码作者，派发代码审查者子agent来检查你的代码。给子agent精确的上下文（BASE_SHA、HEAD_SHA、描述、需求），不继承当前session历史。|完成每个任务后、完成主要功能后、合并前。subagent-driven-development中自动调用|被自动调用，手动可用|← subagent-driven-development（每任务后自动）|
|/receving-code-review|审查层|作为代码接收方，指导如何处理审查意见。验证技术正确性后再实现。外部意见要批判性看待。禁止表演式同意“你说的对！”，禁止盲目照单全收。|收到审查意见后，不确定该不该照做时，手动调用|手动触发|
|/systematic-debugging|调试层|四阶段调试法：根本原因调查→模式分析→假设测试→实现修复。铁律：没有根因不提修复。3次修复失败必须质疑架构，不能继续凑。|遇到任何bug、测试失败、意外行为时，提出修复方案之前|手动触发，应主动触发||→ test-driven-development（第四阶段）<br/> → verification-before-completion（修复后）|
|/verification-before-completion|质量层|强制刹车：声称任何工作完成前、必须实际运行验证命令并看到输出。不能说“应该通过了”，不能信任agent的成功报告，证据优先于说明|即将说“完成了/修好了/通过了”之前，即将提交/创建PR之前|完成前必走|← systematic-debugging（修复后）|
|/dispatching-parallel-agents|执行层|当有多个互相独立的问题时，同时派多个子agent并行处理。每个agent的prompt必须聚焦、自包含、有约束、有明确输出格式。|3+个测试文件各自独立失败、多个子系统独立损坏、各问题间无共享状态|手动触发|
|/finishing-a-development-branch|收尾层|开发收尾：验证测试→检测git环境→给出结构化选项（合并/PR/保持/丢弃）→执行→清理worktree。选项2不清理worktree（PR需要迭代）|所有实现任务完成，代码审查通过后。被executing-plans和subagent-driven-development自动调用|被自动调用|← executing-plans<br/>← subagent-driven-development|→ using-git-worktrees 创建的 worktree|
|/writing-skills|元技能|把TDD应用到文档协作：写skill前先让agent在没有skill的情况下“失败”，记录所有借口，然后写skill堵住这些借口，测试通过后部署|创建新skill，修改已有skill，验证skill是否有效时。手动调用|手动触发，元技能|前提← 必须先理解 test-driven-development|

## 如何使用Superpowers

### 标准工作流

```
/brainstorming → 逐一提问，确认需求，写spec
  ↓ 自动
/writing-plans → spec转为可执行任务计划
  ↓ 用户选择执行方式
/subagent-driven-development → 每任务派子agent，自动审查
  ↓ 每个子agent内部走TDD，每任务后自动代码审查
/finishing-a-development-branch → 验证、选合并方式、清理
```

### 各场景推荐用法

|场景|用法|
|---|:---|
|做新功能|→先调用/brainstorming,不管多简单都不能跳过<br/>→spec写完让用户确认<br/>→/writing-plans生成计划<br/>→选/subagnet-driven-development执行<br/>→最后/finishing-a-development-branch收尾|
|修复bug|→先调用/systematic-debugging，四阶段找根因<br/>→找到根因后写失败测试（/tdd)<br/>→写最小修复，跑测试通过<br/>→/verification-before-completion再确认<br/>→不能没有根因就猜着改|
|多个独立失败|→先判断是否真的独立<br/>→独立则用/dispatching-parllel-agents<br/>→每个子agent分配一个问题域<br/>→汇总后检查修复是否冲突<br/>→跑全量测试确认|
|收到代码审查|→调/receiving-code-review<br/>→先理解，再验证技术正确性<br/>→有疑问先澄清，再实现<br/>→外部意见要批判性看待<br/>→不说“你说得对”，直接修就行|
|沉淀方法论|→调/writing-skills<br/>→先让agent在没有skill时失败，记录借口<br/>→写skill针对那些借口<br/>→测试通过后部署<br/>→更新全局工具清单|
|重构已有代码|→先用/brainstorming明确重构边界<br/>→遵循已有模式，不要乱重构<br/>→每步都走TDD<br/>→每改一处都验证回归测试<br/>→不要“顺手”改范围外的东西|

### Superpowers核心原则

|原则|说明|
|---|:---|
|硬门控|没有spec不能写代码（brainstorming），没有失败测试不能写（TDD），没有根因不能提修复（debugging），没有验证不能声称完成。|
|证据优先|永远是先有证据再有声明。不能说“应该通过”，要说“跑了，34/34通过”。不能信任agent的成功报告，要独立验证|
|上下文隔离|子agent永远从零开始，不继承当前session历史，控制者精确构建子agent所需的上下文，防止上下文污染影响后续任务。|
|最小实现|YAGNI:只写让测试通过的最小代码。不预测未来需求，不过度设计，不“顺手”重构无关代码。三行相似代码好过过早抽象。|
|遇阻即停|执行中遇到阻塞，指令不清、3次修复失败——立刻停下来问，不要猜。每次只改一个变量，不要同时堆多个修复|
|1%规则|只要有1%可能某个skill适用，就必须先调用它。不能因为“看起来简单”就跳过。这是using-superpowers的核心铁律|
|持续执行|subagent-driven-development不在任务间停下来汇报。“我应该继续吗？”实在浪费时间。用户让你执行计划，就执行完。|
|最低算力|用能完成任务的最低算力模型。机械实现用haiku（低端），集成/调试用sonnet（中端），架构/审查用opus（高端）。BLOCKED时升一档，不要一开始全用最强模型|

## 如何用好Superpowers

superpowers不是工具包，是一套强制记录的执行体系。它的价值在于防止你（和AI）走捷径

### 正确心态

|错误心态|正确心态|
|---|:---|
|这个功能很简单，跳过brainstorming|简单的功能更容易因未审视的假设浪费时间，必须走|
|先写代码，测试之后再补|测试后写只回答“做了什么”，测试先写才回到“应该做什么”|
|这个报错我大概知道原因，直接改|看到症状≠理解根因，系统化调试15分钟比凑3小时快|
|审查者说改就改，没必要质疑|外部意见是待评估的建议，技术正确性优先于社交舒适|
|跑完测试看起来过了应该没问题|必须看到实际输出数字（34/34 PASS），不接受“应该”|

### 常见误区

1. 跳过brainstorming：即使是”加个字段“这种小改动也要走；spec可以很短（几句话），但必须存在；目的是对齐预期，不是写长文档
2. 计划里留TBD：writing-plans明确禁止任何占位符；”add error handling“ 不是步骤，完整代码才是；后面执行的agent可能乱序度任务
3. 3次修复还在凑：3次失败是架构问题的信号，不是运气问题；继续尝试第4次是在浪费时间；停下来质疑架构，和用户对齐。
4. 相信agent说成功了：verification-before-completion 要求独立验证；agent报告成功→检查git diff→跑测试；”成功“是你亲眼看到输出后说的话

### 快速决策树：选哪个skill？

|问|skill选择|
|---|:----|
|有新需求/想法？|/brainstorming先走一遍|
|有spec，需要计划？|/writing-plans|
|有计划，任务独立，在claude code|/subagent-driven-development（推荐）|
|有计划，任务耦合/不支持子agent|/executing-plans|
|遇到报错/测试失败？|/systematic-debugging 先找根因|
|多个互不相关的失败？|/dispatching-parallel-agents|
|即将提交/生成完成？|/verification-before-completion|
|收到审查意见不确定怎么处理？|/receiving-code-review|
|所有任务完成要合并？|/finishing-a-development-branch|
|想把这次经验沉淀成skill？|/writing-skills|

### 一句话总结每个skill

|skill|一句话|铁律|
|---|:---|:---|
|/brainstorming|把想法变成双方对齐的设计文档|没有spec不能写代码|
|/writing-plans|把spec变成可执行的详细任务清单|每步必须有完整代码，禁TBD|
|/using-git-worktrees|在隔离分支工作，保护主分支|先检测已有隔离，原生工具优先|
|/subagent-driven-development|每任务一个新鲜子agent+两阶段审查|不在任务间停顿汇报|
|/executing-plans|在当前session按计划逐步执行|遇阻即停，不猜测|
|/test-driven-development|先写失败测试，再写最小实现|没看到测试失败就不算TDD|
|/requesting-code-review|派子agent审查你写的代码|没任务后必须审查|
|/receiving-code-review|批判性处理收到的审查意见|验证后再实现，不盲目照做|
|/systematic-debugging|系统化四阶段找根因再修复|没有根因不提修复方案|
|/verification-before-completion|声称完成前必须有实际输出证据|没跑命令不能声称通过|
|/dispatching-parallel-agents|多个独立问题同时并行解决|确认独立再并行，不能共享状态|
|/finishing-a-development-branch|开发收尾：测试→选择合并方式→清理|测试失败不能收尾|
|/writing-skills|用TDD方式创建和验证新skill|没有失败测试不能写skill|
|/using-superpowers|1%规则：可能适用就必须用|不能合理化跳过skill|
