# Quality Comparison: 78-Task Catalog vs. Cognitive Atlas

This document compares the annotation quality, definitional depth, and structural completeness of entries in our curated 78-task catalog against their counterparts in the Cognitive Atlas. It addresses the question: for the tasks that appear in both resources, how do they compare in terms of usefulness to a researcher?

## 1. Comparison Framework

The two resources have fundamentally different design philosophies, which shape what "quality" means in each context:

**Our catalog** provides uniform, curated entries for each task: a scholarly description (3–5 sentences, ~300–800 characters), exactly 6 cognitive concepts, 7 references (3 foundational + 4 recent), 8–15 task variations, and connections to computational models. Every entry follows the same template and has been verified.

**The Cognitive Atlas** is a crowdsourced ontology with variable-depth entries. Each task can have a free-text definition (ranging from 4 characters to over 2,500), zero or more linked concepts from a formal ontology with concept classes, and no references, variations, or model connections. Quality depends entirely on who contributed a given entry and how much effort they invested.

The comparison below uses Atlas entries matched to our 78 tasks. Of the 78, **59 have identifiable Atlas counterparts** and 19 are absent from the Atlas entirely.

## 2. Definition Quality

### 2.1 Definition Length Distribution

For the 59 matched tasks, Atlas definition lengths vary enormously:

| Definition Length | Count | Percentage | Examples |
|:---|:---:|:---:|:---|
| Essentially empty (< 50 chars) | 5 | 8% | Visual search (4 chars), Serial reaction time (4 chars), Verbal fluency (48 chars) |
| Short (50–199 chars) | 10 | 17% | Stroop (176), Picture naming (74), IAPS (51), Mental rotation (113) |
| Medium (200–499 chars) | 22 | 37% | Go/No-Go (389), Sternberg (278), Oddball (290), Simon (264) |
| Substantial (500–999 chars) | 15 | 25% | Flanker (536), AX-CPT (558), Reading span (592), RAT (843) |
| Extensive (≥ 1000 chars) | 7 | 12% | Semantic priming (1040), Iowa Gambling (1005), Trust game (1497), Antisaccade variant (2526) |

**Average definition length:** 477 characters (median ~350).

**Key observation:** Length does not reliably predict quality. The Trust Game entry (1,497 chars) and Prisoner's Dilemma entry (1,366 chars) have lengthy definitions but zero linked concepts — they read more like encyclopedia summaries than ontologically structured entries. Conversely, the Balloon Analog Risk Task (400 chars) has a concise definition with 12 linked concepts, making it far more useful as a structured knowledge resource.

### 2.2 Definition Completeness

Five Atlas entries for major experimental paradigms have definitions shorter than 50 characters — essentially placeholder stubs:

| Task | Atlas Entry | Definition | Status |
|:---|:---|:---|:---|
| Visual Search (Task 6) | visual search task | 4 chars | Stub |
| Serial Reaction Time (Task 15) | serial reaction time task | 4 chars | Stub |
| Verbal Fluency (Task 32) | verbal fluency task | 48 chars | Near-stub |
| IAPS (Task 52) | International Affective Picture System | 51 chars | Near-stub |
| Wason Selection Task (Task 65) | Wason card selection task | 99 chars | Minimal |

These are all well-established paradigms with large literatures — their skeletal Atlas entries reflect curation gaps rather than obscurity.

### 2.3 Comparison with Our Catalog

Our catalog provides uniformly detailed descriptions for all 78 tasks. Every entry includes 3–5 sentences covering the paradigm's procedure, the cognitive processes it targets, its historical significance, and its primary research applications. This consistency is a major advantage over the Atlas, where a researcher looking up "visual search task" would find a 4-character definition, while looking up the "antisaccade task" would find a 2,526-character essay on a specific incentive-modulated variant.

## 3. Concept Annotation Quality

### 3.1 Concept Coverage

The most significant quality difference between the two resources is in concept annotation. Of the 59 matched Atlas entries:

