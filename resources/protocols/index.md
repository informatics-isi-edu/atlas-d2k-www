---
layout: default
title: Protocols Library
---


<ul class="protocol-list">
  {% for p in site.pages %}
    {%- if p.url != page.url        /* skip this landing page            */
        and p.dir contains '/resources/protocols/' -%}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {%- endif -%}
  {% endfor %}
</ul>
