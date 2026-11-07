---
layout: post
title: Does explaining an AI moderator make it easier to trust?
date: 2026-02-22 10:00:00-0400
description: We showed 31 people an AI threat classifier with three kinds of explanations. Clearer explanations went with more trust, and most preferred LIME.
tags: xai trust moderation
categories: papers
thumbnail: /assets/img/publication_preview/WSDM26_trustm.png
related_posts: false
_styles: |
  .qp-fig { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0 0; }
  .qp-fig svg { flex: 1 1 380px; min-width: 0; max-width: 520px; height: auto; }
  .qp-fig svg.qp-side { flex: 1 1 220px; max-width: 300px; }
  .qp-fig text { fill: var(--global-text-color); font-size: 13px; }
  .qp-fig .qp-small { font-size: 12px; }
  .qp-fig .qp-bold { font-weight: 700; font-size: 14px; }
  .qp-fig .qp-muted { fill: var(--global-text-color-light); }
  .qp-fig path, .qp-fig polyline, .qp-fig line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .qp-fig .qp-box { fill: none; stroke: var(--global-text-color-light); stroke-width: 1; }
  .qp-fig .qp-accent-box { fill: none; stroke: var(--global-theme-color); stroke-width: 1.8; }
  .qp-fig .qp-link { stroke: var(--global-text-color-light); stroke-width: 1.2; }
  .qp-fig .qp-arrowhead { fill: var(--global-text-color-light); }
  .qp-fig .t-accent { fill: var(--global-theme-color); }
  .qp-fig .t-ig { fill: #8e6fd1; }
  .qp-fig .t-lime { fill: #e07b39; }
  .qp-fig .t-att { fill: #2e9e6a; }
  .qp-fig .qp-dot { fill: #8e6fd1; }
  .qp-fig .qp-open { fill: none; stroke: #8e6fd1; stroke-width: 1.5; }
  .qp-fig .qp-bar { fill: #e07b39; }
  .qp-fig .qp-cell { fill: #2e9e6a; }
  .qp-fig .qp-corr { stroke: var(--global-text-color); }
  .qp-fig .qp-w1 { stroke-width: 1.4; }
  .qp-fig .qp-w2 { stroke-width: 2.2; }
  .qp-fig .qp-w3 { stroke-width: 3; }
  .qp-fig .qp-dashed { stroke-dasharray: 5 4; }
  .qp-header { text-align: center; margin-bottom: 1.5rem; }
  pre.highlight { white-space: pre-wrap; word-break: break-word; }
  .qp-links { margin-top: 0.75rem; }
  .qp-links a.btn { color: var(--global-text-color); border: 1px solid var(--global-text-color); padding: 0.25rem 1rem; margin: 0.2rem; }
  .qp-links a.btn:hover { color: var(--global-theme-color); border-color: var(--global-theme-color); }
---

<div class="qp-header">
Kamalakkannan Ravi<sup>1</sup>, Hemant Surale<sup>2</sup>, Jiann-Shiun Yuan<sup>1</sup><br>
<sup>1</sup>University of Central Florida &nbsp;&middot;&nbsp; <sup>2</sup>University of Waterloo<br>
<em>Workshop paper · WEB&amp;GRAPH 2026: Workshop on Web &amp; Graphs, Responsible Intelligence, and Social Media at WSDM 2026, Boise, ID, USA</em><br>
🏆 Best Paper Award
<div class="qp-links">
<a href="{{ '/assets/pdf/TRuSTM.pdf' | relative_url }}" class="btn btn-sm z-depth-0" role="button">PDF</a>
<a href="https://doi.org/10.1145/3779211.3793172" class="btn btn-sm z-depth-0" role="button">ACM DL</a>
<a href="{{ '/publications/' | relative_url }}#ravi2026trustm" class="btn btn-sm z-depth-0" role="button">Publication</a>
<a href="#bibtex" class="btn btn-sm z-depth-0" role="button">BibTeX</a>
</div>
</div>

{% include figure.html path="assets/img/blog/explaining-an-ai-moderator/fig1-interface.png" class="img-fluid rounded z-depth-1" alt="Screenshot of the Total Freedom Interface. A Telegram message reading 'Go figure they are criminals lock them away for a very long time' is labeled Judicial Threat with probability 0.99. Below it, XAI Method 2 shows prediction probabilities, a bar chart of word contributions led by 'lock' at 0.85, and the message with influential words highlighted." %}
<div class="caption">The Total Freedom Interface (TFI), our moderation interface, showing the LIME explanation (XAI Method 2) for one message: the predicted label, the score for each class, each word's contribution, and the influential words highlighted in the text. Figure from the paper.</div>

## Quick facts

A threat classifier can be accurate and still hard to act on if moderators cannot see why it chose a label. We put a classifier's prediction next to three kinds of explanations and measured how much 31 people trusted it, how clear they found it, and how long they took. Led by Kamalakkannan Ravi (University of Central Florida). Overall, our work contributes:

1. **An evaluation framework for trust and explainability**, built into a live moderation interface that places three complementary explanation views next to the model's prediction and maps them to measured trust, usability, and perceived effectiveness.
2. **A within-subjects user study** (n=31) of how explanation clarity, response time, and format affect trust, usability, and moderation behavior.
3. **Statistical evidence** linking explanation clarity to trust, and trust to perceived moderation effectiveness.
4. **Design guidelines**: prioritize low cognitive load visualizations, keep response times fast enough for real-time decisions, and explore hybrid explanation formats.

## Abstract

As online social platforms face increasing challenges in moderating nuanced threats across web communities, trust in automated moderation systems is critical. TRuST-M examines this problem in web and social-network environments, where moderation occurs under time pressure and public scrutiny. Large language models (LLMs) achieve strong classification performance but remain difficult to interpret, reducing user confidence and accountability in real-world workflows. This work introduces TRuST-M, a human-centered evaluation framework that studies how explanation methods influence trust, understanding, and perceived effectiveness in LLM-based threat moderation. The framework integrates a RoBERTa model pretrained on 1M Telegram posts and fine-tuned on 15,063 labeled messages across three classes (No Threat, Judicial Threat, Non-Judicial Threat), achieving 95.8% accuracy, weighted F1 of 0.96, and Cohen's kappa of 0.94 on a held-out set. A within-subjects study (n=31) evaluated six messages of varying complexity with predictions and three explanation methods: Integrated Gradients, LIME, and attention visualization. LIME was preferred by 58% of participants for its intuitive word-level highlights, though longer response times were noted, while attention visualizations were rated least helpful due to unclear token emphasis. Statistical analysis revealed positive correlations between explanation clarity, user trust, and confidence in moderation decisions. We frame TRuST-M as an interpretable decision-support system for human-in-the-loop moderation, emphasizing calibrated trust and moderator comprehension rather than model replacement. The findings show that explanation clarity and response time meaningfully shape trust and decision confidence in AI-assisted moderation, advancing transparent, usable, and trustworthy moderation tools for the social web.

## The idea: one verdict, three explanations

TRuST-M stands for Threat Reasoning and User Study of Trust in Moderation. The goal is to support a human moderator, not replace one. A participant picks a message, the classifier labels it, and three explanation methods each show which words drove the label. We then asked whether people trusted the label, whether the explanations were clear, and whether the tool would help them moderate.

<div class="qp-fig">
<svg viewBox="0 0 500 384" role="img" aria-label="Pipeline for one message. A Telegram reply goes into a RoBERTa threat classifier, which outputs a score for each of three classes: No Threat 0.01, Judicial Threat 0.99, Non-Judicial Threat 0.00. The prediction is then explained by three methods: Method 1, Integrated Gradients, adds up gradients along a path from a blank input to the message; Method 2, LIME, drops words and fits a simple local model, giving word weights such as lock 0.85; Method 3 shows the last layer's attention weights. Participants saw only the labels XAI Method 1, 2, and 3.">
  <text class="qp-small qp-muted" x="250" y="16" text-anchor="middle">a Telegram reply from the test set</text>
  <rect class="qp-box" x="10" y="24" width="480" height="34" rx="8"/>
  <text class="qp-small" x="250" y="45" text-anchor="middle">“Go figure they are criminals lock them away for a very long time.”</text>
  <line class="qp-link" x1="250" y1="58" x2="250" y2="74"/>
  <polygon class="qp-arrowhead" points="245,74 255,74 250,81"/>
  <rect class="qp-accent-box" x="60" y="82" width="380" height="44" rx="8"/>
  <text class="qp-bold t-accent" x="250" y="101" text-anchor="middle">RoBERTa threat classifier</text>
  <text class="qp-small qp-muted" x="250" y="118" text-anchor="middle">1M Telegram replies + 15,063 labeled messages</text>
  <line class="qp-link" x1="250" y1="126" x2="250" y2="140"/>
  <polygon class="qp-arrowhead" points="245,140 255,140 250,147"/>
  <rect class="qp-box" x="10" y="148" width="118" height="24" rx="6"/>
  <text class="qp-small qp-muted" x="69" y="164" text-anchor="middle">No Threat 0.01</text>
  <rect class="qp-accent-box" x="136" y="148" width="170" height="24" rx="6"/>
  <text class="qp-small t-accent" x="221" y="164" text-anchor="middle">Judicial Threat 0.99</text>
  <rect class="qp-box" x="314" y="148" width="176" height="24" rx="6"/>
  <text class="qp-small qp-muted" x="402" y="164" text-anchor="middle">Non-Judicial Threat 0.00</text>
  <path class="qp-link" d="M221,172 L221,184 M85,198 L85,184 L415,184 L415,198 M250,184 L250,198"/>
  <rect class="qp-box" x="10" y="198" width="150" height="160" rx="8"/>
  <text class="qp-bold" x="85" y="218" text-anchor="middle">Method 1</text>
  <text class="qp-small t-ig" x="85" y="234" text-anchor="middle">Integrated Gradients</text>
  <line class="qp-link" x1="36" y1="268" x2="134" y2="268"/>
  <circle class="qp-open" cx="30" cy="268" r="6"/>
  <circle class="qp-dot" cx="46" cy="268" r="2.5" opacity="0.3"/>
  <circle class="qp-dot" cx="59" cy="268" r="2.5" opacity="0.4"/>
  <circle class="qp-dot" cx="72" cy="268" r="2.5" opacity="0.5"/>
  <circle class="qp-dot" cx="85" cy="268" r="2.5" opacity="0.6"/>
  <circle class="qp-dot" cx="98" cy="268" r="2.5" opacity="0.7"/>
  <circle class="qp-dot" cx="111" cy="268" r="2.5" opacity="0.8"/>
  <circle class="qp-dot" cx="124" cy="268" r="2.5" opacity="0.9"/>
  <circle class="qp-dot" cx="140" cy="268" r="6"/>
  <text class="qp-small qp-muted" x="30" y="292" text-anchor="middle">blank</text>
  <text class="qp-small qp-muted" x="140" y="292" text-anchor="middle">input</text>
  <text class="qp-small" x="85" y="318" text-anchor="middle">adds up gradients on</text>
  <text class="qp-small" x="85" y="333" text-anchor="middle">the way from a blank</text>
  <text class="qp-small" x="85" y="348" text-anchor="middle">input to the message</text>
  <rect class="qp-box" x="175" y="198" width="150" height="160" rx="8"/>
  <text class="qp-bold" x="250" y="218" text-anchor="middle">Method 2</text>
  <text class="qp-small t-lime" x="250" y="234" text-anchor="middle">LIME</text>
  <text class="qp-small" x="240" y="255" text-anchor="end">lock</text>
  <rect class="qp-bar" x="244" y="246" width="45" height="10"/>
  <text class="qp-small qp-muted" x="293" y="255">0.85</text>
  <text class="qp-small" x="240" y="271" text-anchor="end">criminals</text>
  <rect class="qp-bar" x="244" y="262" width="6.4" height="10"/>
  <text class="qp-small qp-muted" x="254" y="271">0.12</text>
  <text class="qp-small" x="240" y="287" text-anchor="end">are</text>
  <rect class="qp-bar" x="244" y="278" width="4.8" height="10"/>
  <text class="qp-small qp-muted" x="253" y="287">0.09</text>
  <text class="qp-small" x="250" y="318" text-anchor="middle">drops words, watches</text>
  <text class="qp-small" x="250" y="333" text-anchor="middle">the score change, and</text>
  <text class="qp-small" x="250" y="348" text-anchor="middle">fits a simple model</text>
  <rect class="qp-box" x="340" y="198" width="150" height="160" rx="8"/>
  <text class="qp-bold" x="415" y="218" text-anchor="middle">Method 3</text>
  <text class="qp-small t-att" x="415" y="234" text-anchor="middle">Attention</text>
  <g>
    <rect class="qp-cell" x="367" y="248" width="13" height="8" opacity="0.8"/><rect class="qp-cell" x="383" y="248" width="13" height="8" opacity="0.2"/><rect class="qp-cell" x="399" y="248" width="13" height="8" opacity="0.4"/><rect class="qp-cell" x="415" y="248" width="13" height="8" opacity="0.15"/><rect class="qp-cell" x="431" y="248" width="13" height="8" opacity="0.6"/><rect class="qp-cell" x="447" y="248" width="13" height="8" opacity="0.25"/>
    <rect class="qp-cell" x="367" y="259" width="13" height="8" opacity="0.3"/><rect class="qp-cell" x="383" y="259" width="13" height="8" opacity="0.7"/><rect class="qp-cell" x="399" y="259" width="13" height="8" opacity="0.2"/><rect class="qp-cell" x="415" y="259" width="13" height="8" opacity="0.5"/><rect class="qp-cell" x="431" y="259" width="13" height="8" opacity="0.15"/><rect class="qp-cell" x="447" y="259" width="13" height="8" opacity="0.4"/>
    <rect class="qp-cell" x="367" y="270" width="13" height="8" opacity="0.15"/><rect class="qp-cell" x="383" y="270" width="13" height="8" opacity="0.45"/><rect class="qp-cell" x="399" y="270" width="13" height="8" opacity="0.85"/><rect class="qp-cell" x="415" y="270" width="13" height="8" opacity="0.2"/><rect class="qp-cell" x="431" y="270" width="13" height="8" opacity="0.35"/><rect class="qp-cell" x="447" y="270" width="13" height="8" opacity="0.6"/>
    <rect class="qp-cell" x="367" y="281" width="13" height="8" opacity="0.5"/><rect class="qp-cell" x="383" y="281" width="13" height="8" opacity="0.15"/><rect class="qp-cell" x="399" y="281" width="13" height="8" opacity="0.3"/><rect class="qp-cell" x="415" y="281" width="13" height="8" opacity="0.75"/><rect class="qp-cell" x="431" y="281" width="13" height="8" opacity="0.2"/><rect class="qp-cell" x="447" y="281" width="13" height="8" opacity="0.45"/>
  </g>
  <text class="qp-small" x="415" y="318" text-anchor="middle">shows the last layer's</text>
  <text class="qp-small" x="415" y="333" text-anchor="middle">attention weights</text>
  <text class="qp-small" x="415" y="348" text-anchor="middle">over the tokens</text>
  <text class="qp-small qp-muted" x="250" y="378" text-anchor="middle">Participants saw only the labels “XAI Method 1, 2, 3”</text>
</svg>
<svg class="qp-side" viewBox="0 0 280 384" role="img" aria-label="What we measured. Ratings of explanation clarity, usability, trust, and moderation effectiveness, connected by Spearman correlations: clarity and trust 0.49, usability and trust 0.38, trust and moderation effectiveness 0.62.">
  <text class="qp-small qp-muted" x="140" y="16" text-anchor="middle">ratings from 31 participants</text>
  <rect class="qp-box" x="10" y="34" width="125" height="48" rx="8"/>
  <text x="72.5" y="54" text-anchor="middle">Explanation</text>
  <text x="72.5" y="71" text-anchor="middle">clarity</text>
  <rect class="qp-box" x="145" y="34" width="125" height="48" rx="8"/>
  <text x="207.5" y="63" text-anchor="middle">Usability</text>
  <line class="qp-corr qp-w2" x1="78" y1="82" x2="118" y2="160"/>
  <text class="qp-small" x="92" y="126" text-anchor="end">ρ = 0.49</text>
  <line class="qp-corr qp-w1 qp-dashed" x1="202" y1="82" x2="162" y2="160"/>
  <text class="qp-small" x="190" y="126">ρ = 0.38</text>
  <rect class="qp-accent-box" x="70" y="160" width="140" height="44" rx="8"/>
  <text class="qp-bold t-accent" x="140" y="187" text-anchor="middle">Trust</text>
  <line class="qp-corr qp-w3" x1="140" y1="204" x2="140" y2="282"/>
  <text class="qp-small" x="150" y="248">ρ = 0.62</text>
  <rect class="qp-box" x="30" y="282" width="220" height="48" rx="8"/>
  <text x="140" y="311" text-anchor="middle">Moderation effectiveness</text>
  <text class="qp-small qp-muted" x="140" y="356" text-anchor="middle">Spearman correlations, all p &lt; 0.05</text>
  <text class="qp-small qp-muted" x="140" y="374" text-anchor="middle">line weight follows ρ</text>
</svg>
</div>
<div class="caption">One message goes through the classifier, which scores each class, and then through three explanation methods. The example message and the LIME word weights come from the interface screenshot in the paper; the Method 1 and Method 3 sketches are schematic. The second panel shows the ratings we collected and how strongly they correlated.</div>

The classifier uses a three-class taxonomy that separates lawful punitive speech from calls for violence:

- **No Threat:** strongly worded but non-harmful expressions ("Live free or die").
- **Judicial Threat:** advocacy for legal or punitive action ("Lock her up").
- **Non-Judicial Threat:** direct or implied calls for unlawful violence ("It's time to start a civil war"). Mixed cases default to this class.

## System

**Data.** We collected replies from far-left and far-right Telegram channels (far-right content dominated because those channels post more). Of 2.3M replies, 15,076 were annotated with criminology-informed guidelines, and 15,063 remained after resolving borderline cases. We split them into training (10,554), development (2,248), and test (2,261) sets.

**Model.** We first pretrained RoBERTa on 1M unlabeled Telegram replies (12,260 steps, about 137 hours) and then fine-tuned it on the labeled set for 100 epochs (about 168 hours). On the held-out test set it reached 95.8% accuracy, a weighted F1 of 0.96, and a Cohen's kappa of 0.94.

**Interface.** The Total Freedom Interface is a web app built with Streamlit. A participant selects a message, presses Predict, sees a color-coded label with class probabilities, and then opens each explanation method. Each method uses its own view (heatmaps, bar charts, or token highlighting). The interface logs the time from Start Timer to End Timer for each message.

## Study

**Task.** Each participant reviewed six Telegram replies from the test set, two per class: one "easy" (explicit threat markers, unanimous annotator agreement) and one "hard" (implicit, sarcastic, or context-dependent language). For every message they viewed the prediction and examined all three explanation methods. The message order was fixed.

**Participants.** 31 people (15 female, 16 male) aged 18 to 44. Thirteen had prior moderation experience, including two professional moderators, and 81.2% had never used an explainable AI tool.

**Procedure.** About 30 minutes: an onboarding demo with a neutral example and a content warning (5 minutes), the six messages (10 to 15 minutes), and a survey with open-ended feedback (10 minutes).

**Measures.** Interaction time per message; 1 to 5 ratings of trust in the model, perceived explainability, and moderation effectiveness; a 19-item usability assessment; and open-ended comments. After cleaning (fewer than 4% of trials dropped), the data covered 558 explanation interactions and 186 timed tasks.

{% include figure.html path="assets/img/blog/explaining-an-ai-moderator/fig3-ratings.png" class="img-fluid rounded z-depth-1" alt="Bar chart of mean Likert ratings from 1 to 5: usability 4.27, trust 4.25, explainability 4.16, and moderation 3.99, each with error bars." %}
<div class="caption">Mean ratings across all explanation methods: usability 4.27, trust 4.25, explainability 4.16, and confidence in moderation decisions 3.99 (error bars show standard deviation). Figure from the paper.</div>

## What do we learn?

### 1. Clearer explanations went with more trust

Participants who found the explanations clearer also trusted the model more (Spearman ρ = 0.493, p = 0.005). Trust in turn correlated with perceived moderation effectiveness (ρ = 0.62, p < 0.01), and so did explainability (ρ = 0.66, p < 0.01). So even with a model that is 95.8% accurate, trust went hand in hand with understanding its output.

{% include figure.html path="assets/img/blog/explaining-an-ai-moderator/fig5-correlation.png" class="img-fluid rounded z-depth-1" alt="Four by four heatmap of Spearman correlations among usability, trust, explainability, and moderation. Off-diagonal values: usability-trust 0.38, usability-explain 0.57, usability-moderation 0.72, trust-explain 0.49, trust-moderation 0.62, explain-moderation 0.66." %}
<div class="caption">Spearman correlations among the four ratings. Figure from the paper.</div>

Usability got the highest ratings (mean 4.27, SD 0.56) but correlated less with trust (ρ = 0.38, p < 0.05) than clarity did. Comments said the hard part was interpreting the explanations, not using the controls. Usability helps, but it is not enough for trust. Education level was linked to usability satisfaction: 83% of PhD holders rated the system "Excellent" or "Best Imaginable", while 50% of Bachelor's degree holders rated it "Good" or "Fair" (χ²(6, N=31) = 20.99, p < 0.05). We found no significant effects of gender, age, or prior AI/ML experience.

### 2. LIME was the favorite, attention the least helpful

18 of 31 participants (58%) preferred Method 2 (LIME) for its color-coded highlights and ranked word importance. P23: "Method 2 was the most helpful, as it clearly separated the words that were important for the label given." The catch was speed. P10: "Faster XAI method 2 implementation would help [for a] real-world use case."

Method 3 (attention) drew the most criticism for confusing scores and emphasis on uninformative tokens. P19 noted that it "was often giving higher attention to special tokens like inverted commas". Many participants were also confused when different methods highlighted different words for the same message, and a few suggested combining methods. P13 thought combining Methods 2 and 3 "would be easier for general people to interpret".

### 3. Messages that looked severe got a second look

Hard messages usually took longer: the easy No Threat message took 112.5 s on average and its hard counterpart 160.3 s. The exception was the judicial threat: the easy one took the longest of all six (183.2 s), longer than the hard one (147.6 s). When content looks clearly severe, people may spend extra time checking the AI's output before accepting it.

{% include figure.html path="assets/img/blog/explaining-an-ai-moderator/fig2-interaction-time.png" class="img-fluid rounded z-depth-1" alt="Bar chart of mean interaction time for the six messages: No-Threat easy 112.5 s, No-Threat hard 160.3 s, Judicial-Threat easy 183.2 s, Judicial-Threat hard 147.6 s, Non-Judicial-Threat easy 148.3 s, Non-Judicial-Threat hard 166.2 s, with significance brackets between pairs." %}
<div class="caption">Mean interaction time for each of the six messages, which includes reviewing the prediction and all three explanations. Figure from the paper.</div>

## Design implications

1. **Prioritize simple, local visualizations.** Highlight the words that matter and avoid visual clutter.
2. **Treat latency as a first-class design constraint.** The preferred method (LIME) was also slow to respond, and slow explanations lose value in fast-paced moderation.
3. **Adopt hybrid explanation strategies.** Combine word-level highlights with lightweight visual overviews.
4. **Match explanation depth to risk.** Offer a quick review mode for routine items and a deep review mode for critical or ambiguous ones.

## Limitations

The study had 31 participants and only two professional moderators, so the results may not hold for expert teams or large-scale operations. Message order and the mapping of method labels were fixed, which may have introduced order and framing effects. It was a single-session lab study, and LIME's latency was noted by participants but not quantified. The training data came mostly from far-right channels, which may skew predictions and increase false positives for some ideological groups. Future work includes cohorts of more than 50 moderators across platforms, randomized designs, and field deployments.

## Publication

Kamalakkannan Ravi, Hemant Surale, and Jiann-Shiun Yuan. 2026. TRuST-M: Evaluating User Trust and Explainability in LLM-Based Web Moderation Systems. In *The Nineteenth ACM International Conference on Web Search and Data Mining (WSDM Companion ’26)*, Boise, ID, USA. ACM, 73-83. [https://doi.org/10.1145/3779211.3793172](https://doi.org/10.1145/3779211.3793172). Presented at the WEB&GRAPH 2026 workshop.

### BibTeX

```bibtex
@inproceedings{ravi2026trustm,
  title     = {TRuST-M: Evaluating User Trust and Explainability in LLM-Based Web Moderation Systems},
  author    = {Ravi, Kamalakkannan and Surale, Hemant and Yuan, Jiann-Shiun},
  booktitle = {Proceedings of the Nineteenth ACM International Conference on Web Search and Data Mining},
  series    = {WSDM Companion '26},
  location  = {Boise, ID, USA},
  pages     = {73--83},
  year      = {2026},
  publisher = {ACM},
  doi       = {10.1145/3779211.3793172}
}
```

## Contact

Questions? Feel free to contact:

- **Kamalakkannan Ravi**, University of Central Florida: Kamalakkannan.Ravi [at] ucf.edu
- **Hemant Bhaskar Surale**, University of Waterloo: hemant.surale [at] gmail.com

<p class="caption">Figures from the paper are reproduced under its CC BY 4.0 license.</p>