| Concept Count | Count | Percentage | Implication |
|:---|:---:|:---:|:---|
| 0 concepts | 13 | 22% | No ontological structure at all |
| 1 concept | 11 | 19% | Minimal structure |
| 2–3 concepts | 16 | 27% | Partial annotation |
| 4–7 concepts | 13 | 22% | Reasonable annotation |
| 8+ concepts | 6 | 10% | Rich annotation |

**Average:** 2.7 concepts per matched task. **Our catalog:** 6 concepts per task (fixed).

Nearly a quarter of Atlas entries for tasks in our catalog have **zero concepts** — meaning they exist as free-text definitions disconnected from the Atlas's ontological structure. This undermines the Atlas's core value proposition as a knowledge graph linking tasks to cognitive constructs.

### 3.2 Tasks with Zero Atlas Concepts

These 13 Atlas entries have definitions but no linked concepts:

| Task | Atlas Entry | Def Length | Notes |
|:---|:---|:---:|:---|
| Sternberg Task (11) | Sternberg Directed Forgetting | 447 | Variant entry, not core paradigm |
| Verbal Fluency (32) | verbal fluency task | 48 | Stub definition too |
| Monetary Incentive Delay (42) | monetary incentive delay task | 137 | Major reward paradigm — surprising gap |
| Ultimatum Game (44) | Ultimatum Game (UG) | 185 | Game theory classic |
| Trust Game (45) | Trust game (TG) | 1,497 | Long definition but zero concepts |
| Prisoner's Dilemma (46) | prisoner's dilemma (PD) | 1,366 | Long definition but zero concepts |
| Emotion Regulation (49) | Emotion Regulation Task | 510 | Growing clinical field |
| Oddball Task (53) | roving somatosensory oddball | 491 | Variant entry, not core paradigm |
| CPT (57) | Short Penn CPT | 688 | Variant entry, not core paradigm |
| Weather Prediction (64) | reversal weather prediction | 545 | Variant entry, not core paradigm |
| Remote Associates Test (66) | Remote Associates Test | 843 | Creativity standard |
| Delay Discounting (40) | Adjusting Delay Discounting | 836 | Variant entry, not core paradigm |
| (T11 best: SternbergItemRecognition) | Sternberg Item Recognition Task | 278 | 3 concepts — better entry exists |

A notable pattern: several of these zero-concept entries are **task variants** rather than the canonical paradigm. The Atlas contains multiple entries for Sternberg tasks, oddball tasks, weather prediction, etc., and the variant entries tend to have worse annotation than the canonical ones. This reflects a common problem with crowdsourced resources — contributors add their specific experimental implementation without linking it to the broader ontology.

### 3.3 Concept Class Distribution

The Atlas organizes concepts into 10 concept classes. For the 59 matched tasks, the concept class distribution is:

| Concept Class | Tasks Linked | Notes |
|:---|:---:|:---|
| Executive/Cognitive Control | 15 | Well-represented |
| Perception | 11 | Well-represented |
| Attention | 10 | Well-represented |
| Learning and Memory | 7 | Under-represented given our catalog's coverage |
| Action | 5 | Mostly motor tasks |
| Language | 4 | Under-represented — our catalog has 7 language tasks |
| Reasoning and Decision Making | 4 | Under-represented — our catalog has many decision tasks |
| Emotion | 2 | Very under-represented |
| Social Function | 1 | Nearly absent — despite 4 social-cognition tasks matched |
| Motivation | 0 | Absent from matched tasks |

The imbalance is striking. Executive control and perception tasks are reasonably well-annotated, but emotion, social cognition, and motivation tasks are poorly linked to concepts — exactly the domains where the Atlas's game-theoretic and clinical entries tend to have long definitions but zero concept links.

## 4. Quality Tiers

Combining definition quality and concept annotation, each matched Atlas entry was assigned to a quality tier:

**Well-annotated** (definition ≥ 300 chars AND concepts ≥ 4): The entry provides a useful definition and meaningful ontological structure.

**Adequate** (definition ≥ 100 chars AND concepts ≥ 1): The entry has some useful content but is incomplete in either definition or concept coverage.

