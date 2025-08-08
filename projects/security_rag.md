---
layout: single
title: Security-RAG
author_profile: true
---
<p align="center">
  <a href="https://colab.research.google.com/drive/1IkgCnvOo3xt-TJUDOkKOPAl6XS3xKjtt#scrollTo=K4bDXI3jSCF2b">
    <img src="https://colab.research.google.com/assets/colab-badge.svg">
  </a>
  <a href="https://huggingface.co/datasets/Bogdan01m/wildguardmix-cleaned">
    <img src="https://img.shields.io/badge/🤗-Dataset-orange">
  </a>
  <a href="https://drive.google.com/file/d/1DiZfkkMxhKhJ_gJjjlSo6vBV2e3vBlgi/view?usp=sharing">
    <img src="https://img.shields.io/badge/🗃️-Chroma_DB-green">
  </a>
</p>

**Security-rag** is a project designed to detect vulnerabilities in Large Language Models (LLMs) by using a Retrieval-Augmented Generation (RAG) approach as a guardrail. The system classifies various aspects of LLM responses to ensure safety, compliance, and ethical behavior.

## Features

- **User Request Harmfulness Classification**: The system analyzes the user input to classify whether the request contains harmful or inappropriate content.
- **LLM Response Classification**: The LLM response is classified to determine if it provides harmful or potentially dangerous information.
- **LLM Refusal Classification**: The system detects whether the LLM refuses to provide harmful content and classifies the nature of this refusal.

## Video Demonstration

[<img src="https://img.youtube.com/vi/FdIIIuAHoqU/maxresdefault.jpg" width="100%">](https://youtu.be/FdIIIuAHoqU)

- 📺 [link to mini video](https://youtu.be/FdIIIuAHoqU)
- 📺 [link to full video](https://youtu.be/OGwlHT0txNs)

## Technology Stack

- **Python** - Core implementation language
- **Ollama** - Local LLM hosting and inference
- **Chroma** - Vector database for RAG functionality
- **Docker** - Containerization for easy deployment
- **Langfuse** - Monitoring and observability
- **Telegram Bot API** - Interactive interface

## Performance

Achieved state-of-the-art performance in response harm detection with **89.9% F1-weighted score**, demonstrating the effectiveness of the RAG-based guardrail approach.

## Key Capabilities

- **Real-time Classification**: Instant analysis of user requests and model responses
- **Multi-aspect Detection**: Comprehensive evaluation covering request harmfulness, response safety, and refusal mechanisms
- **Scalable Architecture**: Docker-based deployment supporting both GPU and CPU environments
- **Interactive Interface**: Telegram bot for easy testing and demonstration
- **Research-backed**: Built on cleaned WildGuardMix dataset with reproducible results

---

🔗 **[View on GitHub](https://github.com/bogdan01m/security-rag)**