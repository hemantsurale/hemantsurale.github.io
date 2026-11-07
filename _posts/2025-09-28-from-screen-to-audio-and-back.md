---
layout: post
title: From screen to audio and back while walking
date: 2025-09-28 10:00:00-0400
description: Viago lets you browse a social feed by looking, keep going by listening with the phone at your side, and pick up where you left off.
tags: mobile audio walking
categories: papers
thumbnail: /assets/img/publication_preview/Viago.jpg
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
  .qp-fig .qp-v2a { stroke: #e07b39; stroke-width: 1.6; fill: none; }
  .qp-fig .qp-audio { stroke: #8e6fd1; stroke-width: 1.6; fill: none; }
  .qp-fig .qp-a2v { stroke: var(--global-theme-color); stroke-width: 1.6; fill: none; }
  .qp-fig .qp-textv { stroke: #2e9e6a; stroke-width: 1.4; fill: none; }
  .qp-fig .qp-imgv { stroke: #c95d8a; stroke-width: 1.4; fill: none; }
  .qp-fig .qp-held { stroke-dasharray: 4 3; }
  .qp-fig .t-v2a { fill: #e07b39; }
  .qp-fig .t-audio { fill: #8e6fd1; }
  .qp-fig .t-a2v { fill: var(--global-theme-color); }
  .qp-fig .t-textv { fill: #2e9e6a; }
  .qp-fig .t-imgv { fill: #c95d8a; }
  .qp-fig .qp-phone { stroke: var(--global-text-color); stroke-width: 1.4; fill: none; }
  .qp-fig .qp-ui { stroke: var(--global-text-color-light); stroke-width: 1.2; fill: none; opacity: 0.8; }
  .qp-fig .qp-pic { fill: var(--global-text-color-light); opacity: 0.3; }
  .qp-fig .qp-dim { opacity: 0.25; }
  .qp-fig .qp-popup { fill: var(--global-bg-color); stroke: var(--global-theme-color); stroke-width: 1.4; }
  .qp-fig .qp-frame { stroke: var(--global-text-color-light); stroke-width: 1; fill: none; opacity: 0.6; }
  .qp-fig .qp-axis { stroke: var(--global-text-color-light); stroke-width: 1; }
  .qp-fig .qp-link { stroke: var(--global-text-color-light); stroke-width: 1.2; }
  .qp-fig .qp-dot-v2a { fill: #e07b39; }
  .qp-fig .qp-dot-a2v { fill: var(--global-theme-color); }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Ruei-Che Chang<sup>1</sup>, Tovi Grossman<sup>2</sup>, Carine Rognon<sup>1</sup>, Michael Glueck<sup>1</sup>, Christopher Collins<sup>1</sup>, Amy Karlson<sup>1</sup>, Hemant Bhaskar Surale<sup>1</sup><br>
<sup>1</sup>Reality Labs Research, Meta &nbsp;&middot;&nbsp; <sup>2</sup>University of Toronto<br>
<em>Conference paper · UIST '25: ACM Symposium on User Interface Software and Technology, Busan, Republic of Korea</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Viago.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3746059.3747761" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#ruei2025viago" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/from-screen-to-audio-and-back/fig1-teaser.png" class="img-fluid rounded z-depth-1" alt="Three comic panels. A seated person wearing headphones taps an orange button on a phone showing a document with orange outlines. The same person walks with the phone held at their side. Back at the seat, the phone shows a pop-up asking to review and submit." %}
<div class="caption">A Viago scenario. (a) While waiting for an order, the user taps the orange button and gets a visual and audio preview of what will be available by ear. (b) Walking to pick up the order, they navigate by touch gestures and audio feedback; an important action such as submit is held for visual confirmation. (c) Back at the seat, a visual and audio review refreshes what they heard and did, and the held action is restored so they can finish it visually. Figure from the paper.</div>

## Quick facts

Looking down at a phone while walking splits your attention between the screen and the street. Viago lets you start browsing by looking, keep going by listening with the phone at your side, and pick up where you left off when you look again. The work was led by Ruei-Che Chang (University of Michigan) during a research internship at Reality Labs Research, Meta. Overall, our work contributes:

1. **Design insights and guidelines** from a design probe study with ten users, for reducing cognitive load and supporting continuity and quick resumption when switching between visual and audio modalities on the go.
2. **Viago**, a smartphone background service that provides multimodal feedback and interaction techniques for seamless transitions between visual and audio modalities.
3. **A preliminary evaluation** with thirteen mobile users that shows the limitations, feasibility, and promise of Viago.
4. **Broader design implications** for intelligent, seamless modality switching in on-the-go contexts.

## Abstract

As mobile phone use while walking becomes increasingly prevalent, users often divide their visual attention between their surroundings and phone displays, raising concerns around safety and interaction efficiency. Alternative input and output modalities (such as eyes-free touch gestures and audio feedback) offer a promising avenue for reducing visual demands in these contexts. However, the design of seamless transitions between visual and audio modalities for mobile interaction on the go remains underexplored. To fill this gap, we conducted a design probe study with ten participants, simulating screen reader-like experiences across diverse applications to identify five key design insights and three design guidelines. Informed by these insights, we developed Viago, a background service that facilitates fluid transitions between visual and audio modalities for mobile task management while walking. A subsequent evaluation with thirteen participants demonstrated that Viago effectively supports on-the-go interactions by enabling users to interleave modalities as needed. We conclude by discussing the broader implications of visual-audio modality transitions and their potential to enhance mobile interactions in everyday, dynamic environments.

## The idea: hand the feed from eyes to ears, and back

Screen readers already let blind and low-vision people use a phone through touch gestures and audio. Viago borrows that model for anyone on the move, and focuses on the two hand-offs that a screen reader does not handle: visual to audio (V2A) before you start walking, and audio to visual (A2V) when you look at the screen again.

<div class="qp-fig">
<svg viewBox="0 0 440 290" role="img" aria-label="Three phone states in sequence. V2A mode: after tapping the orange button, the headline is read aloud and the elements that will be available by ear are outlined in orange. Audio mode: the phone is lowered, the screen dims except the focused element, and the user navigates with gestures while spatial audio and two voices read the content; shares are held. A2V mode: when the phone is raised, a blue button jumps back to the first post heard, blue outlines show what the user did, and a pop-up finishes the held share.">
  <text class="qp-bold t-v2a" x="76" y="22" text-anchor="middle">V2A mode</text>
  <text class="qp-bold t-audio" x="220" y="22" text-anchor="middle">Audio mode</text>
  <text class="qp-bold t-a2v" x="364" y="22" text-anchor="middle">A2V mode</text>
  <text class="qp-small qp-muted" x="76" y="40" text-anchor="middle">tap orange button</text>
  <text class="qp-small qp-muted" x="220" y="40" text-anchor="middle">lower the phone</text>
  <text class="qp-small qp-muted" x="364" y="40" text-anchor="middle">raise the phone</text>
  <rect class="qp-phone" x="46" y="54" width="60" height="108" rx="9"/>
  <circle class="qp-ui" cx="57" cy="68" r="3"/>
  <line class="qp-ui" x1="63" y1="68" x2="86" y2="68"/>
  <rect class="qp-v2a" x="51" y="62" width="40" height="12" rx="2"/>
  <line class="qp-ui" x1="54" y1="82" x2="98" y2="82"/>
  <line class="qp-ui" x1="54" y1="88" x2="90" y2="88"/>
  <rect class="qp-v2a" x="51" y="77" width="51" height="16" rx="2"/>
  <rect class="qp-pic" x="54" y="99" width="44" height="28" rx="2"/>
  <rect class="qp-v2a" x="51" y="96" width="50" height="34" rx="2"/>
  <rect class="qp-ui" x="54" y="137" width="11" height="7" rx="1.5"/>
  <rect class="qp-ui" x="69" y="137" width="11" height="7" rx="1.5"/>
  <rect class="qp-ui" x="84" y="137" width="11" height="7" rx="1.5"/>
  <rect class="qp-v2a" x="52" y="135" width="15" height="11" rx="2"/>
  <circle class="qp-dot-v2a" cx="97" cy="153" r="4.5"/>
  <path class="qp-v2a" d="M112,62 Q117,68 112,74"/>
  <path class="qp-v2a" d="M117,58 Q125,68 117,78"/>
  <path class="qp-link" d="M128,108 L170,108"/>
  <path class="qp-link" d="M164,103 L170,108 L164,113"/>
  <rect class="qp-phone" x="190" y="54" width="60" height="108" rx="9"/>
  <g class="qp-dim">
    <circle class="qp-ui" cx="201" cy="68" r="3"/>
    <line class="qp-ui" x1="207" y1="68" x2="230" y2="68"/>
    <rect class="qp-pic" x="198" y="99" width="44" height="28" rx="2"/>
    <rect class="qp-ui" x="198" y="137" width="11" height="7" rx="1.5"/>
    <rect class="qp-ui" x="213" y="137" width="11" height="7" rx="1.5"/>
    <rect class="qp-ui" x="228" y="137" width="11" height="7" rx="1.5"/>
  </g>
  <line class="qp-ui" x1="198" y1="82" x2="242" y2="82"/>
  <line class="qp-ui" x1="198" y1="88" x2="234" y2="88"/>
  <rect class="qp-audio" x="195" y="77" width="51" height="16" rx="2"/>
  <path class="qp-audio" d="M184,98 Q179,104 184,110"/>
  <path class="qp-audio" d="M256,98 Q261,104 256,110"/>
  <path class="qp-audio" d="M262,94 Q270,104 262,114"/>
  <path class="qp-link" d="M272,108 L314,108"/>
  <path class="qp-link" d="M308,103 L314,108 L308,113"/>
  <rect class="qp-phone" x="334" y="54" width="60" height="108" rx="9"/>
  <rect class="qp-a2v" x="338" y="59" width="52" height="74" rx="3"/>
  <circle class="qp-ui" cx="345" cy="68" r="3"/>
  <line class="qp-ui" x1="351" y1="68" x2="374" y2="68"/>
  <line class="qp-ui" x1="342" y1="82" x2="386" y2="82"/>
  <rect class="qp-pic" x="342" y="99" width="44" height="28" rx="2"/>
  <rect class="qp-ui" x="342" y="137" width="11" height="7" rx="1.5"/>
  <rect class="qp-ui" x="357" y="137" width="11" height="7" rx="1.5"/>
  <rect class="qp-ui" x="372" y="137" width="11" height="7" rx="1.5"/>
  <rect class="qp-a2v" x="340" y="135" width="15" height="11" rx="2"/>
  <rect class="qp-a2v" x="370" y="135" width="15" height="11" rx="2"/>
  <rect class="qp-popup" x="344" y="88" width="40" height="22" rx="3"/>
  <text class="qp-small t-a2v" x="364" y="103" text-anchor="middle">Share</text>
  <circle class="qp-dot-a2v" cx="385" cy="153" r="4.5"/>
  <text class="qp-small" x="76" y="186" text-anchor="middle">headline read aloud</text>
  <text class="qp-small" x="76" y="203" text-anchor="middle">orange: kept for audio</text>
  <text class="qp-small" x="76" y="220" text-anchor="middle">tap to add or drop</text>
  <text class="qp-small" x="220" y="186" text-anchor="middle">gestures anywhere</text>
  <text class="qp-small" x="220" y="203" text-anchor="middle">spatial, two voices</text>
  <text class="qp-small" x="220" y="220" text-anchor="middle">shares put on hold</text>
  <text class="qp-small" x="364" y="186" text-anchor="middle">jump to first post</text>
  <text class="qp-small" x="364" y="203" text-anchor="middle">blue: what you did</text>
  <text class="qp-small" x="364" y="220" text-anchor="middle">finish held shares</text>
  <line class="qp-axis" x1="10" y1="246" x2="428" y2="246"/>
  <path class="qp-axis" d="M422,241 L428,246 L422,251"/>
  <line class="qp-axis" x1="148" y1="241" x2="148" y2="251"/>
  <line class="qp-axis" x1="292" y1="241" x2="292" y2="251"/>
  <text class="qp-small qp-muted" x="76" y="270" text-anchor="middle">waiting for an order</text>
  <text class="qp-small qp-muted" x="220" y="270" text-anchor="middle">walking to pick it up</text>
  <text class="qp-small qp-muted" x="364" y="270" text-anchor="middle">back at the seat</text>
</svg>
<svg class="qp-plane" viewBox="0 0 280 310" role="img" aria-label="Navigating in audio mode. Posts are stacked; swiping up or down moves between posts and each announces a headline such as Judy Moore, 7 hours ago. Inside the focused post, swiping left or right moves between its elements: name, text, image, Like, and Share. A single tap enters or exits the post and a double tap selects. Text is read in a female voice and image descriptions in a male voice. Share is held until the user looks at the screen.">
  <text class="qp-small qp-muted" x="14" y="20">audio mode, phone at your side</text>
  <line class="qp-link" x1="28" y1="40" x2="28" y2="234"/>
  <path class="qp-link" d="M23,46 L28,40 L33,46"/>
  <path class="qp-link" d="M23,228 L28,234 L33,228"/>
  <text class="qp-small qp-muted" x="17" y="137" text-anchor="middle" transform="rotate(-90 17 137)">swipe up / down: posts</text>
  <rect class="qp-frame" x="40" y="32" width="226" height="26" rx="6"/>
  <text class="qp-small qp-muted" x="50" y="49">headline: author, time</text>
  <rect class="qp-audio" x="40" y="68" width="226" height="138" rx="6"/>
  <text x="50" y="87">"Judy Moore, 7 hours ago"</text>
  <text class="qp-small qp-muted" x="50" y="105">single tap: enter or exit post</text>
  <rect class="qp-frame" x="48" y="114" width="38" height="22" rx="4"/>
  <text class="qp-small" x="67" y="129" text-anchor="middle">name</text>
  <rect class="qp-textv" x="90" y="114" width="34" height="22" rx="4"/>
  <text class="qp-small t-textv" x="107" y="129" text-anchor="middle">text</text>
  <rect class="qp-imgv" x="128" y="114" width="44" height="22" rx="4"/>
  <text class="qp-small t-imgv" x="150" y="129" text-anchor="middle">image</text>
  <rect class="qp-frame" x="176" y="114" width="34" height="22" rx="4"/>
  <text class="qp-small" x="193" y="129" text-anchor="middle">Like</text>
  <rect class="qp-a2v qp-held" x="214" y="114" width="44" height="22" rx="4"/>
  <text class="qp-small t-a2v" x="236" y="129" text-anchor="middle">Share</text>
  <line class="qp-link" x1="58" y1="148" x2="248" y2="148"/>
  <path class="qp-link" d="M64,143 L58,148 L64,153"/>
  <path class="qp-link" d="M242,143 L248,148 L242,153"/>
  <text class="qp-small qp-muted" x="153" y="166" text-anchor="middle">swipe left / right: elements</text>
  <text class="qp-small qp-muted" x="153" y="182" text-anchor="middle">double tap: select</text>
  <text class="qp-small qp-muted" x="153" y="198" text-anchor="middle">name heard left, buttons right</text>
  <rect class="qp-frame" x="40" y="216" width="226" height="26" rx="6"/>
  <text class="qp-small qp-muted" x="50" y="233">headline: author, time</text>
  <rect class="qp-textv" x="40" y="258" width="14" height="10" rx="2"/>
  <text class="qp-small" x="62" y="267">female voice: text</text>
  <rect class="qp-imgv" x="40" y="276" width="14" height="10" rx="2"/>
  <text class="qp-small" x="62" y="285">male voice: image descriptions</text>
  <rect class="qp-a2v qp-held" x="40" y="294" width="14" height="10" rx="2"/>
  <text class="qp-small" x="62" y="303">held until you look again</text>
</svg>
</div>
<div class="caption">The first diagram follows one trip through Viago's three modes, with the scenario from the paper underneath. The second shows how audio mode turns a feed into a two-level list you can skim by headline and open on demand.</div>

Two design choices make this work. First, what you hear in audio mode is set up while you can still see: the same headline you hear while looking is where audio mode starts, and the orange outlines tell you exactly which elements you will be able to reach by ear. Second, high-visibility actions that you take by ear, such as sharing or reposting, are not sent right away. They wait until you look at the screen and confirm them.

## System

We first ran a design probe study (see Studies below) and turned its five insights into three guidelines, one for each stage: the visual-to-audio transition, consuming content on the go, and the audio-to-visual transition. Viago implements one set of techniques per stage.

{% include figure.html path="assets/img/blog/from-screen-to-audio-and-back/fig3-modes.png" class="img-fluid rounded z-depth-1" alt="A table of Viago's modes from left to right: visual mode, V2A mode, audio mode, A2V mode, and visual mode again. Rows show the input (touch, gestures), visual feedback (normal, enhanced, contrast), and audio feedback (spatial, distinct voices, hierarchical) in each mode." %}
<div class="caption">Viago's modes and their input and feedback. (a) V2A mode starts with the orange button and adds enhanced visual and audio feedback. (b) Audio mode starts when the phone is lowered and offers hierarchical audio navigation, plus high-contrast visuals for quick glances. (c) A2V mode starts when the user looks at the phone again and highlights what they did in audio mode. Figure from the paper.</div>

**V2A mode.** Tapping the orange button outlines the current post in orange (it will be read first) and then outlines the elements that will be available in audio mode: author name, timestamp, post content, images, and the buttons the user cares about. Buttons are picked semi-automatically: an element clicked 3 times within 1 minute is added, and a single tap adds or dismisses any element. In V2A mode, each new post the user scrolls to is announced with an audio headline (author name and timestamp), and tapping a button gives spatial feedback such as "Like button clicked" from the left. The first thing heard in audio mode is therefore already familiar.

**Audio mode.** It starts when Viago detects that the user has looked away: no face in the front camera and the phone held down at their side. Gestures work anywhere on the screen: swipe up or down for the next or previous post, swipe left or right between elements in a post, single tap to enter or exit a post, and double tap to select. Only the elements chosen in V2A mode are in the list. Spatial audio places sounds where the element sits on screen (the author's name on the left, buttons on the right), text is read in a female voice and image descriptions in a male voice, and vibrations confirm each gesture. For quick glances, the screen dims everything except the focused element. Actions with high visibility, such as sharing or reposting, are cached.

**A2V mode.** When the user looks again, a blue button jumps to the first post they heard in audio mode, and tapping it again returns to the latest one. Posts they heard and elements they used are outlined in blue, the same audio headlines play again, and cached actions pop up so they can be confirmed and finished visually.

Viago runs as an Android application on a Pixel 7 Pro and uses Android's built-in text-to-speech. It reads the screen through Android's Accessibility Service and flattens the interface into a list for gesture navigation, an approach reused from the design probe.

## Studies

We ran two studies: a design probe to learn what people need when switching modalities on the go, and a first-use evaluation of Viago.

### Study 1: design probe

**Probe.** A screen reader-like audio mode that worked on participants' own apps, with automatic switching between visual and audio modes based on face detection and phone orientation.

**Task.** In a simulated coffee shop, participants used their phone visually while seated (30 seconds), walked to pick up an order in audio mode (60 seconds), and returned to their seat to continue visually (30 seconds). Chimes marked the transitions. They repeated this for three of their own apps and then brainstormed improvements.

**Participants.** Ten mobile users (6 male, 4 female) who used apps such as Facebook, LinkedIn, Instagram, Spotify, and Gmail.

**What we found.** Five insights. People kept a mental picture of the screen layout and wanted anchors to it. Hearing everything on screen was overwhelming, so they wanted hierarchical, distinct audio. They wanted control over what is read and when the mode switches. They wanted a visual cue and connected audio to keep their place across a switch. And they wanted to review and confirm what they did by ear. Social media apps were the most common choice and had the most complex layouts, so we built Viago around them.

### Study 2: evaluation

**Apparatus.** A Google Pixel 7 Pro running Viago and a simulated social media app, with earphones. The study ran in a coffee shop within our organization, with chairs, tables, and hanging lamps as obstacles.

**Task.** The app had 50 posts, 12 of them by "Judy Moore". While walking, participants had to share her 6 posts about gardening and like her 6 other posts. Chimes at unplanned moments told them to switch modes immediately, and shares started in audio mode had to be confirmed visually. The 12 tasks took about fifteen minutes.

{% include figure.html path="assets/img/blog/from-screen-to-audio-and-back/fig8-tasks.png" class="img-fluid rounded z-depth-1" alt="A timeline from start walking to end of task, alternating between orange visual-mode segments and blue audio-mode segments, with screenshots of the posts to like above the line and the gardening posts to share below it." %}
<div class="caption">The Study 2 task: posts to like (top) and to share (bottom) while walking. Each dot is a chime that prompted a switch between visual mode (orange) and audio mode (blue). Figure from the paper.</div>

**Participants.** Thirteen mobile users (10 male, 3 female), aged 24 to 48 (mean 35.7), who all used social media apps daily.

**Measures.** Success rates for the like and share tasks, 7-point Likert ratings, and video and semi-structured interviews analyzed with affinity diagramming.

## What do we learn?

### 1. People finished the tasks while switching back and forth

Success rates were 91.67% for likes and 93.06% for shares. Participants rated their ability to understand and navigate the audio content on the go at 6.38 out of 7 (SD 0.78), and rated Viago easy to learn (5.85, SD 1.07) and easy to use (5.54, SD 1.12). As P2 put it: "It was always on the post I expected it to be on when I switched based on the feedback." Some gestures took getting used to, for example "single tap was excessive" (P9), and "up/down and right/left were confusing when the phone is down" (P12).

{% include figure.html path="assets/img/blog/from-screen-to-audio-and-back/fig9-likert.png" class="img-fluid rounded z-depth-1" alt="Stacked bar chart of 7-point Likert responses from 13 participants for nine statements. Most responses are Agree or Strongly Agree; only two statements have any disagreement, one response each." %}
<div class="caption">Likert responses from the thirteen participants in Study 2. Figure from the paper.</div>

### 2. Spatial audio and two voices helped people picture the screen

Several participants (P2, P4, P6, P9) said they pictured the layout while listening. P2: "In my mental map, I was used to the name being here (pointing left) and the actions being here (pointing right)." The different voices for text and image descriptions also worked as dividers that told people which part of a post they were in. A few still glanced at the screen, for example to check an image when its description was long.

### 3. Both hand-offs worked, but should take less effort

The V2A previews were rated clear (5.85, SD 1.07) and cognitively effortless (5.46, SD 1.51), and participants valued choosing which elements to bring to audio. But pressing the orange button every time felt cumbersome, and many would prefer automatic transitions. The A2V review was rated clear (5.69, SD 1.03) and cognitively effortless (6.15, SD 1.06). P4: "it had the blue boxes for me to remember where I was." Participants often overlooked the audio headlines during review because they were focused on the screen, and they wanted a faster review, such as jumping straight to shared posts or a panel that groups liked, commented, and shared posts (P7).

### 4. People want this beyond social media, with caveats

Participants were willing to use Viago with other apps (6.3, SD 0.75), such as news, music, messaging, and navigation, and were open to using it on the go (5.77, SD 1.01). They also raised real-world concerns, such as ambient noise, bumping into people, and busy places that need full attention.

## Design implications

1. **Automate the audio information hierarchy for different apps.** Use UI semantics, existing datasets and algorithms, or large language models to group elements into audio-friendly levels, and let users adjust the result.
2. **Make transitions context-aware.** Phone sensors and map services (location, activity, how busy a place is) could set how much is automated and how much information goes to audio.
3. **Personalize gestures for different apps.** Interaction proxies could let users remap gestures to app functions and to levels of the audio hierarchy.
4. **Match visual and audio output to the context.** For example, gaze tracking could reveal what the user has already seen so that audio fills in the rest.
5. **Extend to other devices.** Smartwatches and head-mounted displays could share the work across audio, visual, and haptic output.

## Limitations

The audio mode followed screen reader conventions, which may not match what sighted users expect; some participants wanted more conversational interaction with the screen. We tested only a simulated social media app, and apps with richer structure (such as Reddit) or tasks that need text input were out of scope. Study 2 was a preliminary first-use study with a small sample in a controlled setting, chosen for safety; field deployments with more people and apps are future work.

## Publication

Ruei-Che Chang, Tovi Grossman, Carine Rognon, Michael Glueck, Christopher Collins, Amy Karlson, and Hemant Bhaskar Surale. 2025. Viago: Exploring Visual-Audio Modality Transitions for Social Media Consumption on the Go. In *Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology (UIST '25)*, Busan, Republic of Korea. ACM, 1-20. [https://doi.org/10.1145/3746059.3747761](https://doi.org/10.1145/3746059.3747761)

### BibTeX

```bibtex
@inproceedings{ruei2025viago,
  title     = {Viago: Exploring Visual-Audio Modality Transitions for Social Media Consumption on the Go},
  author    = {Chang, Ruei-Che and Grossman, Tovi and Rognon, Carine and Glueck, Michael and Collins, Christopher and Karlson, Amy and Surale, Hemant Bhaskar},
  booktitle = {Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology},
  series    = {UIST '25},
  location  = {Busan, Republic of Korea},
  pages     = {1--20},
  year      = {2025},
  publisher = {ACM},
  doi       = {10.1145/3746059.3747761}
}
```

## Contact

Questions? Feel free to contact:

- **Ruei-Che Chang**, Reality Labs Research, Meta: rueiche [at] umich.edu
- **Hemant Bhaskar Surale**, Reality Labs Research, Meta: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2025 copyright held by the owner/author(s)) and are reproduced here by the authors.</p>
