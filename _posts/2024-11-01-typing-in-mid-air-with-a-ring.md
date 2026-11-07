---
layout: post
title: Typing in mid-air with a ring
date: 2024-11-01 10:00:00-0400
description: A ring with an IMU and pinch-sensing electrodes turns wrist movement into gesture typing for AR glasses. A fused word predictor raised entry speed to 27.3 WPM.
tags: text-entry gesture-typing ar wearables
categories: papers
thumbnail: /assets/img/publication_preview/RingGesture.jpg
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
Junxiao Shen<sup>1,2</sup>, Roger Boldu<sup>1</sup>, Arpit Kalla<sup>1</sup>, Michael Glueck<sup>1</sup>, Hemant Bhaskar Surale<sup>1</sup>, Amy Karlson<sup>1</sup><br>
<sup>1</sup>Reality Labs Research, Meta &nbsp;&middot;&nbsp; <sup>2</sup>University of Bristol<br>
<em>Journal article · IEEE Transactions on Visualization and Computer Graphics (presented at IEEE ISMAR 2024)</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/RingGesture.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1109/TVCG.2024.3456179" class="btn btn-sm z-depth-0" role="button">IEEE Xplore</a>
<a href="{{ '/publications/' | relative_url }}#shen2024RingGesture" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/typing-in-mid-air-with-a-ring/fig1-teaser.png" class="img-fluid rounded z-depth-1" alt="Four line drawings: a person in AR glasses with a ring on the index finger facing a virtual keyboard; the hand pinching with the cursor on a key; the hand moving as a red trajectory crosses the keyboard; and the hand released, with hello world typed." %}
<div class="caption">Typing a word with RingGesture: (a) turn the wrist to place the cursor on the first letter, (b) pinch thumb and index finger to start the swipe, (c) trace the word by moving the wrist, and (d) release the pinch. Score Fusion then predicts the top words, with the first one preselected. Figure from the paper.</div>

## Quick facts

Lightweight AR glasses, built for all-day wear, can't fit the many cameras that wide-field hand tracking needs, so text entry needs another input device. Led by Junxiao Shen (Reality Labs Research, Meta and University of Bristol), we built RingGesture: a ring that tracks the hand with an IMU and senses pinches with electrodes, so people can gesture-type in mid-air with one hand. Overall, our work contributes:

1. **RingGesture**, a fast, accurate, and easy-to-learn ring-based mid-air gesture typing system, with entry rates (27.3 WPM on average, 26.4 WPM in the first block, 32.5 WPM in the last) comparable to gesture typing on a phone.
2. **Score Fusion**, a lightweight deep-learning word prediction framework that combines a word-gesture decoding model (trained with a new layout transformation), a spatial spelling correction model (using a keyboard-layout-aware edit distance), and a pre-trained contextual language model.
3. **Two studies**: one comparing word-level and phrase-level gesture typing (32 participants), and a longitudinal study (16 participants) showing that Score Fusion improves uncorrected character error rate by 28.2% and entry speed by 55.2% over a conventional framework, Naive Correction.

## Abstract

Text entry is a critical capability for any modern computing experience, with lightweight augmented reality (AR) glasses being no exception. Designed for all-day wearability, a limitation of lightweight AR glass is the restriction to the inclusion of multiple cameras for extensive field of view in hand tracking. This constraint underscores the need for an additional input device. We propose a system to address this gap: a ring-based mid-air gesture typing technique, *RingGesture*, utilizing electrodes to mark the start and end of gesture trajectories and inertial measurement units (IMU) sensors for hand tracking. This method offers an intuitive experience similar to raycast-based mid-air gesture typing found in VR headsets, allowing for a seamless translation of hand movements into cursor navigation. To enhance both accuracy and input speed, we propose a novel deep-learning word prediction framework, *Score Fusion*, comprised of three key components: a) a word-gesture decoding model, b) a spatial spelling correction model, and c) a lightweight contextual language model. In contrast, this framework fuses the scores from the three models to predict the most likely words with higher precision. We conduct comparative and longitudinal studies to demonstrate two key findings: firstly, the overall effectiveness of *RingGesture*, which achieves an average text entry speed of 27.3 words per minute (WPM) and a peak performance of 47.9 WPM. Secondly, we highlight the superior performance of the *Score Fusion* framework, which offers a 28.2% improvement in uncorrected Character Error Rate over a conventional word prediction framework, *Naive Correction*, leading to a 55.2% improvement in text entry speed for *RingGesture*. Additionally, *RingGesture* received a System Usability Score of 83 signifying its excellent usability.

## The idea: a ring draws the swipe, three models pick the word

