---
title: "Lobel Lab - Pictures"
layout: piclay
excerpt: "Lobel Lab -- Pictures"
permalink: /pictures/
---

# Pictures

#### Gallery
(Right-click *'view image'* to see a larger image.)
{% assign number_printed = 0 %}
{% for pic in site.data.pictures %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %} 

<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-responsive" width="95%" style="float: left" />
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

<video width="33%" preload="auto" poster="https://www.myjewishlearning.com/wp-content/uploads/2018/11/hanukkahcandles-1444x900.jpg" muted controls>
    <source src="{{ site.baseurl }}/Videos/Hanukka_2023.mp4" type="video/mp4">
</video>
