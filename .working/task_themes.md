# Task Themes: Organizing the 78-Task Catalog

This document organizes all 78 tasks in the catalog by thematic grouping. The initial themes are drawn from the EEGManyLabs replication project (Pavlov et al., 2021), then extended to ensure complete coverage of all tasks. Each task may appear under multiple themes when it spans multiple cognitive domains.

**Sources:** `task_type_table.md` (cross-reference table), `task_concept_eegmanylabs.md` (EEGManyLabs studies), `task_concept_supplement_references_variations_models.md` (full task descriptions and variations).

---

## 1. Attention and Selection

Paradigms in which the primary manipulation targets how the brain selects, filters, or sustains processing of specific stimuli, locations, or time windows from competing inputs. This theme covers spatial attention (covert orienting), feature-based attention (visual search, frequency tagging), temporal attention (RSVP / attentional blink), sustained attention (vigilance), and distributed/divided attention (multiple object tracking, useful field of view). The common thread is the selective gating of sensory information — what gets processed further and what gets suppressed. Key neural signatures include the N1 attention effect, N2pc, SSVEP amplitude modulation, CDA, and P3 suppression during the attentional blink.

**EEGManyLabs studies in this theme:** EML-2 (spatial attention / N1), EML-3 (visual search / N2pc), EML-4 (attentional blink / P3), EML-5 (SSVEP / frequency-tagged attention), EML-19 (temporal attention / conscious access)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 3 | Posner Spatial Cueing Task | Covert spatial orienting; EML-2 |
| 4 | Visual Search Task (Feature/Conjunction) | Feature-based selection; EML-3, EML-5 |
| 5 | Attentional Blink Task (RSVP) | Temporal attention bottleneck; EML-4, EML-19 |
| 6 | Continuous Performance Task (CPT) | Sustained attention / vigilance |
| 50 | Attention Network Test (ANT) | Alerting, orienting, and executive attention |
| 56 | Navon Task (Global-Local) | Global vs. local attentional scope |
| 58 | Multiple Object Tracking (MOT) | Divided spatial attention; EML-5 (related) |
| 59 | Psychomotor Vigilance Task (PVT) | Sustained vigilance / lapses |
| 60 | Dot-Probe Task | Attentional bias to threat cues |
| 67 | Change Detection Task (Luck-Vogel) | Visual attention / WM capacity overlap; EML-6 |
| 68 | Useful Field of View (UFOV) | Peripheral attention / processing speed |
| 69 | Sustained Attention to Response Task (SART) | Sustained attention and response withholding |

---

## 2. Inhibitory Control and Conflict Monitoring

Tasks that require suppressing a prepotent or automatic response, resolving conflict between competing response tendencies, or monitoring for errors. This theme captures the executive function component of many tasks and is central to models of cognitive control. The error-monitoring subtheme — one of the most densely studied areas in the EEGManyLabs project — measures the ERN (error-related negativity), which reflects ACC-mediated conflict detection and error processing. Conflict tasks (Stroop, Flanker, Simon) all generate response conflict between automatic and controlled processing channels.

**EEGManyLabs studies in this theme:** EML-7 (Go/No-Go N2), EML-8 (LRP / response selection), EML-9 (ERN / conflict monitoring), EML-10 (ERN × anxiety), EML-11 (affective ERN), EML-12 (ERN × anxiety), EML-13 (ERN × self-regulation), EML-24 (ERN × implicit bias)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 1 | Stroop Color-Word Task | Response conflict between reading and naming; EML-13 |
| 2 | Eriksen Flanker Task | Flanker conflict / ERN; EML-8, 9, 10, 11, 12 |
| 7 | Go/No-Go Task | Response inhibition; EML-7 |
| 8 | Stop-Signal Task | Reactive inhibition / stopping |
| 12 | Anti-Saccade Task | Saccadic inhibition |
| 55 | Simon Task | Spatial response conflict; EML-8 |
| 78 | Weapons Identification Task (Shooter Bias) | Error monitoring in social cognition; EML-24 |

---

## 3. Executive Function and Cognitive Flexibility

