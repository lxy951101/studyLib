# Loop Engineering

循环工程

循环工程是指你不再是发出指令的人，而是设计一个能够执行指令的系统。

对于使用 Grok、Claude Code、Codex、Cursor 和其他 AI 编码代理的开发者而言，循环是一种递归目标：您定义一个目标，AI 会迭代执行（通常会使用子代理、验证和外部状态），直到目标完成或循环决定将任务交还给您。

[Loop Engineering 深度解析与实战指南](https://zhuanlan.zhihu.com/p/2048317502342666078)

+ Discover (发现)
+ Plan (计划)
+ Execute (执行)
+ Verify (验证)
+ Iterate (迭代)

我认为 Loop Engineering 最核心的思想哲学是：不要信任模型的上下文窗口作为持久化存储。模型会遗忘，会漂移，会压缩信息导致约束丢失。

企业级AI开发的最佳实践是：所有状态都存储在外部系统中——git 仓库、markdown 文件、数据库、issue 跟踪系统等。每个循环迭代都从一个全新的上下文窗口开始，但需要在实际持久化的内容基础上进行工作。

这就是为什么最原始的 Ralph Loop 这么有影响力，只用了一行 bash 代码，就让AI永无止境的帮你干活：

```
while :; do cat PROMPT.md | claude-code; done
```

## 六大要素

### 1.Automations (自动化)

自动化是将一次性 AI 运行转变为真正循环的关键。它允许我们指定任务何时运行、运行频率以及在什么环境下运行

```shell
# 每天早上6点运行，处理CI失败
/loop "Run the triage skill on yesterday's CI failures and open PRs for fixes" --schedule "0 6 * * *"
# 运行直到所有测试通过
/goal all tests in test/auth pass and the lint step is clean
```

### 2. Worktrees (工作树)：无冲突协作并行

当我们同时运行多个 AI 时，需要考虑最多的问题就是文件冲突。Git 工作树为每个 AI Agent 提供了一个独立的工作目录，共享相同的仓库历史但不共享文件。

```shell
# 在独立的工作树中打开一个会话
claude-code --worktree feature/add-search
# 子代理自动使用独立工作树
/subagent "Build the search API" --isolation worktree
```

### 3. Skills (技能)

### 4. Connectors(连接器)

连接器(基于MCP协议)主要作用是让循环能够与我们已在使用的工具进行交互。它是"AI告诉你该做什么事情"和"AI实际帮你完成了哪些事情"之间的关键区别

### 5. Subagent(子代理)

最高效的循环设计原则是：一个代理负责实现，另一个代理负责验证。

### 6. State (状态)：Loop范式的记忆保障

模型会遗忘，但仓库不会。

常见的状态存储方式有：

+ Markdown 文件：STATE.md、AGENTS.md、PROGRESS.md 
+ 任务队列：tasks.json
+ Issue 跟踪系统：GitHub Issues、Linear
+ 数据库：SQLite、PostgreSQL

## 成本与安全考量

Loop Engineering 虽然强大，但如果使用不当，可能会带来高昂的成本和安全风险。

很显然，Loop 可能会消耗大量的 API 额度。在中等规模代码库上运行 50 -100 次迭代可能花费 ¥500 - 1000，甚至更高。

所以我们需要设计一套可靠的成本管控策略，下面分享一下我研究下来的一下方法和经验：

+ 设置严格的迭代限制永远不要省略max-iterations（最大迭代数）
+ 从小规模开始先在 10-20 次迭代上测试，观察行为后再逐步扩大
+ 计算 ROI这里需要设计一套符合公司自身的成本管控标准，比如 ¥500 的循环节省 20 小时工作？值得。完成 30 分钟能做的任务？不值得
+ 使用成本较低的模型比如对于简单任务使用 Sonnet 而不是 Opus
+ 监控和警报设置每日 API 使用警报，避免意外账单
