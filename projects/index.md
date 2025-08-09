---
layout: single
title: Projects
permalink: /projects/
author_profile: true
classes: projects-page
---

{% capture projects-grid %}
<div class="tech-grid">
  <div class="tech-card">
    <h6>🛡️ Security RAG</h6>
    <p>AI safety guardrail system</p>
    <img src="assets/Security_Rag_demo.gif" alt="Security RAG Demo" style="width: 100%; border-radius: 6px; margin: 0.5rem 0;">
    <p><medium>Enhanced LLM safety through retrieval-augmented generation. Achieved 89.9% F1-weighted score in response harm detection with Ollama, Chroma, and Docker support.</medium></p>
    <p><a href="security_rag" class="btn btn--primary btn--medium">View Project</a></p>
  </div>
  
  <div class="tech-card">
    <h6>💻 mcode</h6>
    <p>AI-coding CLI</p>
    <img src="assets/mcode_demo.gif" alt="mcode Demo" style="width: 100%; border-radius: 6px; margin: 0.5rem 0;">
    <p><medium>Multi-provider AI coding assistant supporting OpenAI, Gemini, Ollama, OpenRouter with persistent chat history and upcoming MCP support.</medium></p>
    <p><a href="mcode" class="btn btn--primary btn--medium">View Project</a></p>
  </div>
  
  <div class="tech-card">
    <h6>🎬 ZapCap MCP Server</h6>
    <p>Unofficial MCP server for video captioning with Claude</p>
    <img src="assets/zapcap_demo.gif" alt="ZapCap Demo" style="width: 100%; border-radius: 6px; margin: 0.5rem 0;">
    <p><medium>Streamlines video captioning and b-roll creation using natural language. Customizable templates, emojis, word count, and b-roll percentage settings.</medium></p>
    <p><a href="zap_cap_mcp" class="btn btn--primary btn--medium">View Project</a></p>
  </div>
  
  <div class="tech-card">
    <h6>🤖 AI Avatar Video Generator</h6>
    <p>AI avatar automation and post-processing using n8n</p>
    <img src="assets/avatar_gen_gif.gif" alt="AI Avatar Demo" style="width: 100%; border-radius: 6px; margin: 0.5rem 0;">
    <p><medium>Transforms text messages or voice recordings into professional AI avatar videos with automated post-production workflows.</medium></p>
    <p><a href="ai_avatar_gen" class="btn btn--primary btn--medium">View Project</a></p>
  </div>
</div>
{% endcapture %}
{{ projects-grid }}