---
layout: single
title: Articles
author_profile: true
---

<style>
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.article-card {
  background: var(--catppuccin-mantle);
  border: 2px solid var(--catppuccin-surface0);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  filter: drop-shadow(0 4px 8px rgba(137, 180, 250, 0.1));
}

.article-card:hover {
  background: var(--catppuccin-surface0);
  border-color: var(--catppuccin-blue);
  transform: translateY(-4px) scale(1.02);
  filter: drop-shadow(0 8px 16px rgba(180, 190, 254, 0.2)) 
          drop-shadow(0 12px 24px rgba(137, 180, 250, 0.15));
}

.article-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.platform-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.article-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--catppuccin-text);
  margin: 0;
  line-height: 1.3;
}

.article-title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.article-title a:hover {
  color: var(--catppuccin-blue);
}

.article-description {
  color: var(--catppuccin-text);
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--catppuccin-text);
  margin: 2rem 0 1.5rem 0;
  text-align: center;
}

.section-title:first-of-type {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .article-card {
    padding: 1.25rem;
  }
  
  .article-title {
    font-size: 1rem;
  }
  
  .article-description {
    font-size: 0.85rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .article-card {
    padding: 1rem;
  }
  
  .article-header {
    gap: 0.5rem;
  }
  
  .platform-icon {
    font-size: 1.25rem;
  }
  
  .article-title {
    font-size: 0.95rem;
  }
  
  .article-description {
    font-size: 0.8rem;
  }
}
</style>

<h2 class="section-title">English Articles</h2>

<div class="articles-grid">
  <div class="article-card">
    <div class="article-header">
      <span class="platform-icon">📄</span>
      <h3 class="article-title">3 Days of API Documentation Hell Led Me to Build a ZapCap MCP Server</h3>
    </div>
    <p class="article-description">How building a simple video app led me to create an MCP server that saves everyone the same headache.</p>
    <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="intro_zapcap_mcp.html" style="color: var(--catppuccin-blue); text-decoration: none; font-size: 0.85rem;">💻 Read here</a>
      <a href="https://medium.com/@minkobogdan2001/3-days-of-api-documentation-hell-led-me-to-build-a-zapcap-mcp-server-dbe49ad96b2f" target="_blank" style="color: var(--catppuccin-blue); text-decoration: none; font-size: 0.85rem;">🔗 Read on Medium</a>
    </div>
  </div>
  
  <div class="article-card">
    <div class="article-header">
      <span class="platform-icon">📄</span>
      <h3 class="article-title">I Spent 30,000 Credits on ElevenLabs Music, Was It Worth It?</h3>
    </div>
    <p class="article-description">Building a music generation pipeline (idea→GPT→ElevenLabs→music), reviewing pricing, prompts, and results across different genres.</p>
    <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://medium.com/@minkobogdan2001/i-spent-30-000-credits-on-elevenlabs-music-was-it-worth-it-21584139c0ad" target="_blank" style="color: var(--catppuccin-blue); text-decoration: none; font-size: 0.85rem;">🔗 Read on Medium</a>
    </div>
  </div>
</div>

<h2 class="section-title">Russian Articles</h2>

<div class="articles-grid">
  <div class="article-card">
    <div class="article-header">
      <span class="platform-icon">📄</span>
      <h3 class="article-title">Агенты в Pydantic AI от вызова LLM до MCP</h3>
    </div>
    <p class="article-description">Introduction to building AI agents with Pydantic AI, from basic LLM calls to advanced MCP workflows.</p>
    <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://habr.com/ru/articles/900270/" target="_blank" style="color: var(--catppuccin-blue); text-decoration: none; font-size: 0.85rem;">🔗 Read on Habr</a>
    </div>
  </div>
  
  <div class="article-card">
    <div class="article-header">
      <span class="platform-icon">📄</span>
      <h3 class="article-title">Не только для райсеров. Arch Linux на Hyprland для работы и гейминга</h3>
    </div>
    <p class="article-description">Guide on using Arch Linux with Hyprland for both productivity and gaming.</p>
    <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://habr.com/ru/articles/897858/" target="_blank" style="color: var(--catppuccin-blue); text-decoration: none; font-size: 0.85rem;">🔗 Read on Habr</a>
    </div>
  </div>
  
  <div class="article-card">
    <div class="article-header">
      <span class="platform-icon">📄</span>
      <h3 class="article-title">Lasso MCP Gateway: щит между AI-агентами, тулами и вашими секретами?</h3>
    </div>
    <p class="article-description">Overview of Lasso MCP Gateway as a security proxy sanitizing sensitive data for AI-agent tool calls.</p>
    <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://habr.com/ru/companies/raft/articles/910556/" target="_blank" style="color: var(--catppuccin-blue); text-decoration: none; font-size: 0.85rem;">🔗 Read on Habr</a>
    </div>
  </div>
  
  <div class="article-card">
    <div class="article-header">
      <span class="platform-icon">📄</span>
      <h3 class="article-title">Llama Firewall или как проверить логику и безопасность вашего AI агента</h3>
    </div>
    <p class="article-description">Analysis of the Llama Firewall framework for multi-layered security checks in AI agent interactions.</p>
    <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://habr.com/ru/companies/raft/articles/922982/" target="_blank" style="color: var(--catppuccin-blue); text-decoration: none; font-size: 0.85rem;">🔗 Read on Habr</a>
    </div>
  </div>
  
  <div class="article-card">
    <div class="article-header">
      <span class="platform-icon">📄</span>
      <h3 class="article-title">Я потратил 30 000 кредитов на ElevenLabs Music, стоило ли оно того?</h3>
    </div>
    <p class="article-description">Building a music generation pipeline (idea→GPT→ElevenLabs→music), reviewing pricing, prompts, and results across different genres.</p>
    <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://habr.com/ru/articles/935818/" target="_blank" style="color: var(--catppuccin-blue); text-decoration: none; font-size: 0.85rem;">🔗 Read on Habr</a>
    </div>
  </div>
</div>