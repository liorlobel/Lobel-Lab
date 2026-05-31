---
title: "Lobel Lab - Pictures"
layout: piclay
excerpt: "Photos from life in the Lobel Lab at Bar-Ilan University."
permalink: /pictures/
---

# Pictures

#### Gallery
(Click an image to view it larger; use the arrow keys to browse.)
{% assign number_printed = 0 %}
{% for pic in site.data.pictures %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %} 

<div class="col-sm-3 clearfix">
<a class="gallery-link" href="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" data-caption="{{ pic.title | replace: '_', ' ' }}">
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-fluid gallery-img" width="95%" style="float: left" loading="lazy" alt="{{ pic.title | replace: '_', ' ' }}" />
</a>
</div>


{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

<p> &nbsp; </p>

#### Videos 

<video width="33%" preload="auto" poster="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/Hanukka_2023a.jpg" muted controls>
    <source src="{{ site.baseurl }}/Videos/Hanukka_2023.mp4" type="video/mp4">
</video>

<script src="{{ site.url }}{{ site.baseurl }}/js/lightbox.js"></script>
