---
layout: default
title: Collections Library
permalink: /resources/collections/
---


<ul class="collection-list">
  {% for p in site.pages %}
    {%- if p.url != page.url        /* skip this landing page            */
        and p.dir contains '/resources/collections/' -%}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {%- endif -%}
  {% endfor %}
</ul>
