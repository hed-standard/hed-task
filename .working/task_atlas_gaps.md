# Gap Analysis: 78-Task Catalog vs. Cognitive Atlas

This document analyzes coverage gaps in both directions: tasks in our curated catalog that are absent from the Cognitive Atlas, and experimental paradigm families in the Atlas that are absent from our catalog.

## 1. Atlas Composition Overview

The Cognitive Atlas contains **849 entries** organized into **366 groups** (your preliminary grouping in `task_groups.json`). These entries are heterogeneous — they include experimental paradigms, standardized neuropsychological tests, questionnaires, clinical rating scales, stimulus databases, and physiological procedures. Breaking them down:

| Category | Approx. Count | Examples |
|:---|:---:|:---|
| Experimental behavioral paradigms | ~550 | Stroop, flanker, oddball, gambling tasks |
| Standardized neuropsych tests / batteries | ~90 | WAIS subtests, NIH Toolbox, RAVLT, TMT |
| Clinical rating scales / questionnaires | ~100 | BDI, STAI, autism diagnostic scales |
| Physiological / sensory procedures | ~30 | Pain stimulation, acupuncture, gustatory |
| Stimulus databases / methods | ~20 | IAPS, resting state, passive viewing |
| Other / uncategorized | ~60 | Film viewing, meditation, eating/drinking |

Our 78-task catalog is intentionally focused on **experimental behavioral paradigms** used in cognitive neuroscience research. It does not aim to cover clinical instruments, questionnaires, or physiological procedures. The gap analysis below reflects this scope.

## 2. Our Tasks Missing from the Atlas (8 tasks)

These are established experimental paradigms in our catalog that have **no entry** in the Cognitive Atlas:

| # | Task | Literature Significance | Gap Severity |
|:---|:---|:---|:---:|
| 41 | Affective Priming Task | Fazio et al. (1986); foundational automatic evaluation paradigm | High |
| 47 | Mismatch Negativity Paradigm | Naatanen et al.; most-studied pre-attentive ERP, major clinical biomarker | **Critical** |
| 58 | Multiple Object Tracking | Pylyshyn & Storm (1988); standard attention paradigm | High |
| 60 | Dot-Probe Task | MacLeod et al. (1986); dominant anxiety/attentional-bias paradigm | **Critical** |
| 68 | Useful Field of View (UFOV) | Ball & Owsley; aging/driving fitness standard | Moderate |
| 71 | Mnemonic Discrimination Task | Stark lab; leading hippocampal pattern-separation measure | Moderate |
| 75 | Social Incentive Delay (SID) | Social analog of MID; autism/social motivation research | Moderate |
| 78 | Weapons Identification Task | Payne (2001); leading implicit-bias experimental paradigm | High |

The MMN and Dot-Probe absences are particularly notable given their prominence in the literature — the MMN has thousands of published studies and is a candidate clinical biomarker for schizophrenia, while the dot-probe is the most widely used experimental paradigm in anxiety research.

## 3. Atlas Experimental Paradigms Missing from Our Catalog

Below are Atlas groups representing experimental paradigm families that are NOT covered by our 78 tasks and represent potentially valuable additions. I've organized these by domain and rated their priority for inclusion.

### 3.1 Attention and Perception

| Atlas Group | Size | Description | Priority |
|:---|:---:|:---|:---:|
| selective_attention_tasks | 3 | Divided auditory attention, inter-modal selective attention | Medium |
| auditory_perception_tasks | 12 | Dichotic listening, tone discrimination, pitch monitoring | **High** |
| motion_perception_tasks | 4 | Dot motion (random dot kinematogram), motion discrimination | **High** |
| figure_ground_and_perceptual_tasks | 8 | Embedded figures, contour integration, Kanizsa figures | Medium |
| bistability_tasks | 4 | Bistable percepts, visual illusion susceptibility, Muller-Lyer | Medium |
| contrast_detection_task | 1 | Contrast detection at threshold | Low |
| visual_perception_tasks | 11 | Retinotopic mapping, vernier discrimination, coherent motion | Medium |

