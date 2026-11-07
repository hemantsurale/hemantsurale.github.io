---
layout: post
title: Smartphone typing without the smartphone
date: 2023-10-29 10:00:00-0400
description: STAR turns the sides of your index fingers into an AR keyboard you type on with both thumbs, reusing smartphone skills. It reached 21.9 WPM after 30 minutes.
tags: ar text-entry typing
categories: papers
thumbnail: /assets/img/publication_preview/STARUIST23.jpg
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
  .qp-fig .qp-thumb { stroke: #2e9e6a; stroke-width: 2.5; }
  .qp-fig .qp-joint { fill: #2e9e6a; }
  .qp-fig .qp-tape { stroke: #8e6fd1; stroke-width: 3; fill: none; }
  .qp-fig .qp-arc { stroke: #e07b39; stroke-width: 2.5; }
  .qp-fig .qp-key { stroke: var(--global-text-color); stroke-width: 1.2; fill: none; }
  .qp-fig .qp-key-hit { stroke: var(--global-theme-color); stroke-width: 2; fill: var(--global-theme-color); fill-opacity: 0.2; }
  .qp-fig .qp-sugg { stroke: var(--global-theme-color); stroke-width: 1.2; fill: none; }
  .qp-fig .qp-skin { stroke: var(--global-text-color-light); stroke-width: 1.5; fill: none; }
  .qp-fig .qp-guide { stroke: var(--global-text-color-light); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.8; }
  .qp-fig .qp-frame { stroke: var(--global-text-color-light); stroke-width: 1; fill: none; opacity: 0.6; }
  .qp-fig .t-thumb { fill: #2e9e6a; }
  .qp-fig .t-tape { fill: #8e6fd1; }
  .qp-fig .t-arc { fill: #e07b39; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Taejun Kim<sup>1,3</sup>, Amy Karlson<sup>1</sup>, Aakar Gupta<sup>1</sup>, Tovi Grossman<sup>2</sup>, Jason Wu<sup>1,4</sup>, Parastoo Abtahi<sup>1</sup>, Christopher Collins<sup>1</sup>, Michael Glueck<sup>1</sup>, Hemant Bhaskar Surale<sup>1</sup><br>
<sup>1</sup>Reality Labs Research, Meta &nbsp;&middot;&nbsp; <sup>2</sup>University of Toronto &nbsp;&middot;&nbsp; <sup>3</sup>KAIST &nbsp;&middot;&nbsp; <sup>4</sup>Carnegie Mellon University<br>
<em>Conference paper · UIST '23: ACM Symposium on User Interface Software and Technology, San Francisco, CA, USA</em>
<div class="qp-links">
<a href="https://arxiv.org/pdf/2511.21143" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3586183.3606803" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#kim2023star" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/smartphone-typing-without-the-smartphone/fig1-teaser.png" class="img-fluid rounded z-depth-1" alt="Line drawings: on the left, a person types on a physical smartphone with both thumbs; on the right, a person wearing AR glasses holds their hands as if gripping a phone and types with both thumbs on a virtual keyboard overlaid on their fingers." %}
<div class="caption">(a) Two-thumb typing on a physical smartphone. (b) STAR: the same two-thumb typing on a virtual keyboard overlaid on your hands in AR. Figure from the paper.</div>

## Quick facts

Led by Taejun Kim as a research intern at Reality Labs Research, Meta. STAR lets you type in AR the way you type on a phone: hold your hands as if gripping one, and tap with both thumbs on a virtual keyboard overlaid on the sides of your index fingers. Overall, our work contributes:

1. **STAR**, an on-skin, smartphone-analogous AR text entry technique that reuses the two-thumb typing skills people already have from their phones.
2. **An exploration of skill transfer** from smartphone typing to AR. An elicitation study with 29 participants found three hand postures for typing on an imaginary phone, and we then tested these postures and other design parameters to keep the skill transferable.
3. **An analysis of the gap** between STAR and smartphone typing, which shows that better hand tracking and thumb tap sensing could bring STAR closer to phone typing speeds.

## Abstract

While text entry is an essential and frequent task in Augmented Reality (AR) applications, devising an efficient and easy-to-use text entry method for AR remains an open challenge. This research presents STAR, a smartphone-analogous AR text entry technique that leverages a user's familiarity with smartphone two-thumb typing. With STAR, a user performs thumb typing on a virtual QWERTY keyboard that is overlain on the skin of their hands. During an evaluation study of STAR, participants achieved a mean typing speed of 21.9 WPM (i.e., 56% of their smartphone typing speed), and a mean error rate of 0.3% after 30 minutes of practice. We further analyze the major factors implicated in the performance gap between STAR and smartphone typing, and discuss ways this gap could be narrowed.

## The idea: keep the skill, drop the phone

Two-thumb typing on a phone is a fast skill most people already have. Bare-hand text entry in AR usually asks for something new instead (mid-air typing, eye typing, tapping on a fingertip), and mid-air keyboards give you nothing to press against. STAR keeps what transfers from the phone: the grip, the QWERTY layout, the thumb movements, and a physical surface under the thumbs. Your own skin takes the place of the touchscreen.

<div class="qp-fig">
<svg viewBox="0 0 440 335" role="img" aria-label="Side view of one STAR keystroke. The thumb is drawn as three tracked joints above a row of keys, g, h, j, k, l, overlaid on the side of the index finger. The thumb tip hovers straight above k, but an orange projection arc curves down to j, the highlighted key where the curved tap will land. A ring of capacitive tape on the thumb tip detects the touch, and the key with the closest center registers.">
  <text class="qp-small qp-muted" x="20" y="26">side view of one tap</text>
  <text class="qp-small t-thumb" x="40" y="70">tracked thumb: all three joints drawn</text>
  <polyline class="qp-thumb" points="56,170 150,104 284,114"/>
  <circle class="qp-joint" cx="56" cy="170" r="6"/>
  <circle class="qp-joint" cx="150" cy="104" r="6"/>
  <circle class="qp-joint" cx="284" cy="114" r="6"/>
  <circle class="qp-tape" cx="284" cy="114" r="11"/>
  <text class="qp-small t-tape" x="304" y="98">capacitive tape</text>
  <text class="qp-small t-tape" x="304" y="114">on the thumb tip</text>
  <text class="qp-small t-tape" x="304" y="130">detects the touch</text>
  <line class="qp-guide" x1="284" y1="129" x2="284" y2="218"/>
  <text class="qp-small qp-muted" x="296" y="180">straight below</text>
  <text class="qp-small qp-muted" x="296" y="196">the tip: k</text>
  <path class="qp-arc" d="M284,127 C284,178 252,208 222,219"/>
  <circle class="t-arc" cx="220" cy="220" r="3.5"/>
  <text class="qp-small t-arc" x="208" y="184" text-anchor="end">projection arc: where</text>
  <text class="qp-small t-arc" x="208" y="200" text-anchor="end">the curved tap lands</text>
  <rect class="qp-key" x="68" y="222" width="48" height="20" rx="3"/>
  <rect class="qp-key" x="132" y="222" width="48" height="20" rx="3"/>
  <rect class="qp-key-hit" x="196" y="222" width="48" height="20" rx="3"/>
  <rect class="qp-key" x="260" y="222" width="48" height="20" rx="3"/>
  <rect class="qp-key" x="324" y="222" width="48" height="20" rx="3"/>
  <text class="qp-small" x="92" y="237" text-anchor="middle">g</text>
  <text class="qp-small" x="156" y="237" text-anchor="middle">h</text>
  <text class="qp-small" x="220" y="237" text-anchor="middle">j</text>
  <text class="qp-small" x="284" y="237" text-anchor="middle">k</text>
  <text class="qp-small" x="348" y="237" text-anchor="middle">l</text>
  <rect class="qp-skin" x="48" y="250" width="344" height="24" rx="12"/>
  <text class="qp-small qp-muted" x="220" y="298" text-anchor="middle">side of the index finger, under the keys</text>
  <text class="qp-small" x="220" y="320" text-anchor="middle">a tap registers the key with the closest center</text>
</svg>
<svg class="qp-plane" viewBox="0 0 280 335" role="img" aria-label="Front view of the Enlarged STAR keyboard: a text field reading I am almost ther, two word suggestions, there and three, three rows of keys, and a space bar. Both thumbs, drawn as three joints each, hover over the highlighted keys e and i.">
  <text class="qp-small qp-muted" x="20" y="26">front view</text>
  <rect class="qp-frame" x="20" y="36" width="240" height="212" rx="10"/>
  <rect class="qp-key" x="36" y="50" width="208" height="22" rx="4"/>
  <text class="qp-small" x="44" y="66">I am almost ther|</text>
  <rect class="qp-sugg" x="36" y="80" width="100" height="20" rx="3"/>
  <text class="qp-small" x="86" y="94" text-anchor="middle">there</text>
  <rect class="qp-sugg" x="144" y="80" width="100" height="20" rx="3"/>
  <text class="qp-small" x="194" y="94" text-anchor="middle">three</text>
  <rect class="qp-key" x="36" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="57.3" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key-hit" x="78.7" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="100" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="121.3" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="142.7" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="164" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key-hit" x="185.3" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="206.7" y="110" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="228" y="110" width="16" height="20" rx="2"/>
  <text class="qp-small" x="44" y="124" text-anchor="middle">q</text>
  <text class="qp-small" x="65.3" y="124" text-anchor="middle">w</text>
  <text class="qp-small" x="86.7" y="124" text-anchor="middle">e</text>
  <text class="qp-small" x="108" y="124" text-anchor="middle">r</text>
  <text class="qp-small" x="129.3" y="124" text-anchor="middle">t</text>
  <text class="qp-small" x="150.7" y="124" text-anchor="middle">y</text>
  <text class="qp-small" x="172" y="124" text-anchor="middle">u</text>
  <text class="qp-small" x="193.3" y="124" text-anchor="middle">i</text>
  <text class="qp-small" x="214.7" y="124" text-anchor="middle">o</text>
  <text class="qp-small" x="236" y="124" text-anchor="middle">p</text>
  <rect class="qp-key" x="46.7" y="136" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="68" y="136" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="89.3" y="136" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="110.7" y="136" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="132" y="136" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="153.3" y="136" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="174.7" y="136" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="196" y="136" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="217.3" y="136" width="16" height="20" rx="2"/>
  <text class="qp-small" x="54.7" y="150" text-anchor="middle">a</text>
  <text class="qp-small" x="76" y="150" text-anchor="middle">s</text>
  <text class="qp-small" x="97.3" y="150" text-anchor="middle">d</text>
  <text class="qp-small" x="118.7" y="150" text-anchor="middle">f</text>
  <text class="qp-small" x="140" y="150" text-anchor="middle">g</text>
  <text class="qp-small" x="161.3" y="150" text-anchor="middle">h</text>
  <text class="qp-small" x="182.7" y="150" text-anchor="middle">j</text>
  <text class="qp-small" x="204" y="150" text-anchor="middle">k</text>
  <text class="qp-small" x="225.3" y="150" text-anchor="middle">l</text>
  <rect class="qp-key" x="68" y="162" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="89.3" y="162" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="110.7" y="162" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="132" y="162" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="153.3" y="162" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="174.7" y="162" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="196" y="162" width="16" height="20" rx="2"/>
  <rect class="qp-key" x="217.3" y="162" width="26.7" height="20" rx="2"/>
  <text class="qp-small" x="76" y="176" text-anchor="middle">z</text>
  <text class="qp-small" x="97.3" y="176" text-anchor="middle">x</text>
  <text class="qp-small" x="118.7" y="176" text-anchor="middle">c</text>
  <text class="qp-small" x="140" y="176" text-anchor="middle">v</text>
  <text class="qp-small" x="161.3" y="176" text-anchor="middle">b</text>
  <text class="qp-small" x="182.7" y="176" text-anchor="middle">n</text>
  <text class="qp-small" x="204" y="176" text-anchor="middle">m</text>
  <text class="qp-small" x="230.7" y="176" text-anchor="middle">&#8592;</text>
  <rect class="qp-key" x="90" y="188" width="100" height="18" rx="2"/>
  <polyline class="qp-thumb" points="44,238 60,180 86.7,128"/>
  <circle class="qp-joint" cx="44" cy="238" r="4.5"/>
  <circle class="qp-joint" cx="60" cy="180" r="4.5"/>
  <circle class="qp-joint" cx="86.7" cy="128" r="3.5"/>
  <polyline class="qp-thumb" points="236,238 220,180 193.3,128"/>
  <circle class="qp-joint" cx="236" cy="238" r="4.5"/>
  <circle class="qp-joint" cx="220" cy="180" r="4.5"/>
  <circle class="qp-joint" cx="193.3" cy="128" r="3.5"/>
  <text class="qp-small" x="20" y="270">6 mm keys with 2 mm gaps</text>
  <text class="qp-small" x="20" y="288">two word suggestions on top</text>
  <text class="qp-small" x="20" y="306">opens with the knuckle posture,</text>
  <text class="qp-small" x="20" y="324">stays put, closes on release</text>
</svg>
</div>
<div class="caption">One tap, seen from the side. The headset tracks all three thumb joints, and the projection arc shows where the curving thumb will land, which is not always the key straight below the tip. Capacitive tape on the thumb tip detects the touch, and the key with the closest center registers. The front view shows the Enlarged keyboard with its two word suggestions.</div>

How a typing session works:

- **Open and close.** Making the "knuckle posture" opens the keyboard over your hands, and releasing it closes the keyboard. The hand contact makes the mode switch explicit and prevents false activations.
- **See your thumbs.** STAR draws all three tracked thumb joints and a projection arc from the thumb tip to the keyboard, and highlights the key at the end of the arc. With only the thumb tip shown, people often hit the key next to the one they aimed at, because the thumb tip moves in an arc rather than straight down.
- **Feel the tap.** Each tap lands on your own skin, so there is real haptic feedback.
- **Finish words.** A decoder combines where each tap landed (a bivariate Gaussian around each key) with word frequencies and offers the two most likely words above the keyboard.

## Designing STAR

**Elicitation.** Over video calls, 29 people (19 women, 10 men, mean age 38) typed "The quick brown fox jumps over the lazy dog" on an imaginary phone in their hands. 27 of them used both thumbs, and 26 of those 27 kept their hands in contact. Three postures emerged: the Nested Finger Surface (n = 20), the Index Finger Surface (n = 6), and the Single Palm Surface (n = 2).

**Typing surface.** In a HoloLens 2 prototype, the Nested Finger Surface was uneven, because one hand sits behind the other, and taps were unstable. The flatter Index Finger Surface gave more consistent presses, so we chose it even though fewer participants had proposed it.

**Positioning.** A keyboard that followed the hands still shook with tracking jitter, even with a 1-euro filter, and with gaps of 1–2 mm between keys even a tiny shift caused errors. A Stationary keyboard, fixed where the knuckle posture was made, let people type more confidently.

**Size.** The phone's own layout (5.5 mm keys, 1 mm apart) was too small for about ±1 mm of tracking jitter. After trying 6, 7, and 8 mm keys with 2, 3, and 4 mm gaps, we chose an Enlarged keyboard with 6 mm keys and 2 mm gaps.

{% include figure.html path="assets/img/blog/smartphone-typing-without-the-smartphone/fig4-design-parameters.png" class="img-fluid rounded z-depth-1" alt="Three design parameters. (a) Typing surface: Nested Finger Surface and Index Finger Surface hand postures with the typing area highlighted. (b) Positioning: Hands-following and Stationary keyboards. (c) Size: the Original 64 mm wide smartphone layout with 5.5 mm keys and the Enlarged 78 mm wide layout with 6 mm keys." %}
<div class="caption">The three design parameters we explored: (a) typing surface, (b) keyboard positioning, and (c) keyboard size. The bold options (Index Finger Surface, Stationary, Enlarged) became STAR. Figure from the paper.</div>

## System

STAR runs as a Unity app on a Microsoft HoloLens 2 (52° diagonal field of view). Its hand tracking had a latency of about 90 ms and a jitter of about ±1 mm, which shaped choices such as the Stationary keyboard. Tracking alone could not tell exactly when a thumb touched the finger, so key presses and the felt touch were often out of sync. For the study, we put capacitive tape on each thumb tip, read by an Arduino and relayed through a PC to the headset over TCP: a tap started when the reading rose above 250 and ended when it fell below 200.

{% include figure.html path="assets/img/blog/smartphone-typing-without-the-smartphone/fig6-interaction-sequence.png" class="img-fluid rounded z-depth-1" alt="Photos of a user wearing a HoloLens 2 making a knuckle posture, a headset view of a virtual keyboard with word suggestions there and three over the user's thumbs, the user releasing the posture, and a close-up labeling the visualized thumb tip and projection arc." %}
<div class="caption">Using STAR: (a) make the knuckle posture, (b) type with both thumbs on the sides of the index fingers, and (c) release the posture to leave typing mode. (d) The visualized thumb tip and projection arc. Figure from the paper.</div>

## Experiment

**Conditions.** STAR, plus typing on a physical smartphone as a baseline. The goal was to see how close STAR could get to the phone, not to beat it, so the smartphone was tested once before and once after the STAR blocks. The two smartphone speeds did not differ significantly (39.9 vs. 39.0 WPM), so we averaged them into a 39.4 WPM baseline.

**Apparatus.** STAR on the HoloLens 2 with the thumb-tip capacitive tape, as described above. The smartphone baseline was a Galaxy A13 5G running an Android app with the Original keyboard layout.

**Task.** Participants sat on a chair without armrests, facing a plain wall, and transcribed phrases from the MacKenzie and Soukoreff phrase set. Each block had ten phrases: one smartphone block, five STAR blocks, then a final smartphone block, with breaks of at least two minutes. The whole session took about two hours.

**Participants.** Ten people from a university community (2 women, 8 men, mean age 25). Eight had no prior AR experience, two were left-handed, and two wore glasses.

**Measures.** Text entry speed in words per minute (WPM), uncorrected error rate (UER), corrected error rate (CER, which also counts backspaced errors), backspace count, inter-key interval (IKI), and key press duration (KPD), plus a post-study interview.

## What do we learn?

### 1. About 22 WPM after 30 minutes

Typing speed rose from 17.4 WPM in Block 1 to 21.9 WPM in Block 5 (F(4,36) = 10.996, p < .001). That is 56% of participants' smartphone speed of 39.4 WPM. In the last block, the fastest participant reached 25.0 WPM and the slowest 16.4 WPM.

{% include figure.html path="assets/img/blog/smartphone-typing-without-the-smartphone/fig8-speed-iki-kpd.png" class="img-fluid rounded z-depth-1" alt="Three line plots over STAR blocks 1 to 5 with a dashed smartphone baseline: text entry speed rises from 17.4 to 21.9 WPM against 39.4; inter-key interval falls from 805 to 585 ms against 315; key press duration stays between 148 and 132 ms against 84." %}
<div class="caption">Text entry speed, inter-key interval, and key press duration across the five STAR blocks, with the smartphone baseline as a dashed line. Error bars show standard deviation. Figure from the paper.</div>

### 2. Errors stayed at smartphone levels

Uncorrected errors averaged 0.2% with STAR and 0.5% with the smartphone (0.3% in STAR's last block). Corrected error rates (8.5% vs. 8.3%) and backspace use (3 vs. 2.6) were also similar, so people fixed mistakes about as often as on a phone. None of the error measures changed significantly across STAR blocks.

### 3. The gap is in the timing, and hand tracking is the main cause

In Block 5, the time between keys was 585 ms with STAR versus 315 ms on the phone, 1.9 times longer, which matches the speed ratio. Each press also lasted longer (139 ms vs. 84 ms). Half of the participants said they had to keep checking the visualized thumb to avoid mistakes. P6 put it this way: "the [visualized] thumb couldn't follow my speed when I moved my finger quickly from one key to another". We suspect people waited for the lagging thumb marker to confirm that the right key had been pressed.

{% include figure.html path="assets/img/blog/smartphone-typing-without-the-smartphone/fig5-tracking-latency-jitter.png" class="img-fluid rounded z-depth-1" alt="Two plots of HoloLens 2 thumb tracking. Left: measured and tracked position over 1.2 seconds of a 200 mm movement, with the tracked curve lagging behind. Right: tracked position on the X, Y, and Z axes over 5 seconds of holding still, jittering within about plus or minus 1 mm." %}
<div class="caption">HoloLens 2 thumb tracking: (a) the tracked position lags the measured position during a roughly 200 mm movement, and (b) it jitters while the hand is held still. Figure from the paper.</div>

The fixed keyboard also played a role. On a phone, the keys move with your hands, so muscle memory works. With the Stationary keyboard, people had to keep their hands aligned with it, and three participants asked for a keyboard that follows the hands: the design we had dropped because tracking was too unstable. We expect STAR to get closer to phone speeds as headset tracking improves, or with extra sensing that leaves the thumbs free, such as rings, smartwatches, or bracelets.

## Limitations

STAR was not fully bare-hand in our study: capacitive tape on the thumb tips sensed the taps. A real deployment needs robust hand tracking and tap sensing, which is hard from the headset alone because parts of the hand can be hidden from its cameras. We tested only in a lab, seated, in front of a plain wall, so typing while standing, walking, lying down, or doing something else is untested. Because we used the headset's own tracking rather than motion capture, STAR's performance with ideal tracking is still unknown; varying latency and jitter systematically could show how much precision smartphone-level typing needs. We studied two-thumb typing with one standard keyboard size, so one-handed STAR (for example, with gesture typing) and keyboards sized to each person's hands remain open.

## Publication

Taejun Kim, Amy Karlson, Aakar Gupta, Tovi Grossman, Jason Wu, Parastoo Abtahi, Christopher Collins, Michael Glueck, and Hemant Bhaskar Surale. 2023. STAR: Smartphone-analogous Typing in Augmented Reality. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology (UIST '23)*, San Francisco, CA, USA. ACM, 13 pages. [https://doi.org/10.1145/3586183.3606803](https://doi.org/10.1145/3586183.3606803)

### BibTeX

```bibtex
@inproceedings{kim2023star,
  title     = {STAR: Smartphone-analogous Typing in Augmented Reality},
  author    = {Kim, Taejun and Karlson, Amy and Gupta, Aakar and Grossman, Tovi and Wu, Jason and Abtahi, Parastoo and Collins, Christopher and Glueck, Michael and Surale, Hemant Bhaskar},
  booktitle = {Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology},
  series    = {UIST '23},
  location  = {San Francisco, CA, USA},
  pages     = {1--13},
  year      = {2023},
  publisher = {ACM},
  doi       = {10.1145/3586183.3606803}
}
```

## Contact

Questions? Feel free to contact:

- **Taejun Kim**, Reality Labs Research, Meta: taejun.kim [at] kaist.ac.kr
- **Hemant Bhaskar Surale**, Reality Labs Research, Meta: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2023 the authors, publication rights licensed to ACM) and are reproduced here by the authors.</p>
