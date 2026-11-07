---
layout: post
title: What a tablet can do in VR
date: 2019-05-04 10:00:00-0400
description: A 3D-tracked multi-touch tablet plus bare-hand gestures in VR, an eleven-dimension design space, and a 3D modeling vocabulary built from it.
tags: vr tablet touch 3d-modeling
categories: papers
thumbnail: /assets/img/publication_preview/CHI19_tabletinvr.jpg
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
  .qp-fig .qp-tab { stroke: var(--global-text-color); stroke-width: 2; fill: none; stroke-linejoin: round; }
  .qp-fig .qp-cube { stroke: var(--global-text-color); stroke-width: 1.2; fill: none; }
  .qp-fig .qp-ray { stroke: #e07b39; stroke-width: 2; }
  .qp-fig .qp-dashed { stroke-dasharray: 5 4; }
  .qp-fig .qp-arrow { stroke: #e07b39; stroke-width: 2.5; }
  .qp-fig .qp-finger { stroke: #2e9e6a; stroke-width: 8; }
  .qp-fig .qp-palm { fill: #2e9e6a; }
  .qp-fig .qp-sep { stroke: var(--global-text-color-light); stroke-width: 1; opacity: 0.4; }
  .qp-fig .t-touch { fill: var(--global-theme-color); }
  .qp-fig .t-pose { fill: #e07b39; }
  .qp-fig .t-hand { fill: #2e9e6a; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Hemant Bhaskar Surale<sup>1</sup>, Aakar Gupta<sup>1</sup>, Mark Hancock<sup>2</sup>, Daniel Vogel<sup>1</sup><br>
<sup>1</sup>Cheriton School of Computer Science, University of Waterloo &nbsp;&middot;&nbsp; <sup>2</sup>University of Waterloo<br>
<em>Conference paper · CHI '19: ACM Conference on Human Factors in Computing Systems, Glasgow, Scotland, UK</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Tabletinvr.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3290605.3300243" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#surale2019tabletinvr" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/what-a-tablet-can-do-in-vr/fig2-selection.png" class="img-fluid rounded z-depth-1" alt="Three line drawings of selecting a virtual cube: (a) a ray from the back of a hand-held tablet points at a distant cube while a finger taps the screen; (b) the tablet's corner pierces a nearby cube while the other hand pinches; (c) a hand taps the face of a large cube." %}
<div class="caption">Three ways to select an object: (a) point the ray from the back of the tablet and tap the screen, (b) pierce the object with the tablet's corner and pinch, or (c) tap the object's face with your hand. Figure from the paper.</div>

## Quick facts

A multi-touch tablet is precise, tactile, and familiar. Track it in 3D and it also becomes a pointer, a viewport, and a knife. We mapped out how a tracked tablet and bare-hand gestures can work together in VR, and built a 3D modeling vocabulary to test the idea. Overall, our work contributes:

1. **A formative study** in which 10 participants acted out 3D modeling tasks with a tablet, giving seven observations about how people expect a tablet to work in VR.
2. **A design space** of eleven dimensions for using a multi-touch tablet in VR, such as physical vs. non-physical, direct vs. indirect, and discrete vs. continuous.
3. **An example interaction vocabulary** for 3D solid modeling (for example, two-finger drag to translate an object, five-finger drag to navigate, and swipe-in to delete), implemented in a proof-of-concept system.
4. **A user evaluation** in which 6 participants replicated a target model and built their own, validating the approach.

## Abstract

Complex virtual reality (VR) tasks, like 3D solid modelling, are challenging with standard input controllers. We propose exploiting the affordances and input capabilities when using a 3D-tracked multi-touch tablet in an immersive VR environment. Observations gained during semi-structured interviews with general users, and those experienced with 3D software, are used to define a set of design dimensions and guidelines. These are used to develop a vocabulary of interaction techniques to demonstrate how a tablet's precise touch input capability, physical shape, metaphorical associations, and natural compatibility with barehand mid-air input can be used in VR. For example, transforming objects with touch input, "cutting" objects by using the tablet as a physical "knife", navigating in 3D by using the tablet as a viewport, and triggering commands by interleaving bare-hand input around the tablet. Key aspects of the vocabulary are evaluated with users, with results validating the approach.

## The idea: one tablet, three kinds of input

VR input is hard to make precise: there is little tactile feedback, and mid-air drawing is inaccurate. A tablet's touchscreen is precise and gives you a surface to press on. Once the tablet is tracked in 3D and rendered in VR, its position and orientation become input too, and the hands holding it can still gesture in mid-air. We combine all three.

<div class="qp-fig">
<svg viewBox="0 0 440 335" role="img" aria-label="Three input channels in TabletInVR. Touch on the screen: tap to create or select where the ray points, two fingers to rotate, scale, translate, or extrude, five fingers to navigate, and a keyboard to annotate. Tablet pose tracked in 3D: a ray from the back and a viewport on the screen, a corner that pierces objects, a plane that slices them, and an orientation that picks the axis or face. Bare hands in mid-air: pinch to create or trigger a slice, swipe in over the screen to delete, and a knuckle posture to select several objects.">
  <rect class="qp-tab" x="20" y="44" width="64" height="46" rx="6"/>
  <circle class="t-touch" cx="44" cy="64" r="4.5"/>
  <circle class="t-touch" cx="60" cy="72" r="4.5"/>
  <text class="qp-bold t-touch" x="104" y="48">Touch on the screen</text>
  <text class="qp-small" x="104" y="68">tap: create or select where the ray points</text>
  <text class="qp-small" x="104" y="86">two fingers: rotate, scale, translate, extrude</text>
  <text class="qp-small" x="104" y="104">five fingers: navigate; keyboard: annotate</text>
  <line class="qp-sep" x1="12" y1="122" x2="428" y2="122"/>
  <polygon class="qp-tab" points="20,196 52,160 80,174 48,210"/>
  <line class="qp-ray qp-dashed" x1="50" y1="185" x2="82" y2="148"/>
  <rect class="qp-cube" x="80" y="134" width="12" height="12"/>
  <circle class="t-pose" cx="52" cy="160" r="3.5"/>
  <text class="qp-bold t-pose" x="104" y="148">Tablet pose, tracked in 3D</text>
  <text class="qp-small" x="104" y="168">ray from the back, viewport on the screen</text>
  <text class="qp-small" x="104" y="186">corner pierces objects, the plane slices them</text>
  <text class="qp-small" x="104" y="204">orientation picks the axis or the face</text>
  <line class="qp-sep" x1="12" y1="222" x2="428" y2="222"/>
  <line class="qp-finger" x1="34" y1="276" x2="34" y2="256"/>
  <line class="qp-finger" x1="44" y1="274" x2="44" y2="248"/>
  <line class="qp-finger" x1="54" y1="274" x2="54" y2="250"/>
  <line class="qp-finger" x1="63" y1="278" x2="63" y2="260"/>
  <line class="qp-finger" x1="30" y1="296" x2="17" y2="280"/>
  <rect class="qp-palm" x="27" y="272" width="41" height="36" rx="10"/>
  <text class="qp-bold t-hand" x="104" y="248">Bare hands in mid-air</text>
  <text class="qp-small" x="104" y="268">pinch: create in mid-air, trigger a slice</text>
  <text class="qp-small" x="104" y="286">swipe in over the screen: delete</text>
  <text class="qp-small" x="104" y="304">knuckle posture: select several objects</text>
  <text class="qp-small qp-muted" x="220" y="328" text-anchor="middle">each interaction combines one or more of these</text>
</svg>
<svg class="qp-plane" viewBox="0 0 280 335" role="img" aria-label="Tablet orientation picks the transform axis. A tablet facing up selects the x-axis, a tablet held portrait and vertical selects the y-axis, and a tablet held landscape selects the z-axis. A two-finger touch then rotates, scales, or moves the object along that axis.">
  <text class="qp-small qp-muted" x="20" y="26">orientation picks the axis</text>
  <polygon class="qp-tab" points="22,92 78,70 128,90 72,112"/>
  <circle class="t-touch" cx="66" cy="88" r="4"/>
  <circle class="t-touch" cx="84" cy="94" r="4"/>
  <text class="qp-small" x="148" y="84">facing up</text>
  <line class="qp-arrow" x1="150" y1="100" x2="182" y2="100"/>
  <polyline class="qp-arrow" points="176,95 182,100 176,105"/>
  <text class="qp-small t-pose" x="190" y="104">x-axis</text>
  <rect class="qp-tab" x="54" y="132" width="44" height="70" rx="6"/>
  <circle class="t-touch" cx="70" cy="160" r="4"/>
  <circle class="t-touch" cx="82" cy="172" r="4"/>
  <text class="qp-small" x="148" y="156">portrait, vertical</text>
  <line class="qp-arrow" x1="158" y1="196" x2="158" y2="170"/>
  <polyline class="qp-arrow" points="153,176 158,170 163,176"/>
  <text class="qp-small t-pose" x="170" y="190">y-axis</text>
  <rect class="qp-tab" x="42" y="226" width="68" height="44" rx="6"/>
  <circle class="t-touch" cx="68" cy="246" r="4"/>
  <circle class="t-touch" cx="84" cy="252" r="4"/>
  <text class="qp-small" x="148" y="244">landscape left</text>
  <line class="qp-arrow" x1="180" y1="256" x2="158" y2="276"/>
  <polyline class="qp-arrow" points="160.5,268.3 158,276 165.9,274.3"/>
  <text class="qp-small t-pose" x="188" y="276">z-axis</text>
  <text class="qp-small" x="20" y="306">two-finger touch then rotates, scales,</text>
  <text class="qp-small" x="20" y="324">or moves the object along it</text>
</svg>
</div>
<div class="caption">Each interaction draws on one or more of three channels: touch on the tablet screen, the tablet's tracked position and orientation, and bare-hand gestures around it. For transforms, the tablet's orientation fixes the axis and a two-finger touch on the screen does the precise part.</div>

Pairing the channels lets each do what it is good at. Coarse actions, like grabbing a nearby object, happen in mid-air, while fine control, like rotating it by a few degrees, happens on the touchscreen. Pointing at distant objects uses the tablet's ray instead of walking over to them.

## Formative study

**Participants.** Ten people (7 men, 3 women, ages 22–26), including architecture and mechanical engineering students experienced with software like Revit, Fusion360, SketchUp, and SolidWorks. Five had used VR before.

**Procedure.** Without a headset, each participant held a tablet that was switched off, with cardboard cubes placed around them, some within reach and some beyond. They acted out 3D modeling tasks (creating, selecting, transforming, modifying, and annotating objects) and explained their ideas while thinking aloud. We analyzed the notes with affinity diagramming.

**Observations.** Seven patterns shaped the design space:

1. **Coarse in mid-air, fine on the tablet.** "I'd grab an object and then use the tablet to rotate it." (P3)
2. **Reach for near objects, point at far ones.** Participants grabbed objects within arm's reach, but wanted to select distant ones from the tablet, for example through a bird's-eye view or a raycast.
3. **Tablet as interface.** Most tasks started with a tap on a menu button on the tablet.
4. **Tablet as tool.** A few participants used the tablet to define a slicing plane, or sliced through an object like a knife, a behavior borrowed from the game Fruit Ninja.
5. **Haptics for continuous control.** Mid-air gestures seemed suited to discrete actions, and touch to continuous manipulation, such as pinch-to-zoom on the tablet to scale an object.
6. **No occlusion.** Manipulating through the tablet keeps the hands from hiding the object: "[...] and my hands will not even occlude the object." (P1)
7. **Sitting.** All but one participant preferred to sit.

## Design space

From these observations and prior work, we defined eleven design dimensions. Each one is a question a designer answers when assigning roles to the tablet and the hands:

- **D1. Tablet vs. mid-air properties:** which tasks need high precision, tactile feedback, or a familiar UI (see the table below).
- **D2. Non-dominant vs. dominant hand:** which hand holds the tablet and which acts.
- **D3. Sit vs. stand:** which tasks suit which posture.
- **D4. Attention to device vs. scene:** where the user should be looking.
- **D5. Unimodal vs. multimodal:** touch only, or touch combined with tablet orientation or mid-air gestures.
- **D6. Unimanual vs. bimanual:** one hand or two.
- **D7. Environment reality vs. virtuality:** the tablet as a viewport into the virtual world, or a portal back to reality.
- **D8. Interleaved vs. simultaneous:** using touch and mid-air input one after the other, or together.
- **D9. Discrete vs. continuous input:** taps and gestures, or continuous manipulation.
- **D10. Direct vs. indirect:** acting on the object itself, or through the tablet.
- **D11. Physical vs. non-physical:** whether interactions follow real-world physics; for example, the tablet can pierce an object to select it.

| Property | Tablet touchscreen | Mid-air tablet | Mid-air hand |
|---|---|---|---|
| Precision | High | Low | Low |
| Input space | 2D (3DOF) | 3D (6DOF) | 3D (high DOF) |
| Tactile feedback | Yes | No | No |
| UI | Familiar (WIMP) | No (tilt) | No (gesture) |
| Midas touch | No | Yes | Yes |

<div class="caption">Properties of tablet and mid-air input in VR (dimension D1). Table from the paper.</div>

## System

**Hardware.** The prototype runs in Unity 5.6.1 with an HTC Vive headset (1080 × 1200 px per eye, 90 Hz, 110° field of view). A LEAP Motion sensor on the front of the headset tracks the hands. The tablet is a 9.7" Samsung Galaxy Tab S3 (429 g), tracked by an HTC Lighthouse tracker mounted on a light aluminum bar that extends about 4.5 cm beyond one corner, so the tablet can be held in portrait or landscape, in one or two hands, and flipped over. Touch events stream to the server over WiFi.

**Tablet viewport.** The tablet's screen shows a view of the 3D scene, and a ray extends from the center of its back. The viewport is hidden while you transform or slice an object, so you focus on the object itself.

**Vocabulary.** We built a set of interactions for 3D solid modeling, each tied to the observations and dimensions above:

- **Create.** Flip the tablet and pick an object from a list on its back. Then tap the screen to place it where the ray hits the floor grid, or pinch in mid-air to create it 50 cm in front of you. A swipe-in over the screen exits creation mode.
- **Select.** Use the ray and a tap for distant objects, pierce an object with the highlighted tablet corner and pinch, or tap an object's face. A knuckle posture adds objects to a multi-selection.
- **Delete.** Select an object and swipe in just over the tablet's surface.
- **Rotate, scale, and translate.** Orient the tablet to fix an axis and plane, then use two fingers on the screen. All three transforms can happen at once.
- **Slice and extrude.** Hold the tablet through an object and pinch to cut it along the tablet's plane. To extrude, orient the tablet to pick a face, then drag two fingers horizontally.

{% include figure.html path="assets/img/blog/what-a-tablet-can-do-in-vr/fig4-delete-scale-translate.png" class="img-fluid rounded z-depth-1" alt="Three line drawings: (a) a hand swipes in over the surface of a tablet to delete an object; (b) a two-finger pinch on the tablet scales a cube; (c) a two-finger drag on the tablet translates an object." %}
<div class="caption">(a) Swipe in over the tablet to delete, (b) scale with two fingers, and (c) translate with a two-finger drag. Figure from the paper.</div>

- **Annotate.** Place a text object like any other object; when it is selected, a keyboard appears on the tablet.
- **Navigate.** Put five fingers on the screen. The world fades to black except for the tablet's viewport, which makes motion sickness less likely. Rotate your wrist to turn, drag to move along the tablet's plane, and use a five-finger zoom gesture to move forward or back in the direction the tablet points. Lifting your fingers fades the world back in over 3 seconds.
- **Help and system menu.** Hold the tablet up to your chin with both hands and speak to ask for help, or hold it in your dominant hand to open a system menu.

{% include figure.html path="assets/img/blog/what-a-tablet-can-do-in-vr/fig6-slice-navigate-help.png" class="img-fluid rounded z-depth-1" alt="Three line drawings: (a) one hand holds the tablet through a cube while the other hand pinches to slice it; (b) five fingertips touch the tablet to navigate; (c) a person holds the tablet with both hands just under their chin and speaks into it." %}
<div class="caption">(a) Slice an object with the tablet, (b) touch with five fingers to navigate, and (c) speak to the tablet to ask for help. Figure from the paper.</div>

## User evaluation

**Participants.** Six people (all men, ages 19–34), experienced with Fusion360, SolidWorks, or other 3D modeling tools.

**Procedure.** About 90 minutes in three parts. In training (20–30 minutes), the experimenter demonstrated five main features (create and delete, select and deselect, transform, navigate, and modify), and participants practiced until confident. In the replication task (20–30 minutes), they rebuilt a target model by creating and extruding a cube, adding four spheres of decreasing size, a rotated cylinder, two scaled-down and rotated brick blocks, and a fence of grass blocks. In freeform exploration (20–30 minutes), they built whatever they liked.

**Measures.** A post-experiment questionnaire about each feature, plus observations and comments.

## What do we learn?

### 1. Everyone rebuilt the target model in time

All six participants replicated the target model within the time limit. In freeform exploration, they built a chair, an android, a tree, houses, and a glass table. None reported discomfort, and all but one preferred to sit throughout. P5 noted, "Most of the features, gestures were very intuitive and easy to follow".

{% include figure.html path="assets/img/blog/what-a-tablet-can-do-in-vr/fig7-models.png" class="img-fluid rounded z-depth-1" alt="Top row: a target model of a white box with spheres and a cylinder inside a green U-shaped fence, followed by six similar participant replications. Bottom row: freeform creations including a chair, a brick house with trees, an android made of cylinders and spheres, and a glass table." %}
<div class="caption">(a) The target model, (b–g) the six participants' replications, and (h–k) examples of freeform creations. Figure from the paper.</div>

### 2. Creating, deleting, selecting, and extruding felt natural

Creation, deletion, and shape modification were intuitive. Most participants learned selection quickly, although a few preferred the raycast to the corner pointer, which P1 found "weird". All six found orienting the tablet to pick a face for extrusion useful. One participant (P2) sometimes created objects by accident while gripping the tablet.

### 3. Doing several things at once was harder

Multi-selection with the knuckle posture was hard for four of the six participants, who found rotating the wrist tiresome. Transforms were easy overall, but because the distance between the two fingers set the object's scale, keeping it constant while rotating was difficult. Navigation was hard for all but one participant, and P1 felt its directions were backwards. Four participants struggled with the menu on the back of the tablet, mainly because of flipping it over.

### 4. The design space suggests the fixes

The same dimensions point to alternatives. For accidental touches, ignore touches near the grip or move the trigger to a mid-air pinch (D1), and discard non-dominant-hand touches near the tablet (D2). For multi-selection, let a non-dominant-hand touch switch between single and multiple selection (D6). For navigation, separate the degrees of freedom, or tap a point on a map on the tablet to teleport there (D4, D9). For the menu, move it to the front of the tablet, where touch is precise and does not depend on 3D tracking (D4, D6).

## Limitations

The prototype's tracking set some limits. LEAP hand tracking was not robust to infrared reflections near the tablet, so we avoided in-air gestures close to it and used touch instead. The tablet's tracker sometimes glitched (though this did not hinder usability), and interacting through 3D tablet tracking, as with the back-of-tablet menu, was far less reliable than touch on the front. We implemented only a small subset of possible interactions, for one application (3D solid modeling), and a comparison of a more mature TabletInVR system against standard controllers is still needed.

## Publication

Hemant Bhaskar Surale, Aakar Gupta, Mark Hancock, and Daniel Vogel. 2019. TabletInVR: Exploring the Design Space for Using a Multi-Touch Tablet in Virtual Reality. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI '19)*, Glasgow, Scotland, UK. ACM, 13 pages. [https://doi.org/10.1145/3290605.3300243](https://doi.org/10.1145/3290605.3300243)

### BibTeX

```bibtex
@inproceedings{surale2019tabletinvr,
  title     = {TabletInVR: Exploring the Design Space for Using a Multi-Touch Tablet in Virtual Reality},
  author    = {Surale, Hemant Bhaskar and Gupta, Aakar and Hancock, Mark and Vogel, Daniel},
  booktitle = {Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems},
  series    = {CHI '19},
  location  = {Glasgow, Scotland, UK},
  pages     = {1--13},
  year      = {2019},
  publisher = {ACM},
  doi       = {10.1145/3290605.3300243}
}
```

## Contact

Questions? Feel free to contact:

- **Hemant Bhaskar Surale**, Cheriton School of Computer Science, University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2019 ACM) and are reproduced here by the authors.</p>
