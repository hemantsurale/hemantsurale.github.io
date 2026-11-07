---
layout: post
title: Who moves the real block?
date: 2018-04-21 10:00:00-0400
description: A conformity spectrum for XR, and what goes out of sync when collaborators share objects that are physical for some and virtual for others.
tags: xr collaboration ar vr
categories: papers
thumbnail: /assets/img/publication_preview/CHI18.png
related_posts: false
_styles: |
  .qp-fig { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0 0; }
  .qp-fig svg { flex: 1 1 380px; min-width: 0; max-width: 540px; height: auto; }
  .qp-fig svg.qp-plane { flex: 1 1 220px; max-width: 320px; }
  .qp-fig text { fill: var(--global-text-color); font-size: 13px; }
  .qp-fig .qp-small { font-size: 12px; }
  .qp-fig .qp-bold { font-weight: 700; font-size: 14px; }
  .qp-fig .qp-muted { fill: var(--global-text-color-light); }
  .qp-fig path, .qp-fig polyline, .qp-fig line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .qp-fig .qp-cell { fill: none; stroke: var(--global-text-color-light); stroke-width: 1; opacity: 0.6; }
  .qp-fig .qp-real { fill: var(--global-text-color-light); fill-opacity: 0.35; stroke: var(--global-text-color); stroke-width: 1.5; }
  .qp-fig .qp-virtual { fill: var(--global-theme-color); fill-opacity: 0.2; stroke: var(--global-theme-color); stroke-width: 1.5; stroke-dasharray: 3 3; }
  .qp-fig .qp-table { stroke: var(--global-text-color); stroke-width: 2; }
  .qp-fig .qp-desync { stroke: #e07b39; stroke-width: 2; stroke-dasharray: 5 4; }
  .qp-fig .qp-resync { stroke: #2e9e6a; stroke-width: 2; }
  .qp-fig .t-desync { fill: #e07b39; }
  .qp-fig .t-resync { fill: #2e9e6a; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Jeremy Hartmann<sup>*</sup>, Hemant Bhaskar Surale<sup>*</sup>, Aakar Gupta, Daniel Vogel<br>
University of Waterloo<br>
<sup>*</sup>Authors have contributed equally to this work.<br>
<em>Workshop paper · CHI 2018, Montreal, QC, Canada</em>
<div class="qp-links">
<a href="{{ '/assets/pdf/Conformity.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://arxiv.org/abs/2004.05235" class="btn btn-sm z-depth-0" role="button">arXiv</a>
<a href="{{ '/publications/' | relative_url }}#hartmann2020using" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/who-moves-the-real-block/fig1-3-spectrum-and-contexts.png" class="img-fluid rounded z-depth-1" alt="A chart with reality-virtuality on the horizontal axis and conformity from none to full on the vertical axis, with four areas A, B, C, D. Beside it, four sketches of a person at a table with four blocks: B in AR and C in VR with two real and two virtual blocks, A using a tablet with real blocks on the table, and D in VR where the table and blocks are all virtual." %}
<div class="caption">The conformity spectrum and the four usage contexts plotted on it. A uses a tablet next to real blocks (no conformity), B is in AR with two virtual and two real blocks (high conformity), C is in VR where two virtual blocks and the table are aligned with real ones (high conformity), and D is in VR with everything virtual (no conformity). The sketches are arranged in the same positions as on the chart. Figures 1 to 3 from the paper.</div>

## Quick facts

Jeremy Hartmann and Hemant Bhaskar Surale (University of Waterloo) contributed equally to this four-page workshop paper. It proposes a vocabulary rather than reporting a study: a second axis for describing XR environments, and a way to reason about what breaks when people in different environments work on the same physical objects. Overall, our work contributes:

1. **The conformity spectrum:** an axis orthogonal to Milgram et al.'s reality-virtuality continuum that describes how closely the virtual content adheres to the real-world physical characteristics surrounding the user.
2. **Four block states** (owned, shared, unowned, orphaned) that describe, from one collaborator's view, whether an object is physical or virtual for each person.
3. **An analysis of six collaboration scenarios** between four usage contexts, using awareness and synchronization to find where collaboration breaks down and what could mitigate it.

## Abstract

The concept of a conformity spectrum is introduced to describe the degree to which virtualization adheres to real world physical characteristics surrounding the user. This is then used to examine interaction challenges when collaborating across different levels of virtuality and conformity.

## The idea: track where each block is real

When two people collaborate across XR, the same block can be a physical object for one of them and a virtual one for the other. Moving a block is then not symmetric: if the block is physical for someone else, only that person can actually move it in the real world.

<div class="qp-fig">
<svg viewBox="0 0 440 290" role="img" aria-label="A two by two grid of block states from one collaborator's view. Shared: the block is physical for me and for them. Owned: physical for me, virtual for them. Unowned: virtual for me, physical for them. Orphaned: virtual for both. Solid squares are physical blocks and dashed squares are virtual blocks.">
  <text class="qp-bold" x="12" y="22">Four block states, from one collaborator's view</text>
  <text class="qp-small qp-muted" x="217" y="52" text-anchor="middle">real for them</text>
  <text class="qp-small qp-muted" x="363" y="52" text-anchor="middle">virtual for them</text>
  <text x="12" y="111">real for me</text>
  <text x="12" y="207">virtual for me</text>
  <rect class="qp-cell" x="148" y="62" width="138" height="90" rx="8"/>
  <text class="qp-bold" x="217" y="86" text-anchor="middle">Shared</text>
  <rect class="qp-real" x="179" y="98" width="26" height="26" rx="2"/>
  <rect class="qp-real" x="229" y="98" width="26" height="26" rx="2"/>
  <text class="qp-small qp-muted" x="192" y="142" text-anchor="middle">me</text>
  <text class="qp-small qp-muted" x="242" y="142" text-anchor="middle">them</text>
  <rect class="qp-cell" x="294" y="62" width="138" height="90" rx="8"/>
  <text class="qp-bold" x="363" y="86" text-anchor="middle">Owned</text>
  <rect class="qp-real" x="325" y="98" width="26" height="26" rx="2"/>
  <rect class="qp-virtual" x="375" y="98" width="26" height="26" rx="2"/>
  <text class="qp-small qp-muted" x="338" y="142" text-anchor="middle">me</text>
  <text class="qp-small qp-muted" x="388" y="142" text-anchor="middle">them</text>
  <rect class="qp-cell" x="148" y="158" width="138" height="90" rx="8"/>
  <text class="qp-bold" x="217" y="182" text-anchor="middle">Unowned</text>
  <rect class="qp-virtual" x="179" y="194" width="26" height="26" rx="2"/>
  <rect class="qp-real" x="229" y="194" width="26" height="26" rx="2"/>
  <text class="qp-small qp-muted" x="192" y="238" text-anchor="middle">me</text>
  <text class="qp-small qp-muted" x="242" y="238" text-anchor="middle">them</text>
  <rect class="qp-cell" x="294" y="158" width="138" height="90" rx="8"/>
  <text class="qp-bold" x="363" y="182" text-anchor="middle">Orphaned</text>
  <rect class="qp-virtual" x="325" y="194" width="26" height="26" rx="2"/>
  <rect class="qp-virtual" x="375" y="194" width="26" height="26" rx="2"/>
  <text class="qp-small qp-muted" x="338" y="238" text-anchor="middle">me</text>
  <text class="qp-small qp-muted" x="388" y="238" text-anchor="middle">them</text>
  <rect class="qp-real" x="148" y="264" width="14" height="14" rx="2"/>
  <text class="qp-small" x="170" y="276">physical block</text>
  <rect class="qp-virtual" x="294" y="264" width="14" height="14" rx="2"/>
  <text class="qp-small" x="316" y="276">virtual block</text>
</svg>
<svg class="qp-plane" viewBox="0 0 280 296" role="img" aria-label="Scenario 1 from B's side. Step 1: B's real block and its virtual counterpart match. Step 2: A moves the block on a tablet, so the virtual block moves away and B's real block is out of sync. Step 3: B moves the real block by hand to the new position, and the two match again.">
  <text class="qp-bold" x="12" y="22">When A moves B's real block</text>
  <text x="12" y="50">1. In sync</text>
  <line class="qp-table" x1="24" y1="96" x2="256" y2="96"/>
  <rect class="qp-real" x="60" y="68" width="28" height="28" rx="2"/>
  <rect class="qp-virtual" x="60" y="68" width="28" height="28" rx="2"/>
  <text class="qp-small qp-muted" x="104" y="88">real and virtual match</text>
  <text x="12" y="130">2. A moves it on a tablet</text>
  <line class="qp-table" x1="24" y1="176" x2="256" y2="176"/>
  <rect class="qp-real" x="60" y="148" width="28" height="28" rx="2"/>
  <rect class="qp-virtual" x="180" y="148" width="28" height="28" rx="2"/>
  <line class="qp-desync" x1="96" y1="162" x2="170" y2="162"/>
  <polyline class="qp-desync" points="164,156 171,162 164,168"/>
  <text class="qp-small t-desync" x="134" y="194" text-anchor="middle">B is out of sync</text>
  <text x="12" y="222">3. B moves the real block</text>
  <line class="qp-table" x1="24" y1="268" x2="256" y2="268"/>
  <rect class="qp-real" x="180" y="240" width="28" height="28" rx="2"/>
  <rect class="qp-virtual" x="180" y="240" width="28" height="28" rx="2"/>
  <line class="qp-resync" x1="66" y1="254" x2="170" y2="254"/>
  <polyline class="qp-resync" points="164,248 171,254 164,260"/>
  <text class="qp-small t-resync" x="134" y="286" text-anchor="middle">in sync again</text>
</svg>
</div>
<div class="caption">Each block's state depends on who has its physical counterpart. In Scenario 1, A (on a tablet) moves a block that is physical for B (in AR). The shared virtual block moves, but B's real block stays put, so B is out of sync until B moves the real block by hand.</div>

## What we propose

**A second axis for XR.** Milgram et al.'s reality-virtuality continuum classifies XR technologies (AR, VR, MR) by how virtual they are. We add an orthogonal axis, conformity, for how closely interaction entities in the user's locus of attention adhere to the physical characteristics of their surroundings. We focus on conformity to time, space, and geometry, but material texture, tactile texture, mass, sound, and smell could be included as well. The motivation is a missing name for environments where the geometry of virtual objects is mapped directly onto real objects occupying the same space, which we call a virtual-conforming reality.

**The corners of the space.** Bottom-left: digital interactions with no connection to the immediate physical environment, such as conventional computers. Upper-left: perfect Spatial Augmented Reality, where every digital interaction maps one-to-one to physical geometry. Upper-right: a fully virtual environment that perfectly conforms to the immediate real environment. Bottom-right: what most people consider current VR, which does not conform to the real environment at all.

**A shared task.** Two remote users coordinate moving four blocks into a final configuration, and either can move any block. The task stands in for real-world collaborations around a physical artifact, such as assembling furniture, repairing a kitchen sink, or getting a 3D printer working. We examine each pairing with two aspects of remote collaboration:

- **Awareness** of each other's actions, to communicate movements and to prevent simultaneous access to the same block.
- **Synchronization** of the shared task state across both collaborators.

Our hypothesis is that the collaborative experience is a function of the relative conformity between the usage contexts and the objects in them. The paper's Table 1 rates awareness and synchronization for each context and block state. For orphaned and unowned blocks, both are good in every context. The problems are with owned and shared blocks:

| Context | Owned and shared blocks |
|:--|:--|
| A (tablet) | not applicable |
| B (AR) | partial awareness, poor sync |
| C (VR, conforming) | good awareness, poor sync |
| D (VR) | not applicable |

<div class="caption">Awareness and synchronization when manipulating owned or shared blocks, summarized from Table 1 of the paper.</div>

**What the scenarios show.**

- **A and B (tablet and AR).** If A moves a block that is real for B, B's real block and its moved virtual version diverge. B needs the displacement shown clearly (for example with a colour change or ghosting) and a prompt to move the real block. A has to re-sync all of A's own real blocks at the end: low conformity means synchronization is postponed until after collaboration.
- **A and C (tablet and conforming VR).** C stays aware, since the moved block is now visibly virtual, but synchronization is harder: C may not know a block no longer conforms until C tries to manipulate it. Visual cues need to show that a block has moved.
- **C and D, B and D (high conformity with fully virtual VR).** When D moves a block, the shared virtual space updates, but the high-conformity partner's physical blocks fall out of sync. D's action is closer to a suggestion: agency over the physical blocks stays with the partner, who decides whether to apply it.
- **B and C (AR and conforming VR).** Moving an owned block keeps the shared state in sync, but moving a shared or unowned block desynchronizes the other person. One option is to let each collaborator move only owned blocks; otherwise some mechanism is needed to maintain the shared state.
- **A and D (no conformity on either side).** Awareness and synchronization in the shared virtual space are trivial, but once both agree on the result, each has to leave the interaction and arrange the physical blocks separately.

## Open questions

1. **Other tasks.** The scenarios cover a single block-arrangement task. Many other interactions with different constraints could be analyzed the same way.
2. **Evaluation.** Future work will evaluate tasks defined on this space, with usability experiments on remote and co-located collaboration under different levels of conformity.
3. **Re-establishing conformity.** How should a system show that a block no longer conforms, prompt someone to move it, or limit who can move which blocks?
4. **More dimensions.** The paper considers time, space, and geometry. How conformity to texture, mass, sound, or smell would change the analysis is open, and depends on whether virtualizing technologies can synthesize them.

## Publication

Jeremy Hartmann\*, Hemant Bhaskar Surale\*, Aakar Gupta, and Daniel Vogel. 2020. Using Conformity to Probe Interaction Challenges in XR Collaboration. Workshop paper, CHI 2018, April 21 to 26, 2018, Montreal, QC, Canada. arXiv:2004.05235. [https://arxiv.org/abs/2004.05235](https://arxiv.org/abs/2004.05235) (\*equal contribution)

### BibTeX

```bibtex
@misc{hartmann2020using,
  title         = {Using Conformity to Probe Interaction Challenges in XR Collaboration},
  author        = {Hartmann, Jeremy and Surale, Hemant Bhaskar and Gupta, Aakar and Vogel, Daniel},
  year          = {2020},
  eprint        = {2004.05235},
  archivePrefix = {arXiv},
  primaryClass  = {cs.HC},
  url           = {https://arxiv.org/abs/2004.05235},
  note          = {Workshop paper, CHI 2018, Montreal, QC, Canada. The first two authors contributed equally}
}
```

## Contact

Questions? Feel free to contact:

- **Jeremy Hartmann**, University of Waterloo: j3hartma [at] uwaterloo.ca
- **Hemant Bhaskar Surale**, University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures from the paper are reproduced under its CC BY 4.0 license.</p>
