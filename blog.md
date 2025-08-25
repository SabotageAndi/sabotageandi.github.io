---
title: Blog
permalink: /blog/
---

{% assign posts = site.posts  %}
{% for post in posts %}

  {% if post.draft == true %}
    {% continue %}
  {% endif %}
  
  <div class="event">
    <a href="{{ post.url }}"><h2>{{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}</h2></a>
    <p>{{ post.excerpt | strip_html | truncate: 250 }}</p>
    <a href="{{ post.url }}" class="btn-large">Go to Details</a>
  </div>

  <hr>

{% endfor %}