**Key gap:** Our catalog has no auditory-perception paradigms beyond the oddball and MMN. The random dot kinematogram (dot motion task) is a foundational perceptual decision-making paradigm (Newsome, Shadlen) that is absent from our catalog but well-represented in the Atlas.

### 3.2 Memory and Learning

| Atlas Group | Size | Description | Priority |
|:---|:---:|:---|:---:|
| directed_forgetting_tasks | 3 | Directed forgetting, think/no-think, retrieval-induced forgetting | **High** |
| source_and_context_memory | 4 | Remember/know, recency judgment, source memory | **High** |
| prospective_memory_tasks | 2 | Prospective memory, delayed intentions | Medium |
| encoding_tasks | 4 | Incidental and intentional encoding paradigms | Low |
| contextual_inference_tasks | 3 | Predictive inference, hidden state decision-making | Medium |
| learning_and_transfer_tasks | 3 | Contextual cueing, acquired equivalence, attribute amnesia | Medium |

**Key gap:** Directed forgetting and source/context memory are major research areas with their own theoretical frameworks. The remember/know paradigm (Tulving) is arguably among the most important memory paradigms — its absence from our catalog is a significant gap.

### 3.3 Language

| Atlas Group | Size | Description | Priority |
|:---|:---:|:---|:---:|
| reading_decoding_tasks | 5 | Nonword repetition, word attack, TOWRE | Medium |
| syntactic tasks (multiple) | ~4 | Syntactic acceptability judgment, syntactic discrimination | Medium |
| artificial_grammar_learning | — | Artificial grammar learning (Reber paradigm) | Medium |

**Key gap:** Our catalog covers core language tasks well. The main gap is the artificial grammar learning paradigm (Reber, 1967), which is the classic implicit learning paradigm and bridges language with memory research.

### 3.4 Decision-Making and Reward

| Atlas Group | Size | Description | Priority |
|:---|:---:|:---|:---:|
| bandit_tasks | 3 | Volatile bandit, contextual bandit, correlated bandits | **High** |
| cambridge_gambling_tasks | 2 | Cambridge Gambling Task, Cambridge Risk Task | Medium |
| food_choice_tasks | 4 | Dietary decisions, food choice paradigms | Low |
| intertemporal_choice_tasks | 4 | Multi-attribute decision-making, value-based choice | Medium |
| mixed_gambles_task | 1 | Mixed gambles (Tom et al., 2007) | Medium |

**Key gap:** Multi-armed bandit tasks are the dominant paradigm in computational psychiatry and reinforcement-learning research but are absent from our catalog. They are arguably more important than several of our existing decision-making tasks.

### 3.5 Social Cognition and Emotion

| Atlas Group | Size | Description | Priority |
|:---|:---:|:---|:---:|
| moral_judgment_tasks | 2 | Moral dilemma task, social norm processing | Medium |
| social_influence_tasks | 3 | Social influence on preferences, emotion, risk | Medium |
| deception_task | 1 | Deception detection/production | Low |
| implicit_association_task | 1 | IAT (Greenwald et al.) | **High** |
| interoception_tasks | 4 | Heartbeat detection, breath-holding, thirst | Medium |

**Key gap:** The Implicit Association Test (Greenwald, McGhee, & Schwartz, 1998) is one of the most cited and debated paradigms in all of psychology but is absent from our catalog. Interoception tasks are a growing area connecting emotion, body representation, and clinical research.

### 3.6 Motor and Action

| Atlas Group | Size | Description | Priority |
|:---|:---:|:---|:---:|
| gesture_and_praxis_tasks | 2 | Ideational praxis, pantomime | Low |
| visuomotor_tasks | 1 | Visuomotor rotation / adaptation | Medium |
| mental_imagery_tasks | 3 | Imagined movement, imagined objects/scenes | Medium |
| driving_and_tracking_tasks | 3 | Tracking tasks, driving simulation | Low |

