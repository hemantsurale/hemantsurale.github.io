---
layout: post
title: Keyboard shortcuts without pressing a key
date: 2021-11-03 10:00:00-0400
description: Typealike turns 36 hand postures on, beside, or below a laptop keyboard into commands, recognized by the built-in webcam and a mirror reflector.
tags: gestures laptop deep-learning
categories: papers
thumbnail: /assets/img/publication_preview/ISS21.png
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
  .qp-fig .qp-box { fill: var(--global-bg-color); stroke-width: 1.5; }
  .qp-fig .b-theme { stroke: var(--global-theme-color); }
  .qp-fig .b-app { stroke: #e07b39; }
  .qp-fig .b-muted { stroke: var(--global-text-color-light); }
  .qp-fig .t-theme { fill: var(--global-theme-color); }
  .qp-fig .t-app { fill: #e07b39; }
  .qp-fig .t-hand { fill: #2e9e6a; }
  .qp-fig .qp-dev { fill: none; stroke: var(--global-text-color); stroke-width: 1.5; }
  .qp-fig .qp-screen { stroke: var(--global-text-color-light); stroke-width: 5; }
  .qp-fig .qp-mirror { stroke: #e07b39; stroke-width: 3; }
  .qp-fig .qp-cam { fill: var(--global-theme-color); }
  .qp-fig .qp-cone { fill: var(--global-theme-color); fill-opacity: 0.15; stroke: none; }
  .qp-fig .qp-cone-edge { stroke: var(--global-theme-color); stroke-width: 1; stroke-dasharray: 4 3; }
  .qp-fig .qp-hand { stroke: #2e9e6a; stroke-width: 2; }
  .qp-fig .qp-hand-fill { fill: #2e9e6a; fill-opacity: 0.18; }
  .qp-fig .qp-link { stroke: var(--global-text-color-light); stroke-width: 1; opacity: 0.8; }
  .qp-fig .qp-arrow { stroke: var(--global-text-color-light); stroke-width: 1.5; }
  .qp-fig .qp-head { fill: var(--global-text-color-light); }
  .qp-fig .qp-chip { fill: var(--global-bg-color); stroke: var(--global-text-color-light); stroke-width: 1.2; }
  .qp-fig .qp-chip-on { fill: #e07b39; fill-opacity: 0.18; stroke: #e07b39; stroke-width: 2; }
  .qp-fig .qp-rule { stroke: var(--global-text-color-light); stroke-width: 1; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Nalin Chhibber<sup>1</sup>, Hemant Surale<sup>1</sup>, Fabrice Matulic<sup>2</sup>, Daniel Vogel<sup>1</sup><br>
<sup>1</sup>School of Computer Science, University of Waterloo &nbsp;&middot;&nbsp; <sup>2</sup>Preferred Networks Inc.<br>
<em>Journal article · Proceedings of the ACM on Human-Computer Interaction, Vol. 5, ISS, Article 486 (presented at ACM ISS 2021)</em><br>
🏆 Best Paper Honorable Mention Award
<div class="qp-links">
<a href="{{ '/assets/pdf/Typealike.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3486952" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="https://typealike.github.io/" class="btn btn-sm z-depth-0" role="button">Project page</a>
<a href="https://github.com/typealike" class="btn btn-sm z-depth-0" role="button">Code</a>
<a href="https://www.kaggle.com/nalinc/typealike" class="btn btn-sm z-depth-0" role="button">Dataset</a>
<a href="{{ '/publications/' | relative_url }}#chhibber2021typealike" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/shortcuts-without-pressing-a-key/fig1-teaser.png" class="img-fluid rounded z-depth-1" alt="Five line drawings of a laptop keyboard and touchpad with a hand posture highlighted: (a) open left hand on its side beside the keyboard, decrease volume; (b) open left hand flat on the keyboard, open snipping tool; (c) closed right hand below the keyboard, turn car left; (d) open right hand flat on the keyboard, turn right page; (e) open right hand on its side beside the keyboard, increase volume." %}
<div class="caption">Different postures trigger different commands: (a) an open left hand at 90° wrist rotation beside the keyboard decreases the volume; (b) an open left hand at 0° on the keyboard opens a snipping tool; (c) a closed right hand at 0° below the keyboard turns the car in a racing game; (d) an open right hand at 0° on the keyboard advances a page; (e) an open right hand at 90° beside the keyboard increases the volume. Figure from the paper.</div>

## Quick facts

Keyboard shortcuts mean finding and pressing the right keys. Typealike recognizes simple hand postures made on, beside, or below a laptop keyboard, with no key press, using only the built-in webcam and a mirror reflector. The work was led by Nalin Chhibber (University of Waterloo). Overall, our work contributes:

1. **A set of near-keyboard hand postures** that are acceptable to users, recognized reliably (97.4% accuracy across 36 postures and two non-posture classes), and fast to perform (1139 ms on average, versus 1738 ms for keyboard shortcuts).
2. **A dataset of nearly 350K posture images** captured under different lighting conditions and two keyboard backgrounds, released with our code, experiment trial data, and trained model.

## Abstract

We propose a style of hand postures to trigger commands on a laptop. The key idea is to perform hand-postures while keeping the hands on, beside, or below the keyboard, to align with natural laptop usage. 36 hand-posture variations are explored considering three resting locations, left or right hand, open or closed hand, and three wrist rotation angles. A 30-participant formative study measures posture preferences and generates a dataset of nearly 350K images under different lighting conditions and backgrounds. A deep learning recognizer achieves over 97% accuracy when classifying all 36 postures with 2 additional non-posture classes for typing and non-typing. A second experiment with 20 participants validates the recognizer under real-time usage and compares posture invocation time with keyboard shortcuts. Results find low error rates and fast formation time, indicating postures are close to current typing and pointing postures. Finally, practical use case demonstrations are presented, and further extensions discussed.

## The idea: the posture is the shortcut

Earlier techniques recognize a hand posture at the moment a key is pressed, so the key press marks when to look. But touch typing already pairs each key press with automatic hand movements, and some postures are awkward to hold while pressing a key. Typealike drops the key press. A mirror reflector turns the built-in webcam down toward the keyboard, and a classifier labels every frame. So that ordinary typing is not mistaken for a command, the classifier also learns two non-posture classes: typing, and non-typing (clicking, resting, or no hands in view).

<div class="qp-fig">
<svg viewBox="0 0 440 330" role="img" aria-label="Side view of a laptop. A mirror reflector on the built-in webcam at the top of the screen redirects the camera view down onto the keyboard and touchpad, where a hand rests. Each camera frame, 1280 by 720 at 30 frames per second, goes to a ResNet-50 classifier pre-trained on ImageNet, which outputs one of 38 classes: 36 postures, typing, or non-typing. A recognized posture maps to a command such as volume down. No key press is needed, and recognition takes about 20 ms.">
  <text class="qp-small qp-muted" x="16" y="24">side view</text>
  <polygon class="qp-cone" points="37,92 62,244 202,244"/>
  <line class="qp-cone-edge" x1="37" y1="92" x2="62" y2="244"/>
  <line class="qp-cone-edge" x1="37" y1="92" x2="202" y2="244"/>
  <line class="qp-screen" x1="44" y1="246" x2="24" y2="84"/>
  <circle class="qp-cam" cx="28" cy="92" r="2.5"/>
  <line class="qp-mirror" x1="29" y1="84" x2="44" y2="99"/>
  <rect class="qp-dev" x="40" y="246" width="176" height="10" rx="3"/>
  <path class="qp-hand qp-hand-fill" d="M112,246 C113,238 124,233 140,232 L176,230 C186,229 193,228 201,227 L236,222 L236,239 L208,246 Z"/>
  <text class="qp-small t-hand" x="224" y="212" text-anchor="middle">hand</text>
  <text class="qp-small t-theme" x="105" y="200" text-anchor="middle">camera view</text>
  <text class="qp-small qp-muted" x="105" y="274" text-anchor="middle">keyboard</text>
  <text class="qp-small qp-muted" x="188" y="274" text-anchor="middle">touchpad</text>
  <text class="qp-small t-app" x="56" y="48">mirror on the</text>
  <text class="qp-small t-app" x="56" y="62">built-in webcam</text>
  <line class="qp-link" x1="54" y1="68" x2="40" y2="86"/>
  <line class="qp-arrow" x1="158" y1="56" x2="242" y2="56"/>
  <polygon class="qp-head" points="250,56 242,52 242,60"/>
  <rect class="qp-box b-muted" x="250" y="36" width="180" height="40" rx="6"/>
  <text class="qp-small" x="340" y="52" text-anchor="middle">camera frame</text>
  <text class="qp-small qp-muted" x="340" y="68" text-anchor="middle">1280×720, 30 FPS</text>
  <line class="qp-arrow" x1="340" y1="76" x2="340" y2="94"/>
  <polygon class="qp-head" points="340,100 336,92 344,92"/>
  <rect class="qp-box b-theme" x="250" y="100" width="180" height="40" rx="6"/>
  <text class="qp-small" x="340" y="116" text-anchor="middle">ResNet-50 classifier</text>
  <text class="qp-small qp-muted" x="340" y="132" text-anchor="middle">(ImageNet pre-trained)</text>
  <line class="qp-arrow" x1="340" y1="140" x2="340" y2="158"/>
  <polygon class="qp-head" points="340,164 336,156 344,156"/>
  <rect class="qp-box b-theme" x="250" y="164" width="180" height="56" rx="6"/>
  <text class="qp-small" x="340" y="180" text-anchor="middle">one of 38 classes:</text>
  <text class="qp-small" x="340" y="196" text-anchor="middle">36 postures, typing,</text>
  <text class="qp-small" x="340" y="212" text-anchor="middle">or non-typing</text>
  <line class="qp-arrow" x1="340" y1="220" x2="340" y2="238"/>
  <polygon class="qp-head" points="340,244 336,236 344,236"/>
  <rect class="qp-box b-app" x="250" y="244" width="180" height="40" rx="6"/>
  <text class="qp-small" x="340" y="260" text-anchor="middle">posture → command</text>
  <text class="qp-small qp-muted" x="340" y="276" text-anchor="middle">e.g. volume down</text>
  <text class="qp-small qp-muted" x="220" y="314" text-anchor="middle">no key press, about 20 ms to recognize</text>
</svg>
<svg class="qp-narrow" viewBox="0 0 280 330" role="img" aria-label="The posture space as four rows of options: hand (left or right), form (open or closed), wrist rotation (0, 90, or 180 degrees), and surface (on, beside, or below the keyboard). One choice per row gives 2 times 2 times 3 times 3, or 36 postures; adding typing and non-typing gives 38 classes. Highlighted: left, open, 90 degrees, beside, the volume-down posture.">
  <text class="qp-small qp-muted" x="16" y="24">one choice per row</text>
  <text class="qp-bold" x="16" y="54">hand</text>
  <text class="qp-small qp-muted" x="16" y="70">2 options</text>
  <rect class="qp-chip-on" x="90" y="43" width="52" height="26" rx="13"/>
  <text class="qp-small" x="116" y="60" text-anchor="middle">left</text>
  <rect class="qp-chip" x="150" y="43" width="52" height="26" rx="13"/>
  <text class="qp-small" x="176" y="60" text-anchor="middle">right</text>
  <text class="qp-bold" x="16" y="104">form</text>
  <text class="qp-small qp-muted" x="16" y="120">2 options</text>
  <rect class="qp-chip-on" x="90" y="93" width="52" height="26" rx="13"/>
  <text class="qp-small" x="116" y="110" text-anchor="middle">open</text>
  <rect class="qp-chip" x="150" y="93" width="52" height="26" rx="13"/>
  <text class="qp-small" x="176" y="110" text-anchor="middle">closed</text>
  <text class="qp-bold" x="16" y="154">wrist</text>
  <text class="qp-small qp-muted" x="16" y="170">3 options</text>
  <rect class="qp-chip" x="90" y="143" width="52" height="26" rx="13"/>
  <text class="qp-small" x="116" y="160" text-anchor="middle">0°</text>
  <rect class="qp-chip-on" x="150" y="143" width="52" height="26" rx="13"/>
  <text class="qp-small" x="176" y="160" text-anchor="middle">90°</text>
  <rect class="qp-chip" x="210" y="143" width="52" height="26" rx="13"/>
  <text class="qp-small" x="236" y="160" text-anchor="middle">180°</text>
  <text class="qp-bold" x="16" y="204">surface</text>
  <text class="qp-small qp-muted" x="16" y="220">3 options</text>
  <rect class="qp-chip" x="90" y="193" width="52" height="26" rx="13"/>
  <text class="qp-small" x="116" y="210" text-anchor="middle">on</text>
  <rect class="qp-chip-on" x="150" y="193" width="52" height="26" rx="13"/>
  <text class="qp-small" x="176" y="210" text-anchor="middle">beside</text>
  <rect class="qp-chip" x="210" y="193" width="52" height="26" rx="13"/>
  <text class="qp-small" x="236" y="210" text-anchor="middle">below</text>
  <text class="qp-small t-app" x="16" y="246">highlighted: volume down (Fig. 1a)</text>
  <line class="qp-rule" x1="16" y1="258" x2="264" y2="258"/>
  <text class="qp-bold" x="140" y="282" text-anchor="middle">2 × 2 × 3 × 3 = 36 postures</text>
  <text class="qp-small qp-muted" x="140" y="302" text-anchor="middle">+ typing and non-typing</text>
  <text class="qp-small qp-muted" x="140" y="318" text-anchor="middle">= 38 classes to recognize</text>
</svg>
</div>
<div class="caption">How Typealike reads a posture: the mirror points the webcam at the keyboard, and each frame is classified as one of 36 postures or as typing or non-typing. A posture is one choice from each of four parameters; the highlighted choice is the volume-down posture from the first figure.</div>

The posture set follows three design considerations from the paper:

- **Recognition without a key press,** so commands do not conflict with touch-typing motor behavior. Every posture uses a slightly extended thumb to look distinct from typing, touchpad use, and resting.
- **Performed on or near the keyboard,** with the wrist staying in contact with the laptop case. This keeps the move from typing to a command short, similar to the goal of minimizing homing time for pointing.
- **Simple and easy to perform,** so they are comfortable enough to be practical. Postures can be formed in a relaxed way, without forcibly clenching a fist or rigidly extending the thumb.

## The posture set

{% include figure.html path="assets/img/blog/shortcuts-without-pressing-a-key/fig2-posture-parameters.png" class="img-fluid rounded z-depth-1" alt="Left: a laptop with colored regions marking the surfaces On (keyboard), Side (left and right of the keyboard), and Below (palm rest and touchpad). Right: line drawings of a closed hand and an open hand, each with the thumb extended, at 0, 90, and 180 degree wrist rotation." %}
<div class="caption">Posture parameters: (a) the surface where the posture is performed (on, below, or beside the keyboard); (b, c) closed or open hand form at 0°, 90°, or 180° wrist orientation. All postures use an extended thumb and can be performed with either hand. Figure from the paper.</div>

Each of the 36 postures is defined by four parameters:

- **Hand:** dominant or non-dominant.
- **Form:** a predominantly open or closed hand, thumb extended in both.
- **Orientation:** the palm touching the surface (0°), the side edge of the hand (90°), or the back of the hand (180°).
- **Surface:** on the central keyboard area, beside the keyboard (left or right, depending on the hand), or just below it. These are places where hands already rest while typing, resting, or using the touchpad.

## Experiment 1: preferences and a dataset

**Participants.** 30 people (10 female, 20 male), aged 19 to 31 (mean 24.6), 23 of them right-handed, with a mean typing speed of 38 words per minute.

**Apparatus.** A 2018 15-inch MacBook Pro. The built-in camera, fitted with a mirror reflector, recorded the hands at 30 FPS in 1280×720. Twenty participants used a green keyboard and laptop cover, so the background could later be replaced through chromakeying. Lighting changed per block: diffuse ambient light in one block and a light source on the left or right side in the others.

{% include figure.html path="assets/img/blog/shortcuts-without-pressing-a-key/fig3-apparatus.png" class="img-fluid rounded z-depth-1" alt="Line drawing of a laptop with a mirror clipped over the webcam and a shaded capture volume over the keyboard, next to two camera frames looking down at hands on the keyboard, one with a green keyboard cover." %}
<div class="caption">Apparatus: (a) mirror reflector on the built-in camera; (b) approximate hand capture volume; (c) camera view; (d) camera view with the green keyboard cover. Figure from the paper.</div>

**Task.** Short game-like trials, each up to 6 seconds: typing a five-letter word, pressing a shortcut (Shift, Ctrl, or Alt plus a letter), clicking a button with the touchpad, or holding a prompted posture. The posture prompt wiggled slightly, and participants mimicked it, which added variety to the images.

**Design.** Three blocks of 36 posture trials, each followed by a typing or clicking reference task: 216 trials per participant, about 25 minutes. At the end, participants rated every posture for comfort and overall preference on a 5-point scale.

**Recognizer.** We extracted frames from the last 2 seconds of each posture trial, plus typing and non-typing frames, for nearly 350K labeled images. A ResNet-50 network pre-trained on ImageNet was fine-tuned on 38 classes. For augmentation, we replaced the green background with random images and varied brightness by up to 20%. We tested with 10 random splits of 24 training and 6 validation participants, so the model was always evaluated on people it had never seen.

## Experiment 2: postures versus shortcuts in real time

**Participants.** 20 new people (8 female, 12 male), aged 23 to 33 (mean 27.25), 14 right-handed and 6 left-handed, with a mean typing speed of 46 words per minute.

**Apparatus.** The same laptop and mirror, without the green cover and under normal room lighting. The recognizer ran at 30 FPS on the same laptop.

**Task.** The same tasks, but a posture trial ended as soon as the correct posture was recognized. Keyboard shortcuts served as a relative baseline.

**Design.** Five blocks, each with a sequence of 36 posture trials and a sequence of 36 shortcut trials, alternating with typing or clicking trials: 720 trials per participant. The first block was slower for postures, so we analyzed the last four.

**Measures.** Task completion time; *Transition-In* time, from the prompt to the first correct input; *Transition-Out* time, from the last input to the next prompt; and errors.

## What do we learn?

### 1. Postures can be recognized without a key press

Across the 10 participant splits, the recognizer reached 97.4% accuracy (error rate 2.6%, sd 0.9%). Most confusions involved the typing and non-typing classes, and some automatically labeled frames turned out to be wrong, so a manual review of the labels could raise accuracy further. In real-time use, posture trial errors (no correct posture within 6 s) happened 6 times, and mode errors (the wrong posture) occurred in 4% of posture trials, compared with 3% for shortcuts.

### 2. Postures are faster to start, shortcuts are faster to leave

Postures took 1139 ms on average, versus 1738 ms for shortcuts. Postures had a 600 ms faster Transition-In time, but a 490 ms slower Transition-Out time. The gap was largest when returning to typing: 105 ms after a shortcut versus 1148 ms after a posture, which is no surprise since shortcuts are very close to typing.

{% include figure.html path="assets/img/blog/shortcuts-without-pressing-a-key/fig9-transitions.png" class="img-fluid rounded z-depth-1" alt="Four bar charts comparing shortcut and posture. Transition-In from typing and from clicking: shortcuts about 1800 and 1740 ms, postures about 1165 and 1178 ms. Transition-Out to typing: shortcut about 105 ms, posture about 1148 ms. Transition-Out to clicking: shortcut about 1464 ms, posture about 1384 ms." %}
<div class="caption">Transition-In time (top) and Transition-Out time (bottom) for shortcuts and postures, coming from or going to a typing or clicking task. Figure from the paper.</div>

This comparison checks that postures fit alongside existing keyboard operations. It does not present postures as a replacement for shortcuts, which have a larger vocabulary and stay close to typing.

### 3. The 180° wrist turn is the least comfortable

Postures with a 180° wrist rotation were rated lowest for comfort (2.2, versus 3.7 for 90° and 3.8 for 0°) and for preference (2.3, versus 3.5 and 3.6). Postures below the keyboard were preferred over those beside it (3.4 versus 2.9). The most comfortable posture was the dominant open hand at 0° on the keyboard (4.36). The 90° postures were also the fastest to perform (1056.5 ms, versus 1189.5 ms at 0° and 1179 ms at 180°).

{% include figure.html path="assets/img/blog/shortcuts-without-pressing-a-key/fig6-ratings.png" class="img-fluid rounded z-depth-1" alt="Bar charts of mean comfort and preference ratings on a 1 to 5 scale by orientation, form, hand, and surface. Ratings drop to about 2.2 for 180 degree orientation; other parameters stay between about 2.9 and 3.8." %}
<div class="caption">Mean comfort and overall preference ratings by (a) orientation, (b) form, (c) hand, and (d) surface. Error bars are 95% CI. Figure from the paper.</div>

## Design implications

1. **Avoid postures without wrist rotation during text entry.** The 0° postures are closest to typing, so they can interfere with typing and confuse the recognizer.
2. **Save the 180° rotation for explicit, infrequent commands,** such as locking the screen or closing all applications.
3. **Use local surfaces for in-situ commands.** For example, select text with the touchpad, form a posture to copy, select a destination, and form a posture to paste, all without a key press.
4. **Use the non-dominant hand for quick commands.** Non-dominant postures were slightly faster, so they could serve as a general mode switch.

We demonstrated postures for system volume, page turning, switching to the eraser in a drawing application, opening a snipping tool, and controlling a racing game. We also tried two-handed postures, such as locking the screen with both hands closed at 180°.

## Limitations

Our tasks balanced typing, clicking, shortcuts, and postures equally, while real tasks may mix them in different proportions. Shortcuts were prompted at random from a limited set, which may have added mental overhead, since real shortcut use benefits from repetition and motor memory. All sessions took place in a static indoor setting on the same device, and participants avoided tilting the screen in the first experiment. A real system would need more context to reject unintended postures. A real deployment could also replace the mirror with an ultra wide-angle lens, a pop-out mirror, or a rotating camera.

## Media coverage

- University of Waterloo, Cheriton School of Computer Science: [Computer scientists develop Typealike system to expand input on a keyboard](https://cs.uwaterloo.ca/news/computer-scientists-develop-typealike-system-to-expand-input-on-keyboard)
- ScienceDaily: [System recognizes hand gestures to expand computer input on a keyboard](https://www.sciencedaily.com/releases/2022/01/220105094430.htm)
- New Atlas: [Typealike tech uses computers' existing webcams for gesture control](https://newatlas.com/computers/typealike-webcam-computer-gesture-control/)

## Publication

Nalin Chhibber, Hemant Surale, Fabrice Matulic, and Daniel Vogel. 2021. Typealike: Near-Keyboard Hand Postures for Expanded Laptop Interaction. *Proceedings of the ACM on Human-Computer Interaction* 5, ISS, Article 486 (November 2021), 20 pages. [https://doi.org/10.1145/3486952](https://doi.org/10.1145/3486952)

### BibTeX

```bibtex
@article{chhibber2021typealike,
  title     = {Typealike: Near-Keyboard Hand Postures for Expanded Laptop Interaction},
  author    = {Chhibber, Nalin and Surale, Hemant Bhaskar and Matulic, Fabrice and Vogel, Daniel},
  journal   = {Proceedings of the ACM on Human-Computer Interaction},
  volume    = {5},
  number    = {ISS},
  articleno = {486},
  numpages  = {20},
  month     = nov,
  year      = {2021},
  publisher = {ACM},
  doi       = {10.1145/3486952}
}
```

## Contact

Questions? Feel free to contact:

- **Nalin Chhibber**, School of Computer Science, University of Waterloo: nalin.chhibber [at] uwaterloo.ca
- **Hemant Bhaskar Surale**, School of Computer Science, University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2021 ACM) and are reproduced here by the authors.</p>
