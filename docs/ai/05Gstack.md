# GStack：把 Claude Code 组织成一支虚拟工程团队

## 先校准：这里的 GStack 是什么

这里说的 **GStack**，不是 Linux 里用来抓线程调用栈的 `gstack`，也不是一个泛泛而谈的 “goal stack” 概念。

这里的 GStack 指的是 [garrytan/gstack](https://github.com/garrytan/gstack)：Garry Tan 开源的一套面向 Claude Code 的技能、斜杠命令和工作流约定。它的目标不是替换 Claude Code，而是把 Claude Code 从“会写代码的助手”组织成一支更像真实创业团队的虚拟团队：CEO、工程经理、设计师、代码 reviewer、QA lead、安全负责人、发布工程师等角色各自负责不同阶段。

所以，更准确地说：

- GStack 不是新模型，也不是新的 IDE。
- GStack 不是 Anthropic 或 YC 的官方产品。
- GStack 是一套 Markdown 驱动的角色提示词、技能和斜杠命令集合。
- GStack 的核心价值是给 Claude Code 加上产品、工程、设计、质量、安全、发布和复盘流程。

如果直接把 AI coding agent 当作“更快的自动补全”，很容易得到速度很快但方向混乱的产出。GStack 想解决的正是这个问题：让 agent 在动手写代码之前先思考目标，在合并之前接受审查，在上线之前经过 QA，在发布之后留下文档和复盘。

## 它解决什么问题

Claude Code 本身已经能读写文件、运行命令、执行测试、修改代码、提交变更。问题在于：这些能力越强，如果没有流程约束，越容易把错误放大。

GStack 给 Claude Code 补上的不是“更聪明的大脑”，而是一套团队式协作结构：

- 产品方向：先判断问题值不值得做。
- 工程计划：把想法变成可执行的架构和任务。
- 设计体验：检查用户路径、界面、交互和开发体验。
- 代码审查：发现实现风险、边界条件和安全问题。
- QA 验证：在真实浏览器或真实环境里验收行为。
- 发布交付：把变更落地到部署、文档、监控和复盘。

这也是为什么 GStack 更像一个“软件工厂”或“虚拟创业团队”，而不只是一个斜杠命令包。

## 核心流程

GStack 的 README 和相关文章都强调类似的 sprint 流程：

```text
Think -> Plan -> Build -> Review -> Test -> Ship -> Reflect
```

可以把它理解成一条完整的软件交付链路：

| 阶段 | 目标 | 常见 GStack 命令 |
| --- | --- | --- |
| Think | 澄清用户、痛点、机会和优先级 | `/office-hours`, `/plan-ceo-review` |
| Plan | 形成技术方案、任务拆分和风险清单 | `/plan-eng-review`, `/autoplan`, `/spec` |
| Build | 让 Claude Code 或其他 agent 实现代码 | Claude Code 原生命令、`/investigate` |
| Review | 让 reviewer、安全、设计、DX 等角色审查 | `/review`, `/cso`, `/design-review`, `/devex-review` |
| Test | 用测试和浏览器 QA 验证真实行为 | `/qa`, `/qa-only`, `/browse` |
| Ship | 发布、部署、写 release 文档 | `/ship`, `/land-and-deploy`, `/canary`, `/document-release` |
| Reflect | 总结经验，沉淀到项目记忆 | `/retro`, `/learn` |

这条链路的重点不是“每次都机械地跑完所有命令”，而是让你在不同风险阶段调用不同角色。小改动可以轻量走流程，大改动就应该让计划、审查、QA 和发布更完整。

## 角色和命令地图

GStack 的命令会随仓库演进，实际列表要以 [官方 README](https://github.com/garrytan/gstack) 为准。下面是按使用场景整理的理解方式。

| 场景 | 角色 | 常用命令 | 价值 |
| --- | --- | --- | --- |
| 产品判断 | YC office hours、CEO | `/office-hours`, `/plan-ceo-review` | 判断问题是否真实、目标是否清晰、优先级是否合理 |
| 工程规划 | 工程经理、架构 reviewer | `/plan-eng-review`, `/autoplan`, `/spec` | 检查方案、依赖、边界条件、测试策略和实施顺序 |
| 设计体验 | 产品设计、设计系统、前端体验 | `/plan-design-review`, `/design-consultation`, `/design-shotgun`, `/design-html` | 让界面、交互、文案和用户路径更完整 |
| 开发体验 | DevEx reviewer | `/plan-devex-review`, `/devex-review` | 检查 API、工具链、脚手架、文档和维护成本 |
| 调试研究 | 调查员 | `/investigate` | 在动手改代码前先收集证据、定位根因 |
| 代码审查 | Senior reviewer | `/review`, `/codex` | 发现 bug、回归风险、缺失测试和实现问题 |
| 安全审查 | CSO、安全 reviewer | `/cso` | 检查权限、注入、数据泄露和供应链风险 |
| 浏览器 QA | QA lead | `/qa`, `/qa-only`, `/browse`, `/open-gstack-browser` | 通过真实页面和真实操作验证功能 |
| 发布上线 | Release engineer、SRE | `/ship`, `/land-and-deploy`, `/canary`, `/benchmark` | 管理发布、灰度、性能、回滚和上线记录 |
| 文档复盘 | 文档、复盘、记忆沉淀 | `/document-release`, `/document-generate`, `/retro`, `/learn` | 让项目知识随着代码一起更新 |
| 风险控制 | 状态保护、护栏 | `/careful`, `/freeze`, `/guard`, `/unfreeze` | 在高风险修改里降低误改、乱改和越界操作 |

GStack 的强项不在于某一个命令多神奇，而在于这些角色能串起来。比如一个功能可以先经过 `/office-hours` 定义问题，再用 `/plan-eng-review` 修正计划，实现后跑 `/review`，最后用 `/qa` 和 `/ship` 收尾。

## 安装方式

根据 GStack README，常规安装需要：

- Claude Code
- Git
- Bun v1+
- Windows 环境下还需要 Node.js

全局安装示例：

```shell
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack
./setup
```

`./setup` 会把 GStack 接入 Claude Code，并在 `CLAUDE.md` 中加入相关配置段落。安装完成后，进入 Claude Code 就可以使用对应的斜杠命令。

如果是团队仓库，可以使用 team mode，把项目需要的 `.claude/` 和 `CLAUDE.md` 提交进仓库，让团队成员使用同一套 AI 协作约定：

```shell
(cd ~/.claude/skills/gstack && ./setup --team) && ~/.claude/skills/gstack/bin/gstack-team-init required
git add .claude/ CLAUDE.md
git commit -m "require gstack for AI-assisted work"
```

GStack 也逐渐支持 Claude Code 之外的 AI coding agent。README 中提到可以用 `./setup --host` 选择特定宿主，例如 Codex、Cursor、opencode 等。具体支持列表和安装参数仍应以仓库 README 为准。

## 新手怎么开始

如果你第一次用 GStack，不建议一上来就把所有命令都跑一遍。更好的方式是从一条完整但轻量的链路开始。

1. 用 `/office-hours` 讲清楚你要解决的问题。
2. 用 `/plan-ceo-review` 检查这个功能是否值得做、范围是否太大。
3. 用 `/plan-eng-review` 或 `/autoplan` 把它变成可实施计划。
4. 让 Claude Code 按计划实现代码。
5. 用 `/review` 做代码审查。
6. 用 `/qa` 在真实页面或 staging 环境里验收。
7. 用 `/ship` 或 `/document-release` 做发布收尾。

这个流程跑一两次后，你会更容易感受到哪些命令适合你的项目。不要为了“用全套 GStack”而增加无意义步骤；它应该帮你减少混乱，而不是制造仪式感。

## 如何用好 GStack

### 1. 先让它挑战问题，而不是直接写代码

AI coding 最大的浪费，往往不是代码写慢了，而是把错误的问题写得很快。

`/office-hours` 和 `/plan-ceo-review` 的价值就在这里：它们会把“我要做一个功能”拉回到“用户是谁、痛点是什么、为什么现在要做、最小可行范围是什么”。如果你还没想清楚需求，先用这些产品角色，而不是直接让 Claude Code 改文件。

### 2. 把计划当成可审查产物

复杂需求不要直接交给 agent 自由发挥。先要求它产出计划，再用 `/plan-eng-review` 或 `/autoplan` 审查计划。

一个好的 GStack 计划至少应该回答：

- 需要改哪些模块。
- 会影响哪些现有行为。
- 关键边界条件是什么。
- 应该补哪些测试。
- 哪些步骤可以并行，哪些必须串行。
- 如果失败，如何回滚或缩小范围。

计划阶段越清楚，后面的代码审查和 QA 越有效。

### 3. 把 `/review` 当作默认门槛

GStack 的 `/review` 不应该只在“大版本”里使用。只要变更会影响用户行为、数据、权限、支付、发布流程或共享模块，都值得跑一次 review。

你可以明确要求 reviewer 关注：

- 行为回归
- 错误处理
- 数据兼容性
- 权限边界
- 并发和状态一致性
- 缺失测试
- 可维护性

这比简单问“代码有没有问题”更有效。

### 4. 用真实环境做 QA

`/qa` 的价值不是“再读一遍代码”，而是让 agent 像 QA lead 一样操作真实界面、真实 URL 或 staging 环境。

好的 QA 请求应该包含：

- 要验收的 URL 或页面入口。
- 用户应该完成的关键路径。
- 需要覆盖的异常路径。
- 哪些状态必须截图或记录。
- 发现问题后是否允许直接修复。

对于前端、支付、登录、权限、发布配置等场景，浏览器 QA 往往比静态分析更接近真实风险。

### 5. 把安全和发布单独拉出来

当功能涉及 token、密钥、用户数据、权限、第三方 API、部署脚本时，不要只依赖普通 review。可以加入 `/cso`、`/guard`、`/freeze` 等命令，让安全和状态保护成为显式步骤。

发布前则可以使用 `/ship`、`/canary`、`/benchmark`、`/document-release` 等命令，把上线检查、性能、文档和回滚思路一起纳入交付过程。

### 6. 不要让并行 agent 变成并行混乱

GStack 很强调“并行 sprint”能力，但并行的前提是任务边界清楚。多个 agent 同时工作时，最重要的不是数量，而是：

- 每个 agent 的目标是否独立。
- 是否有统一计划和验收标准。
- 是否避免修改同一批文件。
- 是否有最终 review 汇总。
- 是否有测试和 QA 作为统一收口。

没有流程的并行，只会把冲突、重复劳动和难以审查的变更放大。

### 7. 团队项目优先用 team mode

如果只是个人实验，全局安装就够了。团队项目更推荐把 GStack 约定落到仓库里，例如 `.claude/` 和 `CLAUDE.md`。

这样做的好处是：

- 每个人使用同一套 AI 协作规范。
- reviewer、QA、发布流程不依赖某个成员的本地习惯。
- 项目记忆、约束和命令入口更容易维护。
- 新成员进入项目时更容易复用已有流程。

### 8. 把输出当证据，不要当权威

GStack 会让 Claude Code 的角色分工更像团队，但它不会让 AI 自动变成事实来源。任何 review、QA、发布建议都应该回到证据：

- 测试是否真的跑过。
- 页面是否真的打开过。
- 日志是否真的看过。
- 失败是否真的复现过。
- 修复是否真的覆盖了回归用例。

GStack 的正确用法是提高工程纪律，而不是替代工程判断。

## 适合谁

GStack 比较适合这些人：

- 独立开发者或 founder：想用 Claude Code 覆盖产品、工程、QA、发布等多个角色。
- 第一次使用 Claude Code 的人：需要一套现成工作流，而不想从空白提示词开始。
- 技术负责人或 staff engineer：想把 AI coding 引入团队流程，而不是让每个人各自随意使用。
- 小团队：希望用轻量方式建立 AI 协作规范、审查规范和发布规范。

不太适合这些情况：

- 只是一次性小改动，跑完整流程成本过高。
- 项目没有测试、没有可运行环境，也不打算补。
- 团队不愿意维护 `CLAUDE.md`、技能和项目约束。
- 你只想要无脑生成代码，而不想做 review、QA 和发布检查。

## 和普通 CLAUDE.md 的区别

普通 `CLAUDE.md` 通常是项目上下文：代码结构、运行命令、测试方式、约定、注意事项。

GStack 更像是在 `CLAUDE.md` 之上加入一套组织结构：

- 不同角色该如何思考。
- 不同阶段该如何交接。
- 什么情况下需要 review、QA、安全或发布检查。
- 如何把工作从需求、计划、实现、验证一路推进到上线。

换句话说，普通 `CLAUDE.md` 告诉 Claude Code “这个项目是什么”，GStack 进一步告诉它“在这个项目里应该怎么像团队一样工作”。

## 使用时的注意事项

1. **以 README 为准**：GStack 仓库更新很快，命令数量和参数可能变化。
2. **控制成本**：多角色、多轮 review 和 QA 会增加 token、时间和上下文成本。
3. **按风险选流程**：不是所有改动都需要完整 sprint；越接近用户、数据、安全、发布，流程越应该完整。
4. **保留本地判断**：GStack 是流程层，不是正确性的保证。
5. **可以 fork 和裁剪**：如果团队只需要其中一部分角色，可以保留最有价值的命令，把不适合的流程删掉或改写。

## 一句话总结

GStack 的本质不是让 Claude Code “多几个命令”，而是给 Claude Code 加上一套创业团队式的软件交付流程：先判断问题，再做计划，再写代码，再 review，再 QA，再发布，再复盘。

用得好，它能把 AI coding 从“快但散”变成“快且有纪律”。

## 参考资料

- [garrytan/gstack GitHub 仓库](https://github.com/garrytan/gstack)
- [GStack README](https://github.com/garrytan/gstack/blob/main/README.md)
- [腾讯云开发者文章：GStack：Garry Tan 开源 AI 编程框架](https://cloud.tencent.com/developer/article/2652471)
- [MindStudio：What is GStack? Gary Tan’s Claude Code framework explained](https://www.mindstudio.ai/blog/what-is-gstack-gary-tan-claude-code-framework)
- [知乎文章：用户提供的补充阅读链接](https://zhuanlan.zhihu.com/p/2019068620324492892)（当前环境无法抓取正文，本文未把它作为主要事实来源）
