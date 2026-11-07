---
layout: post
title: Dropping in on a friend's smartglasses
date: 2022-03-13 10:00:00-0400
description: ARcall lets a friend on a phone see a smartglasses wearer's view, send AR content into their world, and talk, in short sessions the wearer controls.
tags: ar smartglasses communication
categories: papers
thumbnail: /assets/img/publication_preview/AH23.jpeg
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
  .qp-fig .qp-wearer { stroke: #2e9e6a; stroke-width: 2.5; fill: none; }
  .qp-fig .qp-friend { stroke: var(--global-theme-color); stroke-width: 2.5; fill: none; }
  .qp-fig .t-wearer { fill: #2e9e6a; }
  .qp-fig .t-friend { fill: var(--global-theme-color); }
  .qp-fig .qp-video { stroke: #2e9e6a; stroke-width: 2.5; }
  .qp-fig .qp-ar { stroke: #8e6fd1; stroke-width: 2.5; }
  .qp-fig .qp-voice { stroke: #e07b39; stroke-width: 2.5; }
  .qp-fig .h-video { fill: #2e9e6a; stroke: none; }
  .qp-fig .h-ar { fill: #8e6fd1; stroke: none; }
  .qp-fig .h-voice { fill: #e07b39; stroke: none; }
  .qp-fig .t-video { fill: #2e9e6a; }
  .qp-fig .t-ar { fill: #8e6fd1; }
  .qp-fig .t-voice { fill: #e07b39; }
  .qp-fig .qp-session { fill: var(--global-text-color-light); opacity: 0.3; }
  .qp-fig .qp-dropin { fill: #2e9e6a; }
  .qp-fig .qp-extend { fill: #e07b39; }
  .qp-fig .t-extend { fill: #e07b39; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Hemant Bhaskar Surale<sup>1,2</sup>, Yu Jiang Tham<sup>2</sup>, Brian A. Smith<sup>2,3,*</sup>, Rajan Vaish<sup>2,*</sup><br>
<sup>1</sup>University of Waterloo, Canada &nbsp;&middot;&nbsp; <sup>2</sup>Snap Inc., USA &nbsp;&middot;&nbsp; <sup>3</sup>Columbia University, USA &nbsp;&middot;&nbsp; <sup>*</sup>Co-principal investigators<br>
<em>Conference paper · AHs '22: Augmented Humans 2022, Kashiwa, Chiba, Japan</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Arcall.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF (preprint)</a>
<a href="https://doi.org/10.1145/3519391.3519398" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="https://arxiv.org/abs/2203.04358" class="btn btn-sm z-depth-0" role="button">arXiv</a>
<a href="{{ '/publications/' | relative_url }}#surale2022arcall" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/dropping-in-on-a-friends-smartglasses/fig1-teaser.png" class="img-fluid rounded z-depth-1" alt="Five illustrated panels. A friend holds a phone showing a mountain trail seen through a smartglasses wearer's eyes, taps a rainbow in a carousel, and the rainbow appears over the trail in the wearer's view. The friend laughs 'HAHA!!' and the wearer says 'WOAH!!!'." %}
<div class="caption">ARcall's three components. Drop-In: (a) the Friend sees the Wearer's view on a smartphone. ARaction: (b) the Friend picks an AR rainbow, and (c) the Wearer sees it augmenting their reality. Micro-Chat: (d) the Friend laughs after sending it, and (e) the Wearer reacts, while the Friend stays dropped in. Figure from the paper.</div>

## Quick facts

Today, sharing AR with a friend often means sending a pre-recorded video with effects on top, without knowing where they are. ARcall instead connects a friend on a smartphone with a smartglasses wearer in real time: the friend sees the wearer's view, places AR content directly into it, and the two talk, in short sessions that respect the glasses' battery and the wearer's privacy. Overall, our work contributes:

1. **An understanding of user behaviour and affordances** created by this AR-based, real-time communication method, with a design that takes into account the practical limits of modern smartglasses.
2. **A qualitative evaluation** of ARcall's key components with 14 participants, showing the importance of context priming through Drop-In, engagement through ARaction, and meaningful conversation through Micro-Chat.

## Abstract

Augmented Reality (AR) smartglasses are increasingly regarded as the next generation personal computing platform. However, there is a lack of understanding about how to design communication systems using them. We present ARcall, a novel Augmented Reality-based real-time communication system that enables an immersive, delightful, and privacy-preserving experience between a smartphone user and a smartglasses wearer. ARcall allows a remote friend (Friend) to send and project AR content to a smartglasses wearer (Wearer). The ARcall system was designed with the practical limits of existing AR glasses in mind, including shorter battery life and a reduced field of view. We conduct a qualitative evaluation of the three main components of ARcall: Drop-In, ARaction, and Micro-Chat. Our results provide novel insights for building future AR-based communication methods, including, the importance of context priming, user control over AR content placement, and the feeling of co-presence while conversing.

## The idea: drop in, augment, talk

The Wearer starts an ARcall session and invites one Friend. During that session the Friend can drop in at any time, see what the Wearer sees, send AR content into the Wearer's glasses, and talk. Each drop-in is short to save the glasses' battery, and only the Wearer can extend it.

<div class="qp-fig">
<svg viewBox="0 70 440 225" role="img" aria-label="Smartglasses for the Wearer on one side and a smartphone for the Friend on the other. Three arrows connect them: the live view goes from glasses to phone (Drop-In), AR content goes from phone to glasses (ARaction), and voice goes both ways (Micro-Chat). Under the glasses: invites one Friend, sets blur 0 to 10, taps temple for 30 more seconds. Under the phone: drops in any time, picks from 10 AR items, can mute the mic.">
  <text class="qp-bold t-wearer" x="90" y="118" text-anchor="middle">Wearer</text>
  <rect class="qp-wearer" x="38" y="134" width="44" height="32" rx="10"/>
  <rect class="qp-wearer" x="98" y="134" width="44" height="32" rx="10"/>
  <path class="qp-wearer" d="M82,142 Q90,135 98,142"/>
  <path class="qp-wearer" d="M38,140 L26,134"/>
  <path class="qp-wearer" d="M142,140 L154,134"/>
  <text class="qp-small qp-muted" x="90" y="188" text-anchor="middle">smartglasses</text>
  <text class="qp-bold t-friend" x="356" y="88" text-anchor="middle">Friend</text>
  <rect class="qp-friend" x="330" y="100" width="52" height="96" rx="8"/>
  <line class="qp-friend" x1="348" y1="186" x2="364" y2="186"/>
  <text class="qp-small qp-muted" x="356" y="214" text-anchor="middle">smartphone</text>
  <text class="qp-small t-video" x="243" y="108" text-anchor="middle">Drop-In: live view</text>
  <line class="qp-video" x1="168" y1="118" x2="310" y2="118"/>
  <path class="h-video" d="M308,112 L318,118 L308,124 Z"/>
  <text class="qp-small t-ar" x="243" y="142" text-anchor="middle">ARaction: AR content</text>
  <line class="qp-ar" x1="176" y1="152" x2="318" y2="152"/>
  <path class="h-ar" d="M178,146 L168,152 L178,158 Z"/>
  <text class="qp-small t-voice" x="243" y="176" text-anchor="middle">Micro-Chat: voice</text>
  <line class="qp-voice" x1="176" y1="186" x2="310" y2="186"/>
  <path class="h-voice" d="M178,180 L168,186 L178,192 Z"/>
  <path class="h-voice" d="M308,180 L318,186 L308,192 Z"/>
  <text class="qp-small t-wearer" x="12" y="244">invites one Friend</text>
  <text class="qp-small t-wearer" x="12" y="262">sets blur 0 to 10</text>
  <text class="qp-small t-wearer" x="12" y="280">taps temple: +30 s</text>
  <text class="qp-small t-friend" x="428" y="244" text-anchor="end">drops in any time</text>
  <text class="qp-small t-friend" x="428" y="262" text-anchor="end">picks from 10 AR items</text>
  <text class="qp-small t-friend" x="428" y="280" text-anchor="end">can mute the mic</text>
</svg>
<svg class="qp-narrow" viewBox="0 0 280 300" role="img" aria-label="A vertical bar for one ARcall session, with time running downward. Short green segments inside it are drop-ins of 30 seconds to 1 minute. One drop-in has an orange extension of 30 seconds from a temple tap. The session lasts 5 minutes to 1 hour, then expires.">
  <text class="qp-bold" x="20" y="28">One ARcall session</text>
  <rect class="qp-session" x="24" y="44" width="14" height="232" rx="4"/>
  <rect class="qp-dropin" x="24" y="80" width="14" height="28" rx="2"/>
  <rect class="qp-dropin" x="24" y="148" width="14" height="28" rx="2"/>
  <rect class="qp-extend" x="24" y="176" width="14" height="16" rx="2"/>
  <rect class="qp-dropin" x="24" y="226" width="14" height="28" rx="2"/>
  <text class="qp-small qp-muted" x="50" y="56">Wearer starts it, Friend invited</text>
  <text x="50" y="92">Friend drops in</text>
  <text class="qp-small qp-muted" x="50" y="108">30 s to 1 min: view, AR, voice</text>
  <text x="50" y="160">Drops in again</text>
  <text class="qp-small t-extend" x="50" y="188">Wearer taps temple: +30 s</text>
  <text x="50" y="238">And again</text>
  <text class="qp-small qp-muted" x="50" y="254">as often as the Friend likes</text>
  <text class="qp-small qp-muted" x="20" y="294">session: 5 min to 1 h, then expires</text>
</svg>
</div>
<div class="caption">What flows between the two devices, and what each person controls. Time runs downward in the session view: an ARcall session holds any number of short drop-ins, and the Wearer can extend a drop-in in 30-second steps.</div>

Each component answers a practical problem with AR glasses. Drop-In lets the Friend check the Wearer's context before doing anything, the way a caller might ask "is this a good time?". ARaction augments the Wearer's world directly, instead of sending pre-recorded AR content or streaming the caller. Micro-Chat keeps voice short, because streaming video and audio drains smartglasses batteries quickly.

## System

**Design considerations.** We designed ARcall around five considerations: give the Wearer control and the Friend freedom (D1), respect the Wearer's privacy (D2), make AR content relevant and well placed (D3), accommodate the narrow field of view (D4), and handle power constraints (D5). For example, invitations are for a single Friend and expire automatically, the Wearer can blur their video feed, and AR content is restricted to virtual objects rather than whole-world reskins, since Wearers found partial augmentation more compelling.

{% include figure.html path="assets/img/blog/dropping-in-on-a-friends-smartglasses/fig3-system-diagram.png" class="img-fluid rounded z-depth-1" alt="System diagram with four parts: the Friend App on a smartphone, a web server with Sinch video call APIs and a Firebase database of friendships, call settings, and lens triggers, the Glass App showing rainbows on sunglasses, and the Wearer App with sliders for session duration, Drop-In duration, and blur level." %}
<div class="caption">ARcall's architecture: (a) the Friend App to drop in, send AR content, and talk; (b) a web server for video streaming, friendships, and call settings; (c) the Wearer App to configure and start sessions, and the Glass App that displays the AR content. Figure from the paper.</div>

**Drop-In.** In the Wearer App, the Wearer picks the Friend, a blur level from 0 (clear video) to 10 (fully blurred), the ARcall session length (5 minutes to an hour), and the Drop-In length. We tested how long the glasses could stream video before getting too hot, and limited each drop-in to between 30 seconds and one minute. The Friend gets an invitation and can drop in at any time by tapping it, which shows the Wearer's camera feed in the center of the phone.

**ARaction.** The Friend scrolls through a carousel of ten pieces of AR content and sends one with a tap. Animated 3D objects, such as a bird or a dragon, appear in the middle of the glasses' display and follow the Wearer's head. Particle effects, such as snow, cover the whole display. One piece is shown at a time, but the Friend can send as many as they like.

{% include figure.html path="assets/img/blog/dropping-in-on-a-friends-smartglasses/fig4-phoenix.png" class="img-fluid rounded z-depth-1" alt="Left: a phone shows the wearer's view of an apartment with a phoenix flying across it, a '23 s left' timer, and a carousel of AR items. Right: the same phoenix seen through smartglasses in front of a city building." %}
<div class="caption">The Friend selects an AR phoenix from the carousel in the Friend App, and it is immediately projected into the Wearer's view. Figure from the paper.</div>

**Micro-Chat.** A voice call starts as soon as the Friend drops in and lasts as long as the drop-in. The Glass App shows a countdown, and the Wearer can add 30 seconds at a time by pressing a button on the right temple of the glasses. The Friend can mute or unmute their microphone.

**Implementation.** We built ARcall on Snap's 4th generation AR Spectacles (2021). The Glass App is written in Java for Android, and the Wearer and Friend Apps in Swift for iOS (the Friend App renders AR with ARKit, SceneKit, and SpriteKit). Video calls use the Sinch API, settings are stored in Firebase, and end-to-end latency is around 100 ms.

## First-use study

**Participants.** 14 people (4 women, 10 men; 2 in their 20s and 12 in their 30s) took part in pairs of friends, for seven sessions in total. Six had used smartglasses before.

**Procedure.** After a 20-minute onboarding, the Wearer took a walk outside and invited the Friend, who stayed in a conference room, and the pair used ARcall for 10 to 15 minutes. Since the study ran during the holiday season, the AR content was holiday and fantasy themed. To see whether context shaped what Friends sent, we placed six visual artifacts along the Wearer's path, each subtly matching a piece of AR content (for example, a news poster with a dragon). Each session took about an hour.

**Measures.** App logs, a post-experience questionnaire with 7-point Likert items (1 = strongly disagree, 7 = strongly agree), and a semi-structured interview. Two researchers coded the responses and merged their findings into themes.

## What do we learn?

### 1. People kept dropping in and extending

The median drop-in lasted 1.9 minutes, and Friends sent a median of 11 pieces of AR content per drop-in. Over 200 pieces were sent in total, and Wearers extended drop-ins 48 times. Overall, participants felt ARcall would add great value to smartglasses (median 6 of 7).

### 2. Seeing the Wearer's view made AR content feel personal

Wearers felt the content their Friends sent was relevant to their context (median 6), that it augmented their reality (median 6), and that they understood the intent behind it (median 6). Friends picked up on the artifacts we had placed on the path, so Wearers felt the content was hand-picked: "Based on what I was looking at, they augmented the AR content to my reality, and it was pretty spot on" (W3). Both sides also described the content as surprising and fun.

{% include figure.html path="assets/img/blog/dropping-in-on-a-friends-smartglasses/fig6-visual-artifacts.png" class="img-fluid rounded z-depth-1" alt="Top: a holiday cartoon framed by ornaments, and a news article about a Chinese New Year dragon dance. Bottom: matching AR content, large ornaments floating in the sky, and a dragon on a beach path." %}
<div class="caption">Visual artifacts we placed along the Wearer's path (top) and the AR content they matched (bottom): (a) holiday ornaments; (b) a dragon. Figure from the paper.</div>

### 3. Invite-only felt safe, but Wearers wanted to know when a Friend arrived

Wearers strongly agreed that the invite-only design was important for controlling their privacy (median 7). Most set drop-ins to the maximum of one minute and chose "No Blur"; one Wearer started with full blur and switched to no blur once they began using ARcall. Friends did not feel they were invading the Wearer's privacy (median 6). But ARcall gave no signal when a Friend dropped in, which we did on purpose to keep the AR a surprise, and some Wearers wanted one: "unless my friend [projected] an AR experience, I couldn't tell if they had joined" (W7).

### 4. Voice turned AR into a shared moment

Wearers felt together with their Friend as soon as they heard them talk (median 6), and Friends found it important to get the Wearer's reaction to the content they sent (median 6). "I think more than the AR experience, the voice chat was fantastic" (W3). A few Friends found the time limit short, although the Wearer could always extend it.

## Design implications

1. **Let Wearers know when a Friend drops in**, for example with a "John just dropped-in!" message, a snooze option, or an LED-like notification instead of the content itself.
2. **Offer a wide variety of AR content and scene-based recommendations**, such as suggesting a beach ball or a sandcastle when the Wearer is at the beach, while balancing automation with freedom of expression.
3. **Minimize the difference between how the Friend and the Wearer see content.** Snow filled the Friend's phone screen edge to edge, but not the Wearer's field of view, which made the display edge obvious and broke immersion.
4. **Make AR content movable and anchor it to real-world objects and surfaces.** Content that took over the view sometimes occluded what the Wearer was doing, such as reading.
5. **Treat short Micro-Chats as a social feature, not only a battery saver.** Brief drop-ins can work like a hallway chat or office hours.

## Limitations

ARcall is a proof of concept evaluated in a first-use study with 14 participants who came as pairs of friends. Their trust in each other may be why most did not use the blur setting, which may matter more in other contexts or relationships. The AR content was limited to ten themed items that were positioned automatically and could not be moved. We also did not investigate other ways to save power, such as lowering display brightness or using only one side of the display, or sessions with more than one Friend.

## Publication

Hemant Bhaskar Surale, Yu Jiang Tham, Brian A. Smith, and Rajan Vaish. 2022. ARcall: Real-Time AR Communication using Smartphones and Smartglasses. In *Augmented Humans 2022 (AHs '22)*, Kashiwa, Chiba, Japan. ACM, 46-57. [https://doi.org/10.1145/3519391.3519398](https://doi.org/10.1145/3519391.3519398)

The PDF linked on this page is the arXiv preprint (arXiv:2203.04358), and this post describes its content. The published version is in the ACM Digital Library and may differ.

### BibTeX

```bibtex
@inproceedings{surale2022arcall,
  title     = {ARcall: Real-Time AR Communication using Smartphones and Smartglasses},
  author    = {Surale, Hemant Bhaskar and Tham, Yu Jiang and Smith, Brian A. and Vaish, Rajan},
  booktitle = {Augmented Humans 2022},
  series    = {AHs '22},
  location  = {Kashiwa, Chiba, Japan},
  pages     = {46--57},
  year      = {2022},
  publisher = {ACM},
  doi       = {10.1145/3519391.3519398}
}
```

## Contact

Questions? Feel free to contact:

- **Hemant Bhaskar Surale**, University of Waterloo and Snap Inc.: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2022 ACM) and are reproduced here by the authors.</p>
