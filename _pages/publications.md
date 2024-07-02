---
layout: page
permalink: /publications/
title: publications
description:
years: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">
<font size="2">
<p><b>Note about conference papers</b>: in Human-Computer Interaction, top tier conferences are very selective with rigorous multi-stage review of full manuscripts creating high quality fully archival proceedings. So, conference proceedings are the preferred publication venue to have the greatest impact. </p>
<p><b>Note about venues</b>: CHI (the ACM Conference on Human Factors in Computing Systems) and UIST (the ACM symposium on User Interface Software and Technology) are both recognized as very top tier HCI conferences (Google Scholar and Microsoft Academic both rank them as #1 and #3). The average acceptance rate for CHI is 23% and UIST 21%. </p> </font>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>
