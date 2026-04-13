# Inclusion/Exclusion Rationale: Cognitive Atlas Gap Analysis

**Date:** April 13, 2026
**Purpose:** Document the systematic evaluation of Cognitive Atlas experimental paradigms for inclusion in our task catalog. This analysis started from the 849 Atlas entries, filtered for scope, evaluated against explicit criteria, and produced 15 new task additions (Tasks 79–93).

---

## 1. Filtering Process

### 1.1 Starting Population

The Cognitive Atlas contains 849 task entries. Our existing catalog covers 78 tasks. After matching (see `task_atlas_crossref.md`), approximately 70 Atlas entries correspond to tasks already in our catalog (including close matches and variants). The remaining ~780 entries were evaluated for potential inclusion.

### 1.2 Scope Filtering

The first filter removed entries outside the catalog's scope — experimental behavioral paradigms used in cognitive neuroscience. Removed categories:

| Category | Approx. Count | Examples | Reason Excluded |
|:---|:---:|:---|:---|
| Clinical rating scales / questionnaires | ~100 | BDI, STAI, autism diagnostic scales | Not experimental paradigms |
| Standardized neuropsych batteries | ~90 | WAIS subtests, NIH Toolbox, CVLT | Assessment instruments, not paradigms |
| Physiological / sensory procedures | ~30 | Pain stimulation, acupuncture, heat | Not cognitive paradigms |
| Stimulus databases / passive methods | ~20 | Resting state, passive viewing, film | Not active experimental tasks |
| Child-development-specific measures | ~22 | MacArthur CDI, Bayley scales | Assessment instruments |
| Miscellaneous non-task entries | ~60 | Eating/drinking, meditation, video games | Not experimental paradigms |

This removed approximately 320 entries, leaving ~460 experimental paradigm candidates.

### 1.3 Deduplication and Variant Filtering

Many Atlas entries are variants of the same paradigm or of paradigms already in our catalog. For example:
- 4 Sternberg task variants → already have Task 11
- 3 weather prediction variants → already have Task 64
- 3 oddball variants → already have Task 53
- Multiple CPT variants → already have Task 57
- Multiple fear-conditioning variants → already have Task 33
- Multiple task-switching variants → already have Task 21
- Many are generic labels ("attention task," "memory task," "perception task") rather than specific paradigms

After removing variants and generic entries, approximately **80–100 candidate paradigms** remained for substantive evaluation.

---

## 2. Evaluation Criteria

Each candidate was evaluated on five criteria:

| Criterion | Description | Weight |
|:---|:---|:---|
| **Literature Impact** | Number of published studies, citation counts of seminal papers, active research community | High |
| **Theoretical Distinctiveness** | Does it test cognitive processes not already probed by existing catalog tasks? | High |
| **Paradigm Clarity** | Is it a well-defined, replicable experimental procedure (not a vague task family)? | Medium |
| **Computational Tractability** | Can it be modeled with established computational frameworks (DDM, RL, Bayesian)? | Medium |
| **Clinical/Applied Relevance** | Is it used in clinical neuroscience, neuropsychological assessment, or applied settings? | Medium |

A task was included if it scored high on Literature Impact AND Theoretical Distinctiveness, with at least moderate scores on the remaining criteria.

---

## 3. Included Tasks (15)

### 3.1 Perception and Perceptual Decision-Making

**Task 79: Random Dot Kinematogram (Dot Motion Task)** — INCLUDED
- *Literature Impact:* Very high. Foundational paradigm in perceptual neuroscience (Britten et al., 1992; Shadlen & Newsome, 2001). Thousands of published studies. Central to drift-diffusion model development.
- *Distinctiveness:* Fills a major gap — our catalog had no perceptual decision-making paradigm. It uniquely bridges sensory processing and evidence-accumulation decision models.
- *Rationale:* Arguably the most important missing paradigm. It is the standard tool linking single-neuron physiology to computational models of choice.

