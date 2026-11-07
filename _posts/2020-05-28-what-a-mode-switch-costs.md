---
layout: post
title: What a mode switch costs, from touchscreens to VR
date: 2020-05-28 10:00:00-0400
description: My PhD thesis measures how fast and accurate bare-hand mode switches are on touchscreens and in VR, then uses the results to combine a tablet with hand gestures in VR.
tags: mode-switching touch vr
categories: thesis
thumbnail: /assets/img/publication_preview/Thesis2020.jpeg
related_posts: false
_styles: |
  .qp-fig { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0 0; }
  .qp-fig svg { flex: 1 1 380px; min-width: 0; max-width: 540px; height: auto; }
  .qp-fig text { fill: var(--global-text-color); font-size: 13px; }
  .qp-fig .qp-small { font-size: 12px; }
  .qp-fig .qp-bold { font-weight: 700; font-size: 14px; }
  .qp-fig .qp-muted { fill: var(--global-text-color-light); }
  .qp-fig path, .qp-fig polyline, .qp-fig line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .qp-fig .qp-box { fill: none; stroke-width: 1.5; }
  .qp-fig .b-touch { stroke: var(--global-theme-color); }
  .qp-fig .b-mid { stroke: #e07b39; }
  .qp-fig .b-combo { stroke: #8e6fd1; }
  .qp-fig .b-theory { stroke: #2e9e6a; }
  .qp-fig .t-touch { fill: var(--global-theme-color); }
  .qp-fig .t-mid { fill: #e07b39; }
  .qp-fig .t-combo { fill: #8e6fd1; }
  .qp-fig .t-theory { fill: #2e9e6a; }
  .qp-fig .qp-arrow { stroke: var(--global-text-color-light); stroke-width: 1.5; }
  .qp-fig .qp-guide { stroke: var(--global-text-color-light); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.8; }
  .qp-fig .qp-bracket { stroke: var(--global-text-color); stroke-width: 1.5; }
  .qp-fig .seg-default { fill: var(--global-text-color-light); fill-opacity: 0.22; stroke: var(--global-text-color-light); stroke-width: 1; }
  .qp-fig .seg-mode { fill: #e07b39; fill-opacity: 0.22; stroke: #e07b39; stroke-width: 1; }
  .qp-fig .seg-switch { fill: #8e6fd1; fill-opacity: 0.4; stroke: #8e6fd1; stroke-width: 1; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Hemant Surale<br>
University of Waterloo &nbsp;&middot;&nbsp; Supervisor: Daniel Vogel<br>
<em>PhD thesis · University of Waterloo, 2020</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Thesis.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://uwspace.uwaterloo.ca/handle/10012/15950" class="btn btn-sm z-depth-0" role="button">UWSpace</a>
<a href="{{ '/publications/' | relative_url }}#surale2020barehand" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/what-a-mode-switch-costs/fig4-1-nondominant-techniques.png" class="img-fluid rounded z-depth-1" alt="Line drawings of a person wearing a VR headset and pinching with the right hand, while the left hand makes a fist, raises an open palm, moves into the field of view, or touches the side of the head." %}
<div class="caption">Four of the bare-hand mode-switching techniques I tested in VR. The dominant hand draws with a pinch, and the non-dominant hand switches the mode by making a fist, raising an open palm, entering the field of view, or touching the head. Figure from the thesis.</div>

## Quick facts

Most interfaces have modes: the same touch can draw, pan, or select, depending on the current mode. Mode-switching techniques had been compared experimentally for mice, pucks, and pens, but there was no comprehensive analysis for touch or for bare-hand mid-air input, so I measured them, then used the results to design an application that combines both. Overall, my thesis contributes:

1. **A comparison of touch mode-switching techniques:** six techniques on a tablet, 36 participants, sitting and standing, with mode-switch time, error rates, and subjective ratings (Chapter 3).
2. **A comparison of bare-hand mid-air mode-switching techniques in VR:** techniques selected from a review of prior work, compared in two experiments with an adapted subtraction-method protocol (Chapter 4).
3. **A design space for using a multi-touch tablet in VR:** 11 design dimensions and an example interaction vocabulary that integrates touch and mid-air mode switching for 3D solid modelling (Chapter 5).
4. **A first step toward a theory of modes:** a revised mode definition, a set of mode characteristics, and an experimental task and methodology to investigate them (Chapter 6).

## Abstract

Raskin defines a mode as a distinct setting within an interface where the same user input will produce results different to those it would produce in other settings. Most interfaces have multiple modes in which input is mapped to different actions, and, mode-switching is simply the transition from one mode to another. In touch interfaces, the current mode can change how a single touch is interpreted: for example, it could draw a line, pan the canvas, select a shape, or enter a command. In Virtual Reality (VR), a hand gesture-based 3D modelling application may have different modes for object creation, selection, and transformation. Depending on the mode, the movement of the hand is interpreted differently. However, one of the crucial factors determining the effectiveness of an interface is user productivity. Mode-switching time of different input techniques, either in a touch interface or in a mid-air interface, affects user productivity. Moreover, when touch and mid-air interfaces like VR are combined, making informed decisions pertaining to the mode assignment gets even more complicated. This thesis provides an empirical investigation to characterize the mode switching phenomenon in barehand touch-based and mid-air interfaces. It explores the potential of using these input spaces together for a productivity application in VR. And, it concludes with a step towards defining and evaluating the multi-faceted mode concept, its characteristics and its utility, when designing user interfaces more generally.

## The idea: measure the switch, then build with it

A mode error is familiar to anyone who has typed a password with CAPS LOCK on. Switching between modes can be frequent, so even small differences in how long a switch takes add up. The thesis has three steps: measure mode switching for touch and for mid-air input, combine the two input spaces in one VR application, and then step back to ask what a mode is.

<div class="qp-fig">
<svg viewBox="0 0 440 396" role="img" aria-label="Thesis arc. Step 1, measure the switch: Chapter 3 compares 6 touch techniques with 36 participants sitting or standing, and Chapter 4 compares 11 mid-air techniques in VR in two experiments with 16 and 12 participants. Both feed step 2, Chapter 5, which combines a tracked tablet and bare hands for 3D modelling in VR, with 11 design dimensions evaluated with 6 participants. Step 3, Chapter 6, asks what a mode is and studies mode characteristics beyond switching time in a pilot with 12 online participants.">
  <text class="qp-muted" x="12" y="20">1. Measure the switch</text>
  <rect class="qp-box b-touch" x="12" y="30" width="202" height="104" rx="8"/>
  <text class="qp-bold t-touch" x="26" y="54">Ch. 3 · Touch</text>
  <text x="26" y="76">tablet, 6 techniques</text>
  <text class="qp-small qp-muted" x="26" y="96">36 participants,</text>
  <text class="qp-small qp-muted" x="26" y="114">sitting or standing</text>
  <rect class="qp-box b-mid" x="226" y="30" width="202" height="104" rx="8"/>
  <text class="qp-bold t-mid" x="240" y="54">Ch. 4 · Mid-air</text>
  <text x="240" y="76">VR, 11 techniques</text>
  <text class="qp-small qp-muted" x="240" y="96">2 experiments,</text>
  <text class="qp-small qp-muted" x="240" y="114">16 and 12 participants</text>
  <line class="qp-arrow" x1="113" y1="138" x2="113" y2="166"/>
  <polyline class="qp-arrow" points="107,160 113,167 119,160"/>
  <line class="qp-arrow" x1="327" y1="138" x2="327" y2="166"/>
  <polyline class="qp-arrow" points="321,160 327,167 333,160"/>
  <text class="qp-muted" x="220" y="158" text-anchor="middle">2. Combine them</text>
  <rect class="qp-box b-combo" x="12" y="172" width="416" height="86" rx="8"/>
  <text class="qp-bold t-combo" x="26" y="196">Ch. 5 · Touch and mid-air together in VR</text>
  <text x="26" y="218">a tracked tablet plus bare hands for 3D modelling</text>
  <text class="qp-small qp-muted" x="26" y="240">11 design dimensions, evaluated with 6 participants</text>
  <line class="qp-arrow" x1="113" y1="262" x2="113" y2="290"/>
  <polyline class="qp-arrow" points="107,284 113,291 119,284"/>
  <text class="qp-muted" x="130" y="282">3. Step back</text>
  <rect class="qp-box b-theory" x="12" y="296" width="416" height="86" rx="8"/>
  <text class="qp-bold t-theory" x="26" y="320">Ch. 6 · What is a mode?</text>
  <text x="26" y="342">characteristics beyond switching time</text>
  <text class="qp-small qp-muted" x="26" y="364">pilot study with 12 online participants</text>
</svg>
<svg viewBox="0 0 440 226" role="img" aria-label="Subtraction method. A baseline cycle is two crossing strokes in the default mode. A cycle with switching is: switch in, cross in the other mode, switch out, cross in the default mode. The cycle with switching is longer, and the difference between the two cycle times is the mode-switch time.">
  <text class="qp-bold" x="12" y="22">Timing a switch by subtraction (Ch. 3, 4)</text>
  <text x="12" y="71">baseline</text>
  <rect class="seg-default" x="100" y="54" width="110" height="24" rx="3"/>
  <text class="qp-small" x="155" y="70" text-anchor="middle">cross</text>
  <rect class="seg-default" x="210" y="54" width="110" height="24" rx="3"/>
  <text class="qp-small" x="265" y="70" text-anchor="middle">cross</text>
  <text x="12" y="121">with switch</text>
  <rect class="seg-switch" x="100" y="104" width="40" height="24" rx="3"/>
  <text class="qp-small" x="120" y="120" text-anchor="middle">in</text>
  <rect class="seg-mode" x="140" y="104" width="110" height="24" rx="3"/>
  <text class="qp-small" x="195" y="120" text-anchor="middle">cross</text>
  <rect class="seg-switch" x="250" y="104" width="40" height="24" rx="3"/>
  <text class="qp-small" x="270" y="120" text-anchor="middle">out</text>
  <rect class="seg-default" x="290" y="104" width="110" height="24" rx="3"/>
  <text class="qp-small" x="345" y="120" text-anchor="middle">cross</text>
  <line class="qp-guide" x1="320" y1="44" x2="320" y2="100"/>
  <line class="qp-guide" x1="320" y1="132" x2="320" y2="146"/>
  <line class="qp-guide" x1="400" y1="94" x2="400" y2="146"/>
  <path class="qp-bracket" d="M320,140 L320,148 L400,148 L400,140"/>
  <text class="qp-small" x="360" y="166" text-anchor="middle">mode-switch time</text>
  <text class="qp-small qp-muted" x="12" y="196">same strokes and targets; only the mode switches differ</text>
  <text class="qp-small qp-muted" x="12" y="214">averaged over error-free cycles and adjacent baseline blocks</text>
</svg>
</div>
<div class="caption">The thesis arc: two measurement studies feed an application, which leads to a broader question about modes. The timing panel shows how a switch is measured: a cycle with a mode switch (purple: switching in and out, orange: a stroke in the other mode) is compared with the same strokes done without switching (gray).</div>

Dillon et al. first used the subtraction method to time mode switching with a mouse, and Li et al. refined it for pens. Participants complete the same crossing or drawing task in baseline blocks (default mode only) and in compound blocks (alternating between modes). Subtracting the mean cycle time of the two adjacent baseline blocks from the compound cycle time isolates the time spent switching. For touch, this is the time between a touch-up and the next touch-down, when the hands are in the air. Because a switch involves going in and coming back out, errors are also split into mode-in and mode-out errors.

## What's inside

**Chapter 1: Introduction.** Modes, mode errors (from CAPS LOCK to aviation accidents), the definitions of a mode I build on (MacKenzie and Raskin), and the research questions.

**Chapter 2: Background.** Prior mode-switching studies for mouse and pen, touch and mid-air techniques that had not been compared formally, the subtraction method, and earlier uses of tablets, tabletops, and props in mixed reality.

**Chapter 3: Touch-based mode switching** ([CHI '17 paper]({{ '/publications/' | relative_url }}#surale2017experimental), with Fabrice Matulic and Daniel Vogel). I compared six techniques: long press, two-finger touch, a non-preferred-hand button, hard press, thumb-on-finger, and knuckle. Thumb-on-finger and knuckle were sensed with extra hardware to simulate future sensors. 36 participants did the task either seated with the tablet on a desk or standing with the tablet on the forearm. The task, crossing five oriented rectangles while alternating between modes, is a near-replication of Li et al.'s pen study, so the results can be compared with pen.

**Chapter 4: Bare-hand mid-air mode switching in VR** ([CHI '19 paper]({{ '/publications/' | relative_url }}#surale2019experimental), with Fabrice Matulic and Daniel Vogel). I grouped bare-hand mid-air actions from prior research and commercial systems into classes and picked representative ones. Experiment 1 (16 participants) compared seven bare-hand techniques for the dominant and non-dominant hand, plus a controller button held in the non-dominant hand, while the dominant hand drew lines with a pinch. Experiment 2 (12 participants) tested two subtler dominant-hand pinches (an oriented pinch and a middle-finger pinch) and checked whether a pinch works as well as a controller button as the drawing trigger.

**Chapter 5: Combining touch and mid-air input** ([CHI '19 paper]({{ '/publications/' | relative_url }}#surale2019tabletinvr), with Aakar Gupta, Mark Hancock, and Daniel Vogel). A formative study with 10 participants asked how people would use a physical tablet in VR for 3D modelling. From 7 observations I defined 11 design dimensions (for example unimanual vs. bimanual, direct vs. indirect, physical vs. non-physical) and built an example vocabulary: two-finger drag to translate, five-finger drag to navigate, swipe-in to delete, tablet orientation to choose a transformation axis, and the tablet as a knife to slice objects. Six participants used the prototype to replicate a target model and to build their own.

{% include figure.html path="assets/img/blog/what-a-mode-switch-costs/fig5-6-tablet-interactions.png" class="img-fluid rounded z-depth-1" alt="Three sketches: hands holding a tablet that cuts through a box, a hand dragging five fingers on a tablet, and two hands holding a tablet up to the chin while speaking." %}
<div class="caption">Examples from the TabletInVR vocabulary: (a) slicing an object with the tablet, (b) five-finger touch to navigate, (c) speaking to the tablet to ask for help. Figure from the thesis.</div>

**Chapter 6: Mode theory.** The earlier chapters treat mode switching in isolation, but switching is only one characteristic of a mode. I built three abstract interfaces modelled on document editors (one canvas with buttons), web browsers (overlapping canvases with tabs), and code editors (multiple canvases as tiles), each with five ink colours as modes, plus an un-moded baseline. 12 participants on Amazon Mechanical Turk did a line-crossing task. From this and the literature I describe mode characteristics (mode switching, occupancy, frequency, pattern, errors, scaling, and chunking and phrasing) and propose a revised definition: "a user interface mode is an elastic psychomotor ability to progressively acquire a skill."

**Chapter 7: Conclusion.** Future directions: switching between arbitrary modes instead of a fixed baseline (compound modes), other modalities and devices, more complex tasks such as active reading, and modes in aviation psychology.

## Key findings

### 1. On touch, two fingers is fastest and long press is far slower

From fastest to slowest: two-finger (222 ms), non-preferred-hand button (311 ms), thumb-on-finger (408 ms), knuckle and hard press (500 and 568 ms, not significantly different), and long press (1244 ms), which was more than five times slower than two-finger. Sitting or standing had no significant effect on switch time. Hard press was rated the least accurate, one of the most fatiguing, and the hardest to learn. Touch switching was generally slower than Li et al.'s pen results: their non-preferred-hand and pressure times (139 and 284 ms) are roughly half of mine.

{% include figure.html path="assets/img/blog/what-a-mode-switch-costs/fig3-4-touch-switch-times.png" class="img-fluid rounded z-depth-1" alt="Bar chart of mean mode-switch time by touch technique for sitting and standing. Long press is above 1100 ms in both poses; two-finger is lowest at about 200 to 250 ms." %}
<div class="caption">Mean mode-switch time by technique and pose, with 95% confidence intervals. Figure from the thesis.</div>

### 2. In VR, the non-dominant hand is faster and more accurate, unless the dominant-hand action is subtle

In Experiment 1, the order was: controller button in the non-dominant hand (331 ms), non-dominant palm (459 ms), non-dominant fist (513 ms), touching the head (528 ms), dominant palm (729 ms), non-dominant hand in the field of view (793 ms), dominant fist (846 ms), and dominant pointing (955 ms). Error rates ranged from 5.3% (controller) to 18.3% (dominant pointing), with dominant-hand postures the most error prone. In Experiment 2, the middle-finger pinch (233 ms) was not significantly different from the controller (226 ms), while the oriented pinch took 669 ms.

{% include figure.html path="assets/img/blog/what-a-mode-switch-costs/fig4-4-midair-switch-times.png" class="img-fluid rounded z-depth-1" alt="Bar chart of mode-switch time for eight VR techniques. Dominant pointing is highest at about 955 ms and the non-dominant controller is lowest at about 331 ms." %}
<div class="caption">Mode-switch time by technique in Experiment 1 (D = dominant hand, ND = non-dominant hand), with 95% confidence intervals. Figure from the thesis.</div>

### 3. A pinch is a practical stand-in for a controller button

When the non-dominant mode-switching action was held constant, switch times with a pinch trigger and with a controller trigger were not significantly different. Baseline drawing was significantly faster with a pinch, but only by about 41 ms. Most mid-air switch times were comparable to most touch techniques.

### 4. Tablet and hands work together for 3D modelling, and interface layout changes mode errors

All six participants replicated the target model in the TabletInVR prototype, and in free exploration they built models such as a chair, a tree, and houses. Navigation and menus on the back of the tablet were the hardest parts. In the mode-theory pilot, the multiple-canvas layout had the fewest mode errors (below 1%) but the slowest responses (638 ms), the overlapping-canvas layout the most mode errors (6.6%) at 471 ms, and the single canvas 4.8% at 529 ms. The differences in mode errors were not statistically significant.

## Design implications

1. **Touch, with current devices:** use two-finger touch when accuracy is not critical and a non-preferred-hand button otherwise. Thumb-on-finger is a good choice once sensors support it. Avoid long press in most cases, and be careful with pressure.
2. **An example touch mapping:** one finger to draw, two fingers to pan, thumb-on-finger to select, and a knuckle to open a command menu.
3. **VR, for accuracy-focused tasks:** use non-dominant actions such as raising a palm or touching the head. If the dominant hand must switch modes, use a subtle variation of the selection pinch, such as the middle-finger pinch.
4. **Avoid the pointing posture for frequent mode switching.** It was the slowest technique and caused the most errors, even though it is a common mid-air action.
5. **Combining touch and mid-air input:** the design dimensions can work around current limits, for example by using indirect input on the tablet screen when 3D tracking of the tablet is unreliable.

## Limitations

The touch and mid-air studies used a single mode switch at a high, regular frequency in a synthetic task, always switching to and from a common baseline. Some techniques relied on extra sensors, and results could change with other sensing. The TabletInVR evaluation was qualitative, with six participants (all male). The mode-theory study is a pilot with 12 online participants, and its results might change with a wider participant pool.

## Publication

Hemant Surale. 2020. *Barehand Mode Switching in Touch and Mid-Air Interfaces*. PhD thesis. University of Waterloo, Waterloo, Ontario, Canada. [https://uwspace.uwaterloo.ca/handle/10012/15950](https://uwspace.uwaterloo.ca/handle/10012/15950)

### BibTeX

```bibtex
@phdthesis{surale2020barehand,
  title   = {Barehand Mode Switching in Touch and Mid-Air Interfaces},
  author  = {Surale, Hemant},
  school  = {University of Waterloo},
  address = {Waterloo, Ontario, Canada},
  year    = {2020},
  url     = {https://uwspace.uwaterloo.ca/handle/10012/15950}
}
```

## Contact

Questions? Feel free to contact:

- **Hemant Bhaskar Surale**, University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures are from the thesis (© 2020 Hemant Surale) and are reproduced here by the author. Chapters 3 to 5 include material published by ACM.</p>
