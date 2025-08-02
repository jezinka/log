---
layout: default
title: Log
---

# Miesięczne logi

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) – {{ post.date | date: "%B %Y" }}
  {% endfor %}