**Task 80: Biological Motion (Point-Light Walker) Task** — INCLUDED
- *Literature Impact:* High. Johansson (1973) is a classic; active research in social perception, developmental psychology, and autism.
- *Distinctiveness:* No existing catalog task probes biological motion perception, which is a distinct perceptual specialization from face processing (Task 51) or object recognition.
- *Rationale:* Fills the social perception / action understanding gap. Bridges perception and social cognition in a way no other paradigm does.

**Task 81: Global-Local (Navon) Task** — INCLUDED
- *Literature Impact:* High. Navon (1977) has >4,000 citations. Widely used in clinical (autism, ADHD, neglect) and cognitive research.
- *Distinctiveness:* Tests hierarchical visual processing — a dimension of attention not captured by spatial cueing (Task 7), flanker interference (Task 2), or visual search (Task 6).
- *Rationale:* Fills the hierarchical perception gap and has strong clinical applications.

### 3.2 Memory Control and Metamemory

**Task 82: Remember/Know Paradigm** — INCLUDED
- *Literature Impact:* Very high. Tulving (1985); Yonelinas (2002) review has >4,000 citations. The dominant behavioral tool for dual-process recognition.
- *Distinctiveness:* Our catalog has old/new recognition (Task 18) but no task that dissociates recollection from familiarity — a fundamental division in memory research.
- *Rationale:* The single most important memory paradigm absent from the catalog. Underpins the hippocampal/perirhinal dissociation that organizes much of memory neuroscience.

**Task 83: Directed Forgetting Task** — INCLUDED
- *Literature Impact:* High. Bjork (1970); MacLeod (1998) review. Active research on intentional forgetting spanning >50 years.
- *Distinctiveness:* Tests memory control — the ability to intentionally suppress or deprioritize information. No existing task probes this construct. Closely related to but distinct from retrieval practice (Task 25) and Think/No-Think (Task 84).
- *Rationale:* Fills the memory control gap. Item-method and list-method versions probe different mechanisms (encoding vs. retrieval), making it theoretically rich.

**Task 84: Think/No-Think Task** — INCLUDED
- *Literature Impact:* High. Anderson & Green (2001) in Nature. Active debates about mechanism, replicability, and clinical applications.
- *Distinctiveness:* Tests active suppression of retrieval — a unique cognitive operation not captured by directed forgetting (which affects encoding). Directly relevant to PTSD and intrusive memory research.
- *Rationale:* Fills the retrieval suppression gap. The memory analog of Go/No-Go motor inhibition, creating a conceptual bridge between executive control and memory.

### 3.3 Decision-Making and Reinforcement Learning

**Task 85: Multi-Armed Bandit Task** — INCLUDED
- *Literature Impact:* Very high. Daw et al. (2006). The dominant paradigm in computational psychiatry. Rapidly growing literature.
- *Distinctiveness:* Tests the explore-exploit tradeoff — a fundamental decision problem not captured by any existing catalog task. Iowa Gambling (Task 39) and BART (Task 38) test risk but not exploration.
- *Rationale:* Fills the explore-exploit and computational RL gap. Given the explosive growth of computational psychiatry, this is a critical addition.

**Task 86: Two-Stage Decision Task** — INCLUDED
- *Literature Impact:* High. Daw et al. (2011) in Neuron. Standard tool in the model-based/model-free RL literature.
- *Distinctiveness:* Uniquely dissociates habitual from goal-directed behavior using a specific behavioral signature (reward × transition interaction). No existing task achieves this.
- *Rationale:* Fills the model-based/model-free gap. Complementary to the bandit (Task 85) — the bandit probes exploration while the two-stage task probes planning vs. habit.