Higher-order control processes: set shifting, planning, rule learning, and the coordination of multiple cognitive operations. While Theme 2 focuses on the moment-to-moment conflict and inhibition, this theme addresses the broader capacity to maintain, update, and flexibly switch task rules and strategies.

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 9 | Wisconsin Card Sorting Test (WCST) | Rule learning and set shifting |
| 10 | Tower of London Task | Multi-step planning |
| 11 | Task Switching / Set Shifting Paradigm | Switch costs and reconfiguration |
| 52 | Trail Making Test (TMT) | Sequencing and set alternation |
| 57 | Operation Span Task (OSPAN) | Complex span / executive WM |
| 70 | Digit Symbol Substitution Test (DSST) | Processing speed / executive function |
| 73 | Wason Selection Task | Logical reasoning and hypothesis testing |

---

## 4. Working Memory

Paradigms that require the short-term maintenance, manipulation, or monitoring of information. Working memory is a bridge between perception and executive control — it holds current goals, maintains stimulus representations, and supports rule use. Key EEG signatures include the CDA (contralateral delay activity) for visual WM capacity and frontal midline theta for WM load / mental effort.

**EEGManyLabs studies in this theme:** EML-6 (CDA / visual WM capacity), EML-20 (frontal midline theta / Sternberg WM)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 13 | N-Back Task | Continuous WM updating |
| 14 | Sternberg Item Recognition Task | Memory scanning / WM retrieval; EML-20 |
| 15 | Delayed Match-to-Sample Task | WM maintenance over delay |
| 51 | Digit Span | Verbal WM capacity |
| 54 | Corsi Block-Tapping | Visuospatial WM capacity |
| 57 | Operation Span Task (OSPAN) | Complex span (also in Theme 3) |
| 67 | Change Detection Task (Luck-Vogel) | Visual WM capacity / CDA; EML-6 (also in Theme 1) |

---

## 5. Long-Term Memory and Learning

Tasks that probe encoding, storage, retrieval, and consolidation processes in long-term memory — including episodic memory (recognition, recall), semantic memory (associative learning), and implicit/procedural memory (sequence learning, conditioning). These paradigms form the backbone of human learning research and clinical memory assessment.

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 16 | Serial Reaction Time Task (SRTT) | Implicit sequence learning |
| 17 | Old/New Recognition Memory Task | Episodic recognition |
| 18 | Free Recall Task | Encoding and retrieval strategies |
| 19 | Paired Associates Learning Task | Associative memory |
| 23 | Probabilistic Classification Learning (Weather Prediction) | Implicit category learning |
| 24 | Motor Sequence Learning Task | Procedural motor memory |
| 53 | Rey Auditory Verbal Learning Test (RAVLT) | Verbal list learning / clinical memory assessment |
| 71 | Mnemonic Discrimination Task (MST) | Pattern separation in episodic memory |

---

## 6. Conditioning and Reinforcement Learning

Paradigms studying how organisms learn from feedback, rewards, punishments, and associative contingencies. This theme spans Pavlovian (classical) conditioning, instrumental (operant) conditioning, reversal learning, and computational models of reward prediction error. The FRN (feedback-related negativity) is a key ERP marker, reflecting the brain's response to worse-than-expected outcomes.

**EEGManyLabs studies in this theme:** EML-14 (FRN / Frank task), EML-22 (FRN / gambling feedback)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 20 | Pavlovian Fear Conditioning | Classical conditioning / fear learning |
| 21 | Instrumental / Operant Conditioning Task | Action-outcome learning |
| 22 | Reversal Learning Task | Flexible contingency updating |
| 61 | Probabilistic Stimulus Selection (Frank Task) | Go/NoGo learning from feedback; EML-14 |
| 31 | Iowa Gambling Task (IGT) | Learning from uncertain feedback; EML-22 |

---

## 7. Decision-Making Under Uncertainty and Risk

Tasks in which participants make choices under conditions of risk, ambiguity, or uncertain outcomes. This theme includes gambling paradigms, temporal discounting, and risk-taking behavior. These tasks often involve the interplay between automatic emotional/somatic signals and deliberate evaluation, as captured by the Somatic Marker Hypothesis, Prospect Theory, and related frameworks.

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 31 | Iowa Gambling Task (IGT) | Uncertainty-based learning (also in Theme 6); EML-22 |
| 32 | Balloon Analog Risk Task (BART) | Risk-taking propensity |
| 33 | Delay Discounting Task | Temporal discounting / impulsivity |
| 63 | Monetary Incentive Delay (MID) | Reward anticipation and motivation |

