# Coding Context

## Harness 固定文件（随代码仓库维护）

放在代码仓库根目录，用固定的英文大写命名。Calude Code 每次会话自动读取 CALUDE.md，其他会读取AGENT.md文件。其余文件由AI按名称读取，命名不得随意更改。

|文件名|用途|更新时机|工作流阶段|
|---|:---|:---|:---|
|CLAUDE.md|指向AGENT.md|无|开发前（每次需求持续迭代）|
|AGENTS.md|项目规范+技术栈+Skill路由+完成标准|规范变化时|开发前（每次需求持续迭代）|
|ARCHITECTURE.md|系统架构、数据流、模块边界、外部依赖|设计阶段|开发前（每次需求持续迭代）|
|CONSTRAINTS.md|代码红线：分库分表、SQL审查、幂等设计|约束变化时|开发前（每次需求持续迭代）|
|knowledge|知识库|长期复用的项目知识|开发后（每次需求持续迭代）|

任务级文档（AI执行计划时动态创建，不固化到仓库）

|文件名|内容|
|---|:---|
|specs|代表性复杂需求设计|
|plans|对应执行计划|

```
project/
|-- CALUDE.md                 # CLAUDE 入口
|-- AGENTS.md                 # AI 入口、项目概览、命令和文档导航
|-- ARCHITECTURE.md           # 系统地图、模块边界、数据流和敏感区域
|-- CONSTRAINTS.md            # 工程硬约束
|-- docs/
|     |-- superpowers/        
|               |-- specs/    # 代表性复杂需求设计
|               |-- plans/    # 对应执行计划
|-- knowledge/                # 长期复用的项目知识
```