**Task 87: Implicit Association Test (IAT)** — INCLUDED
- *Literature Impact:* Very high. Greenwald et al. (1998) is among the most cited papers in psychology (>15,000 citations). The most widely administered implicit measure.
- *Distinctiveness:* Tests implicit attitudes via response-compatibility effects. No existing task measures implicit associations directly (affective priming, Task 41, is the closest but is absent from the Atlas).
- *Rationale:* Fills the implicit attitudes gap. Despite ongoing validity debates, its research impact and methodological influence are undeniable.

### 3.4 Reasoning and Intelligence

**Task 88: Raven's Progressive Matrices** — INCLUDED
- *Literature Impact:* Very high. Raven (1938); Carpenter et al. (1990). The most widely used non-verbal intelligence measure globally.
- *Distinctiveness:* Tests fluid intelligence and abstract relational reasoning. The only existing reasoning tasks in the catalog are the Wason Selection Task (Task 65, deductive logic) and Remote Associates (Task 66, creative divergent thinking). Raven's fills the inductive/analogical reasoning gap.
- *Rationale:* Fills the fluid intelligence gap. Central to the "g-factor" literature and the frontoparietal network research that connects intelligence to neural architecture.

### 3.5 Implicit Learning

**Task 89: Artificial Grammar Learning Task** — INCLUDED
- *Literature Impact:* High. Reber (1967) launched the implicit learning field. Well-cited seminal paper; active research area linking to language acquisition.
- *Distinctiveness:* Tests implicit rule learning — distinct from the implicit spatial learning tested by contextual cueing (Task 90) and from the motor sequence learning tested by SRT (Task 15).
- *Rationale:* Fills the implicit rule learning gap and bridges memory and language research. The paradigm family that defines the implicit learning field.

**Task 90: Contextual Cueing Task** — INCLUDED
- *Literature Impact:* High. Chun & Jiang (1998). Active research on implicit memory guidance of attention.
- *Distinctiveness:* Tests implicit learning of spatial configurations that guide attention. Bridges the attention and memory domains in a way no existing task does.
- *Rationale:* Fills the implicit spatial learning gap. Theoretically important because it demonstrates that long-term memory can shape attentional selection without conscious awareness.

### 3.6 Social Cognition

**Task 91: False Belief Task (Theory of Mind)** — INCLUDED
- *Literature Impact:* Very high. Wimmer & Perner (1983); Baron-Cohen et al. (1985). Foundational to developmental psychology and social neuroscience. The TPJ/mPFC mentalizing network was largely mapped using this paradigm.
- *Distinctiveness:* Tests mentalizing / theory of mind — the ability to represent others' beliefs. No existing catalog task probes ToM (our social-cognition tasks are game-theoretic: dictator, ultimatum, trust, prisoner's dilemma).
- *Rationale:* Fills the mentalizing gap. Theory of mind is arguably the most important social-cognitive construct, and the false belief task is its most influential operationalization.

### 3.7 Attention and Dual-Task Performance

**Task 92: Sustained Attention to Response Task (SART)** — INCLUDED
- *Literature Impact:* High. Robertson et al. (1997). Widely used in clinical and mind-wandering research.
- *Distinctiveness:* Tests sustained attention and attentional lapses specifically. CPT (Task 57) is related but emphasizes vigilance detection, while SART specifically probes the failure to inhibit automatic responses during monotonous performance. SART has become the standard paradigm in the mind-wandering literature.
- *Rationale:* Fills the attentional-lapse / mind-wandering gap. The connection to real-world attentional failures and TBI/ADHD research provides strong applied value.

**Task 93: Psychological Refractory Period (PRP) Paradigm** — INCLUDED
- *Literature Impact:* High. Pashler (1994) review. The definitive paradigm for studying the architecture of cognitive processing stages.
- *Distinctiveness:* Tests dual-task processing bottleneck — a fundamental constraint on human information processing not captured by any existing task. The locus-of-slack method it enables is the primary tool for determining which processing stages are serial vs. parallel.
- *Rationale:* Fills the dual-task / central bottleneck gap. Provides the methodological framework (locus-of-slack logic) that underpins much of cognitive-stage analysis.