---

## 8. Social Cognition and Social Decision-Making

Tasks that involve understanding others' mental states (theory of mind), reading social cues, social evaluation, strategic social interaction, and social motivation. This theme extends from basic mentalizing to economic games involving trust, fairness, and cooperation.

**EEGManyLabs studies in this theme:** EML-24 (ERN / implicit racial bias)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 34 | Ultimatum Game | Fairness evaluation / social norms |
| 35 | Trust Game | Trust and reciprocity |
| 36 | Dictator Game | Altruism and social preference |
| 37 | False Belief / Theory of Mind Task | Mentalizing / perspective-taking |
| 38 | Reading the Mind in the Eyes Task | Social perception from eye region |
| 62 | Prisoner's Dilemma | Cooperation vs. defection |
| 75 | Social Incentive Delay (SID) | Social reward motivation |
| 78 | Weapons Identification Task (Shooter Bias) | Implicit bias in social cognition; EML-24 (also in Theme 2) |

---

## 9. Language Processing

Tasks probing the comprehension, production, and access of linguistic representations — including word-level processing (lexical access, phonology), sentence-level parsing, and semantic integration. The N400 is the hallmark ERP component, reflecting semantic processing difficulty.

**EEGManyLabs studies in this theme:** EML-1 (N400 / semantic violation)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 26 | Lexical Decision Task | Lexical access speed; EML-1 (related) |
| 27 | Semantic Priming Task | Spreading activation in semantic memory; EML-1 (related) |
| 28 | Picture Naming Task | Word production / retrieval |
| 29 | Sentence Comprehension / Garden-Path Task | Syntactic/semantic parsing; EML-1 |
| 30 | Phonological Awareness Task (Rhyme Judgment) | Phonological processing |
| 72 | Verb Generation Task | Word retrieval / semantic selection |

---

## 10. Emotion Processing

Tasks that measure the perception, evaluation, regulation, or influence of affective stimuli. This includes automatic attention capture by emotional content (EPN, early posterior negativity), emotion recognition from faces, affective priming, emotional interference (emotional Stroop), and deliberate regulation of emotional responses.

**EEGManyLabs studies in this theme:** EML-15 (EPN / emotional pictures), EML-23 (N170 / face-emotion perception)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 39 | Emotional Stroop Task | Emotional interference with color naming |
| 40 | Facial Emotion Recognition (Ekman Faces) | Categorization of emotional expressions; EML-15, EML-23 (related) |
| 41 | Affective Priming Task | Automatic evaluation of emotional valence |
| 42 | Emotion Regulation Task (Cognitive Reappraisal) | Deliberate downregulation of negative affect |
| 43 | IAPS Passive Viewing Task | Automatic emotional attention; EML-15 |

---

## 11. Face and Object Perception

Paradigms targeting the visual perception and recognition of faces, objects, and biological agents. The N170 is the key ERP component for face-specific processing, and the FFA (fusiform face area) is the core cortical region. These tasks range from face identity recognition to holistic vs. feature-based processing and biological motion perception.

**EEGManyLabs studies in this theme:** EML-23 (N170 / face perception)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 48 | Biological Motion Perception (Point-Light Displays) | Recognition of agents from motion cues |
| 49 | Face Processing / FFA Localizer Task | Face-specific processing; EML-23 |
| 66 | Cambridge Face Memory Test (CFMT) | Face identity memory |

---

## 12. Motor Preparation and Execution

Tasks that centrally involve motor planning, motor timing, motor sequence execution, or the neural preparation for movement. The lateralized readiness potential (LRP) is a key EEG signature of motor preparation, and the Go/No-Go N2 reflects the boundary between motor control and inhibition.

**EEGManyLabs studies in this theme:** EML-7 (Go/No-Go N2), EML-8 (LRP)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 24 | Motor Sequence Learning Task | Sequential motor skill acquisition (also in Theme 5) |
| 44 | Finger Tapping Task | Motor timing and rate control |
| 65 | Mirror Tracing Task | Visuomotor adaptation / procedural learning |

---

## 13. Consciousness and Perceptual Awareness

