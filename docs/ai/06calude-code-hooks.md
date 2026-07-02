# Calude Code Hooks

Hooks是Claude Code在特定事件时，自动执行的shell脚本，配置在 .claude/settings.json

Claude Code支持以下hook事件：Setup、SessionStart、UserPromptSubmit、PostToolUse、Stop

## SessionStart Hook

触发时机：每次开启新session自动执行（包括startup/clear/compact）  
用途：输出上次进度、git状态，让AI第一条消息就有足够上下文

```json
"hooks": {
  "SessionStart": [{
    "matcher": "startup|clear",
    "hooks": [{
      "type": "command",
      "command": "git log --oneline -5 && [ -f PROGRESS.md ] && cat PROGRESS.md",
      "timeout": 10
    }]
  }]
}
```