Mid-air gesture typing tends to be fastest when the cursor maps directly to body movement. Vulture reached 20.6 WPM with hand control, but it relied on OptiTrack markers along the arm. RingGesture gets the same direct mapping from one ring: its IMU turns wrist rotation into cursor motion, and its electrodes detect when the thumb touches the index finger. IMU tracking adds noise and drift to the swipe, so rather than trusting the swipe alone, Score Fusion weighs it against what the keyboard layout and the conversation make likely.

<div class="qp-fig">
<svg viewBox="0 0 440 330" role="img" aria-label="A ring drawing the word ring. On the keyboard, the cursor path starts at r where the user pinches, runs to i, down to n, and ends at g where the user releases. Below, a timeline shows the electrode signal stepping up at the pinch and down at the release, while the IMU signal from wrist rotation varies continuously and moves the cursor.">
  <text class="qp-bold" x="30" y="22">1. The ring draws the swipe</text>
  <rect class="qp-key" x="30" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="68" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="106" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="144" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="182" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="220" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="258" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="296" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="334" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="372" y="46" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="49" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="87" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="125" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="163" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="201" y="84" width="34" height="34" rx="4"/>
  <rect class="qp-key" x="239" y="84" width="34" height="34" rx="4"/>
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
  <path class="qp-pointer" d="M161,63 C200,69 272,69 313,63 C318,90 304,120 294,139 C272,130 242,116 224,106"/>
  <circle class="qp-start" cx="161" cy="63" r="5"/>
  <circle class="qp-end" cx="224" cy="106" r="7"/>
  <polyline class="qp-link" points="229,111 237,119 237,165"/>
  <text class="qp-small t-hand" x="237" y="178" text-anchor="middle">release: end</text>
  <line class="qp-link" x1="161" y1="42" x2="161" y2="56"/>
  <text class="qp-small t-hand" x="161" y="38" text-anchor="middle">pinch: start</text>
  <line class="qp-guide" x1="130" y1="200" x2="130" y2="298"/>
  <line class="qp-guide" x1="400" y1="200" x2="400" y2="298"/>
  <text class="qp-small qp-muted" x="130" y="196" text-anchor="middle">pinch</text>
  <text class="qp-small qp-muted" x="400" y="196" text-anchor="middle">release</text>
  <text class="qp-bold t-hand" x="12" y="245">Electrodes</text>
  <text class="qp-small t-hand" x="138" y="226">thumb touches index finger</text>
  <path class="qp-hand" d="M100,250 L130,250 L130,234 L400,234 L400,250 L420,250"/>
  <text class="qp-bold t-head" x="12" y="288">IMU</text>
  <text class="qp-small t-head" x="138" y="262">wrist rotation moves the cursor (gain 1.8)</text>
  <path class="qp-head" d="M100,284 C112,278 122,276 134,282 S158,292 172,284 S196,270 212,278 S238,294 254,286 S282,272 298,279 S326,292 342,283 S370,272 386,280 S410,288 420,283"/>
  <text class="qp-small qp-muted" x="260" y="320" text-anchor="middle">one pinch-to-release swipe is one word</text>
</svg>
<svg class="qp-plane" viewBox="0 0 280 330" role="img" aria-label="Score Fusion. A gesture decoding model turns the swipe into candidate words, a spatial spelling correction model scores corrections with a keyboard-aware edit distance, and a contextual language model scores words from conversation history, context tags, and typed text. The three scores are blended per word as (1 minus a minus b) times the decoder score, plus a times the spelling score, plus b times the context score. Words are reranked and the top one is preselected.">
  <text class="qp-bold" x="12" y="22">2. Score Fusion</text>
  <rect class="qp-frame" x="12" y="34" width="206" height="42" rx="8"/>
  <text x="22" y="52">Gesture decoding model</text>
  <text class="qp-small qp-muted" x="22" y="68">swipe → candidate words</text>
  <line class="qp-link" x1="115" y1="77" x2="115" y2="83"/>
  <polygon class="qp-arrowhead" points="111,83 119,83 115,89"/>
  <rect class="qp-frame" x="12" y="90" width="206" height="42" rx="8"/>
  <text x="22" y="108">Spatial spelling correction</text>
  <text class="qp-small qp-muted" x="22" y="124">keyboard-aware edit distance</text>
  <line class="qp-link" x1="115" y1="133" x2="115" y2="139"/>
  <polygon class="qp-arrowhead" points="111,139 119,139 115,145"/>
  <rect class="qp-frame" x="12" y="146" width="206" height="42" rx="8"/>
  <text x="22" y="164">Contextual language model</text>
  <text class="qp-small qp-muted" x="22" y="180">history, tags, typed text</text>
  <line class="qp-link" x1="218" y1="55" x2="240" y2="55"/>
  <line class="qp-link" x1="218" y1="111" x2="240" y2="111"/>
  <line class="qp-link" x1="218" y1="167" x2="240" y2="167"/>
  <line class="qp-link" x1="240" y1="55" x2="240" y2="203"/>
  <polygon class="qp-arrowhead" points="235,203 245,203 240,211"/>
  <rect class="qp-frame" x="12" y="214" width="256" height="64" rx="8"/>
  <text class="qp-small qp-muted" x="140" y="233" text-anchor="middle">blended score for each word</text>
  <text class="t-pointer" x="140" y="252" text-anchor="middle">(1 − a − b) · decoder</text>
  <text class="t-pointer" x="140" y="270" text-anchor="middle">+ a · spelling + b · context</text>
  <line class="qp-link" x1="140" y1="280" x2="140" y2="293"/>
  <polygon class="qp-arrowhead" points="135,292 145,292 140,300"/>
  <text class="qp-bold" x="140" y="318" text-anchor="middle">rerank: Top-1 preselected</text>
