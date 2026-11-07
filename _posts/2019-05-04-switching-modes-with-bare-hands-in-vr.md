---
layout: post
title: Switching modes with bare hands in VR
date: 2019-05-04 10:00:00-0400
description: We compared eleven bare hand mode-switching techniques in VR. The non-dominant hand works well, and a subtle middle finger pinch matches a controller button.
tags: vr hand-input mode-switching
categories: papers
thumbnail: /assets/img/publication_preview/CHI19.jpg
related_posts: false
_styles: |
  .qp-fig { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0 0; }
  .qp-fig svg { flex: 1 1 380px; min-width: 0; max-width: 540px; height: auto; }
  .qp-fig svg.qp-narrow { flex: 1 1 220px; max-width: 300px; }
  .qp-fig text { fill: var(--global-text-color); font-size: 13px; }
  .qp-fig .qp-small { font-size: 12px; }
  .qp-fig .qp-bold { font-weight: 700; font-size: 14px; }
  .qp-fig .qp-muted { fill: var(--global-text-color-light); }
  .qp-fig path, .qp-fig polyline, .qp-fig line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .qp-fig .qp-modehand { stroke: #8e6fd1; stroke-width: 6; }
  .qp-fig .qp-relaxed { stroke: #8e6fd1; stroke-width: 1.5; stroke-dasharray: 4 4; opacity: 0.7; }
  .qp-fig .qp-pinch { stroke: #2e9e6a; stroke-width: 2.5; }
  .qp-fig .qp-moded { stroke: #e05a5a; stroke-width: 4; }
  .qp-fig .qp-default { stroke: var(--global-theme-color); stroke-width: 4; }
  .qp-fig .t-modehand { fill: #8e6fd1; }
  .qp-fig .t-pinch { fill: #2e9e6a; }
  .qp-fig .t-moded { fill: #e05a5a; }
  .qp-fig .t-default { fill: var(--global-theme-color); }
  .qp-fig .qp-guide { stroke: var(--global-text-color-light); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.7; }
  .qp-fig .qp-bar { fill: var(--global-text-color-light); opacity: 0.35; }
  .qp-fig .qp-extra { fill: #e07b39; }
  .qp-fig .t-extra { fill: #e07b39; }
  .qp-fig .qp-stage { stroke: var(--global-text-color-light); stroke-width: 1; fill: none; }
  .qp-fig .qp-stage-hi { stroke: #e07b39; stroke-width: 1.5; fill: none; }
  .qp-fig .qp-arrow { stroke: var(--global-text-color-light); stroke-width: 1.5; }
  .qp-fig .qp-arrowhead { fill: var(--global-text-color-light); stroke: none; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Hemant Bhaskar Surale<sup>1</sup>, Fabrice Matulic<sup>2</sup>, Daniel Vogel<sup>1</sup><br>
<sup>1</sup>Cheriton School of Computer Science, University of Waterloo, Canada &nbsp;&middot;&nbsp; <sup>2</sup>Preferred Networks Inc., Japan<br>
<em>Conference paper · CHI '19: ACM Conference on Human Factors in Computing Systems, Glasgow, Scotland, UK</em><br>
🏆 Best Paper Honorable Mention Award
<div class="qp-links">
<a href="{{ '/assets/pdf/Vrmode.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3290605.3300426" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#surale2019experimental" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/switching-modes-with-bare-hands-in-vr/fig1-techniques.png" class="img-fluid rounded z-depth-1" alt="Line drawings of a person wearing a VR headset performing seven hand postures, with the posture highlighted: non-dominant fist, non-dominant palm, non-dominant hand raised into view, non-dominant hand touching the head, dominant fist, dominant palm, and dominant pointing." %}
<div class="caption">The seven bare hand techniques in our first experiment. Four use the non-dominant hand (fist, palm, raising the hand into the field of view, touching the head) and three use the dominant hand (fist, palm, pointing). Figure from the paper.</div>

## Quick facts

In VR, the same hand movement can draw, select, or move things depending on the current mode, so people switch modes constantly. We measured how fast and how reliably eleven bare hand techniques do that, in two experiments with 28 participants. Overall, our work contributes:

1. **Dominant hand postures with large motions** (fist, palm, point) are error prone and less preferred, but a **subtle variation of the pinch** is comparable to the fastest non-dominant techniques.
2. **Comparable to touch.** Except for a few dominant techniques, bare hand mode-switching times are comparable to most touch methods.
3. **A pinch can replace a button.** Using a dominant hand pinch as the manipulation trigger performs about the same as a controller button.
4. **A full ranking** of all techniques, from the non-dominant controller button and dominant middle finger pinch (fastest) to dominant pointing (slowest).

This paper is the mid-air follow-up to our [study of mode switching on touchscreens]({{ '/publications/' | relative_url }}#surale2017experimental), and it uses the same experimental protocol so the two can be compared.

## Abstract

We present an empirical comparison of eleven bare hand, mid-air mode-switching techniques suitable for virtual reality in two experiments. The first evaluates seven techniques spanning dominant and non-dominant hand actions. Techniques represent common classes of actions selected by a methodical examination of 56 examples of prior art. The standard "subtraction method" protocol is adapted for 3D interfaces, with two baseline selection methods, bare hand pinch and device controller button. A second experiment with four techniques explores more subtle dominant-hand techniques and the effect of using a dominant hand device for selection. Results provide guidance to practitioners when choosing bare hand, mid-air mode-switching techniques, and for researchers when designing new mode-switching methods in VR.

## The idea: isolate the cost of one mode switch

With bare hands there are no buttons, so something has to tell the system whether a hand movement means "draw in the default mode" or "draw in the other mode". In our setup, a thumb-index pinch starts and stops drawing, and a held hand posture (with either hand) selects the mode. The system reads the posture at the instant the pinch starts a line.

<div class="qp-fig">
<svg viewBox="0 0 440 335" role="img" aria-label="Timeline of one compound cycle. The mode hand holds a posture, the pinch starts a line and the system reads the mode, producing a red moded line. The posture is released, the next pinch produces a blue default line. Below, a bar for the baseline full cycle is shorter than the bar for the compound full cycle; the difference is the mode-switch time.">
  <line class="qp-guide" x1="150" y1="58" x2="150" y2="198"/>
  <line class="qp-guide" x1="290" y1="58" x2="290" y2="198"/>
  <text class="qp-small qp-muted" x="150" y="48" text-anchor="middle">mode read</text>
  <text class="qp-small qp-muted" x="290" y="48" text-anchor="middle">mode read</text>
  <text class="qp-bold t-modehand" x="12" y="94">Mode hand</text>
  <text class="qp-small t-modehand" x="158" y="76">hold posture</text>
  <line class="qp-modehand" x1="118" y1="90" x2="245" y2="90"/>
  <line class="qp-relaxed" x1="252" y1="90" x2="420" y2="90"/>
  <text class="qp-small qp-muted" x="300" y="76">relaxed</text>
  <text class="qp-bold t-pinch" x="12" y="146">Pinch</text>
  <polyline class="qp-pinch" points="110,152 150,152 150,130 220,130 220,152 290,152 290,130 360,130 360,152 420,152"/>
  <text class="qp-small t-pinch" x="185" y="123" text-anchor="middle">pinched</text>
  <text class="qp-small t-pinch" x="325" y="123" text-anchor="middle">pinched</text>
  <text class="qp-bold" x="12" y="196">Line</text>
  <line class="qp-moded" x1="150" y1="192" x2="220" y2="192"/>
  <line class="qp-default" x1="290" y1="192" x2="360" y2="192"/>
  <text class="qp-small t-moded" x="185" y="212" text-anchor="middle">moded (red)</text>
  <text class="qp-small t-default" x="325" y="212" text-anchor="middle">default (blue)</text>
  <text class="qp-bold" x="12" y="256">Baseline</text>
  <rect class="qp-bar" x="110" y="244" width="220" height="14" rx="3"/>
  <text class="qp-small qp-muted" x="118" y="276">full cycle, default mode only</text>
  <text class="qp-bold" x="12" y="304">Compound</text>
  <rect class="qp-bar" x="110" y="292" width="220" height="14" rx="3"/>
  <rect class="qp-extra" x="330" y="292" width="70" height="14" rx="3"/>
  <text class="qp-small t-extra" x="365" y="326" text-anchor="middle">mode-switch time</text>
</svg>
<svg class="qp-narrow" viewBox="0 0 280 335" role="img" aria-label="Funnel showing how techniques were chosen. 40 bare hand actions from 56 papers and manuals are filtered by three criteria, independent, kinesthetic and unconstrained, into 29 actions in 6 classes. The most popular action per class gives Experiment 1, with seven bare hand techniques and a controller. Experiment 2 adds subtle pinches and a controller trigger.">
  <rect class="qp-stage" x="20" y="30" width="240" height="50" rx="8"/>
  <text class="qp-bold" x="140" y="52" text-anchor="middle">40 bare hand actions</text>
  <text class="qp-small qp-muted" x="140" y="70" text-anchor="middle">from 56 papers and device manuals</text>
  <line class="qp-arrow" x1="140" y1="82" x2="140" y2="124"/>
  <path class="qp-arrowhead" d="M134,122 L146,122 L140,130 Z"/>
  <text class="qp-small" x="150" y="96">independent,</text>
  <text class="qp-small" x="150" y="110">kinesthetic,</text>
  <text class="qp-small" x="150" y="124">unconstrained</text>
  <rect class="qp-stage" x="40" y="132" width="200" height="40" rx="8"/>
  <text class="qp-bold" x="140" y="157" text-anchor="middle">29 actions in 6 classes</text>
  <line class="qp-arrow" x1="140" y1="174" x2="140" y2="206"/>
  <path class="qp-arrowhead" d="M134,204 L146,204 L140,212 Z"/>
  <text class="qp-small" x="150" y="189">most popular</text>
  <text class="qp-small" x="150" y="203">per class</text>
  <rect class="qp-stage-hi" x="50" y="214" width="180" height="46" rx="8"/>
  <text class="qp-bold" x="140" y="234" text-anchor="middle">Experiment 1</text>
  <text class="qp-small qp-muted" x="140" y="251" text-anchor="middle">7 bare hand + controller</text>
  <line class="qp-arrow" x1="140" y1="262" x2="140" y2="270"/>
  <path class="qp-arrowhead" d="M134,268 L146,268 L140,276 Z"/>
  <rect class="qp-stage-hi" x="30" y="278" width="220" height="46" rx="8"/>
  <text class="qp-bold" x="140" y="298" text-anchor="middle">Experiment 2</text>
  <text class="qp-small qp-muted" x="140" y="315" text-anchor="middle">subtle pinches, controller trigger</text>
</svg>
</div>
<div class="caption">How one mode switch is measured: a compound cycle draws one moded line and one default line, and the extra time over a baseline cycle (default mode only) is the mode-switch time. How the techniques were chosen: a review of prior art filtered by three criteria, then a second experiment to follow up on the first.</div>

The measure comes from the "subtraction method" used before for mouse, pen, and touch. Every line drawing includes some overhead for moving to the next start point, so comparing single lines would mix that overhead into the result. Instead, we compare full cycles: two lines in the compound task (switch in, draw, switch out, draw) against two lines in the baseline task (both default). Subtracting the mean baseline cycle from the mean compound cycle leaves the cost of the switch.

To choose what to test, we collected 40 bare hand actions from 56 publications and device manuals, and kept those that are:

- **Independent:** recognizable in a single sensor frame, without timing or a gesture path (so no dwell, and no drawing an "X").
- **Kinesthetic:** held by the user for as long as the mode is needed, and released to end it.
- **Unconstrained:** the dominant hand stays free to reach any position while the mode is held.

That left 29 actions in six classes (pinch, extend finger, close hand, open hand, raise hand, touch body), and we tested the most popular action from each class.

## Experiment 1

**Techniques.** Four non-dominant hand postures (fist, palm, raising the hand into the field of view, touching the side of the head) and three dominant hand postures (fist, palm, pointing). In all non-dominant techniques the dominant hand draws with a pinch. As a non-bare-hand comparison, an eighth condition used the button of an HTC controller held in the non-dominant hand.

**Apparatus.** An HTC Vive (1080 × 1200 px per eye, 90 Hz) and a Unity application at 90 FPS. A LEAP Motion on the headset tracked the hands. Its built-in recognizer often confused fist, palm, and pinch during rapid switching, so we trained a simple per-user classifier on fingertip features (almost 99% accurate in a 6-person pilot) and taped force-sensitive resistors to the thumb and to the side of the headset to detect pinches and head touches.

**Task.** 3D line drawing, standing. Five pairs of spheres (100 mm diameter) are stacked with the top pair at shoulder height, and each pair is connected by pinching inside the first sphere, moving to the second, and releasing. In the baseline task all pairs are blue and drawn with the plain pinch. In the compound task, pairs alternate blue and red, and red pairs must be drawn while holding the mode-switching posture.

{% include figure.html path="assets/img/blog/switching-modes-with-bare-hands-in-vr/fig2-line-drawing-task.png" class="img-fluid rounded z-depth-1" alt="Illustrations and VR screenshots of the line drawing task. Top: a participant connects two blue spheres with a blue line using a pinch. Bottom: in the compound task, red sphere pairs are connected with a red line while the other hand holds an open palm." %}
<div class="caption">The line drawing task: (a) baseline, where every pair is blue and drawn with a pinch; (b) compound, where red pairs must be drawn with the mode-switching technique (here, a non-dominant palm). Figure from the paper.</div>

**Participants.** 16 people (5 women, all right-handed, mean age 28.5), 7 with prior VR experience.

**Measures.** Mode-switch time from the subtraction method, and error rates for start errors (line started outside the sphere), end errors, and mode errors (wrong mode), split into mode-in and mode-out errors. Each participant completed 720 line drawings across 8 techniques, and rated each technique afterwards.

## Experiment 2

The first experiment raised two questions: would dominant hand actions that are closer to the pinch itself work better, and does the bare hand pinch trigger hurt performance compared to a controller button?

{% include figure.html path="assets/img/blog/switching-modes-with-bare-hands-in-vr/fig6-subtle-pinches.png" class="img-fluid rounded z-depth-1" alt="Line drawings of two dominant hand techniques: rotating the wrist while pinching, and pinching the thumb with the middle finger instead of the index finger." %}
<div class="caption">The two subtle dominant hand techniques in the second experiment: (a) oriented pinch, where the wrist is rotated more than 45° while pinching; (b) middle finger pinch, which switches the mode and starts the line in one action. Figure from the paper.</div>

**Techniques.** Oriented pinch and middle finger pinch, both with the plain pinch as the default. We also re-ran the non-dominant palm and the non-dominant controller button, but this time with a controller in the dominant hand as the drawing trigger.

**Participants.** 12 people (5 women, 1 left-handed, mean age 29.6). Apparatus, task, and measures were the same as in Experiment 1, with 360 line drawings per participant.

## What do we learn?

### 1. The non-dominant hand is fast and accurate

Ranked by mode-switch time in Experiment 1: non-dominant controller button (331 ms), non-dominant palm (459 ms), non-dominant fist (513 ms), head touch (528 ms), dominant palm (729 ms), raising the hand into view (793 ms), dominant fist (846 ms), and dominant pointing (955 ms). The non-dominant palm and fist were not significantly different from the controller, and their error rates were close to the 8% of the un-moded baseline task.

{% include figure.html path="assets/img/blog/switching-modes-with-bare-hands-in-vr/fig3-mode-switch-time-exp1.png" class="img-fluid rounded z-depth-1" alt="Bar chart of mode-switch time by technique in Experiment 1. Dominant pointing and dominant fist are the slowest, around 850 to 950 ms, and the non-dominant controller is the fastest, around 330 ms." %}
<div class="caption">Mode-switch time by technique in Experiment 1, with 95% confidence intervals. Figure from the paper.</div>

Even so, almost half of the participants picked the controller as their favorite.

### 2. Big dominant hand postures cause confusion, and pointing is the worst

Overall error rates ranged from 5.3% (controller) to 18.3% (dominant pointing), with the dominant fist at 15.3% and the dominant palm at 13.6%. Pointing also had the highest mode-in error rate (7.6%), meaning people often failed to enter the mode. We had chosen fist, palm, and point because they look very different from a pinch, but switching quickly between such different postures seemed to confuse people: "I feel Index, Fist, and Pinch are all same" (P7).

### 3. A subtle pinch fixes the dominant hand

In Experiment 2, the middle finger pinch (233 ms) was as fast as the non-dominant controller button (226 ms), with no significant difference, and faster than the oriented pinch (669 ms). Its only weakness was a higher end error rate (5.0%, against 0.6% for the non-dominant palm). For overall preference, 42% of participants liked the middle finger pinch and the controller.

{% include figure.html path="assets/img/blog/switching-modes-with-bare-hands-in-vr/fig7-mode-switch-time-exp2.png" class="img-fluid rounded z-depth-1" alt="Bar chart of mode-switch time by technique in Experiment 2. Oriented pinch is slowest at about 670 ms, middle finger pinch and the non-dominant controller are both about 230 ms, and non-dominant palm is about 470 ms." %}
<div class="caption">Mode-switch time by technique in Experiment 2. An asterisk marks the techniques drawn with a controller in the dominant hand. Figure from the paper.</div>

### 4. A pinch works as well as a controller button

Holding the non-dominant technique constant, swapping the pinch trigger for a dominant hand controller made no significant difference to mode-switch time (controller button: p = .07; palm: p = .94). Baseline line drawing was actually slightly faster with the pinch, by about 41 ms.

## Design implications

1. **Use non-dominant actions for accuracy-focused tasks**, such as raising a palm or touching the head. Slower dominant postures like fist or palm may suit infrequent switches where accuracy matters less, such as panning. A mix of both may work best, since the non-dominant hand may tire over long periods.
2. **Avoid the pointing posture for frequent mode switching.** It is a common mid-air action, but it was the slowest and most error-prone technique here.
3. **If the dominant hand must switch modes, make it subtle**, like a middle finger pinch that switches and starts the action at once.
4. **Avoid rapid switching between very different dominant postures.** Variations on the pinch avoided the confusion we saw with fist, palm, and point.
5. **A pinch is a practical alternative to a controller button** for triggering manipulation.

## Limitations

We focused on absolute, single-point input for direct manipulation, and did not consider non-hand input such as feet, voice, or gaze. To make sensing reliable for the experiment, we added force sensors and a per-user posture classifier instead of relying only on the hand tracker. Sessions were designed to take under an hour, and non-dominant techniques may become fatiguing over longer periods of use. More subtle gestures, such as single-hand microgestures, remain to be tested.

## Publication

Hemant Bhaskar Surale, Fabrice Matulic, and Daniel Vogel. 2019. Experimental Analysis of Barehand Mid-air Mode-Switching Techniques in Virtual Reality. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI '19)*, Glasgow, Scotland, UK. ACM, Paper 196, 1-14. [https://doi.org/10.1145/3290605.3300426](https://doi.org/10.1145/3290605.3300426)

### BibTeX

```bibtex
@inproceedings{surale2019experimental,
  title     = {Experimental Analysis of Barehand Mid-air Mode-Switching Techniques in Virtual Reality},
  author    = {Surale, Hemant Bhaskar and Matulic, Fabrice and Vogel, Daniel},
  booktitle = {Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems},
  series    = {CHI '19},
  location  = {Glasgow, Scotland, UK},
  articleno = {196},
  pages     = {1--14},
  year      = {2019},
  publisher = {ACM},
  doi       = {10.1145/3290605.3300426}
}
```

## Contact

Questions? Feel free to contact:

- **Hemant Bhaskar Surale**, University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2019 ACM) and are reproduced here by the authors.</p>
