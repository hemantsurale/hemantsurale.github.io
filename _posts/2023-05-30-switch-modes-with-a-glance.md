---
layout: post
title: Switch menu modes with a glance
date: 2023-05-30 10:00:00-0400
description: On tablets, a glance at a menu item can replace the hand's trip to the menu, and a gaze-and-drag variant cut mode-switching time by almost half.
tags: gaze touch mode-switching
categories: papers
thumbnail: /assets/img/publication_preview/ETRA23.jpeg
related_posts: false
_styles: |
  .qp-fig { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0 0; }
  .qp-fig svg { flex: 1 1 380px; min-width: 0; max-width: 520px; height: auto; }
  .qp-fig svg.qp-side { flex: 1 1 220px; max-width: 300px; }
  .qp-fig text { fill: var(--global-text-color); font-size: 13px; }
  .qp-fig .qp-small { font-size: 12px; }
  .qp-fig .qp-bold { font-weight: 700; font-size: 14px; }
  .qp-fig .qp-muted { fill: var(--global-text-color-light); }
  .qp-fig path, .qp-fig polyline, .qp-fig line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .qp-fig .qp-frame { stroke: var(--global-text-color-light); stroke-width: 1; fill: none; opacity: 0.7; }
  .qp-fig .qp-item { fill: none; stroke: var(--global-text-color-light); stroke-width: 1.2; }
  .qp-fig .qp-item-on { fill: var(--global-theme-color); stroke: none; }
  .qp-fig .qp-target { fill: none; stroke: var(--global-text-color-light); stroke-width: 1.2; }
  .qp-fig .qp-need { fill: none; stroke: var(--global-theme-color); stroke-width: 1.5; }
  .qp-fig .qp-hand { stroke: #2e9e6a; stroke-width: 2.5; }
  .qp-fig .qp-hand-ring { fill: none; stroke: #2e9e6a; stroke-width: 1.5; }
  .qp-fig .qp-pen { fill: #2e9e6a; }
  .qp-fig .qp-gaze { fill: none; stroke: #e07b39; stroke-width: 2.5; }
  .qp-fig .qp-gaze-thin { fill: none; stroke: #e07b39; stroke-width: 1; opacity: 0.5; }
  .qp-fig .qp-new { stroke: var(--global-theme-color); stroke-width: 2.5; }
  .qp-fig .t-hand { fill: #2e9e6a; }
  .qp-fig .t-gaze { fill: #e07b39; }
  .qp-fig .t-accent { fill: var(--global-theme-color); }
  .qp-fig .qp-seg { fill: none; stroke: var(--global-text-color-light); stroke-width: 1.2; }
  .qp-fig .qp-seg-mode { fill: none; stroke: var(--global-theme-color); stroke-width: 1.8; }
  .qp-fig .qp-guide { stroke: var(--global-text-color-light); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.8; }
  .qp-fig .qp-bracket { stroke: var(--global-text-color); stroke-width: 1.5; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Yanfei Hu Fleischhauer<sup>1</sup>, Hemant Surale<sup>2</sup>, Florian Alt<sup>3</sup>, Ken Pfeuffer<sup>3,4</sup><br>
<sup>1</sup>LMU Munich &nbsp;&middot;&nbsp; <sup>2</sup>University of Waterloo &nbsp;&middot;&nbsp; <sup>3</sup>Bundeswehr University Munich &nbsp;&middot;&nbsp; <sup>4</sup>Aarhus University<br>
<em>Short paper · ETRA '23: 2023 Symposium on Eye Tracking Research and Applications, Tübingen, Germany</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/GazeModeSwitching.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3588015.3588409" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#hu2023gaze" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/switch-modes-with-a-glance/fig1-setup.png" class="img-fluid rounded z-depth-1" alt="A participant draws on a Microsoft Surface Pro 4 tablet, tilted at 60 degrees, with a pen. A Tobii 4c eye tracker sits along the bottom edge of the tablet. On screen, a red menu square is at the top left and a row of arrow targets is in the middle." %}
<div class="caption">The setup: a Microsoft Surface Pro 4 tilted at 60°, with a Tobii 4c eye tracker below the screen. The participant crosses arrow targets with the pen and switches modes with the menu at the top. Figure from the paper.</div>

## Quick facts

Changing modes on a tablet usually means moving the pen or finger up to a menu and back. We let the eyes make that trip instead: look at the menu item, then confirm by dwelling or with a tap wherever the hand already is. Led by Yanfei Hu Fleischhauer (LMU Munich). Overall, our work contributes:

1. **The first investigation of mode-switching between manual and gaze input**, using the subtraction method to isolate the cost of a mode switch inside a drawing workflow.
2. **Empirical evidence** (N=18) that users switch efficiently between gaze and hand, that gaze saves manual effort, and that users prefer gaze-based methods over the familiar hand baseline.
3. **A new technique, GazeTap\***, that unifies selecting a mode and applying it, and saved substantial time in a follow-up study (N=6).

## Abstract

In design work, a common task is the interaction with menus to change the drawing mode. Done frequently, this can become a tedious and fatiguing task, especially for tablets where users physically employ a stylus or finger touch. As our eyes are naturally involved in visual search and acquisition of desired menu items, we propose gaze to shortcut the physical movement. We investigate gaze-based mode-switching for menus in tablets by a novel mode-switching methodology, assessing a gaze-only (dwell-time) and multimodal (gaze and tap) technique, compared to hand-based interaction. The results suggest that users can efficiently alternate between manual and eye input when interacting with the menu; both gaze-based techniques have lower physical demand and individual speed-error trade-offs. This led to a novel technique that substantially reduces time by unifying mode-selection and mode-application. Our work points to new roles for our eyes to efficiently short-cut menu actions during the workflow.

## The idea: let the eyes make the trip to the menu

A mode switch has three steps: find the menu item, move the hand to select it, and move the hand back to the workspace. The eyes already do the first step, so we let them do the selection as well, and the hand stays on the canvas. To measure what one switch costs inside a real workflow, rather than in an isolated selection task, we used the subtraction method.

<div class="qp-fig">
<svg viewBox="0 0 460 368" role="img" aria-label="Four ways to switch to a new mode on a tablet with a menu at the top and a row of crossing targets. Hand baseline: the pen travels up to the menu item and back. Dwell: the eyes rest on the menu item for 0.5 seconds while the pen stays put. GazeTap: the eyes look at the item and the pen taps in place. GazeTap star: the eyes look at the item, the pen touches down and keeps drawing through the next target in the new mode.">
  <g transform="translate(5,5)">
    <text class="qp-bold" x="110" y="16" text-anchor="middle">Hand (baseline)</text>
    <rect class="qp-frame" x="10" y="26" width="200" height="104" rx="8"/>
    <rect class="qp-item" x="24" y="36" width="14" height="14"/><rect class="qp-item-on" x="64" y="36" width="14" height="14"/><rect class="qp-item" x="124" y="36" width="14" height="14"/>
    <rect class="qp-target" x="60" y="96" width="16" height="14"/><rect class="qp-need" x="100" y="96" width="16" height="14"/><rect class="qp-target" x="140" y="96" width="16" height="14"/><rect class="qp-target" x="180" y="96" width="16" height="14"/>
    <line class="qp-hand" x1="48" y1="103" x2="86" y2="103"/>
    <path class="qp-hand" d="M86,97 C70,84 62,68 67,57"/>
    <polygon class="qp-pen" points="62,60 71,60 68,52"/>
    <path class="qp-hand" d="M76,56 C84,68 92,80 91,93"/>
    <polygon class="qp-pen" points="86,91 95,91 91,99"/>
    <circle class="qp-pen" cx="88" cy="103" r="3.5"/>
    <text class="qp-small" x="110" y="148" text-anchor="middle">the pen travels up and back</text>
  </g>
  <g transform="translate(235,5)">
    <text class="qp-bold" x="110" y="16" text-anchor="middle">Dwell</text>
    <rect class="qp-frame" x="10" y="26" width="200" height="104" rx="8"/>
    <rect class="qp-item" x="24" y="36" width="14" height="14"/><rect class="qp-item-on" x="64" y="36" width="14" height="14"/><rect class="qp-item" x="124" y="36" width="14" height="14"/>
    <circle class="qp-gaze-thin" cx="71" cy="43" r="12"/>
    <path class="qp-gaze" d="M71,31 A12,12 0 1 1 59,43"/>
    <text class="qp-small t-gaze" x="88" y="47">0.5 s</text>
    <rect class="qp-target" x="60" y="96" width="16" height="14"/><rect class="qp-need" x="100" y="96" width="16" height="14"/><rect class="qp-target" x="140" y="96" width="16" height="14"/><rect class="qp-target" x="180" y="96" width="16" height="14"/>
    <line class="qp-hand" x1="48" y1="103" x2="86" y2="103"/>
    <circle class="qp-pen" cx="88" cy="103" r="3.5"/>
    <text class="qp-small" x="110" y="148" text-anchor="middle">look at the item for 0.5 s</text>
  </g>
  <g transform="translate(5,180)">
    <text class="qp-bold" x="110" y="16" text-anchor="middle">GazeTap</text>
    <rect class="qp-frame" x="10" y="26" width="200" height="104" rx="8"/>
    <rect class="qp-item" x="24" y="36" width="14" height="14"/><rect class="qp-item-on" x="64" y="36" width="14" height="14"/><rect class="qp-item" x="124" y="36" width="14" height="14"/>
    <circle class="qp-gaze" cx="71" cy="43" r="12"/>
    <rect class="qp-target" x="60" y="96" width="16" height="14"/><rect class="qp-need" x="100" y="96" width="16" height="14"/><rect class="qp-target" x="140" y="96" width="16" height="14"/><rect class="qp-target" x="180" y="96" width="16" height="14"/>
    <line class="qp-hand" x1="48" y1="103" x2="86" y2="103"/>
    <circle class="qp-hand-ring" cx="88" cy="103" r="8"/>
    <circle class="qp-pen" cx="88" cy="103" r="3.5"/>
    <text class="qp-small t-hand" x="88" y="125" text-anchor="middle">tap</text>
    <text class="qp-small" x="110" y="148" text-anchor="middle">look at it, then tap in place</text>
  </g>
  <g transform="translate(235,180)">
    <text class="qp-bold" x="110" y="16" text-anchor="middle">GazeTap* (follow-up)</text>
    <rect class="qp-frame" x="10" y="26" width="200" height="104" rx="8"/>
    <rect class="qp-item" x="24" y="36" width="14" height="14"/><rect class="qp-item-on" x="64" y="36" width="14" height="14"/><rect class="qp-item" x="124" y="36" width="14" height="14"/>
    <circle class="qp-gaze" cx="71" cy="43" r="12"/>
    <rect class="qp-target" x="60" y="96" width="16" height="14"/><rect class="qp-need" x="100" y="96" width="16" height="14"/><rect class="qp-target" x="140" y="96" width="16" height="14"/><rect class="qp-target" x="180" y="96" width="16" height="14"/>
    <line class="qp-hand" x1="48" y1="103" x2="86" y2="103"/>
    <circle class="qp-hand-ring" cx="88" cy="103" r="8"/>
    <line class="qp-new" x1="88" y1="103" x2="130" y2="103"/>
    <circle class="qp-pen" cx="130" cy="103" r="3.5"/>
    <text class="qp-small t-hand" x="110" y="125" text-anchor="middle">touch down + drag</text>
    <text class="qp-small" x="110" y="148" text-anchor="middle">look, touch down, keep drawing</text>
  </g>
  <circle class="qp-gaze" cx="95" cy="352" r="6"/>
  <text class="qp-small" x="106" y="356">gaze</text>
  <line class="qp-hand" x1="150" y1="352" x2="172" y2="352"/>
  <text class="qp-small" x="178" y="356">pen or finger</text>
  <rect class="qp-item-on" x="270" y="346" width="12" height="12"/>
  <text class="qp-small" x="288" y="356">selected mode</text>
</svg>
<svg class="qp-side" viewBox="0 0 280 368" role="img" aria-label="The subtraction method. A baseline block cycle has two crossings. A compound block cycle has a menu selection followed by the same two crossings. The extra time of the compound cycle is the menu selection time.">
  <text class="qp-bold" x="140" y="22" text-anchor="middle">Measuring one switch</text>
  <text class="qp-small qp-muted" x="140" y="40" text-anchor="middle">the subtraction method, one cycle each</text>
  <text class="qp-small qp-muted" x="20" y="74">baseline block</text>
  <rect class="qp-seg" x="20" y="82" width="70" height="24" rx="4"/>
  <text class="qp-small" x="55" y="98" text-anchor="middle">cross</text>
  <rect class="qp-seg" x="95" y="82" width="70" height="24" rx="4"/>
  <text class="qp-small" x="130" y="98" text-anchor="middle">cross</text>
  <text class="qp-small qp-muted" x="20" y="146">compound block</text>
  <rect class="qp-seg-mode" x="20" y="154" width="90" height="24" rx="4"/>
  <text class="qp-small t-accent" x="65" y="170" text-anchor="middle">select mode</text>
  <rect class="qp-seg" x="115" y="154" width="70" height="24" rx="4"/>
  <text class="qp-small" x="150" y="170" text-anchor="middle">cross</text>
  <rect class="qp-seg" x="190" y="154" width="70" height="24" rx="4"/>
  <text class="qp-small" x="225" y="170" text-anchor="middle">cross</text>
  <line class="qp-guide" x1="165" y1="110" x2="165" y2="150"/>
  <line class="qp-guide" x1="165" y1="182" x2="165" y2="212"/>
  <line class="qp-guide" x1="260" y1="182" x2="260" y2="212"/>
  <line class="qp-bracket" x1="165" y1="206" x2="260" y2="206"/>
  <line class="qp-bracket" x1="165" y1="200" x2="165" y2="212"/>
  <line class="qp-bracket" x1="260" y1="200" x2="260" y2="212"/>
  <text class="qp-small qp-bold" x="210" y="230" text-anchor="middle">menu selection time</text>
  <text class="qp-small qp-muted" x="140" y="268" text-anchor="middle">Same crossings, with and</text>
  <text class="qp-small qp-muted" x="140" y="286" text-anchor="middle">without a menu selection.</text>
  <text class="qp-small qp-muted" x="140" y="304" text-anchor="middle">The difference in mean cycle</text>
  <text class="qp-small qp-muted" x="140" y="322" text-anchor="middle">time is the cost of one switch.</text>
</svg>
</div>
<div class="caption">Four ways to switch to the next mode before crossing the outlined target. With the hand baseline, the pen travels to the menu and back. With Dwell, resting the eyes on the item for 0.5 s selects it. With GazeTap, the user looks at the item and taps wherever the pen already is. GazeTap* (follow-up study) turns that touch into the start of the next stroke. The second panel shows how the subtraction method isolates the time of one mode switch.</div>

## Experiment

**Techniques.** *Dwell*: looking at a menu item for 500 ms selects it, with visual feedback when the item is viewed and when the selection is confirmed. *GazeTap*: look at the item (its border highlights), then tap with the pen or finger at the current position to confirm. *Baseline*: move the pen or finger to the menu item, the default in today's apps. Each technique was done with the pen and with finger touch, giving 3 × 2 conditions in Latin square order.

{% include figure.html path="assets/img/blog/switch-modes-with-a-glance/fig5-gazetap.png" class="img-fluid rounded z-depth-1" alt="Three-step illustration of GazeTap on a tilted tablet with a row of colored menu circles: 1) the user writes with the pen, 2) the user looks at the green menu item, which gets a gray highlight, 3) the user taps with the pen on the text and the green item is selected." %}
<div class="caption">GazeTap: pen input on the canvas (1), gaze hovers on a menu item (2), and a tap with the pen confirms the switch (3). Figure from the paper.</div>

**Task.** Participants crossed rectangles with strokes, a task adapted from Dillon et al. and Surale et al. Baseline blocks had five crossings and no menu selection. Compound blocks had the same five crossings, but before crossings 2 and 4 the participant had to select the color mode that matched the outlined target. Menu items appeared at three positions along the top of the screen, and the crossing direction changed between blocks, for 720 crossings per participant.

{% include figure.html path="assets/img/blog/switch-modes-with-a-glance/fig3-compound-block.png" class="img-fluid rounded z-depth-1" alt="Four line drawings of a hand holding a pen: 1) crossing the first gray arrow target with a black stroke, 2) moving the pen to the green menu square at the top left, 3) crossing the second, red-outlined target with a red stroke, 4) crossing the third gray target with a black stroke." %}
<div class="caption">The start of a compound block with the pen baseline: cross the first target, switch mode at the menu, then cross the second and third targets. Crossings 4 and 5 repeat the pattern. Figure from the paper.</div>

**Apparatus.** Software written in Java with Processing on a Microsoft Surface Pro 4 (12.3", 2736×1824 px) with a Surface Pen and a Tobii 4c eye tracker, with participants seated about 60 cm from the screen. Gaze techniques used an invisible 4×4 cm selection area around each menu item, and a post-hoc check put gaze accuracy at about 1 cm (about 0.954° of visual angle). The crossing targets sat on the right side of the screen so that the hands would not block the eye tracker.

**Participants.** 18 paid participants (9 female, 9 male, all right-handed), aged 20 to 56 (M = 27.97). On a 1 to 5 scale they rated themselves as moderately experienced with tablets (M = 3.77) and less experienced with gaze (M = 2.37) and pen input (M = 1.9). A session took 45 to 50 minutes.

**Measures.** Menu selection time from the subtraction method (mean cycle time in compound blocks minus mean cycle time in baseline blocks); crossing, out-of-target, and mode errors; six usability ratings; and a final ranking of the techniques.

## What do we learn?

### 1. People mix eyes and hands without trouble

All participants used gaze for quick menu switches during hand-controlled drawing, in every trial, after about 30 seconds of training per technique. Both gaze techniques removed the hand's trip to the menu, and hand fatigue was rated significantly lower for Dwell and GazeTap than for the manual baseline. The trade-off was eye fatigue, which was rated higher for Dwell than for the baseline.

### 2. Skipping the hand trip cost about a quarter of a second

Mean menu selection time was 1003 ms for the manual baseline, 1236 ms for Dwell, and 1246 ms for GazeTap. The baseline was significantly faster than both gaze techniques (F(1.715, 29.161) = 12.032, p < .001). Between the two gaze techniques, Dwell caused significantly fewer errors than GazeTap and was rated easier to use and faster.

{% include figure.html path="assets/img/blog/switch-modes-with-a-glance/fig6-selection-time.png" class="img-fluid rounded z-depth-1" alt="Bar chart of mean menu selection time in milliseconds for Dwell, GazeTap, and Baseline with pen and touch, for all positions and for menu positions 1, 2, and 3. Across all positions: Dwell 1239 and 1233, GazeTap 1211 and 1281, Baseline 1013 and 993." %}
<div class="caption">Menu selection time by technique, device (pen or touch), and menu position, with 95% confidence intervals. Figure from the paper.</div>

### 3. Most people still preferred gaze

16 of 18 participants ranked a gaze technique first: Dwell 9 times (5 with pen, 4 with touch) and GazeTap 7 times (5 with pen, 2 with touch), against 2 for the hand baseline. P16: "Gaze dwell is very intuitive, as you automatically look at the colour square". Those who preferred the hand found the coordination hard: "I thought it is difficult to switch between two modalities" (P9).

### 4. Keep drawing after the tap, and switching gets much faster

GazeTap\* extends GazeTap: the user looks at the menu item and touches down to switch the mode, then keeps dragging to draw the line without lifting the pen or finger. This joins selecting a mode and applying it into one continuous action. In a follow-up with 6 participants, menu selection time with GazeTap\* averaged about 519 ms (525 ms pen, 513 ms touch), 46.6% faster than the manual baseline and 59.8% faster than Dwell (both p < .001).

{% include figure.html path="assets/img/blog/switch-modes-with-a-glance/fig9-followup.png" class="img-fluid rounded z-depth-1" alt="Three bar charts for the follow-up study. (a) Mean menu selection time: Dwell pen 1319, Dwell touch 1267, GazeTap* pen 525, GazeTap* touch 513, Pen 999, Touch 947 ms. (b) Combined error rate: 4.47, 4.17, 6.94, 10.28, 4.32, and 4.14 percent. (c) Stacked error proportions by crossing, mode, and out-of-target errors." %}
<div class="caption">Follow-up study (N=6) with GazeTap*: menu selection time (a), combined error rate (b), and error types (c). Figure from the paper.</div>

Errors went up (6.94% with pen and 10.28% with touch, versus about 4% for the others), although post-hoc tests found no significant differences. Gaze data suggests why: with GazeTap\*, the eyes were still far from the target, on the menu, when the stroke began, so users started drawing eyes-free. The technique may therefore suit rapid, short ink strokes, or tasks where the stroke does not need to start at a precise spot.

## Limitations

We ran both studies in a lab. On the move, hands may be less steady, which could make gaze shortcuts more useful, but eye tracking may be less precise. Participants were students and employees of the local university; other groups, such as older users, may benefit more from reduced physical effort. The follow-up study was small (N=6) and has limited statistical power. Finally, our menu targets were large by the standards of regular menus, though typical for gaze interfaces; nested menus could address this.

## Publication

Yanfei Hu Fleischhauer, Hemant Surale, Florian Alt, and Ken Pfeuffer. 2023. Gaze-based Mode-Switching to Enhance Interaction with Menus on Tablets. In *2023 Symposium on Eye Tracking Research and Applications (ETRA ’23)*, Tübingen, Germany. ACM, Article 7, 8 pages. [https://doi.org/10.1145/3588015.3588409](https://doi.org/10.1145/3588015.3588409)

### BibTeX

```bibtex
@inproceedings{hu2023gaze,
  title     = {Gaze-based Mode-Switching to Enhance Interaction with Menus on Tablets},
  author    = {Hu Fleischhauer, Yanfei and Surale, Hemant Bhaskar and Alt, Florian and Pfeuffer, Ken},
  booktitle = {2023 Symposium on Eye Tracking Research and Applications},
  series    = {ETRA '23},
  location  = {Tübingen, Germany},
  articleno = {7},
  numpages  = {8},
  pages     = {1--8},
  year      = {2023},
  publisher = {ACM},
  doi       = {10.1145/3588015.3588409}
}
```

## Contact

Questions? Feel free to contact:

- **Yanfei Hu Fleischhauer**, LMU Munich: yanfei.hu [at] campus.lmu.de
- **Hemant Bhaskar Surale**, University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2023 ACM) and are reproduced here by the authors.</p>