Paradigms that directly manipulate or measure the threshold for conscious perception — asking when and how stimuli cross the boundary from subliminal to supraliminal processing. These tasks are central to testing theories of consciousness, particularly the Global Neuronal Workspace (GNW) theory and recurrent processing accounts. Key neural markers include the P3b "ignition" at the consciousness threshold and prestimulus alpha phase effects on detection probability.

**EEGManyLabs studies in this theme:** EML-16 (alpha phase / visual detection), EML-17 (oscillatory gating of perception), EML-18 (backward masking / consciousness threshold), EML-19 (attentional blink / conscious access)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 76 | Perceptual Threshold Detection / Metacontrast Masking | Prestimulus oscillatory gating; EML-16, EML-17 |
| 77 | Backward Masking / Consciousness Threshold | GNW ignition / nonlinear P3; EML-18 |
| 5 | Attentional Blink Task (RSVP) | Temporal attention × conscious access; EML-4, EML-19 (also in Theme 1) |

---

## 14. Spatial Cognition and Navigation

Paradigms involving mental manipulation of spatial representations, spatial memory, and navigation through real or virtual environments. These tasks tap hippocampal and parietal systems for spatial processing.

**EEGManyLabs studies in this theme:** EML-21 (mental rotation ERP)

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 25 | Spatial Navigation / Virtual Morris Water Maze | Allocentric/egocentric navigation |
| 45 | Mental Rotation Task | Spatial transformation; EML-21 |
| 64 | Radial Arm Maze (Virtual) | Spatial working memory / foraging |

---

## 15. Auditory and Sensory Processing

Paradigms that use auditory (or basic sensory) stimulation to probe automatic change detection, deviance processing, and the brain's capacity to model and respond to regularities in sensory input. The oddball paradigm and mismatch negativity are foundational tools in clinical and developmental neuroscience.

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 46 | Oddball Paradigm (P300) | Target detection in auditory/visual streams |
| 47 | Mismatch Negativity (MMN) Paradigm | Pre-attentive auditory deviance detection |

---

## 16. Creativity and Insight

Tasks measuring creative or insight-based problem solving, where solutions require going beyond routine, rule-governed processing to achieve novel associations or restructure problem representations.

**Tasks:**

| # | Task | Notes |
|:---|:---|:---|
| 74 | Remote Associates Test (RAT) | Convergent creative thinking / insight |

---

## Theme Coverage Summary

The table below shows each task's primary theme(s), confirming that all 78 tasks are assigned to at least one theme.

