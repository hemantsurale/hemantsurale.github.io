---
layout: post
title: What happens inside a 3D click
date: 2026-10-05 10:00:00-0400
description: A VR selection takes about 0.17 seconds. We measured what the ray, eyes, head, and hand do in that window, and it changes how 3D pointing should be designed.
tags: vr pointing gaze
categories: papers
thumbnail: /assets/img/publication_preview/ICMI26_pointing.png
related_posts: false
_styles: |
  .qp-fig { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0 0; }
  .qp-fig svg { flex: 1 1 380px; min-width: 0; max-width: 540px; height: auto; }
  .qp-fig svg.qp-plane { flex: 1 1 220px; max-width: 300px; }
  .qp-fig text { fill: var(--global-text-color); font-size: 13px; }
  .qp-fig .qp-small { font-size: 12px; }
  .qp-fig .qp-bold { font-weight: 700; font-size: 14px; }
  .qp-fig .qp-muted { fill: var(--global-text-color-light); }
  .qp-fig path, .qp-fig polyline, .qp-fig line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .qp-fig .qp-pointer { stroke: var(--global-theme-color); stroke-width: 2.5; }
  .qp-fig .qp-gaze { stroke: #e07b39; stroke-width: 2.5; }
  .qp-fig .qp-head { stroke: #8e6fd1; stroke-width: 2.5; }
  .qp-fig .qp-hand { stroke: #2e9e6a; stroke-width: 2.5; }
  .qp-fig .qp-dashed { stroke-dasharray: 5 4; }
  .qp-fig .t-pointer { fill: var(--global-theme-color); }
  .qp-fig .t-gaze { fill: #e07b39; }
  .qp-fig .t-head { fill: #8e6fd1; }
  .qp-fig .t-hand { fill: #2e9e6a; }
  .qp-fig .qp-guide { stroke: var(--global-text-color-light); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.7; }
  .qp-fig .qp-axis { stroke: var(--global-text-color-light); stroke-width: 1; }
  .qp-fig .qp-frame { stroke: var(--global-text-color-light); stroke-width: 1; fill: none; opacity: 0.6; }
  .qp-fig .qp-target { stroke: var(--global-text-color); stroke-width: 1.2; fill: none; stroke-dasharray: 5 4; opacity: 0.5; }
  .qp-fig .qp-link { stroke: var(--global-text-color-light); stroke-width: 1; opacity: 0.8; }
  .qp-fig .qp-ring { stroke: var(--global-text-color); stroke-width: 1.5; fill: none; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Junhan Kong<sup>1</sup>, Jacqui Fashimpaur<sup>2</sup>, Michael J. Proulx<sup>2</sup>, Hemant Bhaskar Surale<sup>2</sup>, Jacob O. Wobbrock<sup>1</sup>, Amy Karlson<sup>2</sup><br>
<sup>1</sup>University of Washington &nbsp;&middot;&nbsp; <sup>2</sup>Reality Labs Research, Meta<br>
<em>Conference paper · ICMI '26: International Conference on Multimodal Interaction, Napoli, Italy</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Quantifying3DPointing.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3776574.3831138" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#kong2026quantifying" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/quantifying-3d-pointing/fig3-teaser.png" class="img-fluid rounded z-depth-1" alt="Photos of a participant using each of the five pointing techniques, above screenshots of a gray target before selection and a yellow highlighted target during selection." %}
<div class="caption">The five techniques we tested: a participant's posture while pointing (top), the target before selection (middle), and the target during selection (bottom). Figure from the paper.</div>

## Quick facts

A VR selection is not a single instant. Between press and release, which took about 0.17 seconds on average in our study, the ray, eyes, head, and hand all keep moving. Overall, our work contributes:

1. **Eight measures** that characterize pointer movement, gaze, head, and hand movement, and the alignment between gaze and pointer during a selection.
2. **A validation study** with 36 participants, five 3D pointing techniques, and 13,885 trials, showing that the measures track accuracy, throughput, task load, exertion, and user experience.
3. **Design implications** for 3D pointing: tolerate less stable pointing, prioritize speed and low latency, and design for coordination across modalities.

## Abstract

Measures of target selection in virtual reality (VR) have focused mainly on overall performance, such as speed and accuracy. However, a selection is not atomic: numerous things happen during the short "click" when a target is selected. In this work, we formalize a set of measures that provide insight into what happens during this process. The measures characterize the pointer movement, user behaviors (gaze, head, hand and finger), and coordination between modalities. To validate the measures, we collected pointing data from 36 participants using five different 3D pointing techniques. Our results show that these measures effectively characterize pointing performance, task load, perceived exertion, ease of use/learning, comfort, and sense of agency. We found that tolerating less "stable" pointing and considering alignment between modalities both improve pointing performance. Our findings suggest that 3D pointing should prioritize speed, allow for more movements during selection, and consider coordination of different modalities.

## The idea: look inside the click

When we compare pointing techniques in VR, we usually report speed and accuracy, which treat a selection as a single instant. Instead, we recorded every sensor sample between selection start and selection end (about 12 samples per click) and computed measures over that window.

<div class="qp-fig">
<svg viewBox="0 0 440 335" role="img" aria-label="Timeline of one selection, from press to release. The pointer ray jitters, gaze holds with small jumps, the head stays nearly still, and the hand drifts. Each lane is labeled with the measure computed from it.">
  <line class="qp-guide" x1="100" y1="50" x2="100" y2="285"/>
  <line class="qp-guide" x1="420" y1="50" x2="420" y2="285"/>
  <text class="qp-small qp-muted" x="100" y="42" text-anchor="middle">press</text>
  <text class="qp-small qp-muted" x="420" y="42" text-anchor="end">release</text>
  <text class="qp-bold t-pointer" x="12" y="84">Pointer</text>
  <text class="qp-small t-pointer" x="106" y="62">direction variability, hit point variability</text>
  <path class="qp-pointer" d="M100,80 C106,75 112,84 120,79 S134,70 142,83 S158,88 170,76 S188,73 196,81 S214,93 226,79 S240,70 252,76 S268,87 280,82 S300,66 314,79 S330,90 342,80 S356,74 366,77 S384,92 396,80 S414,73 420,78"/>
  <text class="qp-bold t-gaze" x="12" y="144">Gaze</text>
  <text class="qp-small t-gaze" x="106" y="122">gaze direction range</text>
  <path class="qp-gaze" d="M100,141 L168,141 C174,141 176,132 182,132 L250,132 C256,132 258,137 264,137 L420,137"/>
  <text class="qp-bold t-head" x="12" y="204">Head</text>
  <text class="qp-small t-head" x="106" y="184">head direction range</text>
  <path class="qp-head" d="M100,200 C180,198 260,203 420,201"/>
  <text class="qp-bold t-hand" x="12" y="264">Hand</text>
  <text class="qp-small t-hand" x="106" y="244">palm position drift, index fingertip variability</text>
  <path class="qp-hand" d="M100,257 C170,257 230,263 300,265 S390,269 420,270"/>
  <line class="qp-axis" x1="100" y1="295" x2="420" y2="295"/>
  <g class="qp-axis">
    <line x1="100" y1="291" x2="100" y2="299"/><line x1="129" y1="292" x2="129" y2="298"/><line x1="158" y1="292" x2="158" y2="298"/><line x1="187" y1="292" x2="187" y2="298"/><line x1="216" y1="292" x2="216" y2="298"/><line x1="245" y1="292" x2="245" y2="298"/><line x1="275" y1="292" x2="275" y2="298"/><line x1="304" y1="292" x2="304" y2="298"/><line x1="333" y1="292" x2="333" y2="298"/><line x1="362" y1="292" x2="362" y2="298"/><line x1="391" y1="292" x2="391" y2="298"/><line x1="420" y1="291" x2="420" y2="299"/>
  </g>
  <text class="qp-small qp-muted" x="260" y="318" text-anchor="middle">about 0.17 s, about 12 sensor samples</text>
</svg>
<svg class="qp-plane" viewBox="0 0 280 335" role="img" aria-label="Task plane view. The pointer hit point and the gaze hit point each trace a short path near the target. Thin lines show the distance between them at each sample. A ring marks the sample where they are closest, the alignment-adjusted endpoint.">
  <rect class="qp-frame" x="20" y="40" width="240" height="230" rx="10"/>
  <text class="qp-small qp-muted" x="30" y="58">task plane</text>
  <circle class="qp-target" cx="140" cy="160" r="62"/>
  <line class="qp-link" x1="101" y1="145" x2="108" y2="185"/>
  <line class="qp-link" x1="113" y1="136" x2="118" y2="176"/>
  <line class="qp-link" x1="125" y1="146" x2="129" y2="167"/>
  <line class="qp-link" x1="150" y1="153" x2="153" y2="167"/>
  <line class="qp-link" x1="161" y1="145" x2="165" y2="177"/>
  <polyline class="qp-gaze qp-dashed" points="108,185 118,176 129,167 140,151 153,167 165,177"/>
  <polyline class="qp-pointer" points="101,145 113,136 125,146 138,144 150,153 161,145"/>
  <circle class="qp-ring" cx="139" cy="147" r="9"/>
  <line class="qp-link" x1="140" y1="86" x2="139" y2="137"/>
  <text class="qp-small" x="140" y="80" text-anchor="middle">alignment-adjusted endpoint</text>
  <line class="qp-pointer" x1="30" y1="292" x2="56" y2="292"/>
  <text class="qp-small" x="64" y="296">pointer hit point</text>
  <line class="qp-gaze qp-dashed" x1="30" y1="310" x2="56" y2="310"/>
  <text class="qp-small" x="64" y="314">gaze hit point</text>
  <line class="qp-link" x1="30" y1="328" x2="56" y2="328"/>
  <text class="qp-small" x="64" y="332">alignment distance (mean)</text>
</svg>
</div>
<div class="caption">The timeline shows what each modality does during one selection, with the measure we compute from it. The task-plane view shows the alignment measures, which compare where the pointer and the eyes land.</div>

We started from 31 candidate measures and kept the eight that correlated with performance and user ratings and were easiest to interpret. They fall into three groups:

- **Pointer:** how much the ray direction jitters (*pointer direction variability*) and how far the cursor wanders on the target plane (*hit point variability*).
- **Single modality:** how far the eyes and head turn (*gaze* and *head direction range*), how far the palm moves (*palm position drift*), and how much the index fingertip moves (*index fingertip variability*).
- **Alignment:** how far apart the pointer and gaze land on average (*mean alignment distance*), and where the pointer was at the moment it agreed most with gaze (*alignment-adjusted endpoint*).

The measures only need the sensor samples from inside the click, so they are cheap enough to compute at runtime.

## Experiment

**Techniques.** We chose five techniques that cover different pointing modalities (controller, gaze, hand, finger) and selection triggers (button, pinch, thumb tap), from widely used controllers to a novel wearable.

{% include figure.html path="assets/img/blog/quantifying-3d-pointing/fig2-techniques.png" class="img-fluid rounded z-depth-1" alt="Line drawings of the five pointing techniques: Controller, Gaze-Contr, Gaze-Pinch, Handray, and Ring, each with a dashed ray from the input to a spherical target." %}
<div class="caption">The five techniques. Controller: point and click with the controller. Gaze-Contr: look, then press the controller button. Gaze-Pinch: look, then pinch. Handray: a ray from the palm, select by pinching. Ring: a ray from a ring on the index finger (ElectroRing), select with a thumb tap. Figure from the paper.</div>

**Apparatus.** A Unity testbed on a Meta Quest Pro. Gaze, head, and controller were recorded at 72 Hz and hand tracking at 60 Hz. The ring prototype (ElectroRing) combines a 9-axis IMU with electrodes that detect the thumb tap.

**Task.** Gray spherical targets appeared one at a time at random positions within ±35° of the center of view, 2 m away, in two sizes (5° and 10°). Each technique and size combination had 5 practice and 40 test trials.

**Participants.** 36 people (14 women, 22 men, mean age 36.1), 35 of them right-handed. After removing outliers, we kept 13,885 valid trials (98.4%).

**Measures.** Hit or miss for every trial, plus ratings after each block: NASA-TLX task load, Borg CR-10 perceived exertion, and ease of use, ease of learning, comfort, and sense of agency.

## What do we learn?

### 1. Steadier clicks are more accurate

Across individual trials, the less the ray moved during the click, the more often it hit the target.

{% include figure.html path="assets/img/blog/quantifying-3d-pointing/fig6-accuracy.png" class="img-fluid rounded z-depth-1" alt="Left: average accuracy per technique and target size, highest for Controller. Right: scatter plot of pointer direction variability against accuracy, with a downward trend line." %}
<div class="caption">(a) Accuracy by technique and target size. (b) Blocks with more pointer movement during the click had lower accuracy. Figure from the paper.</div>

### 2. But techniques that let you hold still were slower and more tiring

Ranked by throughput, which combines speed and accuracy, the order was Controller (2.49 bits/s), Gaze-Contr (2.23), Gaze-Pinch (1.94), Ring (1.75), and Handray (1.34). Handray had the least pointer movement during the click and the highest physical demand. Controller had the most movement and the lowest physical demand.

{% include figure.html path="assets/img/blog/quantifying-3d-pointing/fig7-physical-demand.png" class="img-fluid rounded z-depth-1" alt="Two interaction plots by technique: pointer direction variability is lowest for Handray, while physical demand is highest for Handray." %}
<div class="caption">Pointer direction variability (left) and physical demand (right) move in opposite directions across techniques. Figure from the paper.</div>

The same pattern held for task load, perceived exertion, ease of use, comfort, and sense of agency: less movement during the click went with worse ratings. Holding a ray perfectly still in mid-air takes effort in a way that resting a finger on a touchscreen does not, so speed mattered more than accuracy for overall performance.

### 3. Eyes and hands work as a team

For the three techniques that don't point with gaze (Controller, Handray, Ring), we scored each click using the alignment-adjusted endpoint instead of the release position. The hit rate went from 91.8% to 93.6%: 196 misses became hits and 52 hits became misses. We also found correlations across modalities. For example, gaze range was linked to hand and finger exertion, and mean alignment distance was linked to task load.

## Design implications

1. **Tolerate less stable pointing.** Don't make users hold a ray perfectly still to select.
2. **Prioritize movement speed over pointing accuracy.**
3. **Prioritize low latency over sensing accuracy.** Participants called Handray "laggy" and felt more in control when the pointer "actually followed the movement".
4. **Design for coordination.** Gaze, head, and hands move together during a click, and using that alignment can rescue near misses.

## Limitations

We tested spherical targets at a fixed 2 m distance on a vertical plane, in fully virtual environments only, using the Quest Pro's default eye and hand tracking. Handray was sampled at 60 Hz versus 72 Hz for the others, which may account for some of its differences. Extending the measures to AR, other target layouts, and real-world tasks is future work.

## Publication

Junhan Kong, Jacqui Fashimpaur, Michael J. Proulx, Hemant Bhaskar Surale, Jacob O. Wobbrock, and Amy Karlson. 2026. Quantifying 3D Pointing: Characterizing What Happens During Pointing Selection in Virtual Reality. In *Proceedings of the 28th International Conference on Multimodal Interaction (ICMI '26)*, Napoli, Italy. ACM, 273-289. [https://doi.org/10.1145/3776574.3831138](https://doi.org/10.1145/3776574.3831138)

### BibTeX

```bibtex
@inproceedings{kong2026quantifying,
  title     = {Quantifying 3D Pointing: Characterizing What Happens During Pointing Selection in Virtual Reality},
  author    = {Kong, Junhan and Fashimpaur, Jacqui and Proulx, Michael J. and Surale, Hemant Bhaskar and Wobbrock, Jacob O. and Karlson, Amy},
  booktitle = {Proceedings of the 28th International Conference on Multimodal Interaction},
  series    = {ICMI '26},
  location  = {Napoli, Italy},
  pages     = {273--289},
  year      = {2026},
  publisher = {ACM},
  doi       = {10.1145/3776574.3831138}
}
```

## Contact

Questions? Feel free to contact:

- **Junhan Kong**, University of Washington: junhank [at] uw.edu
- **Hemant Bhaskar Surale**, Reality Labs Research, Meta: hemant.surale [at] gmail.com

<p class="caption">Figures from the paper are reproduced under its CC BY 4.0 license.</p>
