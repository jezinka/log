---
layout: default
title: Log
---

# Miesięczne logi

{% assign posts = site.posts %}
{% for post in posts %}
    title: {{post.title}}
{% endfor %}