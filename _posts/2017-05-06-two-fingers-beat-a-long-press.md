---
layout: post
title: Two fingers beat a long press
date: 2017-05-06 10:00:00-0400
description: We measured six ways to switch modes on a touchscreen. Two fingers was fastest, long press was more than five times slower, and hard press was rated least accurate.
tags: touch mode-switching tablets
categories: papers
thumbnail: /assets/img/publication_preview/CHI17.jpg
related_posts: false
_styles: |
  .qp-fig { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0 0; }
  .qp-fig svg { flex: 1 1 380px; min-width: 0; max-width: 540px; height: auto; }
  .qp-fig text { fill: var(--global-text-color); font-size: 13px; }
  .qp-fig .qp-small { font-size: 12px; }
  .qp-fig .qp-bold { font-weight: 700; font-size: 14px; }
  .qp-fig .qp-muted { fill: var(--global-text-color-light); }
  .qp-fig path, .qp-fig polyline, .qp-fig line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .qp-fig .qp-sq-default { fill: #9a9a9a; }
  .qp-fig .qp-sq-mode { fill: #e05a5a; }
  .qp-fig .qp-sq-arrow { stroke: #ffffff; stroke-width: 2; }
  .qp-fig .qp-bracket { stroke: var(--global-text-color-light); stroke-width: 1.2; }
  .qp-fig .qp-guide { stroke: var(--global-text-color-light); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.7; }
  .qp-fig .qp-axis { stroke: var(--global-text-color-light); stroke-width: 1; }
  .qp-fig .qp-bar { fill: var(--global-text-color-light); opacity: 0.35; }
  .qp-fig .qp-extra { fill: #e07b39; }
  .qp-fig .t-extra { fill: #e07b39; }
  .qp-fig .t-mode { fill: #e05a5a; }
  .qp-fig .qp-before { fill: #8e6fd1; }
  .qp-fig .qp-after { fill: #2e9e6a; }
  .qp-fig .t-before { fill: #8e6fd1; }
  .qp-fig .t-after { fill: #2e9e6a; }
  .qp-fig .qp-touch { stroke: var(--global-text-color); stroke-width: 1.5; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Hemant Bhaskar Surale<sup>1</sup>, Fabrice Matulic<sup>1</sup>, Daniel Vogel<sup>1</sup><br>
<sup>1</sup>Cheriton School of Computer Science, University of Waterloo<br>
<em>Conference paper · CHI '17: ACM Conference on Human Factors in Computing Systems, Denver, CO, USA</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Touchmode.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3025453.3025865" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#surale2017experimental" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/two-fingers-beat-a-long-press/fig3-compound-task.png" class="img-fluid rounded z-depth-1" alt="Four rows of screen captures showing five square targets with left-pointing arrows, alternating grey and red. A black trail crosses the first grey target and a red trail crosses the second, red target." %}
<div class="caption">The compound task: cross five targets in a row, using normal touch for grey targets and the mode-switching technique for red ones. Each row is a moment in one task, from top to bottom: about to cross the first target, crossing it, crossing the red "moded" target, and about to cross the third target. Figure from the paper.</div>

## Quick facts

Touch interfaces need modes: the same finger stroke might draw, pan, select, or open a menu. We compared six ways of switching modes on a tablet, with 36 participants seated or standing, using the protocol of a widely cited pen study so that touch and pen can be compared directly. Overall, our work contributes:

1. **A ranking of techniques**, fastest to slowest: two fingers, a non-preferred hand button, thumb-on-finger, knuckle or hard press, and a much slower long press.
2. **Pose barely matters.** Sitting or standing had no effect on speed and little or no effect on errors (only hard press and the non-preferred hand showed some interaction with pose).
3. **Hard press is the least liked.** It was perceived as the least accurate, one of the most fatiguing, and the hardest to learn.
4. **Touch versus pen.** Our touch mode-switching times and error rates are higher than those reported for pen (except knuckle compared to the pen eraser).
5. **A design example**: one finger could draw, two fingers pan, thumb-on-finger select, and knuckle open a command menu.

We later ran the same kind of study with bare hands in mid-air: see our [VR mode-switching paper]({{ '/publications/' | relative_url }}#surale2019experimental).

## Abstract

This paper presents the results of a 36 participant empirical comparison of touch mode-switching. Six techniques are evaluated, spanning current and future techniques: long press, non-dominant hand, two-fingers, hard press, knuckle, and thumb-on-finger. Two poses are controlled for: seated with the tablet on a desk and standing with the tablet held on the forearm. Findings indicate pose has no effect on mode switching time and little effect on error rate; using two-fingers is fastest while long press is much slower; non-preferred hand and thumb-on-finger also rate highly in subjective scores. The experiment protocol is based on Li et al.'s pen mode-switching study, enabling a comparison of touch and pen mode switching. Among the common techniques, the non-dominant hand is faster than pressure with touch, whereas no significant difference had been found for pen. Our work addresses the lack of empirical evidence comparing touch mode-switching techniques and provides guidance to practitioners when choosing techniques and to researchers when designing new mode-switching methods.

## The idea: measure only the switch

A mode switch is buried inside an ordinary stroke: you move to the target, switch, touch, drag, and lift. To isolate it, we used the "subtraction method". Each task is split into cycles of two crossings. In the compound task a full cycle contains one moded crossing and one default crossing, while in the baseline task both crossings are default. The difference between the two mean cycle times is the mode-switch time.

<div class="qp-fig">
<svg viewBox="0 22 440 264" role="img" aria-label="Five square targets in a row, grey, red, grey, red, grey. A bracket marks cycle 1 over the first square and full cycles over squares two and three, and four and five. Below, a baseline full cycle bar is shorter than a compound full cycle bar; the extra part is the mode-switch time.">
  <path class="qp-bracket" d="M40,58 L40,50 L84,50 L84,58"/>
  <path class="qp-bracket" d="M120,58 L120,50 L244,50 L244,58"/>
  <path class="qp-bracket" d="M280,58 L280,50 L404,50 L404,58"/>
  <text class="qp-small qp-muted" x="62" y="40" text-anchor="middle">cycle 1</text>
  <text class="qp-small" x="182" y="40" text-anchor="middle">full cycle</text>
  <text class="qp-small" x="342" y="40" text-anchor="middle">full cycle</text>
  <rect class="qp-sq-default" x="40" y="66" width="44" height="44" rx="3"/>
  <rect class="qp-sq-mode" x="120" y="66" width="44" height="44" rx="3"/>
  <rect class="qp-sq-default" x="200" y="66" width="44" height="44" rx="3"/>
  <rect class="qp-sq-mode" x="280" y="66" width="44" height="44" rx="3"/>
  <rect class="qp-sq-default" x="360" y="66" width="44" height="44" rx="3"/>
  <path class="qp-sq-arrow" d="M74,88 L50,88 M58,80 L50,88 L58,96"/>
  <path class="qp-sq-arrow" d="M154,88 L130,88 M138,80 L130,88 L138,96"/>
  <path class="qp-sq-arrow" d="M234,88 L210,88 M218,80 L210,88 L218,96"/>
  <path class="qp-sq-arrow" d="M314,88 L290,88 M298,80 L290,88 L298,96"/>
  <path class="qp-sq-arrow" d="M394,88 L370,88 M378,80 L370,88 L378,96"/>
  <text class="qp-small qp-muted" x="62" y="130" text-anchor="middle">default</text>
  <text class="qp-small t-mode" x="142" y="130" text-anchor="middle">mode</text>
  <text class="qp-small qp-muted" x="222" y="130" text-anchor="middle">default</text>
  <text class="qp-small t-mode" x="302" y="130" text-anchor="middle">mode</text>
  <text class="qp-small qp-muted" x="382" y="130" text-anchor="middle">default</text>
  <text class="qp-bold" x="12" y="186">Baseline</text>
  <rect class="qp-bar" x="110" y="174" width="220" height="14" rx="3"/>
  <text class="qp-small qp-muted" x="118" y="206">full cycle, all targets grey</text>
  <text class="qp-bold" x="12" y="240">Compound</text>
  <rect class="qp-bar" x="110" y="228" width="220" height="14" rx="3"/>
  <rect class="qp-extra" x="330" y="228" width="80" height="14" rx="3"/>
  <text class="qp-small qp-muted" x="118" y="260">full cycle, switch in and out</text>
  <text class="qp-small t-extra" x="370" y="262" text-anchor="middle">mode-switch</text>
  <text class="qp-small t-extra" x="370" y="278" text-anchor="middle">time</text>
</svg>
<svg viewBox="0 0 440 300" role="img" aria-label="Timeline centered on the moment the finger touches down. Non-preferred hand, thumb-on-finger, and knuckle add time before touch down: 164, 179, and 223 ms. Two fingers and hard press engage just after touch down: 26 and 45 ms. Long press requires holding still for 500 ms after touch down.">
  <line class="qp-touch" x1="250" y1="44" x2="250" y2="258"/>
  <text class="qp-small" x="250" y="34" text-anchor="middle">touch down</text>
  <text class="qp-bold" x="12" y="74">Non-preferred</text>
  <rect class="qp-before" x="194" y="64" width="56" height="10" rx="2"/>
  <text class="qp-small t-before" x="188" y="74" text-anchor="end">164 ms</text>
  <text class="qp-bold" x="12" y="109">Thumb-on-finger</text>
  <rect class="qp-before" x="189" y="99" width="61" height="10" rx="2"/>
  <text class="qp-small t-before" x="183" y="109" text-anchor="end">179 ms</text>
  <text class="qp-bold" x="12" y="144">Knuckle</text>
  <rect class="qp-before" x="174" y="134" width="76" height="10" rx="2"/>
  <text class="qp-small t-before" x="168" y="144" text-anchor="end">223 ms</text>
  <text class="qp-bold" x="12" y="179">Two fingers</text>
  <rect class="qp-after" x="250" y="169" width="9" height="10" rx="2"/>
  <text class="qp-small t-after" x="266" y="179">26 ms</text>
  <text class="qp-bold" x="12" y="214">Hard press</text>
  <rect class="qp-after" x="250" y="204" width="15" height="10" rx="2"/>
  <text class="qp-small t-after" x="272" y="214">45 ms</text>
  <text class="qp-bold" x="12" y="249">Long press</text>
  <rect class="qp-after" x="250" y="239" width="170" height="10" rx="2"/>
  <text class="qp-small t-after" x="335" y="232" text-anchor="middle">hold still 500 ms</text>
  <line class="qp-axis" x1="140" y1="272" x2="430" y2="272"/>
  <text class="qp-small t-before" x="195" y="290" text-anchor="middle">engaged before touching</text>
  <text class="qp-small t-after" x="340" y="290" text-anchor="middle">engaged after touching</text>
</svg>
</div>
<div class="caption">How mode-switch time is measured: a full cycle has two crossings, and the extra time a compound cycle takes over a baseline cycle is the cost of the switch. When each technique engages the mode, from the paper's keystroke-level analysis: some add positioning time before the finger lands, others add time after touch down (bars drawn to scale).</div>

The second diagram explains why techniques differ. The non-preferred hand button, thumb-on-finger, and knuckle must be engaged before the finger touches the screen, so they add preparation time in the air (about 164, 179, and 223 ms). Two fingers and hard press engage after touch down, and quickly (26 and 45 ms). Long press has to wait out its 500 ms timer, and people then took another 238 ms to respond to the feedback.

## Experiment

**Techniques.** Six techniques spanning current and near-future touch input:

- **Long press:** hold still for 500 ms (the Android default) within a 3 mm radius.
- **Two fingers:** two touches detected before the stroke enters the target, with the input point at their midpoint.
- **Non-preferred hand:** press and hold a 45 × 25 mm on-screen button with the other hand before touching down.
- **Hard press:** press hard enough to cross a per-user threshold.
- **Thumb-on-finger:** press the thumb against the side of the index finger before touching down, like a pen's barrel button.
- **Knuckle:** turn the hand over and touch with a knuckle, like flipping a pen to its eraser.

{% include figure.html path="assets/img/blog/two-fingers-beat-a-long-press/fig1-nonpref-button.png" class="img-fluid rounded z-depth-1" alt="Two illustrations of hands on a tablet. Sitting, the non-preferred hand presses a green button at the bottom-left corner. Standing, the hand holding the tablet presses a green button at the top-right corner." %}
<div class="caption">The non-preferred hand button (green) is placed where the other hand can reach it: (a) at the bottom corner when sitting with the tablet on a desk; (b) at the top corner when standing with the tablet held on the forearm. Figure from the paper.</div>

**Apparatus.** A Google Nexus 10 tablet (2560 × 1600 px, 300 PPI) with 100 ms end-to-end latency. Hard press, knuckle, and thumb-on-finger are not sensed natively by current tablets, so we simulated future sensors. Hard press used a MYO EMG armband with a per-user classifier (almost 99% accurate in a 5-person pilot). Knuckle used an accelerometer on the back of the hand, and thumb-on-finger used a force-sensitive resistor taped to the index finger.

{% include figure.html path="assets/img/blog/two-fingers-beat-a-long-press/fig2-hardware.png" class="img-fluid rounded z-depth-1" alt="Photos of a hand wearing sensors. Top: an accelerometer on the back of the hand, wired to a wrist-mounted board, detects knuckle touches. Bottom: a force sensor on the index finger detects the thumb pressing against it." %}
<div class="caption">Hardware used to sense techniques that tablets cannot detect yet: (a) knuckle touches with an accelerometer; (b) thumb-on-finger with a pressure sensor on the index finger. Figure from the paper.</div>

**Task.** Cross five 20 × 22 mm targets in a row in one of four directions. In the baseline task all five are grey and crossed with normal touch. In the compound task they alternate grey and red, and red targets must be crossed with the mode engaged (the trail turns red). Any error triggers a beep and the target must be crossed again.

**Participants.** 36 people (8 women, all right-handed, mean age 24.1). Half sat with the tablet flat on a table, and half stood holding it on the non-dominant forearm.

**Measures.** Mode-switch time (subtraction method), crossing time, and error rates: crossing errors, out-of-target errors, and mode errors split into mode-in and mode-out. Each participant made 1,080 crossings, then rated each technique.

## What do we learn?

### 1. Two fingers is fastest, long press is far slower

Mean mode-switch times: two fingers 222 ms, non-preferred hand 311 ms, thumb-on-finger 408 ms, knuckle 500 ms and hard press 568 ms (not significantly different from each other), and long press 1,244 ms. All other pairs were significantly different. Long press was more than twice as slow as the next slowest technique and more than five times slower than two fingers.

{% include figure.html path="assets/img/blog/two-fingers-beat-a-long-press/fig4-mode-switch-time.png" class="img-fluid rounded z-depth-1" alt="Grouped bar chart of mode-switch time by technique for sitting and standing. Long press is highest at over 1,100 ms in both poses, and two fingers is lowest at about 200 to 250 ms." %}
<div class="caption">Mean mode-switch time by pose and technique, with 95% confidence intervals. The order of techniques is nearly the same sitting and standing. Figure from the paper.</div>

### 2. Sitting or standing barely matters, except for hard press and the other hand

Pose had no significant effect on mode-switch time. For errors, there was no significant difference between techniques when sitting (4.8% to 7.5% combined error). Standing, hard press (13.5%) and the non-preferred hand (10.8%) stood out, while the rest ranged from 3.3% to 7.1%. This suggests both are harder to perform when standing. Two participants with small hands sometimes had trouble reaching the button across the bezel with the hand holding the tablet.

{% include figure.html path="assets/img/blog/two-fingers-beat-a-long-press/fig5-error-rate.png" class="img-fluid rounded z-depth-1" alt="Grouped bar chart of combined error rate by technique for sitting and standing. Most techniques are between about 5 and 7 percent; when standing, non-preferred hand is about 11 percent and hard press about 13.5 percent." %}
<div class="caption">Combined error rate by technique and pose. Note that the colors for sit and stand are swapped relative to the previous chart. Figure from the paper.</div>

### 3. When accuracy matters, use thumb-on-finger; avoid pressure

Thumb-on-finger had the lowest out-of-target error rate (1.0%, against 5.9% for two fingers), and lower crossing errors than the non-preferred hand (1.5% vs. 3.9%). Hard press was rated the least accurate technique and harder to learn than long press and two fingers, and hard press and knuckle were rated more tiring and harder to use than the rest. One participant said it almost felt like breaking the tablet. Knuckle surprised us: despite the occlusion, its error rate was comparable to the best techniques, although people found it tiring.

### 4. Touch is not pen

Following Li et al.'s pen study let us compare directly. Our touch times were systematically higher: Li et al. report 139 ms for the non-preferred hand and 284 ms for pen pressure, roughly half of our values. With touch, the non-preferred hand was faster than pressure, whereas no significant difference had been found for pen. One possible reason: Li et al.'s participants could rest a finger on a physical button, while ours had to target an on-screen button.

## Design implications

1. **With current devices, use two fingers** when accuracy is not critical, and **a non-preferred hand button** when it is.
2. **With future sensors, thumb-on-finger** is a good choice. **Knuckle** works surprisingly well, though many people find it inaccurate and uncomfortable.
3. **Avoid long press** in most cases, and be cautious with **pressure** for touch mode switching.
4. **Possible improvements:** show a cursor between two fingers before touch (with pre-touch sensing), allow the mode to be engaged shortly after touch down to reduce mode-in errors, and combine techniques, such as two fingers or knuckle together with the non-preferred hand, to support several modes.

## Limitations

Like Li et al., we used a synthetic, linear task with a single mode switched at a high and regular frequency. This allows fine-grained analysis, but results should be validated in more realistic tasks and with more than two modes. Knuckle, hard press, and thumb-on-finger required participants to wear extra sensors, and results could change with other sensing. The non-preferred hand button had a fixed size and position, and the 500 ms long press duration could be further optimized.

## Publication

Hemant Bhaskar Surale, Fabrice Matulic, and Daniel Vogel. 2017. Experimental Analysis of Mode Switching Techniques in Touch-based User Interfaces. In *Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI '17)*, Denver, CO, USA. ACM, 3267-3280. [https://doi.org/10.1145/3025453.3025865](https://doi.org/10.1145/3025453.3025865)

### BibTeX

```bibtex
@inproceedings{surale2017experimental,
  title     = {Experimental Analysis of Mode Switching Techniques in Touch-based User Interfaces},
  author    = {Surale, Hemant Bhaskar and Matulic, Fabrice and Vogel, Daniel},
  booktitle = {Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
  series    = {CHI '17},
  location  = {Denver, Colorado, USA},
  pages     = {3267--3280},
  year      = {2017},
  publisher = {ACM},
  doi       = {10.1145/3025453.3025865}
}
```

## Contact

Questions? Feel free to contact:

- **Hemant Bhaskar Surale**, University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2017 ACM) and are reproduced here by the authors.</p>
