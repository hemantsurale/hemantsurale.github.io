---
layout: post
title: One swipe decoder for many XR keyboards
date: 2024-11-01 10:00:00-0400
description: Gesture keyboards in AR and VR produce very different swipe data. Snapping swipes to coarse key regions let us pre-train one decoder that works across them without retraining.
tags: text-entry gesture-typing xr
categories: papers
thumbnail: /assets/img/publication_preview/Gesture2Text.jpg
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
  .qp-fig .qp-link { stroke: var(--global-text-color-light); stroke-width: 1; opacity: 0.8; }
  .qp-fig .qp-ring { stroke: var(--global-text-color); stroke-width: 1.5; fill: none; }
  .qp-fig .qp-key { stroke: var(--global-text-color-light); stroke-width: 1; fill: none; }
  .qp-fig .qp-hit { fill: var(--global-theme-color); fill-opacity: 0.15; }
  .qp-fig .qp-cell { stroke: var(--global-text-color-light); stroke-width: 1; fill: none; }
  .qp-fig .qp-dot { fill: var(--global-theme-color); }
  .qp-fig .qp-start { fill: #2e9e6a; }
  .qp-fig .qp-end { stroke: #2e9e6a; stroke-width: 2; fill: none; }
  .qp-fig .qp-arrowhead { fill: var(--global-text-color-light); }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Junxiao Shen<sup>1,2</sup>, Khadija Khaldi<sup>1</sup>, Enmin Zhou<sup>1</sup>, Hemant Bhaskar Surale<sup>1</sup>, Amy Karlson<sup>1</sup><br>
<sup>1</sup>Reality Labs Research, Meta &nbsp;&middot;&nbsp; <sup>2</sup>University of Bristol<br>
<em>Journal article · IEEE Transactions on Visualization and Computer Graphics (presented at IEEE ISMAR 2024)</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Gesture2Text.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1109/TVCG.2024.3456198" class="btn btn-sm z-depth-0" role="button">IEEE Xplore</a>
<a href="{{ '/publications/' | relative_url }}#shen2024Gesture2Text" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/one-swipe-decoder-for-many-xr-keyboards/fig1-teaser.png" class="img-fluid rounded z-depth-1" alt="Illustrations of a person swiping on a phone, poking a mid-air keyboard in AR, poking and pinching mid-air keyboards in VR, and swiping on a surface, above colored ellipses showing how touch points spread around each key on each keyboard." %}
<div class="caption">Five word-gesture keyboards: (a) mobile phone, (b) mid-air poke in AR, (c) mid-air poke in VR, (d) mid-air pinch in VR, and (e) on-surface. The bottom row shows how touch points spread around each key; every system leaves a different pattern. Figure from the paper.</div>

## Quick facts

Swipe typing (word-gesture typing) now shows up all over XR: poking a virtual keyboard, pinching to drag a ray across it, or swiping on a surface. Each mode produces differently shaped swipes, which makes a neural decoder trained on one system hard to reuse on another. Led by Junxiao Shen (Reality Labs Research, Meta and University of Bristol), we built one decoder that works across them by turning each swipe into a coarse sequence of key regions before decoding. Overall, our work contributes:

1. **Trajectory coarse discretization**, which makes it possible to pre-train a word-gesture neural decoder that generalizes to on-surface and mid-air keyboards in AR and VR. The resulting Pre-trained Neural Decoder is fast, easy to deploy, and needs no extra data collection for training or fine-tuning.
2. **A validation on four AR/VR keyboard datasets** (three of them collected for this work), where the Pre-trained Neural Decoder reached 90.4% Top-4 word accuracy and performed significantly better than conventional decoders.
3. **A real-time test on Quest 3**: after quantization the model is 4 MB and decodes with a latency of about 97 ms.

## Abstract

Text entry with word-gesture keyboards (WGK) is emerging as a popular method and becoming a key interaction for Extended Reality (XR). However, the diversity of interaction modes, keyboard sizes, and visual feedback in these environments introduces divergent word-gesture trajectory data patterns, thus leading to complexity in decoding trajectories into text. Template-matching decoding methods, such as SHARK<sup>2</sup> [32], are commonly used for these WGK systems because they are easy to implement and configure. However, these methods are susceptible to decoding inaccuracies for noisy trajectories. While conventional neural-network-based decoders (neural decoders) trained on word-gesture trajectory data have been proposed to improve accuracy, they have their own limitations: they require extensive data for training and deep-learning expertise for implementation. To address these challenges, we propose a novel solution that combines ease of implementation with high decoding accuracy: a generalizable neural decoder enabled by pre-training on large-scale coarsely discretized word-gesture trajectories. This approach produces a ready-to-use WGK decoder that is generalizable across mid-air and on-surface WGK systems in augmented reality (AR) and virtual reality (VR), which is evident by a robust average Top-4 accuracy of 90.4% on four diverse datasets. It significantly outperforms SHARK<sup>2</sup> with a 37.2% enhancement and surpasses the conventional neural decoder by 7.4%. Moreover, the *Pre-trained Neural Decoder*'s size is only 4 MB after quantization, without sacrificing accuracy, and it can operate in real-time, executing in just 97 milliseconds on Quest 3.

## The idea: snap the swipe to keys, then pre-train once

Most decoders read a swipe as a sequence of x, y coordinates. Those coordinates depend on the keyboard's size, the input mode, and how noisy the tracking is, so a swipe on a phone and the same swipe in a headset look quite different. Instead, we assign each point of the swipe to a coarse region around a key and give the decoder a sequence of one-hot key vectors. The input then lives in the same discrete space as the output (letters), and small offsets in where the finger or cursor went stop mattering.

<div class="qp-fig">
<svg viewBox="0 0 440 300" role="img" aria-label="A swipe of the word the on a QWERTY keyboard. Twelve sample points along the path are each snapped to the key region they fall in, giving the sequence t y y h h h g g f r r e. Each cell of that sequence is one-hot encoded and fed to a BiLSTM decoder with CTC beam search, which outputs the word the.">
  <text class="qp-bold" x="30" y="26">1. Snap the swipe to key regions</text>
  <rect class="qp-key" x="30" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="68" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key qp-hit" x="106" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key qp-hit" x="144" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key qp-hit" x="182" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key qp-hit" x="220" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="258" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="296" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="334" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="372" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="49" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="87" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="125" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key qp-hit" x="163" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key qp-hit" x="201" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key qp-hit" x="239" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="277" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="315" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="353" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="87" y="122" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="125" y="122" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="163" y="122" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="201" y="122" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="239" y="122" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="277" y="122" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="315" y="122" width="34" height="34" rx="4"/>
  <text class="qp-small qp-muted" x="35" y="60">q</text>
  <text class="qp-small qp-muted" x="73" y="60">w</text>
  <text class="qp-small qp-muted" x="111" y="60">e</text>
  <text class="qp-small qp-muted" x="149" y="60">r</text>
  <text class="qp-small qp-muted" x="187" y="60">t</text>
  <text class="qp-small qp-muted" x="225" y="60">y</text>
  <text class="qp-small qp-muted" x="263" y="60">u</text>
  <text class="qp-small qp-muted" x="301" y="60">i</text>
  <text class="qp-small qp-muted" x="339" y="60">o</text>
  <text class="qp-small qp-muted" x="377" y="60">p</text>
  <text class="qp-small qp-muted" x="54" y="98">a</text>
  <text class="qp-small qp-muted" x="92" y="98">s</text>
  <text class="qp-small qp-muted" x="130" y="98">d</text>
  <text class="qp-small qp-muted" x="168" y="98">f</text>
  <text class="qp-small qp-muted" x="206" y="98">g</text>
  <text class="qp-small qp-muted" x="244" y="98">h</text>
  <text class="qp-small qp-muted" x="282" y="98">j</text>
  <text class="qp-small qp-muted" x="320" y="98">k</text>
  <text class="qp-small qp-muted" x="358" y="98">l</text>
  <text class="qp-small qp-muted" x="92" y="136">z</text>
  <text class="qp-small qp-muted" x="130" y="136">x</text>
  <text class="qp-small qp-muted" x="168" y="136">c</text>
  <text class="qp-small qp-muted" x="206" y="136">v</text>
  <text class="qp-small qp-muted" x="244" y="136">b</text>
  <text class="qp-small qp-muted" x="282" y="136">n</text>
  <text class="qp-small qp-muted" x="320" y="136">m</text>
  <path class="qp-pointer" d="M201,66 C229,67 250,87 262,107 C210,119 161,51 127,68"/>
  <circle class="qp-dot" cx="201" cy="66" r="4.5"/>
  <circle class="qp-dot" cx="221" cy="70" r="3"/>
  <circle class="qp-dot" cx="238" cy="80" r="3"/>
  <circle class="qp-dot" cx="253" cy="94" r="3"/>
  <circle class="qp-dot" cx="258" cy="108" r="3"/>
  <circle class="qp-dot" cx="238" cy="107" r="3"/>
  <circle class="qp-dot" cx="219" cy="102" r="3"/>
  <circle class="qp-dot" cx="201" cy="93" r="3"/>
  <circle class="qp-dot" cx="183" cy="83" r="3"/>
  <circle class="qp-dot" cx="165" cy="73" r="3"/>
  <circle class="qp-dot" cx="147" cy="66" r="3"/>
  <circle class="qp-dot" cx="127" cy="68" r="3"/>
  <text class="qp-small qp-muted" x="40" y="186">region sequence: one cell per sample, each one-hot encoded</text>
  <rect class="qp-cell" x="40" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="70" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="100" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="130" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="160" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="190" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="220" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="250" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="280" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="310" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="340" y="196" width="30" height="28"/>
  <rect class="qp-cell" x="370" y="196" width="30" height="28"/>
  <text x="55" y="215" text-anchor="middle">t</text>
  <text x="85" y="215" text-anchor="middle">y</text>
  <text x="115" y="215" text-anchor="middle">y</text>
  <text x="145" y="215" text-anchor="middle">h</text>
  <text x="175" y="215" text-anchor="middle">h</text>
  <text x="205" y="215" text-anchor="middle">h</text>
  <text x="235" y="215" text-anchor="middle">g</text>
  <text x="265" y="215" text-anchor="middle">g</text>
  <text x="295" y="215" text-anchor="middle">f</text>
  <text x="325" y="215" text-anchor="middle">r</text>
  <text x="355" y="215" text-anchor="middle">r</text>
  <text x="385" y="215" text-anchor="middle">e</text>
  <line class="qp-link" x1="200" y1="226" x2="200" y2="242"/>
  <polygon class="qp-arrowhead" points="195,241 205,241 200,249"/>
  <rect class="qp-frame" x="70" y="252" width="260" height="34" rx="8"/>
  <text x="200" y="274" text-anchor="middle">decoder: BiLSTM + CTC beam search</text>
  <line class="qp-link" x1="330" y1="269" x2="352" y2="269"/>
  <polygon class="qp-arrowhead" points="351,264 351,274 359,269"/>
  <text class="qp-bold t-pointer" x="366" y="274">“the”</text>
</svg>
<svg class="qp-plane" viewBox="0 0 280 300" role="img" aria-label="The decoder is pre-trained once on 95,649 phone swipes and 100,000 synthetic swipes. The resulting Pre-trained Neural Decoder is 4 MB with 97 ms latency on Quest 3, and is used as-is on four XR keyboards, with Top-4 accuracy of 89.8% for mid-air poke in AR, 91.9% for mid-air poke in VR, 90.2% for mid-air pinch in VR, and 89.5% on-surface.">
  <text class="qp-bold" x="12" y="26">2. Pre-train once, reuse</text>
  <rect class="qp-frame" x="12" y="40" width="256" height="50" rx="8"/>
  <text x="24" y="60">Phone swipes: 95,649</text>
  <text x="24" y="80">Synthetic swipes: 100,000</text>
  <line class="qp-link" x1="140" y1="92" x2="140" y2="106"/>
  <polygon class="qp-arrowhead" points="135,105 145,105 140,113"/>
  <text class="qp-small qp-muted" x="152" y="107">pre-train</text>
  <rect class="qp-frame" x="12" y="116" width="256" height="48" rx="8"/>
  <text class="qp-bold t-pointer" x="140" y="137" text-anchor="middle">Pre-trained Neural Decoder</text>
  <text class="qp-small qp-muted" x="140" y="155" text-anchor="middle">4 MB, 97 ms latency on Quest 3</text>
  <line class="qp-link" x1="140" y1="166" x2="140" y2="180"/>
  <polygon class="qp-arrowhead" points="135,179 145,179 140,187"/>
  <text class="qp-small qp-muted" x="12" y="204">used as-is on four XR keyboards (Top-4)</text>
  <text x="12" y="226">Mid-air poke, AR</text>
  <text class="qp-bold t-pointer" x="268" y="226" text-anchor="end">89.8%</text>
  <text x="12" y="248">Mid-air poke, VR</text>
  <text class="qp-bold t-pointer" x="268" y="248" text-anchor="end">91.9%</text>
  <text x="12" y="270">Mid-air pinch, VR</text>
  <text class="qp-bold t-pointer" x="268" y="270" text-anchor="end">90.2%</text>
  <text x="12" y="292">On-surface</text>
  <text class="qp-bold t-pointer" x="268" y="292" text-anchor="end">89.5%</text>
</svg>
</div>
<div class="caption">The keyboard view shows a swipe of "the" resampled into points (12 shown here). Each point is assigned to a key region (tinted keys), so the decoder reads a sequence of keys instead of raw coordinates; passing over y, g, f, and r is fine, because the network learns which keys were intended. The pipeline view shows the payoff: the decoder is pre-trained once on phone and synthetic swipes and then used without fine-tuning on four XR keyboards.</div>

## The decoder

**Discretization.** We divide the keyboard into square regions, one per key, each larger than the key itself. The region size comes from how widely touch points spread around keys in the phone dataset, and the larger "pixels" make the input more tolerant of spatial noise and ambiguity. A mapping function assigns each trajectory point to its region, and the resulting sequence is one-hot encoded.

{% include figure.html path="assets/img/blog/one-swipe-decoder-for-many-xr-keyboards/fig2-discretization.png" class="img-fluid rounded z-depth-1" alt="A swipe drawn as a blue curve over a gray QWERTY keyboard, and an arrow to the same swipe shown as blue squares on a grid of overlapping gray squares that are larger than the keys." %}
<div class="caption">Discretization turns a continuous swipe into a sequence of coarse "pixels" that are larger than the keys, to absorb ambiguous and noisy input. Figure from the paper.</div>

**Pre-training data.** 95,649 swipes from the public "How We Swipe" phone dataset (1,338 users), plus 100,000 synthetic swipes from a GAN-based generator trained on that same phone data: 32,347 unique words in total. No XR data is used.

**Model.** Two stacked bidirectional LSTM layers (hidden size 222, dropout 0.3), a fully connected layer, and a CTC beam-search decoder that turns per-time-step letter probabilities into word candidates. We picked this configuration from a sweep of over 100 configurations while keeping the model under 5 MB.

## Evaluation

**Keyboards.** Four XR keyboard systems that the decoder never saw in training: mid-air poking in AR (public HoloLens 2 data from two earlier studies, 25,513 swipes), mid-air poking and mid-air pinching in VR (Quest 2, about 51,400 swipes each), and on-surface swiping on a Sensel touchpad with the keyboard shown on a monitor (33,594 swipes).

**Participants.** For the VR datasets, 200 volunteers (100 women, 100 men) typed at home on a retail Quest 2, about 30 minutes per condition. For the on-surface dataset, 100 volunteers typed 160 words each in sessions of about one hour.

**Baselines.** SHARK<sup>2</sup>, the template-matching decoder most XR gesture keyboards use, and a conventional neural decoder with the same architecture as ours but raw Cartesian coordinates as input. We used leave-one-subject-out testing.

**Measures.** Top-1 and Top-4 word accuracy: how often the intended word is the first suggestion, or among the first four.

## What do we learn?

### 1. Every XR keyboard leaves a different fingerprint

On a unit-width keyboard, touch points for AR mid-air poking sat farther from key centers (0.042 on average) than for VR poking (0.030) or VR pinching (0.028). We attribute this to less accurate hand tracking on HoloLens 2 and to the lack of hand occlusion in optical see-through AR. Phone (0.15) and on-surface (0.12) swipes were spread even more widely, a "fat finger" effect of small touch surfaces. The shapes differ too: VR swipes were straighter and more varied, and on-surface swipes were the most curved.

{% include figure.html path="assets/img/blog/one-swipe-decoder-for-many-xr-keyboards/fig5-curvature.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Box plots of trajectory curvature for five datasets. Mobile Phone and AR poke sit around 165 to 168; VR poke and VR pinch have lower medians around 157 with wide ranges; On-surface is highest, near 177, with a very narrow range." %}
<div class="caption">Curvature of swipes in the five datasets. Figure from the paper.</div>

### 2. One pre-trained decoder beats both baselines out of the box

Averaged over the four XR datasets, the Pre-trained Neural Decoder reached 83.3% Top-1 and 90.4% Top-4 accuracy without any data from those keyboards. That is 37.2 percentage points above SHARK<sup>2</sup> in Top-1 accuracy (37.6 in Top-4) and 7.4 points above the conventional neural decoder (6.9 in Top-4). Top-4 accuracy was 89.8% for AR poking, 91.9% for VR poking, 90.2% for VR pinching, and 89.5% on-surface. Adding a bigram language model and auto-correction raised the average Top-1 accuracy to 94.5%.

{% include figure.html path="assets/img/blog/one-swipe-decoder-for-many-xr-keyboards/fig6-quickly.png" class="img-fluid rounded z-depth-1" alt="Four panels for the word quickly: the raw swipe on a QWERTY keyboard, a heatmap of the conventional decoder's letter probabilities over time, a heatmap of the one-hot coarse input, and a heatmap of the pre-trained decoder's letter probabilities." %}
<div class="caption">Decoding "quickly". (a) The raw swipe. (b) The conventional neural decoder, which reads coordinates, outputs only "quick". (c) The one-hot coarse input, which has the same shape as the output. (d) The Pre-trained Neural Decoder outputs "quickly". Red cells mark confident letters at each time step. Figure from the paper.</div>

### 3. Fine-tuning helps, but only a little

Fine-tuning on each dataset's training split raised Top-1 accuracy by 3.4 points on average (for example, from 85.1% to 88.0% for VR poking). That gain is much smaller than the gap between the pre-trained decoder and either baseline, so for research use the pre-trained decoder can be dropped in as is.

### 4. The encoding matters more than the region shape

One-hot encoding beat integer encoding on every dataset (83.0% vs 64.2% Top-1 on-surface, for example), likely because integers imply an order between keys that does not exist. Square and elliptical regions performed about the same, so we kept squares because they are cheaper to compute. Replacing the LSTM with a transformer kept Top-1 accuracy below 60%. After quantization, the model is 4 MB and runs with a latency of 97 ms on Quest 3, with Top-1 word accuracy unchanged.

## Limitations

The decoder is built for QWERTY and may not work out of the box on other layouts such as Metropolis, OPTI, or Dvorak, because discretization assumes the QWERTY key arrangement. We validated it on four keyboard systems but did not test less common designs, such as curved keyboards or eye-gaze-based gesture typing. A transformer-based decoder performed poorly, likely because of too little training data; training one on a larger combined dataset is future work.

## Publication

Junxiao Shen, Khadija Khaldi, Enmin Zhou, Hemant Bhaskar Surale, and Amy Karlson. 2024. Gesture2Text: A Generalizable Decoder for Word-Gesture Keyboards in XR Through Trajectory Coarse Discretization and Pre-Training. *IEEE Transactions on Visualization and Computer Graphics* 30, 11 (November 2024), 7118-7128. [https://doi.org/10.1109/TVCG.2024.3456198](https://doi.org/10.1109/TVCG.2024.3456198)

### BibTeX

```bibtex
@article{shen2024Gesture2Text,
  title     = {Gesture2Text: A Generalizable Decoder for Word-Gesture Keyboards in XR Through Trajectory Coarse Discretization and Pre-Training},
  author    = {Shen, Junxiao and Khaldi, Khadija and Zhou, Enmin and Surale, Hemant Bhaskar and Karlson, Amy},
  journal   = {IEEE Transactions on Visualization and Computer Graphics},
  volume    = {30},
  number    = {11},
  pages     = {7118--7128},
  year      = {2024},
  publisher = {IEEE},
  doi       = {10.1109/TVCG.2024.3456198}
}
```

## Contact

Questions? Feel free to contact:

- **Junxiao Shen**, Reality Labs Research, Meta and University of Bristol
- **Hemant Bhaskar Surale**, Reality Labs Research, Meta: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2024 IEEE) and are reproduced here by the authors.</p>
