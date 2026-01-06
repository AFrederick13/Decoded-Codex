---
title: "Decoded Codex - Explore the Codex"
layout: "base.njk"
description: "Explore the world's religions and philosophies."
image: /images/Home/DecodedCodex.webp
eleventyExcludeFromCollections: true
search: false
loadSearch: true
loadTopics: true
---

# Decoded Codex

## Explore the world's religions and philosophies

<div id="search"></div>

<div id="filter-buttons">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="philosophy">Philosophy</button>
  <button class="filter-btn" data-filter="religion">Religion</button>
</div>

<div id="topic-grid">
  {%- for topic in collections.topics | reverse %}
      <a href="{{ topic.url }}" class="topic-card" data-tags="{{ topic.data.tags | join: ' ' | downcase }}">
        <img src="{{ topic.data.image }}" alt="{{ topic.data.title }}" loading="lazy" decoding="async">
        <div class="topic-card-content">
          <h2>{{ topic.data.title }}</h2>
        </div>
      </a>
  {%- endfor %}
</div>