</svg>
</div>
<div class="caption">The ring view shows how one word is entered: a pinch starts the swipe, wrist rotation sensed by the IMU moves the cursor, and the release ends it. The Score Fusion view shows how the word is chosen: each candidate gets three log-probability scores (from the swipe, from a keyboard-aware spelling model, and from a contextual language model), and words are ranked by their weighted sum. The baseline, Naive Correction, instead runs decoding, spelling correction, and n-gram reranking one after another.</div>

## System

**Ring.** We built the ring from the ElectroRing reference design (Kienzle et al.). IMU readings are converted to quaternions, then to polar coordinates, then to a 2D cursor position, with a control-display gain of 1.8. Electrodes detect the touch and release of a pinch from changes in an electrical signal.

**Steady pinches.** A pinch can nudge the cursor right when it matters, so the selection point lands in the wrong place (a Heisenberg effect of crosstalk between input modalities). To counter it, an exponential smoothing filter sets its own filtering level by trading off noise rejection against tracking error (λ = 0.75).

**Gesture decoding model.** An attention-enhanced bidirectional LSTM with CTC loss, trained on the public How We Swipe phone dataset (1,338 users, 11,318 unique words). That dataset used a different keyboard layout, so we mapped its swipes onto ours with a piecewise affine transformation anchored at key centers and six points around the keyboard. This raised the model's test accuracy on the Study 1 data by 76% compared with simply normalizing by keyboard width and height.

{% include figure.html path="assets/img/blog/typing-in-mid-air-with-a-ring/fig6-layout-transform.png" class="img-fluid rounded z-depth-1" alt="Three plots of the same swipe for the word available over a keyboard: raw input on the input layout, temporally resampled on the model layout, and spatially transformed on the model layout, each with anchor points labeled TL, TR, ML, MR, BL, and BR." %}
<div class="caption">Converting a swipe for "available" from the dataset's keyboard layout to ours: first resampled in time, then transformed in space using key centers and six anchor points around the keyboard. Figure from the paper.</div>

**Spatial spelling correction.** A probabilistic edit distance that knows the keyboard layout. Substituting an adjacent key (like q for w) has probability 0.17, while a non-adjacent key has 0.01; omitting or adding a character each has 0.06. We estimated these from earlier mid-air gesture typing data.

**Contextual language model.** A bidirectional LSTM that predicts the next word from the previous words, the conversation history, and context tags such as location and time. Adding context lowered perplexity from 70.91 to 42.82, and pre-training on public comments and posts before fine-tuning lowered it to 37.16. After quantization, the model is 7 MB, small enough to run in real time on a mobile phone processor.

## Experiment

**Study 1: word or phrase?** First, we asked whether removing the pause between words would speed up gesture typing with a directly mapped cursor. 32 participants (18 men, 13 women, 1 undisclosed; mean age 33) swiped 40 phrases per condition on a Sensel touchpad, which stands in for perfect tracking, with an idealized decoder. In the word-level condition they lifted the finger after every word; in the phrase-level condition, only after the whole phrase.

**Study 2: RingGesture over two weeks.** 16 participants (9 women, 6 men, 1 undisclosed; ages 21 to 49.5) wore the ring on the index finger and typed on a virtual keyboard shown on a monitor, which stands in for the fixed virtual screen of lightweight AR glasses. Over four sessions on separate days, they completed 16 blocks; each block had 10 phrases with Score Fusion and 10 with Naive Correction, in counterbalanced order. Phrases came from the ConvAI2 dataset, and each phrase's conversation history and persona tags were fed to the language model automatically.

