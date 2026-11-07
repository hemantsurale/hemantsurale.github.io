---
layout: post
title: Moving work across devices, apps, people, and time
date: 2020-10-20 10:00:00-0400
description: SurfaceFleet lets content, tools, and even unfinished actions travel between devices, applications, and collaborators, backed by a resilient distributed-systems log.
tags: cross-device distributed-systems collaboration
categories: papers
thumbnail: /assets/img/publication_preview/UIST20.png
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
  .qp-fig .b-alice { stroke: var(--global-theme-color); }
  .qp-fig .b-john { stroke: #2e9e6a; }
  .qp-fig .b-log { stroke: #8e6fd1; }
  .qp-fig .b-app { stroke: #e07b39; }
  .qp-fig .b-muted { stroke: var(--global-text-color-light); }
  .qp-fig .t-alice { fill: var(--global-theme-color); }
  .qp-fig .t-john { fill: #2e9e6a; }
  .qp-fig .t-log { fill: #8e6fd1; }
  .qp-fig .t-app { fill: #e07b39; }
  .qp-fig .qp-guide { stroke: var(--global-text-color-light); stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.7; }
  .qp-fig .qp-arrow { stroke: var(--global-text-color-light); stroke-width: 1.5; }
  .qp-fig .qp-head { fill: var(--global-text-color-light); }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Frederik Brudy<sup>†1,2</sup>, David Ledo<sup>†1,3</sup>, Michel Pahud<sup>1</sup>, Nathalie Henry Riche<sup>1</sup>, Christian Holz<sup>1,4</sup>, Anandghan Waghmare<sup>1,5</sup>, Hemant Bhaskar Surale<sup>1,6</sup>, Marcus Peinado<sup>1</sup>, Xiaokuan Zhang<sup>1,7</sup>, Shannon Joyner<sup>1,8</sup>, Badrish Chandramouli<sup>1</sup>, Umar Farooq Minhas<sup>1</sup>, Jonathan Goldstein<sup>1</sup>, William Buxton<sup>1</sup>, Ken Hinckley<sup>1</sup><br>
<sup>1</sup>Microsoft Research, Redmond &nbsp;&middot;&nbsp; <sup>2</sup>University College London &nbsp;&middot;&nbsp; <sup>3</sup>University of Calgary &nbsp;&middot;&nbsp; <sup>4</sup>ETH Zürich &nbsp;&middot;&nbsp; <sup>5</sup>Georgia Institute of Technology &nbsp;&middot;&nbsp; <sup>6</sup>University of Waterloo &nbsp;&middot;&nbsp; <sup>7</sup>Ohio State University &nbsp;&middot;&nbsp; <sup>8</sup>Cornell University<br>
<sup>†</sup>The first two authors contributed equally.<br>
<em>Conference paper · UIST '20: ACM Symposium on User Interface Software and Technology, Virtual Event, USA</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Surfacefleet.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3379337.3415874" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#brudy2020surfacefleet" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/moving-work-across-devices/fig1-teaser.png" class="img-fluid rounded z-depth-1" alt="Illustration of a tablet with floating semi-transparent Applets, including image cards, a color picker, and a red and blue Portfolio case, connected by lines to a desktop monitor, a laptop, and a document page. Labels read Applets, Portfolios, and Promises." %}
<div class="caption">SurfaceFleet unbinds UI elements from the device, the application, the user, and time. Applets unbind controls from applications, Portfolios unbind content and tools from devices and people, and Promises unbind actions from time. Figure from the paper.</div>

## Quick facts

The things we work with, such as a clipboard, a color picker, or a photo we still need, are usually tied to one device, one app, one person, and the present moment. SurfaceFleet, led by Frederik Brudy (University College London) and David Ledo (University of Calgary) at Microsoft Research, is a working Windows system that loosens all four ties at once. Overall, our work contributes:

1. **A framing of mobility** as transitions in "place" along four cornerstones of unboundedness: device, application, user, and time.
2. **The SurfaceFleet system**, built on a resilient distributed-systems foundation (Ambrosia) that logs every change to shared state, so moving to another device becomes a cross-device fail-over.
3. **A preliminary toolkit** for writing SurfaceFleet applications in C# without deep prior expertise in distributed systems.
4. **Interaction techniques**, explored as technology probes: Applets, Portfolios, Interaction Promises, Tools, Media Primitives, and Containers.

## Abstract

Knowledge work increasingly spans multiple computing surfaces. Yet in status quo user experiences, content as well as tools, behaviors, and workflows are largely bound to the current device: running the current application, for the current user, and at the current moment in time. SurfaceFleet is a system and toolkit that uses resilient distributed programming techniques to explore cross-device interactions that are unbounded in these four dimensions of device, application, user, and time. As a reference implementation, we describe an interface built using Surface Fleet that employs lightweight, semi-transparent UI elements known as Applets. Applets appear always-on-top of the operating system, application windows, and (conceptually) above the device itself. But all connections and synchronized data are virtualized and made resilient through the cloud. For example, a sharing Applet known as a Portfolio allows a user to drag and drop unbound Interaction Promises into a document. Such promises can then be fulfilled with content asynchronously, at a later time (or multiple times), from another device, and by the same or a different user.

## The idea: unbind the action, not just the file

Services like Dropbox, OneDrive, and Google Drive synchronize whole files and folders, and Slack and Teams share inside their own app. SurfaceFleet works at a finer grain: single pieces of content, tools, and inputs. Every change to shared state is written to a durable, replayable log in the cloud, so any device in a group (a *federation*) can catch up by replaying it, right away or later. That one mechanism lets a single drag and drop cross all four boundaries.

<div class="qp-fig">
<svg viewBox="0 0 440 380" role="img" aria-label="Sequence diagram of one Interaction Promise. Alice, on her desktop in Word, drags an empty image Applet into her document, creating promise P, then drops P into a shared Portfolio; both steps are written to the cloud log. Later, John's device on site replays the log and P appears in the Portfolio. John snaps a photo to fulfill P, which is written to the log. Alice's desktop replays the log and the Word placeholder updates by its ID.">
  <text class="qp-bold t-alice" x="85" y="24" text-anchor="middle">Alice</text>
  <text class="qp-bold t-log" x="220" y="24" text-anchor="middle">cloud log</text>
  <text class="qp-bold t-john" x="355" y="24" text-anchor="middle">John</text>
  <text class="qp-small qp-muted" x="85" y="40" text-anchor="middle">desktop, Word</text>
  <text class="qp-small qp-muted" x="220" y="40" text-anchor="middle">replayable</text>
  <text class="qp-small qp-muted" x="355" y="40" text-anchor="middle">on site, camera</text>
  <line class="qp-guide" x1="85" y1="50" x2="85" y2="345"/>
  <line class="qp-guide" x1="220" y1="50" x2="220" y2="345"/>
  <line class="qp-guide" x1="355" y1="50" x2="355" y2="345"/>
  <rect class="qp-box b-alice" x="20" y="57" width="130" height="42" rx="6"/>
  <text class="qp-small" x="85" y="74" text-anchor="middle">drags empty image</text>
  <text class="qp-small" x="85" y="90" text-anchor="middle">Applet into Word</text>
  <line class="qp-arrow" x1="150" y1="78" x2="182" y2="78"/>
  <polygon class="qp-head" points="188,78 180,74 180,82"/>
  <rect class="qp-box b-log" x="188" y="67" width="64" height="22" rx="4"/>
  <text class="qp-small" x="220" y="82" text-anchor="middle">P created</text>
  <rect class="qp-box b-alice" x="20" y="113" width="130" height="42" rx="6"/>
  <text class="qp-small" x="85" y="130" text-anchor="middle">drops P into a</text>
  <text class="qp-small" x="85" y="146" text-anchor="middle">shared Portfolio</text>
  <line class="qp-arrow" x1="150" y1="134" x2="182" y2="134"/>
  <polygon class="qp-head" points="188,134 180,130 180,138"/>
  <rect class="qp-box b-log" x="188" y="123" width="64" height="22" rx="4"/>
  <text class="qp-small" x="220" y="138" text-anchor="middle">P shared</text>
  <line class="qp-guide" x1="20" y1="172" x2="420" y2="172"/>
  <text class="qp-small qp-muted" x="420" y="166" text-anchor="end">later</text>
  <rect class="qp-box b-log" x="188" y="193" width="64" height="22" rx="4"/>
  <text class="qp-small" x="220" y="208" text-anchor="middle">replay</text>
  <line class="qp-arrow" x1="252" y1="204" x2="284" y2="204"/>
  <polygon class="qp-head" points="290,204 282,200 282,208"/>
  <rect class="qp-box b-john" x="290" y="183" width="130" height="42" rx="6"/>
  <text class="qp-small" x="355" y="200" text-anchor="middle">device catches up:</text>
  <text class="qp-small" x="355" y="216" text-anchor="middle">P is in Portfolio</text>
  <rect class="qp-box b-john" x="290" y="239" width="130" height="42" rx="6"/>
  <text class="qp-small" x="355" y="256" text-anchor="middle">snaps a photo</text>
  <text class="qp-small" x="355" y="272" text-anchor="middle">to fulfill P</text>
  <line class="qp-arrow" x1="290" y1="260" x2="258" y2="260"/>
  <polygon class="qp-head" points="252,260 260,256 260,264"/>
  <rect class="qp-box b-log" x="188" y="249" width="64" height="22" rx="4"/>
  <text class="qp-small" x="220" y="264" text-anchor="middle">P = photo</text>
  <rect class="qp-box b-log" x="188" y="305" width="64" height="22" rx="4"/>
  <text class="qp-small" x="220" y="320" text-anchor="middle">replay</text>
  <line class="qp-arrow" x1="188" y1="316" x2="156" y2="316"/>
  <polygon class="qp-head" points="150,316 158,312 158,320"/>
  <rect class="qp-box b-alice" x="20" y="295" width="130" height="42" rx="6"/>
  <text class="qp-small" x="85" y="312" text-anchor="middle">Word placeholder</text>
  <text class="qp-small" x="85" y="328" text-anchor="middle">updates by its ID</text>
  <text class="qp-small qp-muted" x="220" y="368" text-anchor="middle">every step is one state change in the log</text>
</svg>
<svg class="qp-narrow" viewBox="0 0 280 380" role="img" aria-label="Layers on one device: an Applet floats above unmodified app windows, which sit on the Windows window manager and the device. Synchronizable state changes flow between the device and a durable cloud log of state changes s1 to s6, built on Ambrosia, CRA, and Azure. A new device replays the log, so switching devices is a fail-over.">
  <text class="qp-small qp-muted" x="20" y="24">on each device</text>
  <rect class="qp-box b-app" x="40" y="38" width="90" height="30" rx="6"/>
  <text class="t-app" x="85" y="58" text-anchor="middle">Applet</text>
  <text class="qp-small" x="160" y="50">floats above any</text>
  <text class="qp-small" x="160" y="64">app window</text>
  <rect class="qp-box b-muted" x="20" y="82" width="130" height="32" rx="4"/>
  <text x="85" y="103" text-anchor="middle">unmodified apps</text>
  <text class="qp-small qp-muted" x="160" y="95">drag &amp; drop, COM,</text>
  <text class="qp-small qp-muted" x="160" y="109">clipboard formats</text>
  <rect class="qp-box b-muted" x="20" y="126" width="130" height="28" rx="4"/>
  <text x="85" y="145" text-anchor="middle">window manager</text>
  <text class="qp-small qp-muted" x="160" y="145">Windows</text>
  <rect class="qp-box b-muted" x="20" y="166" width="130" height="28" rx="4"/>
  <text x="85" y="185" text-anchor="middle">device</text>
  <text class="qp-small qp-muted" x="160" y="178">desktop, tablet,</text>
  <text class="qp-small qp-muted" x="160" y="192">or large display</text>
  <line class="qp-arrow" x1="85" y1="204" x2="85" y2="234"/>
  <polygon class="qp-head" points="85,197 81,205 89,205"/>
  <polygon class="qp-head" points="85,241 81,233 89,233"/>
  <text class="qp-small qp-muted" x="97" y="216">[Synchronizable]</text>
  <text class="qp-small qp-muted" x="97" y="230">state changes</text>
  <rect class="qp-box b-log" x="20" y="244" width="250" height="36" rx="6"/>
  <rect class="qp-box b-log" x="30" y="252" width="30" height="20" rx="3"/>
  <rect class="qp-box b-log" x="70" y="252" width="30" height="20" rx="3"/>
  <rect class="qp-box b-log" x="110" y="252" width="30" height="20" rx="3"/>
  <rect class="qp-box b-log" x="150" y="252" width="30" height="20" rx="3"/>
  <rect class="qp-box b-log" x="190" y="252" width="30" height="20" rx="3"/>
  <rect class="qp-box b-log" x="230" y="252" width="30" height="20" rx="3"/>
  <text class="qp-small" x="45" y="266" text-anchor="middle">s1</text>
  <text class="qp-small" x="85" y="266" text-anchor="middle">s2</text>
  <text class="qp-small" x="125" y="266" text-anchor="middle">s3</text>
  <text class="qp-small" x="165" y="266" text-anchor="middle">s4</text>
  <text class="qp-small" x="205" y="266" text-anchor="middle">s5</text>
  <text class="qp-small" x="245" y="266" text-anchor="middle">s6</text>
  <text class="qp-small t-log" x="145" y="300" text-anchor="middle">durable log of state changes</text>
  <text class="qp-small qp-muted" x="145" y="316" text-anchor="middle">(Ambrosia, CRA, Azure)</text>
  <text class="qp-small" x="145" y="344" text-anchor="middle">a new device replays the log,</text>
  <text class="qp-small" x="145" y="360" text-anchor="middle">so switching devices is a fail-over</text>
</svg>
</div>
<div class="caption">One Interaction Promise from creation to fulfillment, crossing an application (Word), a second device and user (John, on site), and time (it is filled later). Each step is one change to shared state; the other device catches up by replaying the log. The layer view shows where an Applet sits on a device and where its state lives.</div>

Each of the four cornerstones maps to one part of the design:

- **Device:** each client keeps a local copy of shared state, and a device that joins replays the log. Moving activity to another machine is a special case of fail-over.
- **Application:** Applets are independent programs that float above the window manager. They reach unmodified programs through drag and drop, the system clipboard, and COM plugins, rather than living inside a browser or one sharing app.
- **User:** the Portfolio that carries your own work between devices also passes it to a collaborator. Individual tools are collaborative tools, and vice versa.
- **Time:** an Interaction Promise is a placeholder for content that does not exist yet. It can be fulfilled later, and more than once.

## System and toolkit

**Platform.** SurfaceFleet runs on Windows and is written in C# with the .NET Framework and Windows Presentation Foundation (WPF).

**Shared state.** We built a custom infrastructure on top of Ambrosia, an open-source system that captures state changes in a deterministically replayable log, persisted through Azure. Ambrosia uses CRA, which virtualizes connections between devices, so the system is robust to IP address changes. Clients in a federation reach the shared state through a federation-specific connection string.

**Programming model.** Developers tag a property as `[Synchronizable]` and subscribe to `ModelUpdated` events for remote changes. They write no extra logic for distributed failure cases. The toolkit handles basic types, images, colors, lists, and dictionaries, and developers can add their own classes with a C# `DataContract`.

**Working with existing apps.** Dragging an image Applet puts three formats on the drag: a file path to a copy of the image, a bitmap in several formats for unmodified programs, and an internal ID for SurfaceFleet components. Plugins use COM to integrate with Word, Illustrator, Photoshop, and PowerPoint. In Word, a Promise is an invisible bookmark with a unique ID around a placeholder image; on fulfillment, SurfaceFleet finds the ID and replaces the content.

**Trust.** Clients must run an organizationally approved operating system image. Windows device attestation through the CPU's Trusted Platform Module (TPM) checks this before a device receives the key to a federation's shared state.

{% include figure.html path="assets/img/blog/moving-work-across-devices/fig5-architecture.png" class="img-fluid rounded z-depth-1" alt="Layered architecture diagram. Top: Applets such as Portfolios, Tools, and Media primitives. Below: cross-application features (access through WPF, Win32, and COM APIs, multiple formats in the system clipboard, SurfaceFleet plugins) connecting to Word, Illustrator, PowerPoint, and others. Middle: client devices. Bottom: API and tools (Synchronizeable tagging, data contracts, property change notification, state data at about 60 ms latency and transient data at about 15 ms), over Ambrosia, CRA, and Azure." %}
<div class="caption">The system, toolkit, and underlying technical components. The figure lists a latency of about 60 ms for state data and about 15 ms for transient data, which bypasses the log. Figure from the paper.</div>

## Interaction techniques

SurfaceFleet has five mechanisms that users combine to unbind content and tools:

1. **Portfolios:** like an art portfolio case, a shared portal for content and tools. A Portfolio wiggles when something is dragged over it, shows its contents sticking out on every device that has access, and gives an item back as a floating Applet on a double-tap.
2. **Interaction Promises:** placeholders for content that is not available yet. All placeholders linked to the same Applet update when it changes, locally, on another device, or by another user. A Promise can also return a Container with several options to choose from.
3. **Tools:** Applets for generic commands, such as a Color Picker that samples a pixel from any device, a Camera tool, Tele-point and Tele-type for passing your mouse or keyboard to another device, Screen Grab, Extract (a snapshot of the visible page), and a Clipboard tool.
4. **Media Primitives:** single pieces of content (images, rich text, or colors) lifted into floating Applets that can be dropped into Word, Illustrator, PowerPoint, Photoshop, File Explorer, or other Applets.
5. **Containers:** a fanned-out sheaf of items that works as a multi-object visual clipboard. Linked to the Clipboard tool and shared through a Portfolio, it becomes a distributed clipboard.

{% include figure.html path="assets/img/blog/moving-work-across-devices/fig8-promises.png" class="img-fluid rounded z-depth-1" alt="Three steps. Instantiation: an empty image Applet is dragged into a Word document, creating a dynamic link. First fulfillment: an image is dropped from File Explorer onto the Applet. Update: all placeholders in the Word document show the new image." %}
<div class="caption">Interaction Promises: (1) the user drags an empty placeholder into a document, then (2) populates it with an initial image, or (3) receives updates when the linked Applet is fulfilled from other devices or by other users. Figure from the paper.</div>

## What do we learn?

The paper presents design probes rather than a controlled study. The lessons below come from building and using the system ourselves and from preliminary pilot feedback.

### 1. A few concepts combine into many workflows

In our usage scenario, an architect named Alice creates a Portfolio, collects site photos into a Container on her tablet on the train and opens them on her office desktop, inserts a placeholder that her on-site co-worker John fills with a photo, and, in a meeting, works with two colleagues who pass their mouse pointers to a large display. All four steps reuse the same five mechanisms. Because sharing is split into small Applets and Tools rather than whole files, people can share parts of documents and other intermediate work.

{% include figure.html path="assets/img/blog/moving-work-across-devices/fig2-usage-scenario.png" class="img-fluid rounded z-depth-1" alt="Four-row illustrated storyboard: S1, main interface and Portfolio creation from the SurfaceFleet taskbar; S2, dragging images on a tablet into a Container in a Portfolio that syncs to a desktop; S3, Alice drags an empty image Applet into Word and shares it, John takes a photo to fulfill it, and her document auto-updates; S4, colleagues share telepointers on a large display and extract copies of a page." %}
<div class="caption">The usage scenario spans devices, applications, users, and time with Portfolios, Containers, Interaction Promises, and Tools. Figure from the paper.</div>

### 2. Current tools each cover only part of the problem

Each kind of unbinding has precedents, but existing services handle them separately: file and folder sync (Dropbox, OneDrive, Google Drive), messaging silos (Slack, Teams), second screens and handoff (Apple Continuity), and collaborative editing inside one app (Office 365, Google Docs). SurfaceFleet is the first distributed system to address all four cornerstones simultaneously, for both tools and pieces of content, with only a few toolkit abstractions and interactions.

{% include figure.html path="assets/img/blog/moving-work-across-devices/fig3-comparison.png" class="img-fluid rounded z-depth-1" alt="Comparison grid with four columns: Device unbound, App unbound, User unbound, Time unbound. The top row shows SurfaceFleet's approach in each (Portfolios and Containers, Applets, Promises, Promises). The bottom row shows current approaches: file-centric sync such as Dropbox, application-centric silos, separate tools for single and multiple users, and collaboration within application silos." %}
<div class="caption">SurfaceFleet (top row) compared with current approaches (bottom row) for each cornerstone. Figure from the paper.</div>

### 3. The current design suits small, active work

The interface is meant for transient work-objects in active use, not the long tail of items in cold storage: a single active project rather than an archive, small groups rather than large meetings, and semi-private sharing among trusted peers rather than open participation. Leaving Applets around like papers on a messy desk might not scale to hundreds of them. These choices belong to the current probes, not to the four cornerstones, the distributed-systems foundation, or the toolkit.

## Limitations

- **No formal evaluation.** We make no strong claims that SurfaceFleet makes distributed work "better", and it is not yet developed enough to deploy for real work or longitudinal studies.
- **Feedback and awareness.** The interface does not show which devices or users a Portfolio is shared with, or who is connected. We rely on social protocol, which leaves room for dragging something private into the wrong Applet.
- **No device discovery.** The system does not sense nearby devices or services to form federations automatically.
- **Packaging.** The technical foundation has many layers that would need better packaging to be usable and maintainable, and the system runs on Windows only. At the time, we were investigating distributed interactions for JavaScript and Android through Ambrosia and CRA.

## Publication

Frederik Brudy, David Ledo, Michel Pahud, Nathalie Henry Riche, Christian Holz, Anandghan Waghmare, Hemant Bhaskar Surale, Marcus Peinado, Xiaokuan Zhang, Shannon Joyner, Badrish Chandramouli, Umar Farooq Minhas, Jonathan Goldstein, William Buxton, and Ken Hinckley. 2020. SurfaceFleet: Exploring Distributed Interactions Unbounded from Device, Application, User, and Time. In *Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (UIST '20)*, Virtual Event, USA. ACM, 7-21. [https://doi.org/10.1145/3379337.3415874](https://doi.org/10.1145/3379337.3415874)

### BibTeX

```bibtex
@inproceedings{brudy2020surfacefleet,
  title     = {SurfaceFleet: Exploring Distributed Interactions Unbounded from Device, Application, User, and Time},
  author    = {Brudy, Frederik and Ledo, David and Pahud, Michel and Henry Riche, Nathalie and Holz, Christian and Waghmare, Anandghan and Surale, Hemant Bhaskar and Peinado, Marcus and Zhang, Xiaokuan and Joyner, Shannon and Chandramouli, Badrish and Minhas, Umar Farooq and Goldstein, Jonathan and Buxton, William and Hinckley, Ken},
  booktitle = {Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology},
  series    = {UIST '20},
  location  = {Virtual Event, USA},
  pages     = {7--21},
  year      = {2020},
  publisher = {ACM},
  doi       = {10.1145/3379337.3415874}
}
```

## Contact

Questions? Feel free to contact:

- **Frederik Brudy**, Microsoft Research and University College London: f.brudy [at] cs.ucl.ac.uk
- **David Ledo**, Microsoft Research and University of Calgary: david.ledo [at] ucalgary.ca
- **Hemant Bhaskar Surale**, Microsoft Research and University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures are from the paper (© 2020 ACM) and are reproduced here by the authors.</p>
