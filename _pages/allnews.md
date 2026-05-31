---
title: "News"
layout: textlay
excerpt: "Lobel Lab at Bar-Ilan University."
permalink: /allnews.html
---

# News

<div class="news-timeline news-timeline-full">
{% for article in site.data.news %}
<div class="news-item">
  <span class="news-date">{{ article.date }}</span>
  {{ article.headline | markdownify }}
  {% if article.description %}<p class="news-desc">{{ article.description }}</p>{% endif %}
</div>
{% endfor %}
</div>