---

## 4. Excluded Paradigms with Rationale

### 4.1 High-Priority Candidates That Were Not Included

These paradigms scored well on some criteria but were ultimately excluded, typically because they overlapped substantially with included or existing tasks, or because they are better characterized as assessment instruments than experimental paradigms.

| Paradigm | Atlas Entry | Reason Excluded |
|:---|:---|:---|
| **Source Memory Test** | source memory test | Subsumed by Remember/Know (Task 82) — source memory is a specific type of recollection that R/K can probe |
| **Moral Dilemma Task** | Moral Dilemma Task | Not a standardized paradigm — vignettes vary enormously across studies. Less computationally tractable than other additions |
| **Cyberball Task** | cyberball task | Important for social exclusion research, but narrow construct; lower theoretical distinctiveness than False Belief |
| **Probabilistic Selection Task** | Probabilistic Selection Task | Overlaps with Probabilistic Learning (Task 36) and Reversal Learning (Task 37). The Frank et al. positive/negative learning dissociation is interesting but doesn't justify a separate entry |
| **Mixed Gambles Task** | mixed gambles task | Loss aversion paradigm. Overlaps conceptually with Iowa Gambling (Task 39) and BART (Task 38). The core construct (loss aversion) can be studied within existing decision tasks |
| **Interoception / Heartbeat Detection** | (various) | Growing research area, but the paradigm is not standardized — many different methods (heartbeat counting, heartbeat discrimination, respiratory load). Better treated as a family than a single task |
| **Error Awareness Task** | error awareness task | A modified Go/No-Go (Task 3) with awareness reporting. Interesting but derivative of an existing task |
| **Visuomotor Rotation** | Visuomotor rotation task | Motor adaptation paradigm. Important in motor learning, but our catalog's motor-task coverage (SRT, Task 15) is intentionally limited to cognitive aspects of motor learning |
| **Tower of Hanoi** | Tower of Hanoi | Overlaps with Tower of London (Task 23). Both test planning; including both would be redundant |
| **Cognitive Reflection Test** | Cognitive Reflection Test | Only 3 items; better characterized as a psychometric instrument than an experimental paradigm. The underlying construct (inhibition of intuitive responses) is tested by existing tasks |
| **Deception Task** | deception task | No standardized paradigm; many different implementations. Lower literature coherence than other candidates |
| **Prospective Memory Task** | prospective memory task | Important construct, but operationalized as a modification of ongoing tasks rather than a distinctive paradigm in its own right |
| **Transitive Inference Task** | Transitive inference task | Narrower literature than Raven's (Task 88). The relational reasoning it tests is partially captured by Raven's |
| **Stop-Change Task** | stop-change task | A modification of the stop-signal task (Task 4) that adds response switching. Interesting extension but too derivative for a separate entry |

### 4.2 Medium-Priority Candidates

These have notable literatures but were excluded for specific reasons:

| Paradigm | Reason Excluded |
|:---|:---|
| **Same-Different Task** | Too generic — "same-different" describes a response format, not a specific paradigm |
| **Global-Local with Shapes** | Subsumed by Global-Local Navon task (Task 81) |
| **Rapid Serial Visual Presentation** | Overlaps with Attentional Blink (Task 5), which is a specific RSVP paradigm |
| **Simple/Choice Reaction Time** | These are building blocks of other paradigms, not standalone tasks of major theoretical interest |
| **Dual-Task Paradigm** | Too generic — "dual task" is a methodology, not a specific paradigm. The PRP (Task 93) is the most theoretically grounded dual-task paradigm |
| **Embedded Figures Test** | Primarily a psychometric instrument (Witkin's field dependence measure). Less of an experimental paradigm |
| **Digit Span / Backward Digit Span** | These are subtests of standardized batteries (WAIS), not experimental paradigms. WM span is covered by N-Back (Task 10), OSPAN (Task 12), and Reading Span (Task 48) |
| **Category Fluency** | Variant of Verbal Fluency (Task 32). Our catalog already covers this construct |
| **Hayling Sentence Completion** | Primarily a clinical instrument for response inhibition. The construct is covered by other inhibition tasks |
| **Autobiographical Memory Task** | More of a clinical interview method than a controlled experimental paradigm |
| **Letter Fluency** | Variant of Verbal Fluency (Task 32) |
| **Kanizsa Figures** | Important for illusory-contour perception, but narrow; not a full experimental paradigm in the same sense as the other entries |

### 4.3 Low-Priority / Out-of-Scope Candidates

These were quickly excluded for clear scope or quality reasons:

- **Generic task labels** (e.g., "attention task," "memory encoding task," "visual perception task") — not specific paradigms
- **Instrument-specific variants** (e.g., "Penn Fractal N-Back," "Short Penn CPT") — implementation-specific versions of paradigms already in the catalog
- **Stimulus-type labels** (e.g., "flashing checkerboard," "horizontal checkerboard") — stimulation protocols, not cognitive paradigms
- **Atlas stubs** (definition < 50 chars, zero concepts) that describe obscure or idiosyncratic procedures
- **Bodily/physiological procedures** (e.g., "cold pressor test," "heat stimulation") — not cognitive paradigms
- **Reading/literacy tests** (e.g., TOWRE, WRAT Word Reading) — standardized assessments, not experimental paradigms
- **Food/consumption tasks** (e.g., "Single item food choice task," "Dietary Decisions Task") — too narrow; the decision-making constructs they test are covered by existing tasks

---

## 5. Coverage Summary After Additions

With 15 new tasks, the catalog now covers 93 experimental paradigms across the following domains:

| Domain | Original (78) | Added (15) | Total (93) |
|:---|:---:|:---:|:---:|
| Attention and selection | 8 | 2 (SART, Global-Local) | 10 |
| Inhibition and conflict | 6 | 0 | 6 |
| Executive function and flexibility | 5 | 0 | 5 |
| Working memory | 6 | 0 | 6 |
| Long-term memory and learning | 7 | 3 (R/K, DF, TNT) | 10 |
| Conditioning and RL | 5 | 2 (Bandit, Two-Stage) | 7 |
| Decision-making | 5 | 0 | 5 |
| Social cognition | 5 | 1 (False Belief) | 6 |
| Language | 7 | 0 | 7 |
| Emotion | 5 | 0 | 5 |
| Face and object perception | 3 | 1 (Biological Motion) | 4 |
| Motor | 1 | 0 | 1 |
| Consciousness and perception | 3 | 1 (RDK) | 4 |
| Spatial cognition | 2 | 1 (Contextual Cueing) | 3 |
| Implicit learning | 1 | 1 (AGL) | 2 |
| Reasoning and intelligence | 2 | 1 (Raven's) | 3 |
| Implicit cognition | 1 | 1 (IAT) | 2 |
| Dual-task performance | 0 | 1 (PRP) | 1 |
| Creativity | 1 | 0 | 1 |

### Remaining Gaps

After these additions, the most notable remaining gaps in the catalog are:

1. **Interoception** — heartbeat detection and related tasks form a growing research area connecting body awareness, emotion, and clinical conditions, but lack a single standardized paradigm
2. **Moral cognition** — moral dilemma tasks are widely studied but lack the paradigmatic standardization of other entries
3. **Prospective memory** — an important construct but operationalized as a modification of ongoing tasks
4. **Statistical learning** — visual and auditory statistical learning paradigms are distinct from AGL and contextual cueing but are still establishing their paradigmatic identity
5. **Motor adaptation** — visuomotor rotation and force-field adaptation paradigms have substantial literatures but fall outside the catalog's primarily cognitive scope

These gaps are noted for potential future expansion but do not meet the current inclusion threshold.