### 3.7 Reasoning and Problem-Solving

| Atlas Group | Size | Description | Priority |
|:---|:---:|:---|:---:|
| reasoning_tasks | 8 | Raven's matrices, deductive/inductive reasoning, analogical reasoning | **High** |
| transitive_inference_task | 1 | Transitive inference | Medium |
| cognitive_reflection_test | 1 | Cognitive Reflection Test (Frederick, 2005) | Medium |

**Key gap:** Raven's Progressive Matrices is one of the most widely used measures of fluid intelligence. Our catalog has the Wason Selection Task and Remote Associates Test but is weak on reasoning paradigms overall.

## 4. Priority Recommendations for Catalog Expansion

Based on the gap analysis, here are the highest-priority paradigms to consider adding to our catalog, ranked by research impact and distinctiveness from existing tasks:

| Priority | Paradigm | Rationale |
|:---|:---|:---|
| 1 | Multi-armed Bandit Task | Dominant computational-psychiatry paradigm; explore-exploit tradeoff |
| 2 | Random Dot Kinematogram (Dot Motion) | Foundational perceptual decision-making paradigm (Shadlen/Newsome) |
| 3 | Implicit Association Test (IAT) | Among the most cited paradigms in psychology |
| 4 | Remember/Know Paradigm | Tulving's dual-process memory framework; extremely influential |
| 5 | Directed Forgetting Task | Core memory-control paradigm |
| 6 | Raven's Progressive Matrices | Standard fluid-intelligence measure; massive literature |
| 7 | Dichotic Listening | Classic selective-attention paradigm (Broadbent/Cherry) |
| 8 | Artificial Grammar Learning | Reber's implicit-learning paradigm; bridges language and memory |
| 9 | Heartbeat Detection (Interoception) | Growing body-awareness research area |
| 10 | Think/No-Think Task | Anderson's memory-suppression paradigm |

## 5. Structural Differences

Beyond individual task coverage, our catalog and the Cognitive Atlas differ in important structural ways:

**Our catalog's strengths relative to the Atlas:**
- Each task has a curated description, cognitive concepts, 3 key + 4 recent references, and 8–15 task variations
- Tasks are organized by cognitive theme with explicit cross-referencing
- EEGManyLabs mapping provides EEG/ERP component associations
- Computational model connections (via the supplement's Part II)

**Atlas strengths relative to our catalog:**
- Much broader coverage (849 vs. 78 entries)
- Formal concept ontology with concept classes and hierarchical relationships
- Machine-readable JSON with unique IDs for every task and concept
- Crowdsourced definitions with community curation (though quality varies)
- Links between tasks and concepts create a formal knowledge graph

**Atlas weaknesses:**
- 293 of 849 entries (35%) have zero associated concepts
- Definition quality varies dramatically — some are one sentence, some are detailed paragraphs, some are descriptions of stimulus databases rather than tasks
- Many entries are clinical instruments (rating scales, questionnaires) rather than experimental paradigms, and these are intermixed without clear categorization
- No systematic reference lists, task variations, or connections to computational models
- Uncurated — entries reflect the specific interests and effort levels of whoever contributed them, leading to uneven coverage

## 6. Atlas Groups That Do NOT Correspond to Experimental Tasks

For reference, these Atlas groups represent non-experimental entries (clinical instruments, questionnaires, batteries, physiological procedures) that fall outside our catalog's scope. This is not a gap — it reflects a deliberate difference in scope:

Clinical rating scales (~42 entries), personality/self-report questionnaires (~47 entries), neuropsychological test batteries (~55 entries), pain/sensory stimulation procedures (~18 entries), child development measures (~22 entries), and miscellaneous non-task entries (resting state, eating/drinking, meditation).