**Minimal** (definition 50–99 chars AND concepts ≥ 1, or definition ≥ 100 chars AND concepts 0): The entry exists but provides limited value.

**Skeletal** (definition < 50 chars OR concepts = 0): The entry is a stub or disconnected from the ontology.

### 4.1 Tier Distribution

| Tier | Count | % of Matched | Examples |
|:---|:---:|:---:|:---|
| Well-annotated | 12 | 20% | Flanker, Stop-Signal, WCST, BART, AX-CPT |
| Adequate | 31 | 53% | Stroop, Go/No-Go, N-Back, Iowa Gambling, Lexical Decision |
| Minimal | 3 | 5% | Picture naming, IAPS, Wason Selection |
| Skeletal | 13 | 22% | Visual search, Serial RT, Verbal fluency, Trust Game, RAT |
| (Absent) | (19) | — | DRM, Dot-Probe, MMN, Affective Priming, MOT |

**Only 20% of Atlas entries for our tasks reach "well-annotated" status.** The majority (53%) are adequate but incomplete, and 22% are essentially useless as structured knowledge resources despite being entries for major experimental paradigms.

### 4.2 Well-Annotated Atlas Entries

These 12 entries represent the Atlas at its best — where curation effort has produced genuinely useful structured descriptions:

| Task | Atlas Entry | Def (chars) | Concepts |
|:---|:---|:---:|:---:|
| Flanker Task (2) | Eriksen flanker task | 536 | 7 |
| Stop-Signal Task (4) | stop signal task | 369 | 8 |
| Posner Cueing Task (7) | Posner cueing task | 309 | 5 |
| Change Detection (9) | Change Detection Task | 460 | 4 |
| AX-CPT (14) | AX-CPT task | 558 | 4 |
| WCST (22) | Wisconsin card sorting test | 516 | 5 |
| Fear Conditioning (33) | pavlovian conditioning task | 450 | 5 |
| Probabilistic Learning (36) | Probabilistic classification task | 386 | 9 |
| BART (38) | balloon analogue risk task | 400 | 12 |
| Spatial Cueing (54) | Posner cueing task | 309 | 5 |
| WCST variant (69) | Wisconsin card sorting test | 516 | 5 |
| ANT (70) | attention networks test | 345 | 4 |

These entries tend to be executive-function and attention tasks — domains where the Atlas's cognitive ontology is most developed. Decision-making and social-cognition entries are conspicuously absent from this top tier.

## 5. Feature Comparison

Beyond definitions and concepts, the two resources differ in what they provide:

| Feature | Our Catalog | Cognitive Atlas |
|:---|:---|:---|
| **Definitions** | 3–5 sentence scholarly descriptions for all 78 tasks | Variable: 4 chars to 2,526 chars; 8% are stubs |
| **Cognitive concepts** | 6 per task (curated, consistent) | 0–12, avg 2.7; 22% have zero |
| **References** | 7 per task (3 key + 4 recent), all verified | None |
| **Task variations** | 8–15 per task, all verified | None (some variants exist as separate entries) |
| **Computational models** | Linked in supplement Part II | None |
| **ERP/EEG connections** | EEGManyLabs mapping for applicable tasks | None |
| **Formal ontology** | No (natural-language concepts) | Yes (concept classes, hierarchical relationships) |
| **Machine-readable IDs** | No | Yes (trm_/tsk_ identifiers) |
| **Knowledge graph** | Cross-reference table, themes | Task–concept links, concept–concept links |
| **Coverage** | 78 tasks (experimental paradigms only) | 849 entries (paradigms, tests, scales, procedures) |

The two resources are complementary. Our catalog provides depth, consistency, and verified scholarly content. The Atlas provides breadth, formal ontological structure, and machine-readable identifiers — but only for the fraction of entries that have been adequately curated.

## 6. Variant Fragmentation Problem

A recurring issue in the Atlas is **variant fragmentation** — where multiple entries exist for the same paradigm family, each describing a specific implementation rather than the canonical task. This causes several problems:

**Example: Sternberg paradigm** — The Atlas contains at least 4 entries: "Sternberg Item Recognition Task" (278 chars, 3 concepts), "Sternberg Recent Probes" (343 chars, 4 concepts), "Sternberg Directed Forgetting" (447 chars, 0 concepts), and "Sternberg delayed recognition task" (161 chars, 3 concepts). None is designated as the canonical entry.

**Example: Weather prediction** — Three entries: "single-task weather prediction" (451 chars, 9 concepts), "dual-task weather prediction" (500 chars, 13 concepts), "reversal weather prediction" (547 chars, 0 concepts). The best-annotated version is the dual-task variant, not the standard paradigm.

**Example: Oddball task** — Three entries: "oddball task" (290 chars, 6 concepts — the good canonical entry), "Space Fortress with Oddball" (71 chars, 0 concepts), "roving somatosensory oddball task" (491 chars, 0 concepts). The variants have longer definitions but no concepts.

This fragmentation means that a researcher searching the Atlas may find a variant rather than the canonical paradigm, and the quality of what they find depends on which entry they land on. Our catalog avoids this problem by treating variants as a structured list within each canonical task entry.

## 7. Domain-Specific Quality Patterns

Atlas annotation quality is not uniform across cognitive domains. The pattern is clear:

**Well-served domains** (typically well-annotated entries):
- Executive function / cognitive control: Flanker, Stop-Signal, WCST, AX-CPT all well-annotated
- Attention: Posner cueing, ANT, Change Detection all well-annotated
- Probabilistic learning: BART, Probabilistic classification well-annotated

**Poorly served domains** (typically skeletal or zero-concept entries):
- Social cognition / game theory: Trust Game, Prisoner's Dilemma, Ultimatum Game all have long definitions but zero concepts
- Emotion: Emotion Regulation has 510-char definition but zero concepts
- Reward / motivation: Monetary Incentive Delay has 137-char definition and zero concepts
- Creativity: Remote Associates Test has 843-char definition but zero concepts

This pattern likely reflects the research interests and expertise of the Atlas's most active contributors. The formal cognitive-control ontology (with well-defined concepts like "response inhibition," "conflict monitoring," "task set") has been more thoroughly developed than ontologies for social cognition, emotion, or creativity.

## 8. Implications for Integration

These quality findings have practical implications for any effort to bridge our catalog with the Cognitive Atlas:

**What we can import from the Atlas:**
- Formal concept IDs and concept-class assignments for well-annotated entries (~12 tasks)
- The task–concept knowledge graph structure (where it exists)
- Machine-readable task identifiers for interoperability

**What the Atlas would gain from our catalog:**
- Consistent, verified definitions for 59 tasks (replacing stubs and improving thin entries)
- Concept annotations for the 13 matched entries that currently have zero concepts
- Reference lists (entirely absent from the Atlas)
- Task variation catalogs (replacing fragmented variant entries)
- 19 new task entries for paradigms currently absent from the Atlas

**Barriers to integration:**
- Our natural-language concepts do not directly map to Atlas concept ontology terms
- The Atlas's concept hierarchy would need to be extended to cover social cognition, emotion regulation, and creativity domains adequately
- Variant fragmentation in the Atlas would need to be resolved (canonical vs. variant entries)

## 9. Summary Statistics

| Metric | Our Catalog | Cognitive Atlas (matched entries) |
|:---|:---:|:---:|
| Tasks covered | 78 | 59 of our 78 (76%) |
| Avg definition length | ~500 chars | 477 chars (but σ = 450) |
| Min definition length | ~250 chars | 4 chars |
| Entries with concepts | 78 (100%) | 46 of 59 (78%) |
| Avg concepts per task | 6.0 | 2.7 |
| Entries with references | 78 (100%) | 0 (0%) |
| Entries with variations | 78 (100%) | 0 (0%) |
| Quality consistency | Uniform | Highly variable (20% well-annotated, 22% skeletal) |