{% include figure.html path="assets/img/blog/typing-in-mid-air-with-a-ring/fig8-setup.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="A participant seated at a desk with a ring on the index finger, hand raised in front of a monitor showing a keyboard and a phrase to type." %}
<div class="caption">Study 2 setup: participants could rest their arms on the chair's armrests and move the wrist freely to swipe. Figure from the paper.</div>

**Measures.** Words per minute, uncorrected and corrected character error rate, Likert ratings of six aspects (such as ease of learning and hand fatigue), and the System Usability Scale.

## What do we learn?

### 1. Swiping word by word was as fast as swiping whole phrases, and most people preferred it

Word-level swiping reached 24.7 WPM and phrase-level 25.5 WPM, with uncorrected error rates of 7.8% and 9.2%; neither speed (F = 2.14, p = 0.13) nor accuracy differed significantly. 19 of 32 participants preferred word-level typing, citing familiarity, thinking in words, less fatigue, and immediate feedback; 8 preferred phrase-level typing and 5 had no preference. RingGesture therefore uses one swipe per word.

### 2. Score Fusion made ring typing 55% faster

With Score Fusion, participants averaged 27.3 WPM, against 17.6 WPM with Naive Correction (F = 30.276, p = 0.001), a 55.2% improvement. The advantage held across all 16 blocks (no condition by block interaction, p = 0.196). With Score Fusion, entry rate rose from 26.4 WPM in the first block to 32.5 WPM in the last, and peak performance reached 47.9 WPM.

{% include figure.html path="assets/img/blog/typing-in-mid-air-with-a-ring/fig10-learning-curve.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Line chart of words per minute over 16 blocks. Score Fusion stays between about 24 and 33 WPM; Naive Correction stays between about 12 and 20 WPM. Power-law learning curves are fitted to both." %}
<div class="caption">Entry rate over 16 blocks with Score Fusion and Naive Correction, with fitted power-law learning curves. Figure from the paper.</div>

### 3. Every model in the fusion pulls its weight

Score Fusion also lowered the uncorrected character error rate by 28.2% and the corrected one by 29.0% relative to Naive Correction. Replaying the swipes logged in Study 2, the gesture decoding model alone had a character error rate of 27.86%; adding spatial spelling correction brought it to 12.12%, and adding the contextual language model brought it to 5.56%.

{% include figure.html path="assets/img/blog/typing-in-mid-air-with-a-ring/fig9-error-rates.png" class="img-fluid rounded z-depth-1" alt="Two box plots comparing Score Fusion and Naive Correction. Score Fusion has a lower median and a tighter spread for both uncorrected and corrected character error rate." %}
<div class="caption">(a) Uncorrected and (b) corrected character error rate under the two conditions. Figure from the paper.</div>

### 4. People found it easy to use

RingGesture scored 83 on the System Usability Scale, where anything above 80 indicates excellent usability. Participants found it easy to learn, reported little hand fatigue, and were neutral about eye fatigue. Learning curves suggest they started faster with Score Fusion (fitted initial rate 23.9 vs 14.1 WPM) but improved faster with Naive Correction (learning rate 0.115 vs 0.069), possibly because they had to adapt to its weaker predictions. Two participants occasionally triggered a false pinch when the middle finger touched the index finger.

## Limitations

We used a monitor as a stand-in for lightweight AR glasses, which show a virtual screen at a fixed distance with only 3DOF. That holds in a controlled lab but may not extend to real-world use, especially on the move; testing in the wild (typing while walking, in a car, or lying in bed) waits for glasses with longer battery life. The conversational context was predefined with each phrase rather than coming from participants' own conversations. We have not yet tested Score Fusion with other text entry methods, such as touch typing.

## Publication

Junxiao Shen, Roger Boldu, Arpit Kalla, Michael Glueck, Hemant Bhaskar Surale, and Amy Karlson. 2024. RingGesture: A Ring-Based Mid-Air Gesture Typing System Powered by a Deep-Learning Word Prediction Framework. *IEEE Transactions on Visualization and Computer Graphics* 30, 11 (November 2024), 7441-7451. [https://doi.org/10.1109/TVCG.2024.3456179](https://doi.org/10.1109/TVCG.2024.3456179)

### BibTeX

```bibtex
@article{shen2024RingGesture,
  title     = {RingGesture: A Ring-Based Mid-Air Gesture Typing System Powered by a Deep-Learning Word Prediction Framework},
  author    = {Shen, Junxiao and Boldu, Roger and Kalla, Arpit and Glueck, Michael and Surale, Hemant Bhaskar and Karlson, Amy},
  journal   = {IEEE Transactions on Visualization and Computer Graphics},
  volume    = {30},
  number    = {11},
  pages     = {7441--7451},
  year      = {2024},
  publisher = {IEEE},
  doi       = {10.1109/TVCG.2024.3456179}
}
```

## Contact

Questions? Feel free to contact:

- **Junxiao Shen**, Reality Labs Research, Meta and University of Bristol
- **Hemant Bhaskar Surale**, Reality Labs Research, Meta: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2024 IEEE) and are reproduced here by the authors.</p>
