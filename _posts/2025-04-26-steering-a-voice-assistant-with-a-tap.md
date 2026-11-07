---
layout: post
title: Steering a voice assistant with a tap
date: 2025-04-26 10:00:00-0400
description: We added ring gestures and wristband haptics to an LLM voice assistant so people can dig deeper, skip, and interrupt without talking over it.
tags: voice gestures haptics llm
categories: papers
thumbnail: /assets/img/publication_preview/thumbnail_puffin.png
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
  .qp-fig .qp-audio { stroke: var(--global-theme-color); stroke-width: 1.8; fill: none; }
  .qp-fig .qp-voice { stroke: #2e9e6a; stroke-width: 1.8; fill: none; }
  .qp-fig .qp-haptic { stroke: #e07b39; stroke-width: 1.8; fill: none; }
  .qp-fig .qp-ring { stroke: #8e6fd1; stroke-width: 2; fill: none; }
  .qp-fig .qp-dashed { stroke-dasharray: 4 3; }
  .qp-fig .qp-kw { fill: #e07b39; opacity: 0.35; }
  .qp-fig .t-audio { fill: var(--global-theme-color); }
  .qp-fig .t-voice { fill: #2e9e6a; }
  .qp-fig .t-haptic { fill: #e07b39; }
  .qp-fig .t-ring { fill: #8e6fd1; }
  .qp-fig .d-audio { fill: var(--global-theme-color); }
  .qp-fig .d-voice { fill: #2e9e6a; }
  .qp-fig .d-haptic { fill: #e07b39; }
  .qp-fig .d-ring { fill: #8e6fd1; }
  .qp-fig .qp-guide { stroke: var(--global-text-color-light); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.8; }
  .qp-fig .qp-axis { stroke: var(--global-text-color-light); stroke-width: 1; }
  .qp-fig .qp-frame { stroke: var(--global-text-color-light); stroke-width: 1; fill: none; stroke-dasharray: 5 4; opacity: 0.7; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Shwetha Rajaram, Hemant Bhaskar Surale, Codie McConkey, Carine Rognon, Hrim Mehta, Michael Glueck, Christopher Collins<br>
Reality Labs Research, Meta<br>
<em>Conference paper · CHI '25: ACM Conference on Human Factors in Computing Systems, Yokohama, Japan</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/gesturellm.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3706598.3714310" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#rajaram2025gesturellm" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/steering-a-voice-assistant-with-a-tap/fig1-teaser.png" class="img-fluid rounded z-depth-1" alt="A woman wearing glasses, a ring, and a wristband asks: Remind me, what happened in last week's meeting? Along a timeline, the assistant's spoken answer highlights the word activities, a haptic pulse on the wrist lines up with that word, and a thumb tap on the ring selects it; the assistant then describes two activities." %}
<div class="caption">Gesture and audio-haptic techniques let users rapidly navigate and manage the timing of a conversation with a voice assistant. Here a haptic pulse on the wrist lines up with the keyword "activities" in the spoken answer, a tap on the ring selects it, and the assistant goes on to specific activities. Figure from the paper.</div>

## Quick facts

Voice assistants powered by large language models can now hold long, open-ended conversations, but speech is linear: you have to sit through long answers, interrupt out loud, and time your pauses so the assistant does not drop the conversation. We kept voice and audio for the content of the conversation and added a ring for gestures and a wristband for haptics to control its flow. The work was led by Shwetha Rajaram (University of Michigan School of Information) during a research internship at Reality Labs Research, Meta. Overall, our work contributes:

1. **A suite of multimodal interaction techniques** that combine voice, gestures, audio, and haptics to facilitate conversations with voice interfaces, built into a working system.
2. **An exploratory study** with 14 participants showing the benefits of these techniques for rapid access to information and flexible navigation within conversations.
3. **Design recommendations** for better role-based collaboration between the input and output modalities.

## Abstract

Advances in large language models (LLMs) empower new interactive capabilities for wearable voice interfaces, yet traditional voice-and-audio I/O techniques limit users' ability to flexibly navigate information and manage timing for complex conversational tasks. We developed a suite of gesture and audio-haptic guidance techniques that enable users to control conversation flows and maintain awareness of possible future actions, while simultaneously contributing and receiving conversation content through voice and audio. A 14-participant exploratory study compared our parallelized I/O techniques to a baseline of voice-only interaction. The results demonstrate the efficiency of gestures and haptics for information access, while allowing system speech to be redirected and interrupted in a socially acceptable manner. The techniques also raised user awareness of how to leverage intelligent capabilities. Our findings inform design recommendations to facilitate role-based collaboration between multimodal I/O techniques and reduce users' perception of time pressure when interleaving interactions with system speech.

## The idea: talk for content, tap for control

Gestures and haptics carry less information than speech, but they are more efficient to perform and to process. So we gave each modality a role. Voice and audio carry the content of the conversation: your prompts and the assistant's answers. Ring gestures steer the flow (go deeper, skip, replay, wrap up, tell me more), and wristband haptics confirm your input and point out what you can do next. Because the two pairs of channels run in parallel, you can act while the assistant is still talking.

<div class="qp-fig">
<svg viewBox="0 0 440 305" role="img" aria-label="Timeline of a short conversation in four lanes. A wrist roll on the ring wakes the mic and the user speaks a prompt. The assistant answers; a haptic nudge on the wristband lines up with a keyword. A Tap A gesture at that moment cuts the answer off and the assistant gives a deeper answer on the keyword. A double Tap B adds more detail at the end without interrupting. Small haptic pulses confirm each gesture.">
  <text class="qp-small qp-muted" x="12" y="20">conversation content: voice and audio</text>
  <text class="qp-bold t-audio" x="12" y="62">Assistant</text>
  <text class="qp-small qp-muted" x="12" y="78">audio</text>
  <text class="qp-small t-haptic" x="266" y="43" text-anchor="middle">keyword</text>
  <rect class="qp-audio" x="196" y="51" width="90" height="20" rx="5"/>
  <rect class="qp-kw" x="256" y="53" width="20" height="16" rx="3"/>
  <text class="qp-small t-audio" x="226" y="65" text-anchor="middle">answer</text>
  <rect class="qp-audio" x="292" y="51" width="100" height="20" rx="5"/>
  <text class="qp-small t-audio" x="342" y="65" text-anchor="middle">deeper answer</text>
  <rect class="qp-audio qp-dashed" x="394" y="51" width="38" height="20" rx="5"/>
  <text class="qp-small t-audio" x="413" y="65" text-anchor="middle">more</text>
  <text class="qp-bold t-voice" x="12" y="117">You</text>
  <text class="qp-small qp-muted" x="12" y="133">voice</text>
  <rect class="qp-voice" x="118" y="106" width="70" height="20" rx="5"/>
  <text class="qp-small t-voice" x="153" y="120" text-anchor="middle">prompt</text>
  <line class="qp-guide" x1="12" y1="150" x2="430" y2="150"/>
  <text class="qp-small qp-muted" x="12" y="172">conversation control: gestures and haptics</text>
  <text class="qp-bold t-haptic" x="12" y="209">Wristband</text>
  <text class="qp-small qp-muted" x="12" y="225">haptics</text>
  <text class="qp-small t-haptic" x="266" y="190" text-anchor="middle">nudge</text>
  <circle class="d-haptic" cx="266" cy="205" r="4.5"/>
  <path class="qp-haptic" d="M257,198 Q253,205 257,212"/>
  <path class="qp-haptic" d="M275,198 Q279,205 275,212"/>
  <text class="qp-small qp-muted" x="130" y="209">confirm</text>
  <circle class="qp-haptic" cx="122" cy="205" r="3"/>
  <circle class="qp-haptic" cx="298" cy="205" r="3"/>
  <circle class="qp-haptic" cx="370" cy="205" r="3"/>
  <text class="qp-bold t-ring" x="12" y="260">Ring</text>
  <text class="qp-small qp-muted" x="12" y="276">gestures</text>
  <line class="qp-guide" x1="108" y1="249" x2="108" y2="182"/>
  <line class="qp-guide" x1="108" y1="160" x2="108" y2="110"/>
  <line class="qp-guide" x1="286" y1="249" x2="286" y2="73"/>
  <line class="qp-guide" x1="358" y1="249" x2="358" y2="73"/>
  <circle class="qp-ring" cx="108" cy="256" r="6"/>
  <circle class="d-ring" cx="108" cy="256" r="2"/>
  <circle class="qp-ring" cx="286" cy="256" r="6"/>
  <circle class="d-ring" cx="286" cy="256" r="2"/>
  <circle class="qp-ring" cx="358" cy="256" r="6"/>
  <circle class="d-ring" cx="358" cy="256" r="2"/>
  <text class="qp-small t-ring" x="108" y="280" text-anchor="middle">wake</text>
  <text class="qp-small t-ring" x="286" y="280" text-anchor="middle">go deeper</text>
  <text class="qp-small t-ring" x="358" y="280" text-anchor="middle">tell me more</text>
  <text class="qp-small qp-muted" x="108" y="296" text-anchor="middle">wrist roll</text>
  <text class="qp-small qp-muted" x="286" y="296" text-anchor="middle">Tap A</text>
  <text class="qp-small qp-muted" x="358" y="296" text-anchor="middle">Tap B ×2</text>
</svg>
<svg class="qp-plane" viewBox="0 0 280 290" role="img" aria-label="Chart of expressiveness against time cost. Voice input and audio output sit at high expressiveness and high time cost and are grouped as content. Gesture input and haptic output sit at medium expressiveness and low time cost and are grouped as control.">
  <text class="qp-small qp-muted" x="14" y="20">I/O modality properties</text>
  <line class="qp-axis" x1="60" y1="36" x2="60" y2="230"/>
  <line class="qp-axis" x1="60" y1="230" x2="266" y2="230"/>
  <line class="qp-axis" x1="55" y1="84" x2="60" y2="84"/>
  <line class="qp-axis" x1="55" y1="190" x2="60" y2="190"/>
  <line class="qp-axis" x1="110" y1="230" x2="110" y2="235"/>
  <line class="qp-axis" x1="224" y1="230" x2="224" y2="235"/>
  <text class="qp-small qp-muted" x="22" y="133" text-anchor="middle" transform="rotate(-90 22 133)">expressiveness</text>
  <text class="qp-small qp-muted" x="51" y="88" text-anchor="end">high</text>
  <text class="qp-small qp-muted" x="51" y="194" text-anchor="end">med</text>
  <text class="qp-small qp-muted" x="110" y="250" text-anchor="middle">low</text>
  <text class="qp-small qp-muted" x="224" y="250" text-anchor="middle">high</text>
  <text class="qp-small qp-muted" x="163" y="272" text-anchor="middle">time cost</text>
  <text class="qp-small" x="196" y="52" text-anchor="middle">content</text>
  <rect class="qp-frame" x="140" y="58" width="112" height="52" rx="8"/>
  <circle class="d-voice" cx="240" cy="74" r="5"/>
  <text class="qp-small t-voice" x="230" y="78" text-anchor="end">voice input</text>
  <circle class="d-audio" cx="240" cy="96" r="5"/>
  <text class="qp-small t-audio" x="230" y="100" text-anchor="end">audio output</text>
  <text class="qp-small" x="141" y="158" text-anchor="middle">control</text>
  <rect class="qp-frame" x="82" y="164" width="118" height="52" rx="8"/>
  <circle class="d-ring" cx="96" cy="180" r="5"/>
  <text class="qp-small t-ring" x="106" y="184">gesture input</text>
  <circle class="d-haptic" cx="96" cy="202" r="5"/>
  <text class="qp-small t-haptic" x="106" y="206">haptic output</text>
</svg>
</div>
<div class="caption">The timeline shows one stretch of a conversation: a wrist roll wakes the mic, a haptic nudge marks a keyword while the assistant talks, Tap A cuts in to go deeper on that keyword, and a double Tap B asks for more detail without interrupting. The chart shows why each modality got its role: voice and audio are expressive but slow, while gestures and haptics are quick but less expressive.</div>

One gesture set covers many functions because the system knows who is talking. A gesture can mean one thing while the assistant is speaking, another while you are speaking, and a third during silence.

## System

**Techniques.** We built techniques for two kinds of flow. For *navigational flow* (the order of the conversation): Select a follow-up topic that the assistant reads out, Go Deeper into a keyword while the assistant is speaking, and Replay the current response or Skip to the next sentence. For *temporal flow* (its timing): Wake the assistant with a quick wrist rotation instead of a wake word, which also interrupts it; Restyle Response to regenerate it with new instructions; and Wrap it Up or Tell me More to end a response at the next sentence or extend it. On the output side, audio-haptic cues show when the system is listening or processing, warn with a subtle haptic after 5 seconds of silence that the conversation is about to time out (speaking within another 5 seconds keeps it going), confirm gestures, and nudge users toward keywords they can explore. Nudges are haptic only, so they do not compete with the assistant's speech.

{% include figure.html path="assets/img/blog/steering-a-voice-assistant-with-a-tap/fig10-system.png" class="img-fluid rounded z-depth-1" alt="System diagram: an illustrated person wearing Ray-Ban Meta glasses, a ring, and a wristband, with photos of the ring and wristband hardware, connected to a screenshot of the Unity voice assistant client, which connects to GPT-4o and the Meta Voice SDK." %}
<div class="caption">System architecture. The LLM-enabled voice assistant is a Unity application (A) that uses GPT-4o (E) and the Meta Voice SDK (F). Audio goes to Ray-Ban Meta glasses over Bluetooth (D), and two in-house wireless wearables handle gesture input (B) and haptic feedback (C). Figure from the paper.</div>

**Implementation.** Four GPT-4o agents power the assistant: an Informational Audio Assistant that answers prompts, a Keyword Identifier that highlights important words in each answer, a Follow-up Generator that suggests subtopics, and a Response Extender that adds detail at the end of the current answer. The Meta Voice SDK (version 66.0) handles dictation, text-to-speech, and voice commands, and its word events give the timing of every spoken word, which lets nudges and gestures line up with specific words. The ring uses electrodes to sense when the index finger touches skin, plus an IMU and an optical proximity sensor, to tell apart two thumb-tap positions: A (the distal phalanx) and B (the proximal phalanx). The wristband has 4 vibrotactile actuators, and its haptic patterns match the frequency and amplitude of audio cues made with a professional sound designer. All cues were designed to be just noticeable.

## Study

**Conditions.** *Voice-Driven* interaction, the baseline: speak prompts, hear answers, and use the wake word "Hey Roger" to start or interrupt. *Gesture+Haptic-Guided* interaction: the same voice and audio, plus gestures, a Wrist Roll to wake or interrupt, audio-haptic feedback, and haptic-only nudges on keywords.

{% include figure.html path="assets/img/blog/steering-a-voice-assistant-with-a-tap/fig12-gestures.png" class="img-fluid rounded z-depth-1" alt="Eight hand illustrations, each labeled with a function and a gesture: Wake Mic, Wrist Roll; Select Keyword or Follow-up Topic, Tap A; Play Follow-up Topics, Tap B; Replay, Tap A Hold; Skip, Tap B Hold; Wrap it Up, Tap A twice; Tell me More, Tap B twice." %}
<div class="caption">The gesture set used in the study: three poses (Wrist Roll, Tap A, Tap B), with holds and double taps for more functions. Tap B sequences move the conversation forward, and Tap A sequences backtrack or stall it. Gestures marked (*) were introduced in Task 2. Figure from the paper.</div>

**Tasks.** After a training session, participants did two tasks, each with one 2-minute conversation per condition. In *Task 1 (Learning)*, they learned about an unfamiliar topic they chose from a list (such as "how manual clocks work" or "uses of coriander") and then taught it back to the researchers. In *Task 2 (Meeting Prep)*, they prepared for an upcoming meeting in a scenario of commuting to work, by asking about two meeting transcripts: one on social media strategy for a new breakfast cereal and one on a library summer reading program for kids. Task 2 added Replay, Skip, and Wrap it Up for faster-paced conversations. Condition order was counterbalanced and reversed between tasks.

**Participants.** 14 people (5 women, 7 men, 2 not reported), with an average age of 31 (range 21-61). 11 used voice interfaces daily. Sessions lasted 90 minutes.

**Measures.** Timestamped logs of user and system speech, gestures, and haptic nudges; the Subjective Assessment of Speech User Interfaces (SASSI) questionnaire after each condition; and interviews. We compared conditions with Wilcoxon signed-rank tests.

## What do we learn?

### 1. With gestures, people did more and interrupted more

Participants performed 248 interactions in the Gesture+Haptic-Guided condition versus 137 with voice alone (Z = -3.296, p = 0.001), and interrupted the assistant 58 times versus 8 (Z = -3.18, p = 0.002). Error rates did not differ significantly: 0.137 for voice input and 0.203 for gestures (Z = -1.538, p = 0.132). With voice, people let the assistant finish even when it was repeating itself, because cutting it off felt rude: "it felt like I'm talking to somebody... so I let him finish the sentence" (P4). A gesture felt different: "I don't have to commit the act of interrupting by voice. I just kind of send a signal" (P13).

{% include figure.html path="assets/img/blog/steering-a-voice-assistant-with-a-tap/fig13-timelines.png" class="img-fluid rounded z-depth-1" alt="Two conversation timelines from one participant. The voice-driven conversation about the rules of curling alternates evenly between spoken questions starting with Hey Roger and the assistant's answers. The gesture and haptic-guided conversation about how mirrors are made has a single spoken prompt followed by many gestures (Select Keyword, Tell me More, Play Followups, Select Followup) and denser assistant speech." %}
<div class="caption">P6's two Task 1 conversations. Voice-driven turns were balanced and slower-paced, while gestures gave quicker access to information and more interruptions. Light blue bubbles are user speech, white bubbles are system speech, and blue dotted lines are interruptive gestures. Figure from the paper.</div>

### 2. Gestures made information easier to reach, but the assistant felt in charge

Participants described the gesture condition as "having information at your fingertips" (P7), and the conversations had more system speech surfacing new details. The scoped gestures and nudges also showed people what the assistant could do: "knowing that the assistant can add a follow up helped me realize what all I can ask" (P2). Several participants then used the same moves by voice, saying "Tell me More" and "Replay". On the other hand, conversations felt system-driven ("the leader in the conversation is the voice assistant," P5), and people stuck to gestures instead of speaking: on average only 28.36% of gestures were used to wake the mic. With gestures, some participants were also unsure how the system had interpreted them, especially when selecting keywords.

### 3. Haptic nudges added time pressure

Combined with fast gestures, the nudges made participants feel they had to act right away or miss an opportunity. P6 described being "in a chase" with the system, and P13 felt like "multi-tasking between hearing and feeling". On SASSI, participants rated Voice-Driven interaction significantly higher for Likeability (mean 6.016 vs 5.071; Z = 2.731, p = 0.007) and Cognitive Demand (5.329 vs 4.114, where higher is more favorable; Z = 2.605, p = 0.01), with no significant differences for System Response Accuracy, Annoyance, Habitability, or Speed. Participants attributed the higher voice ratings to their familiarity with voice interfaces and expected gestures to get easier with practice.

{% include figure.html path="assets/img/blog/steering-a-voice-assistant-with-a-tap/fig14-sassi.png" class="img-fluid rounded z-depth-1" alt="Box plots of SASSI scores for voice-driven (blue) and gesture plus haptic (orange) interaction across six dimensions. Voice is significantly higher for Likeability and Cognitive Demand; the other four dimensions overlap." %}
<div class="caption">SASSI ratings on a 7-point scale, where higher is more favorable. Asterisks mark the two dimensions where Voice-Driven scored significantly higher. Figure from the paper.</div>

## Design implications

1. **Move between gestures and voice automatically.** For example, open the mic right after a gesture so users can clarify with a few words, and use output to suggest the right input: audio prompting voice, haptics prompting gestures.
2. **Confirm how the system interpreted the input, not just that it arrived.** During Go Deeper, the assistant could repeat the keyword it thinks the user picked, so mistakes are easy to correct.
3. **Give advance notice and allow delayed actions.** Haptics could ramp up before a keyword arrives, and gesture variants could separate "do it now" from "queue it for later".

## Limitations

We used a ring that supports subtle on-skin gestures, and the finding that gestures are a socially acceptable way to interrupt may not hold for camera-based gesture recognition. The study ran in a controlled lab, while speech and gesture recognition would be less reliable in noisy, busy settings. Most participants were experienced voice interface users, and people with hearing or motor impairments still need to be studied. Results may include novelty effects, although participants rated the voice baseline higher on two SASSI dimensions, which suggests no bias toward the new techniques.

## Publication

Shwetha Rajaram, Hemant Bhaskar Surale, Codie McConkey, Carine Rognon, Hrim Mehta, Michael Glueck, and Christopher Collins. 2025. Gesture and Audio-Haptic Guidance Techniques to Direct Conversations with Intelligent Voice Interfaces. In *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)*, Yokohama, Japan. ACM, 1-20. [https://doi.org/10.1145/3706598.3714310](https://doi.org/10.1145/3706598.3714310)

### BibTeX

```bibtex
@inproceedings{rajaram2025gesturellm,
  title     = {Gesture and Audio-Haptic Guidance Techniques to Direct Conversations with Intelligent Voice Interfaces},
  author    = {Rajaram, Shwetha and Surale, Hemant Bhaskar and McConkey, Codie and Rognon, Carine and Mehta, Hrim and Glueck, Michael and Collins, Christopher},
  booktitle = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},
  series    = {CHI '25},
  location  = {Yokohama, Japan},
  pages     = {1--20},
  year      = {2025},
  publisher = {ACM},
  doi       = {10.1145/3706598.3714310}
}
```

## Contact

Questions? Feel free to contact:

- **Shwetha Rajaram**, Reality Labs Research, Meta: shwethar [at] umich.edu
- **Hemant Bhaskar Surale**, Reality Labs Research, Meta: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2025 copyright held by the owner/author(s)) and are reproduced here by the authors.</p>
