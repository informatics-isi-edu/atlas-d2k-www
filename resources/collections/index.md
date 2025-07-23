---
layout: default
title: Collections Library
permalink: /resources/collections/
---


{% assign collections = site.pages
     | where_exp: "p",
       "p.path contains 'resources/collections/' and p.name != 'index.md'"
     | sort: "title" %}

<ul class="collection-list">
  {% for p in collections %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endfor %}
</ul>
