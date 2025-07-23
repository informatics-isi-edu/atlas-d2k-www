---
layout: default
title: Protocols Library
---


{% assign collections = site.pages
     | where_exp: "p",
       "p.path contains 'resources/protocols/' and p.name != 'index.md'"
     | sort: "title" %}

<ul class="protocol-list">
  {% for p in protocols %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endfor %}
</ul>
