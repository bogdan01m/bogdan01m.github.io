---
layout: default
title: mcode
parent: Projects
nav_order: 1
---

# mcode
**[GitHub Repository](https://github.com/bogdan01m/mcode)** - AI-assistant for coding, which lives in your terminals

🤖 **Terminal agent system with support for various LLM providers**

A powerful CLI chat interface that connects to multiple LLM providers through a unified terminal experience. Features real-time chat, session management, and extensible provider architecture.

## 🚀 Installation

### Global Installation (Recommended)

```bash
# Clone repository
git clone https://github.com/bogdan01m/mcode.git
cd mcode

# Install globally with uv
uv tool install .

# Initialize global configuration (creates ~/.mcode/.env)
mcode config init

# Edit global config and add your API keys
# The config file will be created at ~/.mcode/.env
```

**That's it!** Now you can use `mcode` from anywhere:

```bash
mcode chat                    # Interactive chat with auto-provider selection
mcode chat -p ollama "Hello" # Quick question with specific provider
```