| # | Task | Primary Theme(s) |
|:---|:---|:---|
| 1 | Stroop Color-Word Task | 2 |
| 2 | Eriksen Flanker Task | 2 |
| 3 | Posner Spatial Cueing Task | 1 |
| 4 | Visual Search Task | 1 |
| 5 | Attentional Blink Task | 1, 13 |
| 6 | Continuous Performance Task | 1 |
| 7 | Go/No-Go Task | 2, 12 |
| 8 | Stop-Signal Task | 2 |
| 9 | Wisconsin Card Sorting Test | 3 |
| 10 | Tower of London Task | 3 |
| 11 | Task Switching | 3 |
| 12 | Anti-Saccade Task | 2 |
| 13 | N-Back Task | 4 |
| 14 | Sternberg Item Recognition Task | 4 |
| 15 | Delayed Match-to-Sample Task | 4 |
| 16 | Serial Reaction Time Task | 5 |
| 17 | Old/New Recognition Memory Task | 5 |
| 18 | Free Recall Task | 5 |
| 19 | Paired Associates Learning Task | 5 |
| 20 | Pavlovian Fear Conditioning | 6 |
| 21 | Instrumental / Operant Conditioning | 6 |
| 22 | Reversal Learning Task | 6 |
| 23 | Probabilistic Classification Learning | 5 |
| 24 | Motor Sequence Learning Task | 5, 12 |
| 25 | Spatial Navigation / Morris Water Maze | 14 |
| 26 | Lexical Decision Task | 9 |
| 27 | Semantic Priming Task | 9 |
| 28 | Picture Naming Task | 9 |
| 29 | Sentence Comprehension | 9 |
| 30 | Phonological Awareness Task | 9 |
| 31 | Iowa Gambling Task | 6, 7 |
| 32 | Balloon Analog Risk Task | 7 |
| 33 | Delay Discounting Task | 7 |
| 34 | Ultimatum Game | 8 |
| 35 | Trust Game | 8 |
| 36 | Dictator Game | 8 |
| 37 | False Belief / Theory of Mind Task | 8 |
| 38 | Reading the Mind in the Eyes Task | 8 |
| 39 | Emotional Stroop Task | 10 |
| 40 | Facial Emotion Recognition | 10, 11 |
| 41 | Affective Priming Task | 10 |
| 42 | Emotion Regulation Task | 10 |
| 43 | IAPS Passive Viewing Task | 10 |
| 44 | Finger Tapping Task | 12 |
| 45 | Mental Rotation Task | 14 |
| 46 | Oddball Paradigm (P300) | 15 |
| 47 | Mismatch Negativity (MMN) Paradigm | 15 |
| 48 | Biological Motion Perception | 11 |
| 49 | Face Processing / FFA Localizer | 11 |
| 50 | Attention Network Test (ANT) | 1 |
| 51 | Digit Span | 4 |
| 52 | Trail Making Test (TMT) | 3 |
| 53 | Rey Auditory Verbal Learning Test | 5 |
| 54 | Corsi Block-Tapping | 4 |
| 55 | Simon Task | 2 |
| 56 | Navon Task (Global-Local) | 1 |
| 57 | Operation Span Task (OSPAN) | 3, 4 |
| 58 | Multiple Object Tracking (MOT) | 1 |
| 59 | Psychomotor Vigilance Task (PVT) | 1 |
| 60 | Dot-Probe Task | 1, 10 |
| 61 | Probabilistic Stimulus Selection (Frank Task) | 6 |
| 62 | Prisoner's Dilemma | 8 |
| 63 | Monetary Incentive Delay (MID) | 7 |
| 64 | Radial Arm Maze (Virtual) | 14 |
| 65 | Mirror Tracing Task | 12 |
| 66 | Cambridge Face Memory Test | 11 |
| 67 | Change Detection Task (Luck-Vogel) | 1, 4 |
| 68 | Useful Field of View (UFOV) | 1 |
| 69 | Sustained Attention to Response Task (SART) | 1 |
| 70 | Digit Symbol Substitution Test (DSST) | 3 |
| 71 | Mnemonic Discrimination Task (MST) | 5 |
| 72 | Verb Generation Task | 9 |
| 73 | Wason Selection Task | 3 |
| 74 | Remote Associates Test (RAT) | 16 |
| 75 | Social Incentive Delay (SID) | 8 |
| 76 | Perceptual Threshold Detection | 13 |
| 77 | Backward Masking / Consciousness Threshold | 13 |
| 78 | Weapons Identification Task (Shooter Bias) | 2, 8 |

---

## Theme Statistics

| # | Theme | Task Count | EEGMany Studies |
|:---|:---|:---:|:---:|
| 1 | Attention and Selection | 12 | EML-2, 3, 4, 5, 19 |
| 2 | Inhibitory Control and Conflict Monitoring | 7 | EML-7, 8, 9, 10, 11, 12, 13, 24 |
| 3 | Executive Function and Cognitive Flexibility | 7 | — |
| 4 | Working Memory | 7 | EML-6, 20 |
| 5 | Long-Term Memory and Learning | 8 | — |
| 6 | Conditioning and Reinforcement Learning | 5 | EML-14, 22 |
| 7 | Decision-Making Under Uncertainty and Risk | 4 | EML-22 |
| 8 | Social Cognition and Social Decision-Making | 8 | EML-24 |
| 9 | Language Processing | 6 | EML-1 |
| 10 | Emotion Processing | 5 | EML-15, 23 |
| 11 | Face and Object Perception | 3 | EML-23 |
| 12 | Motor Preparation and Execution | 3 | EML-7, 8 |
| 13 | Consciousness and Perceptual Awareness | 3 | EML-16, 17, 18, 19 |
| 14 | Spatial Cognition and Navigation | 3 | EML-21 |
| 15 | Auditory and Sensory Processing | 2 | — |
| 16 | Creativity and Insight | 1 | — |

**Total unique task assignments:** 84 (78 tasks, some appearing in 2 themes)
**Themes with EEGManyLabs coverage:** 12 of 16
**Themes without EEGManyLabs coverage:** Executive Function (3), Long-Term Memory (5), Auditory/Sensory Processing (15), Creativity/Insight (16)
