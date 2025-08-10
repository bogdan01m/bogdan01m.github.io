---
layout: single
title: Home
author_profile: true
---

<div class="tech-grid">
  <div class="tech-card">
    <h6>👋 Welcome to my portfolio!</h6>
    <p>I'm AI Engineer focused on safety and practical applications</p>
    <p style="margin-top: 1rem; font-size: 0.9rem;">
      <a href="#contact" style="color: var(--catppuccin-text); text-decoration: none; opacity: 0.8; transition: opacity 0.2s;">
        Interested in AI? Let's connect →
      </a>
    </p>
  </div>
</div>

## Core Expertise

<div class="skills-badges">
  <span class="skill-badge">Pre-trained Models</span>
  <span class="skill-badge">AI Safety & Security</span>
  <span class="skill-badge">Open Source AI Models</span>
  <span class="skill-badge">MCP & Tools Dev</span>
  <span class="skill-badge">Multimodal AI</span>
  <span class="skill-badge">Embeddings</span>
  <span class="skill-badge">OpenAI API</span>
  <span class="skill-badge">Agents</span>
  <span class="skill-badge">RAG</span>
</div>

<style>
.skills-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;
}

.skill-badge {
  display: inline-block;
  background: var(--catppuccin-mantle);
  color: var(--catppuccin-text);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid var(--catppuccin-surface0);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  white-space: nowrap;
  filter: drop-shadow(0 4px 8px rgba(137, 180, 250, 0.1));
}

.skill-badge:hover {
  background: var(--catppuccin-blue);
  color: white;
  border-color: var(--catppuccin-surface1);
  transform: translateY(-4px) scale(1.05);
  filter: drop-shadow(0 8px 16px rgba(180, 190, 254, 0.2)) 
          drop-shadow(0 12px 24px rgba(137, 180, 250, 0.15));
}

@media (max-width: 768px) {
  .skills-badges {
    gap: 0.75rem;
    margin: 1.5rem 0;
    padding: 0.5rem;
  }
  
  .skill-badge {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .skills-badges {
    gap: 0.5rem;
    margin: 1rem 0;
  }
  
  .skill-badge {
    padding: 0.5rem 0.85rem;
    font-size: 0.8rem;
  }
}

/* Connect Section - Subtle and Elegant */
.connect-section {
  text-align: center;
  margin: 1.5rem 0;
  padding: 0;
}

.connect-section p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--catppuccin-text);
  opacity: 0.8;
}

.connect-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.connect-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  color: var(--catppuccin-text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid var(--catppuccin-surface1);
  background: transparent;
}

.connect-link:hover {
  background: var(--catppuccin-surface0);
  border-color: var(--catppuccin-surface2);
  transform: translateY(-1px);
}

.articles-links {
  border-top: 1px solid var(--catppuccin-surface1);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.articles-links p {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--catppuccin-text);
  opacity: 0.7;
}

.article-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--catppuccin-text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid var(--catppuccin-surface1);
  background: transparent;
}

.article-link:hover {
  background: var(--catppuccin-surface0);
  opacity: 1;
  transform: translateY(-1px);
}

.article-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.articles-links .article-link {
  display: inline-flex;
}

