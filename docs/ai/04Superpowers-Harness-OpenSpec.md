# Superpowers、Harness、OpenSpec 的区别

这三个词经常一起出现，但它们不是同一个层级的东西。

一句话区分：

+ **Harness 是底层工程系统**：它回答“怎样让 AI agent 在这个项目里稳定工作”。
+ **Superpowers 是工作流纪律**：它回答“agent 做事时应该按什么步骤、受哪些门控约束”。
+ **OpenSpec 是规格文档框架**：它回答“需求、设计、任务和变更记录应该怎样沉淀在仓库里”。

如果把 AI 编码看成一个团队协作系统，Harness 像办公室、工具、流程制度和验收系统；Superpowers 像一组强制执行的工程技能和角色分工；OpenSpec 像一套围绕规格说明组织工作的文档和命令体系。

## 三者的层级关系

```text
AI agent / model
  ↓
Superpowers：约束 agent 怎么做事
  ↓
OpenSpec：把需求、设计、任务、变更变成仓库里的规格工件
  ↓
Harness：承载这一切的工程环境、工具、状态、验证和反馈系统
```

这不是严格的上下级依赖，而是典型的关注点分层。一个项目可以只做 Harness，不用 Superpowers 或 OpenSpec；也可以把 Superpowers 和 OpenSpec 都纳入自己的 Harness。

## Harness：模型之外的一切可靠性工程

Harness 的核心不是“某个工具”，而是一种工程视角：模型权重之外，所有能影响 agent 成败的东西，都属于 harness。

它通常包括：

+ 指令：`AGENTS.md`、团队约定、目录说明、禁止事项。
+ 工具：终端、测试命令、浏览器、MCP、GitHub、数据库、CI。
+ 环境：依赖安装、沙箱权限、工作目录、分支和 worktree。
+ 状态：任务进度、设计决策、历史上下文、交接记录。
+ 反馈：测试、lint、类型检查、端到端验证、代码审查、CI 结果。

所以 Harness 的问题意识是：不要只问“模型聪不聪明”，要问“这个 agent 有没有足够清楚的地图、工具、边界和反馈”。

一个好的 harness 会让 agent：

+ 进来就知道项目怎么启动、怎么测试、怎么交付。
+ 不靠聊天记录保存关键上下文，而是从仓库里的文档和状态文件恢复任务。
+ 不能凭感觉说完成，必须拿出可执行验证结果。
+ 出错时能从错误消息、测试结果、日志和文档里自我修正。

Harness 是最宽的概念。Superpowers 和 OpenSpec 都可以被看作 harness 的组成部分。

## Superpowers：把开发流程变成可执行的技能门控

Superpowers 更像是一套 agent 工作流和技能系统。它不是泛泛地告诉 agent “认真一点”，而是把常见工程动作拆成明确的技能，并规定触发时机、输入输出和硬门控。

典型技能包括：

+ `brainstorming`：先澄清需求和设计，不能一上来写代码。
+ `writing-plans`：把设计文档拆成可执行计划。
+ `test-driven-development`：没有先失败的测试，就不能写生产代码。
+ `systematic-debugging`：没有根因，就不能直接修。
+ `verification-before-completion`：没有真实验证输出，就不能声称完成。
+ `requesting-code-review` / `receiving-code-review`：把审查和处理审查意见也流程化。
+ `using-git-worktrees`：用隔离工作区降低并行开发和污染主分支的风险。

Superpowers 的重点是“约束 agent 的行为”。它把软件工程里的好习惯变成硬规则，让 agent 每一步都必须经过明确的关卡。

它适合解决这些问题：

+ agent 太容易跳过需求澄清。
+ agent 写完代码就过度自信。
+ agent 调 bug 时凭直觉乱改。
+ agent 做多了、做偏了、没有按计划收口。
+ 长任务需要计划、执行、审查和验证的连续流程。

Superpowers 的本质是一种过程控制层。它不一定负责保存完整产品规格，也不一定定义项目的全部知识结构；它更关心“当前这次任务怎样被正确执行”。

## OpenSpec：把需求和变更变成仓库内的规格工件

OpenSpec 属于 Spec-Driven Development，也就是规格驱动开发。它的核心思想是：不要让需求只停留在聊天窗口里，而是把“为什么做、做什么、怎么做、做到哪了”沉淀为仓库里的结构化文件。

OpenSpec 通常围绕一个变更目录组织工作，例如：

```text
openspec/
  changes/
    add-dark-mode/
      proposal.md
      specs/
      design.md
      tasks.md
```

它的关注点是：

+ `proposal.md`：为什么要做这个变更，范围是什么。
+ `specs/`：用户可见行为、需求、场景和验收条件。
+ `design.md`：技术方案、架构影响、取舍。
+ `tasks.md`：可执行的任务拆分。
+ archive：完成后归档变更，并把长期有效的规格合并回项目知识中。

OpenSpec 的价值在于把“对话里的意图”变成“仓库里的合同”。新会话、新 agent、新成员都可以从这些文件恢复上下文，而不是依赖某一次聊天记录。

它适合解决这些问题：

+ 需求和实现之间经常漂移。
+ PR 很大，reviewer 看不出最初意图。
+ 不同 AI 工具之间切换时，上下文无法迁移。
+ 老项目想逐步引入规格驱动，而不是一次性重构流程。
+ 团队希望每个变更都有 proposal、spec、design、tasks 这些可审查工件。

OpenSpec 的重点不是强制 agent 使用 TDD 或调试方法，而是让规格、设计和任务成为可持久化、可审查、可追踪的项目资产。

## 对比表

