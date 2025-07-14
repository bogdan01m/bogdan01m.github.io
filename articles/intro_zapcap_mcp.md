---
title: "3 Days of API Documentation Hell Led Me to Build a ZapCap MCP Server"
nav_order: 1
parent: Articles
---

# 3 Days of API Documentation Hell Led Me to Build a ZapCap MCP Server

*How building a simple video app led me to create an MCP server that saves everyone the same headache*

---

Picture this: you're building a simple video processing application. Your users want something straightforward—just upload a video and add some nice captions with highlights, colors, keyword emphasis, and maybe some B-roll footage. It seems so easy to build, right?

It took me several days just to understand the concept behind ZapCap's API documentation: navigating their Postman collection, figuring out which parameters I should use to avoid ugly subtitles, then spending even more time learning how to handle those parameters to create something actually beautiful.

That's when it hit me: **If this is painful for me as a developer, imagine what content creators and teams go through every single day.**

- **Using ZapCap via API?** You're stuck with minimal configuration options, forced to use the same style over and over. Upload video, maybe specify a language for subs, and hope for the best.

- **Using the web UI?** Welcome to the endless cycle: upload → configure 20+ parameters → endless clicking until it looks "okay" → download → show your manager → hear "yeah, it's fine, not beautiful, but okay" → repeat.

## The "What If" Moment

One thought just wouldn't leave me alone:

**What if there was a way to just ask for what you want?**

"Process this video with professional subtitles and some B-roll"

Instead of wrestling with 30+ API parameters:

```json
{
  "templateId": "<string>",
  "autoApprove": false,
  "transcriptTaskId": "<string>",
  "language": "<string>",
  "renderOptions": {
    "subsOptions": {
      "emoji": "<boolean>",
      "emojiAnimation": "<boolean>",
      "emphasizeKeywords": "<boolean>",
      "animation": "<boolean>",
      "punctuation": "<boolean>",
      "displayWords": "<number>"
    },
    "styleOptions": {
      "top": "<number>",
      "fontUppercase": "<boolean>",
      "fontShadow": "m",
      "fontSize": "<number>",
      "fontWeight": "<number>",
      "fontColor": "<string>",
      "stroke": "s",
      "strokeColor": "<string>"
    },
    "highlightOptions": {
      "randomColourOne": "<string>",
      "randomColourTwo": "<string>",
      "randomColourThree": "<string>"
    }
  },
  "transcribeSettings": {
    "broll": {
      "brollPercent": "<number>",
      "customBrolls": [
        {
          "startTime": "<number>",
          "endTime": "<number>",
          "url": "<string>"
        }
        // ... and more parameters
      ]
    }
  }
}
```

I was already working with MCP servers daily. This protocol is a game changer for making complex APIs conversational. **ZapCap didn't have an official MCP server**, but why not build one myself?

The solution was obvious: **build a ZapCap MCP server that handles all this complexity behind simple conversation.**

## Building the Bridge

Creating the MCP server was everything the original API integration wasn't—straightforward and focused.

Instead of building yet another API wrapper, I focused on **translating intent into configuration**. When someone says "professional subtitles with green highlights," the server knows exactly which parameters to set.

The server handles:

- **File upload simplicity**: Just provide a file path (URLs supported but ZapCap can be finicky with them)
- **Parameter intelligence**: Sensible defaults for 90% of use cases
- **Progress monitoring**: Dedicated tool for checking task status
- **Configuration translation**: Natural language → proper API parameters

## What This Actually Solves

Remember those pain points from before?

**Using ZapCap via API?** You were stuck with minimal configuration options, forced to use the same style over and over.

**Using the web UI?** That endless cycle of upload → configure → click → download → manager feedback → repeat.

**Now:**
```
"Claude, process my_video.mp4 with template_id 123, 
green highlights, and bigger font size, add broll, plz"
```

**That's it.** The complexity is still there—ZapCap's API hasn't changed. But now it's hidden behind conversation instead of forcing you to learn yet another interface.

## See It in Action

**How to use:**
[<img src="https://img.youtube.com/vi/GcoyTgTVd6Q/maxresdefault.jpg" width="100%">](https://youtu.be/GcoyTgTVd6Q)

**Results:**
[<img src="https://img.youtube.com/vi/rxqAQZRiyxA/maxresdefault.jpg" width="100%">](https://youtu.be/rxqAQZRiyxA)


## What This Really Means

This isn't revolutionary technology. It's just **putting the complexity where it belongs**—handled by the system, not imposed on the user.

## How to Install

**Requirements:**
- uv
- ZapCap API key
- Docker (optional, if you like containers)

The setup takes under 5 minutes with two installation options:

### Option 1: Direct Installation (Recommended)

1. **Get your ZapCap API key**: Sign up at [zapcap.ai](https://zapcap.ai) and grab your key from the dashboard
2. **Add to your MCP client** (Claude Desktop, Cursor, etc.) in `mcp.json`:

```json
{
  "mcpServers": {
    "zapcap": {
      "command": "uvx",
      "args": ["zapcap-mcp-server"],
      "env": {
        "ZAPCAP_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Option 2: Docker (If you prefer containers)

```json
{
  "mcpServers": {
    "zapcap": {
      "command": "docker",
      "args": [
        "run", 
        "--rm", 
        "--init",
        "-i",
        "--net=host",
        "-v", "/home/$USER:/host/home/$USER",
        "-e", "ZAPCAP_API_KEY=your_api_key_here",
        "bogdan01m/zapcap-mcp-server:latest"
      ],
      "env": {
        "DOCKER_CLI_HINTS": "false"
      }
    }
  }
}
```

**Note:** The `-v` volume mount gives the container access to your home directory so you can upload video files from your local filesystem.

**That's it!** Restart your MCP client and start processing: *"Claude, help me process this video..."*

This works with any MCP-compatible client—Claude Desktop, Cursor, OpenWebUI, you name it.

## What's Coming Next

This MCP server is just the foundation. Over the next few weeks, I'll be publishing detailed guides on integrating this video processing capability into different frameworks:

- **Pydantic AI**: Building type-safe, automated video processing pipelines
- **LangChain**: Creating complex multi-step content creation workflows
- **OpenAI's Agents SDK**: Exploring agent-based video processing with OpenAI's latest framework
- **n8n**: No-code video processing automation for everyone (not just developers)

## Ready to Get Started?

The code is open source, the setup is simple, and you can skip the API documentation rabbit hole entirely.

**Links:**
- **GitHub Repository**: [github.com/bogdan01m/zapcap-mcp-server](https://github.com/bogdan01m/zapcap-mcp-server)
- **Docker Hub**: [hub.docker.com/r/bogdan01m/zapcap-mcp-server](https://hub.docker.com/r/bogdan01m/zapcap-mcp-server)
- **MCP Registry**: [mcp.so/server/zapcap-mcp-server/bogdan01m](https://mcp.so/server/zapcap-mcp-server/bogdan01m)
- **Awesome MCP Servers**: [Listed in the community collection](https://github.com/punkpeye/awesome-mcp-servers)
- **Official MCP Servers**: [Submitted to ModelContextProtocol/servers](https://github.com/modelcontextprotocol/servers)

---

*Next up: Pydantic AI integration for type-safe video processing workflows.*