@media (max-width: 768px) {
  .connect-links {
    gap: 1rem;
  }
  
  .connect-link {
    padding: 0.45rem 0.85rem;
    font-size: 0.85rem;
  }
  
  .article-link {
    padding: 0.45rem 0.85rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .connect-links {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  
  .connect-link {
    width: auto;
    min-width: 120px;
    text-align: center;
  }
  
  .articles-links {
    gap: 0.5rem;
  }
  
  .article-buttons {
    gap: 1rem;
  }
}
</style>


### Technology Stack
{% capture tech-stack %}
<div class="tech-grid">
  <div class="tech-card">
    <h6>🤖 AI/ML Development</h6>
    Python • PyTorch • Transformers • Scikit-learn • LangChain • Pydantic AI • OpenAI
  </div>
  <div class="tech-card">
    <h6>🛠️ Data & Infrastructure</h6>
    Pandas • Polars • NumPy • Matplotlib • FastAPI • Docker • Linux
  </div>
  <div class="tech-card">
    <h6>💻 Dev Environment</h6>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg" alt="Arch Linux" width="12" height="12" style="vertical-align: middle;"> Arch Linux • VS Code • Git • Claude Code
  </div>
  <div class="tech-card">
    <h6>🛡️ AI Security</h6>
    Guardrails • Observability • Threat Detection
  </div>
</div>
{% endcapture %}
{{ tech-stack }}


### Experience
**AI Engineer, AI Sec Engineer** @**[Raft](https://raftds.ru/)** • *2024 - Present*

- Developed user-LLM dialogue filtering guardrail system for internal product
- Improved build times by 30%+ switching to UV package manager and unifying virtual environments  
- Built Grafana dashboards to monitor key business metrics
- Conducted load testing of LLM services to assess stability under peak loads

**Data Scientist** @**[Tyumen Industrial University × Rosneft](https://www.tyuiu.ru/)** • *2023 - 2024*

- Analyzed field data and tested hypotheses for predictive analysis of oil pump failures
- Engaged with domain experts to identify business requirements for developing ML solutions  
- Developed ML model to detect abnormal pump behavior with 30-day failure prediction horizon
- Delivered actionable insights for industrial equipment optimization

### Education
- **Master's Degree in Artificial Intelligence**  
  [ITMO University](https://ai.itmo.ru/)<br>
  Graduation year: 2026
- **Bachelor's Degree in Technical Physics**  
  [Tyumen State University](https://www.utmn.ru/)<br>
  Graduation year: 2024

*Languages: Russian (native) • English • German*

---
## Contact

<div class="connect-section">
  <p>Interested in collaboration or tech discussions?</p>
  <div class="connect-links">
    <a href="https://t.me/bogdan_minko" target="_blank" class="connect-link">
      <img src="/assets/telegram.svg" alt="Telegram" width="24" height="24"> Telegram
    </a>
    <a href="mailto:minkobogdan2001@gmail.com" class="connect-link">
      <img src="/assets/Gmail.svg" alt="Gmail" width="24" height="24"> minkobogdan2001@gmail.com
    </a>
  </div>
</div>


<div style="display: flex; justify-content: space-between; align-items: center; max-width: 500px; margin: 0 auto;">
  <a href="https://github.com/bogdan01m" target="_blank" title="GitHub" style="transition: all 0.3s; border-radius: 50%; padding: 10px;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'; this.style.transform='scale(1.1)'" onmouseout="this.style.backgroundColor='transparent'; this.style.transform='scale(1)'">
    <img src="/assets/github.svg" alt="GitHub" width="70" height="70">
  </a>
  <a href="https://www.linkedin.com/in/bogdan-minko-05a867322/" target="_blank" title="LinkedIn" style="transition: all 0.3s; border-radius: 50%; padding: 10px;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'; this.style.transform='scale(1.1)'" onmouseout="this.style.backgroundColor='transparent'; this.style.transform='scale(1)'">
    <img src="/assets/linkedin.svg" alt="LinkedIn" width="70" height="70">
  </a>
  <a href="https://medium.com/@minkobogdan2001" target="_blank" title="Medium" style="transition: all 0.3s; border-radius: 50%; padding: 10px;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'; this.style.transform='scale(1.1)'" onmouseout="this.style.backgroundColor='transparent'; this.style.transform='scale(1)'">
    <img src="/assets/Medium.svg" alt="Medium" width="70" height="70">
  </a>
  <a href="https://habr.com/ru/users/Bogdan_m01" target="_blank" title="Habr" style="transition: all 0.3s; border-radius: 50%; padding: 10px;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'; this.style.transform='scale(1.1)'" onmouseout="this.style.backgroundColor='transparent'; this.style.transform='scale(1)'">
    <img src="/assets/habr.svg" alt="Habr" width="70" height="70">
  </a>
</div>