| 维度 | Harness | Superpowers | OpenSpec |
|---|---|---|---|
| 本质 | 工程基础设施和运行环境 | 技能化的流程纪律 | 规格驱动开发框架 |
| 层级 | 最大，包含指令、工具、环境、状态、反馈 | Harness 中的过程控制层 | Harness 中的规格和变更管理层 |
| 主要问题 | 怎样让 agent 稳定、可观测、可验证地工作 | agent 每一步应该怎么做，何时不能继续 | 需求、设计、任务怎样沉淀并持续演化 |
| 核心产物 | `AGENTS.md`、工具配置、测试体系、状态文件、CI、反馈循环 | skill、计划、测试、审查、验证证据 | `proposal.md`、`specs/`、`design.md`、`tasks.md`、archive |
| 控制方式 | 通过环境、工具和反馈约束行为 | 通过硬门控约束 agent 步骤 | 通过规格工件约束变更范围 |
| 适用范围 | 项目、团队、组织级别 | 单次任务到完整开发流程 | 单个变更到长期规格库 |
| 最大风险 | 过度复杂，维护成本高；文档过时会误导 agent | 门控太重，小任务也变慢 | 规格和代码不同步，文档变成仪式 |
| 好的使用方式 | 把隐性知识写进仓库，把验证自动化 | 对高风险任务强制计划、TDD、审查和验证 | 对需求不清、影响面大的变更先写规格 |

## 用一个需求来看区别

假设你要让 agent 给项目增加“深色模式”。

### Harness 会关心

+ agent 知不知道项目怎么启动？
+ 有没有测试命令和 lint 命令？
+ CSS 规范、主题变量、浏览器兼容要求写在哪里？
+ agent 能不能打开浏览器验证效果？
+ 做完后用什么证据判断真的完成？

Harness 解决的是“执行系统是否可靠”。

### Superpowers 会关心

+ 是否先澄清深色模式覆盖哪些页面？
+ 是否先写设计和计划？
+ 是否先补测试，再写实现？
+ 出现样式问题时是否按系统化调试找根因？
+ 声称完成前是否跑了真实验证？

Superpowers 解决的是“执行过程是否守纪律”。

### OpenSpec 会关心

+ 是否为 `add-dark-mode` 建立独立变更目录？
+ proposal 有没有写清为什么做、范围是什么？
+ specs 有没有描述用户场景和验收标准？
+ design 有没有说明主题变量、持久化策略、组件影响？
+ tasks 有没有拆成可以逐项完成和 review 的清单？
+ 完成后是否归档，并更新长期规格？

OpenSpec 解决的是“变更意图是否被结构化保存”。

## 怎么选择

如果你只是在问“怎么让 AI 编码更靠谱”，先从 Harness 想起。因为模型再强，如果环境混乱、文档缺失、测试不可运行、反馈不清楚，agent 仍然会失败。

如果你已经有一个可运行项目，但 agent 经常跳步骤、乱修 bug、提前说完成，就引入 Superpowers 这种流程门控。它的作用是把好的工程习惯变成 agent 必须遵守的操作顺序。

如果你的痛点是需求漂移、上下文丢失、review 看不懂意图，或者想让多个 AI 工具共享同一套项目规格，就引入 OpenSpec。它的作用是把规格从聊天窗口搬进仓库。

更实际的组合是：

+ 小项目：轻量 Harness + 少量 Superpowers 规则。
+ 中型项目：Harness + Superpowers 的计划、TDD、验证门控。
+ 需求复杂或多人协作项目：Harness + Superpowers + OpenSpec。
+ 老项目改造：先补 Harness，让 agent 能跑起来；再用 OpenSpec 给新增变更建规格；最后逐步把 Superpowers 门控加到高风险流程里。

## 最容易混淆的点

### 1. OpenSpec 不是 Harness 的替代品

OpenSpec 能保存规格，但它不自动保证测试可靠、环境干净、权限安全、CI 正确、错误消息可修复。这些仍然是 Harness 的工作。

### 2. Superpowers 不是 OpenSpec 的替代品

Superpowers 能强制 agent 先设计、后计划、再实现，但如果这些设计和计划没有成为长期项目资产，后续会话仍然可能丢上下文。OpenSpec 更擅长把这些东西沉淀下来。

### 3. Harness 不是越多越好

Harness 的目标是降低失败率，不是制造仪式感。每个规则、脚本、文档都要问：它是否真的减少了 agent 的误解、越界、漏验或上下文丢失？

### 4. 三者都不能代替验收

规格、技能和工具链都只是让成功更可重复。最终仍然要靠可执行验证、人工 review 和真实使用场景确认结果。

## 我的理解

三者可以用一个公式记住：

```text
可靠 AI 开发 = Harness 提供环境和反馈 + Superpowers 约束执行过程 + OpenSpec 固化需求和变更
```

Harness 是地基，决定 agent 能不能在项目里可靠行动。

Superpowers 是纪律，决定 agent 会不会按工程流程行动。

OpenSpec 是契约，决定需求和实现之间有没有可追踪的中间层。

真正成熟的 AI 编码流程，不是盲目相信模型，也不是堆满工具，而是让每个关键环节都有外部化的事实来源：需求在规格里，规则在仓库里，状态在文件里，质量在测试和 review 里，完成在验证证据里。

## 参考

+ [Superpowers](https://github.com/obra/Superpowers)
+ [OpenSpec 官方网站](https://openspec.pro/)
+ [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)
+ [From Prompt to Process: a Process Taxonomy and Comparative Assessment of Frameworks Supporting AI Software Development Agents](https://arxiv.org/abs/2606.04967)
