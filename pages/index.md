---
title: "Decoded Codex - Explore the Codex"
layout: "base.njk"
---

# Decoded Codex 

## Explore Topics:

<div id="filter-buttons">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="philosophy">Philosophy</button>
  <button class="filter-btn" data-filter="religion">Religion</button>
  </div>

<div id="topic-grid">
  {%- for topic in collections.topics | reverse %}
      <a href="{{ topic.url }}" class="topic-card" data-tags="{{ topic.data.tags | join | downcase }}">
        <img src="{{ topic.data.image }}" alt="{{ topic.data.title }}">
        <div class="topic-card-content">
          <h2>{{ topic.data.title }}</h2>
        </div>
      </a>
  {%- endfor %}
</div>