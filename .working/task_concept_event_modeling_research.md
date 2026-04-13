# Task-Concept-Event Modeling for Neuroimaging and Behavioral Experiments

## Comprehensive Research Report

**Date:** April 11, 2026  
**Purpose:** Background research for modeling the interrelationship of tasks, cognitive concepts, and experimental events in neuroimaging and behavioral experiments.

---

## Table of Contents

1. [Executive Summary and Research Strategy](#1-executive-summary-and-research-strategy)
2. [Strategies for Attacking the Problem](#2-strategies-for-attacking-the-problem)
3. [Information Gathering Plan](#3-information-gathering-plan)
4. [The 50 Key Tasks in Behavioral and Neuroscience Research](#4-the-50-key-tasks)
   - [4.1 Attention and Executive Function Tasks](#41-attention-and-executive-function)
   - [4.2 Memory and Learning Tasks](#42-memory-and-learning)
   - [4.3 Language Tasks](#43-language)
   - [4.4 Decision-Making and Economic Tasks](#44-decision-making-and-economic)
   - [4.5 Social Cognition Tasks](#45-social-cognition)
   - [4.6 Emotion Tasks](#46-emotion)
   - [4.7 Motor Tasks](#47-motor)
   - [4.8 Perception Tasks](#48-perception)
5. [Cognitive Concept Taxonomy](#5-cognitive-concept-taxonomy)
6. [Cognitive Models and Theoretical Frameworks](#6-cognitive-models-and-theoretical-frameworks)
7. [Existing Ontologies and Formal Modeling Approaches](#7-existing-ontologies-and-formal-modeling-approaches)
8. [Proposed Strategies for Conceptual Modeling](#8-proposed-strategies-for-conceptual-modeling)
9. [Task-Concept Cross-Reference Matrix](#9-task-concept-cross-reference-matrix)

---

## 1. Executive Summary and Research Strategy

This document compiles background research for a project aimed at developing a conceptual model of the relationships between experimental tasks, cognitive concepts, and experimental events in neuroimaging and behavioral research. The work is motivated by the need to build formal, machine-actionable representations of what tasks measure, what cognitive processes they engage, and how experimental events within tasks relate to underlying cognitive operations.

The research identifies 50 of the most commonly used tasks across eight domains (attention/executive function, memory/learning, language, decision-making, social cognition, emotion, motor, perception), catalogs the cognitive concepts each task is thought to engage, and reviews the major cognitive models and ontological frameworks relevant to this modeling effort.

The final section proposes five strategies for attacking the conceptual modeling problem, ranging from bottom-up structural decomposition of tasks to hybrid knowledge-graph approaches that integrate multiple evidence types.

---

## 2. Strategies for Attacking the Problem

### 2.1 Bottom-Up Structural Task Decomposition

Start from detailed task descriptions and decompose each task into its structural components: stimuli (modality, features, timing), responses (type, mapping, timing), instructions (goals, rules, feedback), and trial structure (sequencing, conditions, blocks). Map these structural components to cognitive concepts via literature evidence.

### 2.2 Top-Down Theory-Driven Mapping

Start from established cognitive theories (Baddeley's working memory model, Posner's attention networks, dual-process theory) and formally define the latent constructs they propose. For each construct, specify which tasks engage it and what neural/behavioral signatures are predicted.

### 2.3 Data-Driven Discovery

Mine neuroimaging databases (NeuroSynth, BrainMap) using unsupervised learning to discover latent task dimensions from brain activation patterns. These latent dimensions may reveal cognitive constructs that cut across traditional task categories.

### 2.4 Formal Ontological Approach

Develop or extend a machine-actionable ontology (building on Cognitive Atlas, CogPO, and HED) that formally represents tasks, concepts, and their relationships using Semantic Web standards (OWL, RDF).

### 2.5 Hybrid Knowledge-Graph Integration

Create a graph-based representation where (Task, Concept, Brain Region) triples are linked to evidence sources with confidence scores. Integrate evidence from task descriptions, neuroimaging meta-analyses, behavioral data, and computational models.

---

## 3. Information Gathering Plan

To support the conceptual modeling effort, the following categories of information should be systematically gathered:

### 3.1 Task-Level Information
- Detailed procedural description (stimuli, responses, instructions, timing)
- Trial structure and event sequence
- Key dependent variables (what is measured)
- Common variants and parameterizations
- Seminal papers and key neuroimaging references

### 3.2 Concept-Level Information
- Cognitive constructs posited by each task
- Theoretical definitions of each construct
- Relationships between constructs (hierarchical, lateral, competitive)
- Neural substrates associated with each construct
- Computational models that formalize each construct

### 3.3 Event-Level Information
- Types of events within each task (stimulus onset, response, feedback, cue, fixation)
- Temporal structure and sequencing of events
- Event properties (duration, intensity, modality, content)
- Mapping from events to cognitive states (which events trigger which cognitive processes)

### 3.4 Cross-Cutting Information
- Existing ontologies and taxonomies (Cognitive Atlas, CogPO, BrainMap, HED)
- Meta-analytic evidence linking tasks to brain regions
- Computational cognitive models (ACT-R, DDM, reinforcement learning)
- BIDS event modeling conventions

---

## 4. The 50 Key Tasks in Behavioral and Neuroscience Research

### 4.1 Attention and Executive Function

---

#### Task 1: Stroop Color-Word Task

**Description:** The Stroop Color-Word Task is a classic measure of selective attention and cognitive control that requires participants to identify the ink color of printed words while ignoring the semantic content. In the standard version, participants view color names (e.g., "RED," "BLUE") printed in incongruent ink colors and must respond with the ink color rather than reading the word. The task measures reaction time and accuracy across congruent trials (word and color match), incongruent trials (word and color conflict), and neutral trials. Performance reflects the ability to overcome automatic word-reading processes and requires engagement of executive control mechanisms. The Stroop interference effect (slowed RT on incongruent trials) is one of the most robust findings in cognitive psychology.

**Cognitive Concepts Tested:**
- Selective attention and attentional filtering
- Inhibitory control and response suppression
- Conflict monitoring and resolution
- Cognitive control
- Processing speed
- Automaticity (reading)

**Key References:**
1. Stroop, J. R. (1935). Studies of interference in serial verbal reactions. *Journal of Experimental Psychology*, 18(6), 643-662.
2. MacLeod, C. M. (1991). Half a century of research on the Stroop effect: An integrative review. *Psychological Bulletin*, 109(2), 163-203.
3. Wager, T. D., Sylvester, C. Y. C., Lacey, S. C., Nee, D. E., Franklin, M., & Jonides, J. (2005). Common and unique components of response inhibition revealed by fMRI. *NeuroImage*, 27(3), 323-337.

---

#### Task 2: Eriksen Flanker Task

**Description:** The Eriksen Flanker Task measures selective attention and the ability to inhibit responses to irrelevant flanking stimuli. Participants view a brief display of five items arranged horizontally, with a central target flanked by two non-target items on each side. The central target requires a specific response, while flanking items may be congruent (same response), incongruent (opposite response), or neutral. Participants respond via speeded button press while ignoring flankers. The flanker compatibility effect (slowed RT and increased errors on incongruent trials) indexes the degree of response competition and the efficiency of attentional filtering.

**Cognitive Concepts Tested:**
- Selective attention
- Response competition and conflict monitoring
- Inhibitory control
- Conflict resolution
- Attentional filtering

**Key References:**
1. Eriksen, B. A., & Eriksen, C. W. (1974). Effects of noise letters upon the identification of a target letter in a nonsearch task. *Perception & Psychophysics*, 16(2), 143-149.
2. Botvinick, M. M., Braver, T. S., Barch, D. M., Carter, C. S., & Cohen, J. D. (2001). Conflict monitoring and cognitive control. *Psychological Review*, 108(3), 624-652.
3. Egner, T., & Hirsch, J. (2005). Cognitive control mechanisms resolve conflict through cortical amplification of task-relevant information. *Nature Neuroscience*, 8(12), 1784-1790.

---

#### Task 3: Posner Spatial Cueing Task

**Description:** The Posner Spatial Cueing Task measures covert orienting of visual attention. Participants fixate on a central point with two peripheral locations marked. A cue stimulus appears (exogenous: at the target location; or endogenous: a central arrow) followed by a target stimulus at one of the peripheral locations. Cues can be valid (same location as target) or invalid (opposite location). The cueing effect (faster RT to validly cued targets vs. invalidly cued) reflects the cost and benefit of attentional orienting. The task dissociates different components of attention: engaging, disengaging, and shifting.

**Cognitive Concepts Tested:**
- Covert spatial attention
- Attentional orienting (endogenous and exogenous)
- Attentional engagement and disengagement
- Top-down attentional control
- Spatial attention shifts

**Key References:**
1. Posner, M. I. (1980). Orienting of attention. *Quarterly Journal of Experimental Psychology*, 32(1), 3-25.
2. Corbetta, M., & Shulman, G. L. (2002). Control of goal-directed and stimulus-driven attention in the brain. *Nature Reviews Neuroscience*, 3(3), 201-215.
3. Corbetta, M., Kincade, J. M., Lewis, C., Snyder, A. Z., & Sapir, A. (2005). Neural basis and recovery of spatial attention deficits in spatial neglect. *Nature Neuroscience*, 8(11), 1603-1610.

---

#### Task 4: Visual Search Task (Feature and Conjunction Search)

**Description:** Visual Search Tasks present participants with a display containing multiple items among which they must locate a target. In feature search, the target is defined by a single distinctive feature (e.g., a red item among blue) and "pops out" preattentively, with search time independent of set size. In conjunction search, the target is defined by a combination of features (e.g., a red square among red triangles and green squares) requiring serial, attention-dependent search with RT increasing linearly with set size. The task measures search efficiency, reaction time slopes, and accuracy, providing insights into parallel versus serial attentional processing.

**Cognitive Concepts Tested:**
- Feature-based attention
- Serial versus parallel processing
- Selective attention
- Feature integration and binding
- Visual search efficiency
- Attentional guidance

**Key References:**
1. Treisman, A., & Gelade, G. (1980). A feature-integration theory of attention. *Cognitive Psychology*, 12(1), 97-136.
2. Wolfe, J. M. (1998). Visual search. In H. Pashler (Ed.), *Attention* (pp. 13-73). Psychology Press.
3. Behrmann, M., Geng, J. J., & Shomstein, S. (2004). Parietal cortex and attention. *Current Opinion in Neurobiology*, 14(2), 212-217.

---

#### Task 5: Attentional Blink Task (RSVP)

**Description:** The Attentional Blink Task employs Rapid Serial Visual Presentation (RSVP) to study the temporal limits of attention. Participants view a rapid stream of stimuli (approximately 10 items/sec) presented at a fixed location and must identify two target stimuli (T1 and T2) embedded within the stream. T2 identification is severely impaired when it appears 200-500 ms after T1 (the attentional blink), demonstrating a transient bottleneck during the consolidation of T1 into working memory. The magnitude and duration of the blink index attentional capacity limitations.

**Cognitive Concepts Tested:**
- Temporal attention
- Working memory consolidation
- Attentional capacity limitations
- Stimulus awareness and consciousness
- Central bottleneck in information processing

**Key References:**
1. Raymond, J. E., Shapiro, K. L., & Arnell, K. M. (1992). Temporary suppression of visual processing in an RSVP task: An attentional blink? *Journal of Experimental Psychology: Human Perception and Performance*, 18(3), 849-860.
2. Chun, M. M., & Potter, M. C. (1995). A two-stage model for multiple target detection in rapid serial visual presentation. *Journal of Experimental Psychology: Human Perception and Performance*, 21(1), 109-127.
3. Marois, R., & Ivanoff, J. (2005). Capacity limits of information processing in the brain. *Trends in Cognitive Sciences*, 9(6), 296-305.

---

#### Task 6: Continuous Performance Task (CPT)

**Description:** The Continuous Performance Task requires participants to continuously monitor a stream of stimuli and respond selectively to infrequent target stimuli while withholding responses to non-targets over an extended period (5-15 minutes). The standard version involves responding when the letter "X" appears; the AX-CPT variant requires responding only when "A" is immediately followed by "X." Target frequency is typically 5-25% of trials. Performance measures include hit rate, false alarm rate, d' (sensitivity), and vigilance decrement over time. The task is widely used in ADHD research and clinical neuropsychology.

**Cognitive Concepts Tested:**
- Sustained attention and vigilance
- Response inhibition
- Selective attention to rare targets
- Working memory (AX-CPT variant)
- Attention maintenance over time

**Key References:**
1. Rosvold, H. E., Mirsky, A. F., Sarason, I., Bransome, E. D., & Beck, L. H. (1956). A continuous performance test of brain damage. *Journal of Consulting Psychology*, 20(5), 343-350.
2. Nuechterlein, K. H., Parasuraman, R., & Jiang, Q. (1983). Visual sustained attention: Image degradation produces rapid sensitivity decrement over time. *Science*, 220(4594), 327-329.
3. Carter, C. S., Braver, T. S., Barch, D. M., Botvinick, M. M., Noll, D., & Cohen, J. D. (1998). Anterior cingulate cortex, error detection, and the online monitoring of performance. *Science*, 280(5364), 747-749.

---

#### Task 7: Go/No-Go Task

**Description:** The Go/No-Go Task measures response inhibition by requiring participants to respond quickly to frequent "go" stimuli while withholding responses to infrequent "no-go" stimuli. The typical ratio is 70-80% go and 20-30% no-go trials, creating a strong prepotent tendency to respond. Performance is measured by go-trial RT (engagement), go-trial accuracy (compliance), and no-go accuracy / false alarm rate (inhibitory control). The task is simpler than the Stop-Signal task as it measures the ability to withhold (rather than cancel) a response.

**Cognitive Concepts Tested:**
- Response inhibition and impulse control
- Executive control
- Action suppression
- Prepotent response override
- Attention to stimulus features

**Key References:**
1. Donders, F. C. (1969/1868). On the speed of mental processes. *Acta Psychologica*, 30, 412-431.
2. Garavan, H., Ross, T. J., & Stein, E. A. (1999). Right hemispheric dominance of inhibitory control: An event-related functional MRI study. *Proceedings of the National Academy of Sciences*, 96(14), 8301-8306.
3. Simmonds, D. J., Pekar, J. J., & Mostofsky, S. H. (2008). Meta-analysis of Go/No-go tasks demonstrating that fMRI activation associated with response inhibition is task-dependent. *Neuropsychologia*, 46(1), 224-232.

---

#### Task 8: Stop-Signal Task

**Description:** The Stop-Signal Task measures the ability to inhibit a prepotent motor response after it has been initiated. Participants perform a primary go task (button press to go signals) but on a subset of trials, a stop signal (auditory tone or visual cue) appears after a variable delay (stop-signal delay, SSD), instructing them to cancel their response. SSD is adjusted dynamically using a staircase procedure converging on 50% inhibition probability. The key measure is stop-signal reaction time (SSRT), estimated using the race model framework, which indexes the latency of the internal inhibitory process.

**Cognitive Concepts Tested:**
- Response inhibition (action cancellation)
- Motor control
- Executive control
- Inhibitory processing speed
- Prepotent response override

**Key References:**
1. Logan, G. D., & Cowan, W. B. (1984). On the ability to inhibit thought and action: A theory of an act of control. *Psychological Review*, 91(3), 295-327.
2. Aron, A. R., & Poldrack, R. A. (2006). Cortical and subcortical contributions to Stop signal response inhibition: Role of the subthalamic nucleus. *Journal of Neuroscience*, 26(9), 2424-2433.
3. Verbruggen, F., & Logan, G. D. (2008). Response inhibition in the stop-signal paradigm. *Trends in Cognitive Sciences*, 12(11), 418-424.

---

#### Task 9: Wisconsin Card Sorting Test (WCST)

**Description:** The WCST tests cognitive flexibility, set-shifting, and learning from feedback. Participants match cards displaying varying numbers of colored symbols to four reference cards according to an unannounced sorting rule (color, shape, or number). After 10 consecutive correct sorts, the rule changes without warning. Feedback ("correct"/"incorrect") is provided after each sort. The test measures categories completed, perseverative errors (continued use of the previous rule), non-perseverative errors, and the ability to maintain set. It is the gold-standard clinical test of prefrontal executive function.

**Cognitive Concepts Tested:**
- Set-shifting and cognitive flexibility
- Learning from feedback
- Adaptation to rule changes
- Working memory
- Inhibition of previously reinforced responses
- Abstract reasoning

**Key References:**
1. Grant, D. A., & Berg, E. A. (1948). A behavioral analysis of degree of reinforcement and ease of shifting to new responses in a Weigl-type card sorting problem. *Journal of Experimental Psychology*, 38(4), 404-411.
2. Milner, B. (1963). Effects of different brain lesions on card sorting: The role of the frontal lobes. *Archives of Neurology*, 9(1), 90-100.
3. Nyhus, E., & Barcelo, F. (2009). The Wisconsin Card Sorting Test and the cognitive assessment of prefrontal executive functions: A critical update. *Brain and Cognition*, 71(3), 437-451.

---

#### Task 10: Tower of London Task

**Description:** The Tower of London Task is a planning and problem-solving task. Participants are presented with two configurations of colored beads on pegs: a start state and a goal state. They must plan and execute a sequence of moves to transform the start state into the goal state in the minimum number of moves, following movement constraints (one bead at a time, peg capacity limits). Problem difficulty is manipulated by the minimum number of moves required (2-7). Performance is measured by moves to solution, planning time, and accuracy. The task is a key measure of prefrontal executive function, particularly planning and look-ahead.

**Cognitive Concepts Tested:**
- Planning and foresight
- Problem-solving
- Working memory
- Mental representation of goal states
- Inhibition of impulsive moves
- Subgoal management

**Key References:**
1. Shallice, T. (1982). Specific impairments of planning. *Philosophical Transactions of the Royal Society of London, Series B*, 298(1089), 199-209.
2. Owen, A. M., Doyon, J., Petrides, M., & Evans, A. C. (1996). Planning and spatial working memory: A positron emission tomography study in humans. *European Journal of Neuroscience*, 8(2), 353-364.
3. Unterrainer, J. M., & Owen, A. M. (2006). Planning and problem solving: From neuropsychology to functional neuroimaging. *Journal of Physiology-Paris*, 99(4-6), 308-317.

---

#### Task 11: Task Switching / Set Shifting Paradigm

**Description:** Task Switching paradigms measure cognitive flexibility by requiring participants to alternate between two or more classification tasks. Participants view stimuli (e.g., bivalent alphanumeric characters like "G3") and perform different classifications depending on a task cue (letter: vowel/consonant; digit: odd/even). Tasks alternate in predictable sequences (e.g., AABB) or are cued on each trial. The primary measures are switch costs (increased RT and errors when switching tasks vs. repeating the same task) and mixing costs (increased RT in mixed-task blocks vs. single-task blocks). Switch costs reflect the time for task-set reconfiguration.

**Cognitive Concepts Tested:**
- Cognitive flexibility
- Task-set reconfiguration
- Selective attention
- Working memory updating
- Executive control
- Proactive and reactive control

**Key References:**
1. Rogers, R. D., & Monsell, S. (1995). Costs of a predictable switch between simple cognitive tasks. *Journal of Experimental Psychology: General*, 124(2), 207-231.
2. Monsell, S. (2003). Task switching. *Trends in Cognitive Sciences*, 7(3), 134-140.
3. Braver, T. S., Reynolds, J. R., & Donaldson, D. I. (2003). Neural mechanisms of transient and sustained cognitive control during task switching. *Neuron*, 39(4), 713-726.

---

#### Task 12: Anti-Saccade Task

**Description:** The Anti-Saccade Task measures voluntary control over reflexive eye movements. Participants fixate centrally while a peripheral stimulus suddenly appears in the left or right visual field. Instead of looking toward the stimulus (the reflexive prosaccade), participants must look in the opposite direction (antisaccade). This requires inhibiting the automatic orienting response and generating a volitional saccade. Performance is measured by antisaccade accuracy, latency, and the rate of prosaccadic intrusions (errors). The task indexes voluntary oculomotor control and prefrontal inhibitory function.

**Cognitive Concepts Tested:**
- Volitional eye movement control
- Response inhibition (oculomotor)
- Executive control of attention
- Reflexive response suppression
- Oculomotor planning

**Key References:**
1. Hallett, P. E. (1978). Primary and secondary saccades to goals defined by instructions. *Vision Research*, 18(11), 1279-1296.
2. Munoz, D. P., & Everling, S. (2004). Look away: The anti-saccade task and the voluntary control of eye movement. *Nature Reviews Neuroscience*, 5(3), 218-228.
3. Everling, S., & Fischer, B. (1998). The antisaccade: A review of basic research and clinical findings. *Neuropsychologia*, 36(9), 885-899.

---

### 4.2 Memory and Learning

---

#### Task 13: N-Back Task

**Description:** The N-Back task is a continuous performance paradigm in which participants view a sequence of stimuli (letters, numbers, or spatial locations) and judge whether each current stimulus matches the one presented n trials earlier. Difficulty scales parametrically with n (1-back, 2-back, 3-back). The task engages working memory maintenance, updating, and comparison processes. Performance typically shows decreased accuracy and increased RT with higher n values. The N-back is the most widely used working memory paradigm in neuroimaging, consistently activating dorsolateral prefrontal cortex and parietal regions.

**Cognitive Concepts Tested:**
- Working memory capacity and maintenance
- Working memory updating
- Attentional control
- Stimulus comparison
- Cognitive load management

**Key References:**
1. Kirchner, W. K. (1958). Age differences in short-term retention of rapidly changing information. *Journal of Experimental Psychology*, 55(4), 352-358.
2. Jonides, J., Schumacher, E. H., Smith, E. E., Koeppe, R. A., Awh, E., Minoshima, S., & Mintun, M. A. (1997). The role of parietal cortex in verbal working memory. *Journal of Neuroscience*, 17(13), 5282-5288.
3. Owen, A. M., McMillan, K. M., Laird, A. R., & Bullmore, E. (2005). N-back working memory paradigm: A meta-analysis of normative functional neuroimaging studies. *Human Brain Mapping*, 25(1), 46-59.

---

#### Task 14: Sternberg Item Recognition Task

**Description:** The Sternberg task measures the speed of short-term memory scanning. On each trial, participants encode a brief study list of 1-6 items, then after a retention interval, judge whether a test probe was in the studied list. The critical finding is that RT increases linearly with memory set size for both positive and negative probes, suggesting serial exhaustive scanning. The slope of the RT-by-set-size function indexes memory scanning speed, while the intercept indexes stimulus encoding and response execution time.

**Cognitive Concepts Tested:**
- Short-term/working memory capacity
- Memory scanning speed
- Stimulus comparison and decision-making
- Processing speed
- Serial versus parallel memory search

**Key References:**
1. Sternberg, S. (1966). High-speed scanning in human memory. *Science*, 153(3736), 652-654.
2. Sternberg, S. (1969). Memory-scanning: Mental processes revealed by reaction-time experiments. *American Scientist*, 57(4), 421-457.
3. Jensen, O., & Tesche, C. D. (2002). Frontal theta activity in humans increases with memory load in a working memory task. *European Journal of Neuroscience*, 15(8), 1395-1399.

---

#### Task 15: Delayed Match-to-Sample Task

**Description:** The Delayed Match-to-Sample (DMTS) task consists of three phases: sample, delay, and choice. During the sample phase, a stimulus is presented. Following a delay period (0-30 seconds), the participant must identify which of several test stimuli matches the original sample. Memory demands are manipulated by varying delay duration or the number of choice alternatives. The task has been fundamental in primate neuroscience for identifying the neural substrates of working memory, particularly delay-period persistent activity in prefrontal cortex.

**Cognitive Concepts Tested:**
- Working memory maintenance
- Visual recognition and comparison
- Delay-period maintenance
- Memory decay and interference
- Decision-making under uncertainty

**Key References:**
1. Fuster, J. M., & Alexander, G. E. (1971). Neuron activity related to short-term memory. *Science*, 173(3997), 652-654.
2. Miller, E. K., Erickson, C. A., & Desimone, R. (1996). Neural mechanisms of visual working memory in prefrontal cortex of the macaque. *Journal of Neuroscience*, 16(16), 5154-5167.
3. Pessoa, L., Gutierrez, E., Bandettini, P. A., & Ungerleider, L. G. (2002). Neural correlates of visual working memory: fMRI amplitude predicts task performance. *Neuron*, 35(5), 975-987.

---

#### Task 16: Serial Reaction Time Task (SRTT)

**Description:** The SRTT measures implicit motor sequence learning. Visual stimuli appear sequentially at different spatial locations, each corresponding to a response button. Participants respond as quickly as possible, unaware that stimuli follow a repeating sequence interspersed with random blocks. Learning is inferred from decreasing RT for the repeating sequence relative to random sequences. The dissociation between improved performance and lack of conscious awareness of the sequence structure is a hallmark of implicit learning and provides evidence for procedural memory systems.

**Cognitive Concepts Tested:**
- Implicit motor sequence learning
- Procedural memory
- Attentional automaticity
- Conscious versus unconscious learning
- Motor skill acquisition

**Key References:**
1. Nissen, M. J., & Bullemer, P. (1987). Attentional requirements of learning: Evidence from performance measures. *Cognitive Psychology*, 19(1), 1-32.
2. Robertson, E. M. (2007). The serial reaction time task: Implicit motor skill learning? *Journal of Neuroscience*, 27(38), 10073-10075.
3. Grafton, S. T., Hazeltine, E., & Ivry, R. B. (1995). Functional mapping of sequence learning in normal humans. *Journal of Cognitive Neuroscience*, 7(4), 497-510.

---

#### Task 17: Old/New Recognition Memory Task

**Description:** Participants study a list of stimuli (words, pictures, or faces) during an encoding phase. In the test phase, they view a mixture of studied (old) and unstudied (new) items and make binary old/new recognition judgments. Performance is analyzed using signal detection measures (hits, false alarms, d') and can be further decomposed into familiarity-based (rapid, automatic) and recollection-based (slower, effortful) processes using confidence ratings or remember/know judgments. Neuroimaging consistently implicates the hippocampus, angular gyrus, and default mode network in successful recognition.

**Cognitive Concepts Tested:**
- Episodic recognition memory
- Familiarity and recollection
- Source memory
- Memory strength and confidence
- Encoding and retrieval processes

**Key References:**
1. Mandler, G. (1980). Recognizing: The judgment of previous occurrence. *Psychological Review*, 87(3), 252-271.
2. Henson, R. N., Rugg, M. D., Shallice, T., Josephs, O., & Dolan, R. J. (1999). Recollection and familiarity in recognition memory: An event-related functional magnetic resonance imaging study. *Journal of Neuroscience*, 19(10), 3962-3972.
3. Rugg, M. D., & Curran, T. (2007). Event-related potentials and recognition memory. *Trends in Cognitive Sciences*, 11(6), 251-257.

---

#### Task 18: Free Recall Task

**Description:** Participants study a list of items (typically words) presented sequentially, then attempt to recall all items in any order during an extended recall period. Performance is analyzed via serial position curves showing primacy effects (enhanced recall of early items, attributed to long-term memory consolidation) and recency effects (enhanced recall of recent items, attributed to short-term memory). Clustering analyses examine whether semantically or contextually related items are recalled together, revealing the organization of memory search. The task engages prefrontal, parietal, and temporal memory networks.

**Cognitive Concepts Tested:**
- Episodic memory encoding and retrieval
- Long-term memory capacity
- Serial position effects (primacy and recency)
- Memory search and retrieval strategies
- Context-dependent memory
- Semantic organization

**Key References:**
1. Tulving, E. (1983). *Elements of Episodic Memory*. Oxford: Clarendon Press.
2. Polyn, S. M., Natu, V. S., Cohen, J. D., & Norman, K. A. (2005). Category-specific cortical activity precedes retrieval during memory search. *Science*, 310(5749), 1963-1966.
3. Sederberg, P. B., Gauthier, L. V., Terushkin, V., Miller, J. F., Barnathan, J. A., & Kahana, M. J. (2006). Oscillatory correlates of the primacy effect in episodic memory. *NeuroImage*, 32(3), 1422-1431.

---

#### Task 19: Paired Associates Learning Task

**Description:** Participants learn arbitrary associations between stimuli and their locations (or between word pairs). In a typical computerized version (CANTAB PAL), abstract patterns appear in boxes around the screen during the study phase, and during test, patterns are presented centrally and participants must identify the correct box location. Difficulty increases across stages from 1-2 to 6-8 pairs. Performance is measured by patterns correctly learned and errors made. The PAL task is particularly sensitive to hippocampal function and shows early sensitivity to amyloid-beta pathology in preclinical Alzheimer's disease.

**Cognitive Concepts Tested:**
- Associative learning and binding
- Spatial memory
- Episodic memory (rapid new learning)
- Visual pattern recognition
- Memory consolidation

**Key References:**
1. Sahakian, B. J., & Owen, A. M. (1992). Computerized assessment in neuropsychiatry using CANTAB: Discussion paper. *Journal of the Royal Society of Medicine*, 85(7), 399-403.
2. Swainson, R., Hodges, J. R., Galton, C. J., et al. (2001). Early detection and differential diagnosis of Alzheimer's disease and depression with neuropsychological tasks. *Dementia and Geriatric Cognitive Disorders*, 12(4), 265-280.
3. de Rover, M., Pironti, V. A., McCabe, J. A., et al. (2011). Hippocampal dysfunction in patients with mild cognitive impairment: A functional neuroimaging study of a visuospatial paired associates learning task. *Neuropsychologia*, 49(7), 2060-2070.

---

#### Task 20: Pavlovian Fear Conditioning

**Description:** A neutral conditioned stimulus (CS; auditory tone or visual cue) is paired with an aversive unconditioned stimulus (US; mild shock, loud noise). After conditioning, the CS alone elicits conditioned fear responses including skin conductance increases, heart rate changes, freezing (in animals), and subjective fear ratings (in humans). Extinction is measured in a subsequent phase where the CS is presented without the US. The task is fundamental to understanding emotional learning and has been used extensively to study the amygdala's role in fear acquisition and the prefrontal cortex's role in extinction.

**Cognitive Concepts Tested:**
- Classical associative learning
- Fear acquisition and consolidation
- Fear extinction and inhibitory learning
- Autonomic nervous system regulation
- Context-dependent learning

**Key References:**
1. LeDoux, J. E. (2000). Emotion circuits in the brain. *Annual Review of Neuroscience*, 23, 155-184.
2. Phelps, E. A., Delgado, M. R., Nearing, K. I., & LeDoux, J. E. (2004). Extinction learning in humans: Role of the amygdala and vmPFC. *Neuron*, 43(6), 897-905.
3. Quirk, G. J., & Mueller, D. (2008). Neural mechanisms of extinction learning and retrieval. *Neuropsychopharmacology*, 33(1), 56-72.

---

#### Task 21: Instrumental / Operant Conditioning Task

**Description:** In instrumental conditioning, voluntary actions are associated with rewarding or punishing consequences through repeated experience. Laboratory implementations present discrete choice options where specific responses are followed by desirable outcomes (food, money, points) or undesirable outcomes (loss, punishment). Common schedules include fixed-ratio, variable-ratio, fixed-interval, and variable-interval. Performance measures include response rates, choice patterns, and reaction times. The ventral striatum, dopamine system, and orbitofrontal cortex are critical for representing value predictions and learning from outcomes.

**Cognitive Concepts Tested:**
- Reward learning and value-based decision-making
- Action-outcome association learning
- Motivation and behavioral vigor
- Reinforcement sensitivity
- Temporal contiguity and learning rate

**Key References:**
1. Thorndike, E. L. (1911). *Animal Intelligence: Experimental Studies*. New York: Macmillan.
2. Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. *Science*, 275(5306), 1593-1599.
3. Haber, S. N., & Knutson, B. (2010). The reward circuit: Linking primate anatomy and human imaging. *Neuropsychopharmacology*, 35(1), 4-26.

---

#### Task 22: Reversal Learning Task

**Description:** Participants learn a stimulus-outcome association (e.g., stimulus A is rewarded, B is not), then contingencies are reversed. Participants must flexibly adapt their behavior to the new associations. Performance measures include trials to criterion and perseverative errors (continued selection of the previously rewarded stimulus). The task can use deterministic or probabilistic contingencies. Neuroimaging consistently implicates the orbitofrontal cortex and ventrolateral prefrontal cortex in reversal learning, particularly for updating stimulus-outcome associations based on feedback.

**Cognitive Concepts Tested:**
- Cognitive flexibility
- Stimulus-outcome learning and updating
- Error-driven learning from feedback
- Inhibition of prepotent responses
- Reward-based decision-making

**Key References:**
1. Dias, R., Robbins, T. W., & Roberts, A. C. (1996). Dissociation in prefrontal cortex of affective and attentional shifts. *Nature*, 380(6569), 69-72.
2. Cools, R., Clark, L., Owen, A. M., & Robbins, T. W. (2002). Defining the neural mechanisms of probabilistic reversal learning using event-related functional magnetic resonance imaging. *Journal of Neuroscience*, 22(11), 4563-4567.
3. Robbins, T. W. (2007). Shifting and stopping: Fronto-striatal substrates, neurochemical modulation and clinical implications. *Philosophical Transactions of the Royal Society B*, 362(1481), 917-932.

---

#### Task 23: Probabilistic Classification Learning (Weather Prediction Task)

**Description:** The Weather Prediction Task presents 1-3 cues from a set of 4 possible cards; participants predict a binary outcome (rain/sunshine). Each cue is probabilistically associated with outcomes (e.g., 75%/25%), requiring participants to learn from statistical patterns. Feedback is provided after each prediction. Critically, amnesic patients with medial temporal lobe damage show intact learning despite impaired conscious awareness of the task structure, implicating basal ganglia and striatal systems in implicit probabilistic learning.

**Cognitive Concepts Tested:**
- Probabilistic/statistical learning
- Implicit category learning
- Feedback-driven learning
- Procedural memory systems
- Integration of multiple probabilistic cues

**Key References:**
1. Knowlton, B. J., Squire, L. R., & Gluck, M. A. (1994). Probabilistic classification learning in amnesia. *Learning & Memory*, 1(2), 106-120.
2. Poldrack, R. A., Prabhakaran, V., Seger, C. A., & Gabrieli, J. D. (1999). Striatal activation during acquisition of a cognitive skill. *Neuropsychology*, 13(4), 564-574.
3. Seger, C. A. (2008). How do the basal ganglia contribute to categorization? Their roles in generalization, response selection, and learning via feedback. *Neuroscience & Biobehavioral Reviews*, 32(2), 265-278.

---

#### Task 24: Motor Sequence Learning Task

**Description:** Participants are trained to execute finger sequences (e.g., pressing buttons in a specific order: 4-1-3-2-4) either continuously or in discrete blocks. Learning is indexed by decreasing RT, reduced movement duration, and decreased errors. Neuroimaging shows early learning engages cerebellum and prefrontal cortex, while consolidated sequences show greater striatal and reduced cerebellar engagement, reflecting a shift from explicit, attention-demanding processes to implicit, automatic execution. Sleep promotes offline consolidation of motor sequences.

**Cognitive Concepts Tested:**
- Motor skill acquisition and automatization
- Procedural learning and consolidation
- Sequence structure learning
- Motor planning and execution
- Off-line consolidation (sleep-dependent)

**Key References:**
1. Karni, A., Meyer, G., Rey-Hipolito, C., et al. (1998). The acquisition of skilled motor performance: Fast and slow experience-driven changes in primary motor cortex. *Proceedings of the National Academy of Sciences*, 95(3), 861-868.
2. Doyon, J., Bellec, P., Amsel, R., et al. (2009). Contributions of the basal ganglia and functionally related brain structures to motor learning. *Behavioural Brain Research*, 199(1), 61-72.
3. Walker, M. P., Brakefield, T., Morgan, A., Hobson, J. A., & Stickgold, R. (2002). Practice with sleep makes perfect: Sleep-dependent motor skill learning. *Neuron*, 35(1), 205-211.

---

#### Task 25: Spatial Navigation / Virtual Morris Water Maze

**Description:** In the Virtual Morris Water Maze, participants navigate a virtual environment to find a hidden goal location using environmental landmarks. During acquisition, participants start from different positions and learn the goal location across trials; performance is indexed by path length, latency, and heading error. Probe trials (goal removed) assess retention by measuring search distribution. The task engages hippocampal spatial mapping and is highly sensitive to hippocampal dysfunction. It dissociates place-based (allocentric) from response-based (egocentric) navigation strategies.

**Cognitive Concepts Tested:**
- Spatial memory and cognitive mapping
- Allocentric spatial representations
- Place-based navigation
- Hippocampal-dependent memory
- Environmental learning and wayfinding

**Key References:**
1. Morris, R. G. M. (1984). Developments of a water-maze procedure for studying spatial learning in the rat. *Journal of Neuroscience Methods*, 11(1), 47-60.
2. Maguire, E. A., Burgess, N., Donnett, J. G., Frackowiak, R. S. J., Frith, C. D., & O'Keefe, J. (1998). Knowing where and getting there: A human navigation network. *Science*, 280(5365), 921-924.
3. Hartley, T., Maguire, E. A., Spiers, H. J., & Burgess, N. (2003). The well-worn route and the path less traveled: Distinct neural bases of route following and wayfinding in humans. *Neuron*, 37(5), 877-888.

---

### 4.3 Language

---

#### Task 26: Lexical Decision Task

**Description:** Participants view letter strings and must rapidly determine whether each string is a valid word or a nonword by pressing designated response buttons. Stimuli include high- and low-frequency words and pronounceable nonwords. RT and accuracy to words versus nonwords indexes lexical access efficiency. The task is often combined with priming manipulations to examine semantic, phonological, or morphological processing. It is one of the most fundamental paradigms in psycholinguistics.

**Cognitive Concepts Tested:**
- Lexical access and word recognition
- Semantic memory organization
- Automatic linguistic processing
- Orthographic processing
- Decision-making speed

**Key References:**
1. Meyer, D. E., & Schvaneveldt, R. W. (1971). Facilitation in recognizing pairs of words: Evidence of a dependence between retrieval operations. *Journal of Experimental Psychology*, 90(2), 227-234.
2. Neely, J. H. (1977). Semantic priming and retrieval from lexical memory: Roles of inhibitionless spreading activation and limited-capacity attention. *Journal of Experimental Psychology: General*, 106(3), 226-254.
3. Fiebach, C. J., Friederici, A. D., Muller, K., & von Cramon, D. Y. (2002). fMRI evidence for dual routes to the mental lexicon in visual word recognition. *Journal of Cognitive Neuroscience*, 14(1), 11-23.

---

#### Task 27: Semantic Priming Task

**Description:** Word pairs are presented in sequence: a prime word followed by a target. Prime-target relationships are manipulated (semantically related, unrelated, or neutral). Participants typically make lexical decisions on the target. Semantic priming is measured as faster RT to related versus unrelated pairs, reflecting automatic spreading activation through semantic memory networks. SOA manipulation distinguishes automatic (short SOA) from strategic (long SOA) priming.

**Cognitive Concepts Tested:**
- Semantic memory organization
- Automatic semantic activation
- Spreading activation
- Controlled versus automatic processing
- Lexical-semantic retrieval

**Key References:**
1. Meyer, D. E., & Schvaneveldt, R. W. (1971). Facilitation in recognizing pairs of words. *Journal of Experimental Psychology*, 90(2), 227-234.
2. Collins, A. M., & Loftus, E. F. (1975). A spreading-activation theory of semantic processing. *Psychological Review*, 82(6), 407-428.
3. Rissman, J., Eliassen, J. C., & Blumstein, S. E. (2003). An event-related fMRI investigation of implicit semantic priming. *Journal of Cognitive Neuroscience*, 15(8), 1160-1169.

---

#### Task 28: Picture Naming Task

**Description:** Participants view photographs or line drawings of common objects, animals, or scenes and name each item aloud as quickly and accurately as possible. Naming latency (RT from stimulus onset to vocal response onset) is the primary measure. The task engages multiple stages of language production: conceptual identification, lemma retrieval, phonological encoding, and articulation. fMRI reveals activation in left inferior frontal regions (Broca's area) and temporal cortex. The task is widely used in aphasia research and studies of language production.

**Cognitive Concepts Tested:**
- Object recognition and conceptual identification
- Semantic retrieval
- Lexical access and lemma selection
- Phonological encoding
- Speech production planning

**Key References:**
1. Levelt, W. J. M., Roelofs, A., & Meyer, A. S. (1999). A theory of lexical access in speech production. *Behavioral and Brain Sciences*, 22(1), 1-38.
2. Indefrey, P., & Levelt, W. J. M. (2004). The spatial and temporal signatures of word production components. *Cognition*, 92(1-2), 101-144.
3. DeLeon, J., Gottesman, R. F., Kleinman, J. T., et al. (2007). Neural regions essential for distinct cognitive processes underlying picture naming. *Brain*, 130(5), 1408-1422.

---

#### Task 29: Sentence Comprehension / Garden-Path Reading Task

**Description:** Participants read sentences containing temporary syntactic ambiguities (garden-path sentences) that initially lead to an incorrect parse before disambiguating information forces reanalysis. Classic example: "The horse raced past the barn fell." Sentences may be presented word-by-word (self-paced reading) or while eye movements are tracked. Comprehension is assessed via subsequent questions. Neuroimaging reveals left inferior frontal and temporal activation during syntactic reanalysis. The task probes how the parser uses syntactic, semantic, and probabilistic cues in real-time language processing.

**Cognitive Concepts Tested:**
- Syntactic parsing and reanalysis
- Ambiguity resolution
- Working memory for linguistic material
- Prediction in language comprehension
- Integration of syntactic and semantic information

**Key References:**
1. Frazier, L., & Rayner, K. (1982). Making and correcting errors during sentence comprehension: Eye movements in the analysis of structurally ambiguous sentences. *Cognitive Psychology*, 14(2), 178-210.
2. Friederici, A. D. (2002). Towards a neural basis of auditory sentence processing. *Trends in Cognitive Sciences*, 6(2), 78-84.
3. Novick, J. M., Trueswell, J. C., & Thompson-Schill, S. L. (2005). Cognitive control and parsing: Reexamining the role of Broca's area in sentence comprehension. *Cognitive, Affective, & Behavioral Neuroscience*, 5(3), 263-281.

---

#### Task 30: Phonological Awareness Task (Rhyme Judgment)

**Description:** Participants view or hear pairs of words and judge whether they rhyme. The task requires analysis of the sound structure of words, comparison of phonological representations, and a binary decision. Control conditions involve matching for orthographic similarity or judging word identity. fMRI reveals activation in left inferior frontal regions (pars opercularis), left temporoparietal areas, and left superior temporal cortex. The task is widely used in reading research and dyslexia studies, as phonological awareness is a strong predictor of reading ability.

**Cognitive Concepts Tested:**
- Phonological awareness
- Phonological representation and processing
- Sound structure analysis
- Auditory working memory
- Reading-related phonological skills

**Key References:**
1. Shaywitz, S. E., Shaywitz, B. A., Pugh, K. R., et al. (1998). Functional disruption in the organization of the brain for reading in dyslexia. *Proceedings of the National Academy of Sciences*, 95(5), 2636-2641.
2. Booth, J. R., Burman, D. D., Meyer, J. R., et al. (2004). Development of brain mechanisms for processing orthographic and phonological representations. *Journal of Cognitive Neuroscience*, 16(7), 1234-1249.
3. Pugh, K. R., Mencl, W. E., Jenner, A. R., et al. (2001). Neurobiological studies of reading and reading disability. *Journal of Communication Disorders*, 34(6), 479-492.

---

### 4.4 Decision-Making and Economic

---

#### Task 31: Iowa Gambling Task (IGT)

**Description:** Participants choose cards from four decks to maximize winnings. Two decks (A, B) have high wins but higher losses (net loss); two decks (C, D) have smaller wins but minimal losses (net gain). Over 100 trials, healthy participants gradually learn to prefer advantageous decks. The IGT is particularly sensitive to ventromedial prefrontal cortex damage; vmPFC patients fail to develop a preference for advantageous decks despite normal intellectual functioning. The task operationalizes the Somatic Marker Hypothesis.

**Cognitive Concepts Tested:**
- Decision-making under uncertainty
- Reward and punishment learning
- Risk evaluation
- Somatic markers and emotional decision-making
- Long-term versus immediate outcome evaluation

**Key References:**
1. Bechara, A., Damasio, A. R., Damasio, H., & Anderson, S. W. (1994). Insensitivity to future consequences following damage to human prefrontal cortex. *Cognition*, 50(1-3), 7-15.
2. Bechara, A., Damasio, H., Tranel, D., & Damasio, A. R. (1997). Deciding advantageously before knowing the advantageous strategy. *Science*, 275(5304), 1293-1295.
3. Li, X., Lu, Z. L., D'Argembeau, A., Ng, M., & Bechara, A. (2010). The Iowa Gambling Task in fMRI images. *Human Brain Mapping*, 31(3), 410-423.

---

#### Task 32: Balloon Analog Risk Task (BART)

**Description:** Participants inflate a virtual balloon by clicking a pump button, earning money with each pump. The balloon may explode at any point, causing loss of all accumulated earnings for that trial. Participants can cash out at any time to save their earnings. The average number of pumps before cashing out indexes risk-taking propensity. BART risk-taking correlates with real-world risky behaviors. fMRI reveals activation in ventromedial PFC, anterior insula, and striatal regions during risk assessment.

**Cognitive Concepts Tested:**
- Risk assessment and tolerance
- Impulse control
- Reward sensitivity
- Decision-making under uncertainty
- Cost-benefit analysis

**Key References:**
1. Lejuez, C. W., Read, J. P., Kahler, C. W., et al. (2002). Evaluation of a behavioral measure of risk taking: The Balloon Analogue Risk Task (BART). *Journal of Experimental Psychology: Applied*, 8(2), 75-84.
2. Rao, H., Korczykowski, M., Pluta, J., Hoang, A., & Detre, J. A. (2008). Neural correlates of voluntary and involuntary risk taking in the human brain. *NeuroImage*, 42(2), 902-910.
3. Schonberg, T., Fox, C. R., & Poldrack, R. A. (2011). Mind the gap: Bridging economic and naturalistic risk-taking with cognitive neuroscience. *Trends in Cognitive Sciences*, 15(1), 11-19.

---

#### Task 33: Delay Discounting Task

**Description:** Participants make repeated choices between a smaller immediate reward and a larger delayed reward (e.g., "$10 now or $25 in 1 week"). The immediate amount or delay is systematically varied to estimate indifference points, yielding a discount rate reflecting how steeply the subjective value of rewards declines with delay. Steeper discounting reflects greater impulsivity. fMRI reveals differential activation of ventromedial PFC and nucleus accumbens (immediate preference) versus dorsolateral PFC and posterior parietal cortex (delayed preference), supporting dual-system valuation models.

**Cognitive Concepts Tested:**
- Temporal discounting and time preference
- Impulse control and delay of gratification
- Intertemporal choice
- Reward evaluation across time
- Self-control

**Key References:**
1. Mazur, J. E. (1987). An adjusting procedure for studying delayed reinforcement. In M. L. Commons et al. (Eds.), *Quantitative Analyses of Behavior: Vol. 5. The Effect of Delay and of Intervening Events on Reinforcement Value* (pp. 55-73). Erlbaum.
2. McClure, S. M., Laibson, D. I., Loewenstein, G., & Cohen, J. D. (2004). Separate neural systems value immediate and delayed monetary rewards. *Science*, 306(5695), 503-507.
3. Kable, J. W., & Glimcher, P. W. (2007). The neural correlates of subjective value during intertemporal choice. *Nature Neuroscience*, 10(12), 1625-1633.

---

### 4.5 Social Cognition

---

#### Task 34: Ultimatum Game

**Description:** Two players divide a sum of money. The proposer suggests a division; the responder accepts (both get the proposed split) or rejects (both get nothing). Typically played with computer-controlled offers varying from fair (50-50) to unfair (90-10). Unfair offers activate the anterior insula (negative emotion, inequity aversion) and are rejected at high rates, even at personal cost. The task demonstrates the interplay between emotional reactions and rational economic considerations in social decision-making.

**Cognitive Concepts Tested:**
- Fairness evaluation
- Emotion-cognition interaction in decision-making
- Norm enforcement and punishment
- Social preference and equity
- Theory of mind regarding proposer intentions

**Key References:**
1. Guth, W., Schmittberger, R., & Schwarze, B. (1982). An experimental analysis of ultimatum bargaining. *Journal of Economic Behavior & Organization*, 3(4), 367-388.
2. Sanfey, A. G., Rilling, J. K., Aronson, J. A., Nystrom, L. E., & Cohen, J. D. (2003). The neural basis of economic decision-making in the Ultimatum Game. *Science*, 300(5626), 1755-1758.
3. Feng, C., Luo, Y. J., & Krueger, F. (2015). Neural signatures of fairness-related normative decision-making in the ultimatum game: A coordinate-based meta-analysis. *Human Brain Mapping*, 36(2), 591-602.

---

#### Task 35: Trust Game

**Description:** A sequential two-player game in which the investor decides how much of an endowment to send to the trustee; the sent amount is multiplied (typically 3x), and the trustee decides how much to return. The investor faces a dilemma: trusting yields potentially higher mutual payoffs but risks exploitation. fMRI reveals that trust decisions engage theory-of-mind regions (medial PFC, temporoparietal junction) and reward regions (ventral striatum) that track mutual cooperation and reciprocity.

**Cognitive Concepts Tested:**
- Social trust and reciprocity
- Theory of mind and belief attribution
- Reward learning and prediction error (social)
- Risk in social context
- Cooperation and reputation

**Key References:**
1. Berg, J., Dickhaut, J., & McCabe, K. (1995). Trust, reciprocity, and social history. *Games and Economic Behavior*, 10(1), 122-142.
2. King-Casas, B., Tomlin, D., Anen, C., Camerer, C. F., Quartz, S. R., & Montague, P. R. (2005). Getting to know you: Reputation and trust in a two-person economic exchange. *Science*, 308(5718), 78-83.
3. Rilling, J. K., Gutman, D. A., Zeh, T. R., Pagnoni, G., Berns, G. S., & Kilts, C. D. (2002). A neural basis for social cooperation. *Neuron*, 35(2), 395-405.

---

#### Task 36: Dictator Game

**Description:** One player (dictator) unilaterally decides how much of an endowment to give to an anonymous recipient, who has no power to reject. Despite having complete power, many dictators give 20-30% of their endowment, reflecting intrinsic fairness concerns. fMRI shows generous allocations activate reward regions (ventral striatum, OFC) and empathy regions (anterior insula, ACC), suggesting altruistic choices engage similar neural systems as personal reward.

**Cognitive Concepts Tested:**
- Altruism and generosity
- Social norms and fairness
- Empathy and perspective-taking
- Warm-glow giving
- Self-other comparison

**Key References:**
1. Kahneman, D., Knetsch, J. L., & Thaler, R. H. (1986). Fairness as a constraint on profit seeking: Entitlements in the market. *American Economic Review*, 76(4), 728-741.
2. Harbaugh, W. T., Mayr, U., & Burghart, D. R. (2007). Neural responses to taxation and voluntary giving reveal motives for charitable donations. *Science*, 316(5831), 1622-1625.
3. Moll, J., Krueger, F., Zahn, R., Pardini, M., de Oliveira-Souza, R., & Grafman, J. (2006). Human fronto-mesolimbic networks guide decisions about charitable donation. *Proceedings of the National Academy of Sciences*, 103(42), 15623-15628.

---

#### Task 37: False Belief / Theory of Mind Task

**Description:** The False Belief Task assesses the ability to attribute mental states to others that differ from reality. In the classic Sally-Anne version, Sally places an object in location A and leaves; Anne moves the object to location B. Participants are asked where Sally will look for the object. Correct performance (location A) requires representing Sally's false belief rather than the true state of the world. Adult neuroimaging versions use animated vignettes requiring belief reasoning. fMRI consistently activates medial prefrontal cortex, precuneus, and right temporoparietal junction.

**Cognitive Concepts Tested:**
- Theory of mind / mental state attribution
- False belief understanding
- Metarepresentation
- Perspective-taking
- Cognitive control (suppressing true state knowledge)

**Key References:**
1. Baron-Cohen, S., Leslie, A. M., & Frith, U. (1985). Does the autistic child have a "theory of mind"? *Cognition*, 21(1), 37-46.
2. Saxe, R., & Kanwisher, N. (2003). People thinking about thinking people: The role of the temporo-parietal junction in "theory of mind." *NeuroImage*, 19(4), 1835-1842.
3. Frith, U., & Frith, C. D. (2003). Development and neurophysiology of mentalizing. *Philosophical Transactions of the Royal Society of London B*, 358(1431), 459-473.

---

#### Task 38: Reading the Mind in the Eyes Task

**Description:** Participants view photographs showing only the eye and eyebrow region of actors and select which of four mental state descriptors best describes the person's thoughts or feelings. The revised version contains 36 photographs, each with four choices ranging from basic emotions to complex cognitive states (e.g., "sarcastic," "despondent"). The task indexes affective theory of mind and shows deficits in autism spectrum conditions. Performance correlates with amygdala and left inferior frontal gyrus activity.

**Cognitive Concepts Tested:**
- Affective theory of mind
- Eye-gaze processing
- Complex emotion recognition
- Social perception and intelligence
- Mental state inference from minimal cues

**Key References:**
1. Baron-Cohen, S., Wheelwright, S., Hill, J., Raste, Y., & Plumb, I. (2001). The "Reading the Mind in the Eyes" test revised version: A study with normal adults, and adults with Asperger syndrome or high-functioning autism. *Journal of Child Psychology and Psychiatry*, 42(2), 241-251.
2. Adams, R. B., Rule, N. O., Franklin, R. G., et al. (2010). Cross-cultural reading the mind in the eyes: An fMRI investigation. *Journal of Cognitive Neuroscience*, 22(1), 97-108.
3. Oakley, B. F. M., Brewer, R., Bird, G., & Catmur, C. (2016). Theory of mind is not theory of emotion: A cautionary note on the Reading the Mind in the Eyes Test. *Journal of Abnormal Psychology*, 125(6), 818-823.

---

### 4.6 Emotion

---

#### Task 39: Emotional Stroop Task

**Description:** A variant of the classic Stroop in which participants name the ink color of words that vary in emotional valence (threat-related, positive, neutral). Emotional interference is measured as the slowing of color naming for emotional relative to neutral words, indexing the degree to which emotional content captures attentional resources. The task is widely used in anxiety and PTSD research, where threat-related words produce disproportionate interference. The emotional interference effect reflects automatic processing of affectively significant information.

**Cognitive Concepts Tested:**
- Emotional interference with cognitive processing
- Selective attention in emotional contexts
- Attentional bias toward emotional stimuli
- Cognitive control in emotional contexts
- Automatic emotional processing

**Key References:**
1. Williams, J. M. G., Mathews, A., & MacLeod, C. (1996). The emotional Stroop task and psychopathology. *Psychological Bulletin*, 120(1), 3-24.
2. Compton, R. J., Banich, M. T., Mohanty, A., et al. (2003). Paying attention to emotion: An fMRI investigation of cognitive and emotional Stroop tasks. *Cognitive, Affective, & Behavioral Neuroscience*, 3(2), 81-96.
3. Etkin, A., Egner, T., Peraza, D. M., Kandel, E. R., & Hirsch, J. (2006). Resolving emotional conflict: A role for the rostral anterior cingulate cortex in modulating activity in the amygdala. *Neuron*, 51(6), 871-882.

---

#### Task 40: Facial Emotion Recognition Task (Ekman Faces)

**Description:** Participants view photographs of facial expressions (typically from the Ekman and Friesen Pictures of Facial Affect or similar validated sets) and identify the emotion portrayed. The standard set includes six basic emotions (anger, disgust, fear, happiness, sadness, surprise) plus neutral. Accuracy and RT are measured across emotion categories. The task engages a network including the amygdala (particularly for fear), fusiform face area, superior temporal sulcus, and prefrontal cortex. It is widely used in clinical research on schizophrenia, autism, and mood disorders.

**Cognitive Concepts Tested:**
- Emotion perception and recognition
- Facial expression discrimination
- Emotion categorization
- Social cognitive processing
- Amygdala-mediated threat detection

**Key References:**
1. Ekman, P., & Friesen, W. V. (1976). *Pictures of Facial Affect*. Palo Alto, CA: Consulting Psychologists Press.
2. Adolphs, R., Tranel, D., Damasio, H., & Damasio, A. (1994). Impaired recognition of emotion in facial expressions following bilateral damage to the human amygdala. *Nature*, 372(6507), 669-672.
3. Fusar-Poli, P., Placentino, A., Carletti, F., et al. (2009). Functional atlas of emotional faces processing: A voxel-based meta-analysis of 105 functional magnetic resonance imaging studies. *Journal of Psychiatry and Neuroscience*, 34(6), 418-432.

---

#### Task 41: Affective Priming Task

**Description:** Participants categorize target stimuli (e.g., judge words as "good" or "bad") that are immediately preceded by briefly presented prime stimuli (words, faces, or images) of matching or mismatching emotional valence. The affective priming effect (faster RT for congruent vs. incongruent prime-target pairs) reflects automatic activation of evaluative representations. Subliminal variants (very brief prime exposure) provide evidence for unconscious emotional processing.

**Cognitive Concepts Tested:**
- Automatic affective activation
- Implicit emotion processing
- Evaluative priming
- Attitude activation
- Subliminal emotional processing

**Key References:**
1. Fazio, R. H., Sanbonmatsu, D. M., Powell, M. C., & Kardes, F. R. (1986). On the automatic activation of attitudes. *Journal of Personality and Social Psychology*, 50(2), 229-238.
2. Hermans, D., De Houwer, J., & Eelen, P. (2001). A time course analysis of the affective priming effect. *Cognition and Emotion*, 15(2), 143-165.
3. Murphy, S. T., & Zajonc, R. B. (1993). Affect, cognition, and awareness: Affective priming with optimal and suboptimal stimulus exposures. *Journal of Personality and Social Psychology*, 64(5), 723-739.

---

#### Task 42: Emotion Regulation Task (Cognitive Reappraisal)

**Description:** Participants view emotionally evocative stimuli (typically IAPS images) and are instructed to either passively view them ("look" condition) or regulate their emotional response using cognitive reappraisal (e.g., reinterpreting a car accident as a movie scene). After each trial, participants rate their emotional experience. Reappraisal successfully reduces subjective negative affect and modulates neural activity: it increases dorsolateral and ventrolateral PFC activation while decreasing amygdala activation, demonstrating top-down prefrontal regulation of emotion generation systems.

**Cognitive Concepts Tested:**
- Emotion regulation strategies
- Cognitive reappraisal
- Prefrontal control over emotion systems
- Attentional control in emotional contexts
- Affect downregulation

**Key References:**
1. Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. *Review of General Psychology*, 2(3), 271-299.
2. Ochsner, K. N., Bunge, S. A., Gross, J. J., & Gabrieli, J. D. E. (2002). Rethinking feelings: An fMRI study of the cognitive regulation of emotion. *Journal of Cognitive Neuroscience*, 14(8), 1215-1229.
3. Ochsner, K. N., Silvers, J. A., & Buhle, J. T. (2012). Functional imaging studies of emotion regulation: A synthetic review and evolving model of the cognitive control of emotion. *Annals of the New York Academy of Sciences*, 1251, E1-E24.

---

#### Task 43: IAPS Passive Viewing Task

**Description:** Participants passively view color photographs from the International Affective Picture System (IAPS), a validated database of 1,182 images varying in emotional valence (pleasant, unpleasant, neutral) and arousal (calm to exciting). Images are presented for 3-5 seconds each without requiring an overt response. Post-viewing, participants rate valence and arousal on 9-point scales. The task serves as a standardized emotion elicitation tool in neuroimaging, consistently activating amygdala (for high-arousal images), visual cortex (enhanced processing of emotional stimuli), and prefrontal regions.

**Cognitive Concepts Tested:**
- Passive emotional processing
- Emotional reactivity (valence and arousal)
- Automatic emotion generation
- Visual cortex modulation by emotional content
- Subjective emotional experience

**Key References:**
1. Lang, P. J., Bradley, M. M., & Cuthbert, B. N. (1997). *International Affective Picture System (IAPS): Technical Manual and Affective Ratings*. NIMH Center for the Study of Emotion and Attention.
2. Sabatinelli, D., Bradley, M. M., Fitzsimmons, J. R., & Lang, P. J. (2005). Parallel amygdala and inferotemporal activation reflect emotional intensity and fear relevance. *NeuroImage*, 24(4), 1265-1270.
3. Phan, K. L., Wager, T., Taylor, S. F., & Liberzon, I. (2002). Functional neuroanatomy of emotion: A meta-analysis of emotion activation studies in PET and fMRI. *NeuroImage*, 16(2), 331-348.

---

### 4.7 Motor

---

#### Task 44: Finger Tapping Task

**Description:** Participants tap their fingers (typically index finger) in a repetitive manner at a self-paced or externally paced rate. Self-paced tapping is typically at 2-3 Hz; externally paced versions use an auditory or visual metronome. The task consists of tapping blocks (20-40 seconds) alternating with rest periods. Performance metrics include tapping frequency, inter-tap interval variability, and accuracy. It is the most commonly used simple motor paradigm for motor cortex mapping, clinical motor assessment, and studying motor control. Contralateral primary motor cortex and supplementary motor area are consistently activated.

**Cognitive Concepts Tested:**
- Motor execution
- Motor timing and rhythm
- Sensorimotor integration
- Hand/finger motor control
- Motor cortex functional organization

**Key References:**
1. Witt, S. T., Laird, A. R., & Meyerand, M. E. (2008). Functional neuroimaging correlates of finger-tapping task variations: An ALE meta-analysis. *NeuroImage*, 42(1), 343-356.
2. Rao, S. M., Harrington, D. L., Haaland, K. Y., et al. (1997). Distributed neural systems underlying the timing of movements. *Journal of Neuroscience*, 17(14), 5528-5535.
3. Jancke, L., Loose, R., Lutz, K., Specht, K., & Shah, N. J. (2000). Cortical activations during paced finger-tapping applying visual and auditory pacing stimuli. *Cognitive Brain Research*, 10(1-2), 51-66.

---

### 4.8 Perception

---

#### Task 45: Mental Rotation Task

**Description:** Participants view pairs of 3D objects (block figures, letters, or geometric forms) and determine whether they are identical (one is a rotated version of the other) or mirror images. Objects are rotated at angles ranging from 0 to 180 degrees relative to each other. The well-established finding is that RT increases linearly with angular disparity, suggesting an analog mental rotation process. The task measures spatial visualization ability, mental imagery, and visuospatial working memory. Sex differences in mental rotation are among the most reliable cognitive sex differences.

**Cognitive Concepts Tested:**
- Mental rotation
- Spatial visualization
- Visuospatial imagery
- Spatial working memory
- 3D object recognition

**Key References:**
1. Shepard, R. N., & Metzler, J. (1971). Mental rotation of three-dimensional objects. *Science*, 171(3972), 701-703.
2. Vandenberg, S. G., & Kuse, A. R. (1978). Mental rotations, a group test of three-dimensional spatial visualization. *Perceptual and Motor Skills*, 47(2), 599-604.
3. Zacks, J. M. (2008). Neuroimaging studies of mental rotation: A meta-analysis and review. *Journal of Cognitive Neuroscience*, 20(1), 1-19.

---

#### Task 46: Oddball Paradigm (P300)

**Description:** Participants are presented with a stimulus stream containing frequent standard stimuli (80% of trials) and infrequent target (oddball) stimuli (20%) that differ in some dimension (pitch, color, shape). Participants respond (button press) to targets. Target detection elicits the P3b ERP component (300-600 ms, parietal maximum), reflecting stimulus evaluation and working memory updating. Novel or unexpected stimuli also elicit the P3a component (frontocentral), reflecting automatic attention capture. The paradigm is widely used as a biomarker of cognitive function and has clinical applications in ADHD, schizophrenia, and traumatic brain injury.

**Cognitive Concepts Tested:**
- Target detection
- Attention allocation
- Stimulus evaluation
- Working memory updating
- Context updating
- Probability processing

**Key References:**
1. Sutton, S., Braren, M., Zubin, J., & John, E. R. (1965). Evoked-potential correlates of stimulus uncertainty. *Science*, 150(3700), 1187-1188.
2. Donchin, E., & Coles, M. G. H. (1988). Is the P300 component a manifestation of context updating? *Behavioral and Brain Sciences*, 11(3), 357-374.
3. Polich, J. (2007). Updating P300: An integrative theory of P3a and P3b. *Clinical Neurophysiology*, 118(10), 2128-2148.

---

#### Task 47: Mismatch Negativity (MMN) Paradigm

**Description:** Participants are passively exposed to repetitive acoustic stimuli (standard tones, 80%) occasionally interrupted by deviant tones (20%) differing in pitch, duration, or location. The MMN can be elicited without active attention. Recorded via EEG, the MMN appears as a negative deflection peaking at 100-250 ms after deviance onset at frontocentral sites. It reflects automatic, pre-attentive comparison between incoming input and a neural representation of the standard stimulus stored in sensory (echoic) memory. MMN is used as a biomarker of auditory processing capacity and has clinical applications in schizophrenia, coma prognosis, and language development research.

**Cognitive Concepts Tested:**
- Automatic change detection
- Sensory (echoic) memory
- Pre-attentive processing
- Auditory feature discrimination
- Neural prediction error (sensory)

**Key References:**
1. Naatanen, R., Gaillard, A. W. K., & Mantysalo, S. (1978). Early selective-attention effect on evoked potential reinterpreted. *Acta Psychologica*, 42(4), 313-329.
2. Naatanen, R., Paavilainen, P., Rinne, T., & Alho, K. (2007). The mismatch negativity (MMN) in basic research of central auditory processing: A review. *Clinical Neurophysiology*, 118(12), 2544-2590.
3. Garrido, M. I., Kilner, J. M., Stephan, K. E., & Friston, K. J. (2009). The mismatch negativity: A review of underlying mechanisms. *Clinical Neurophysiology*, 120(3), 453-463.

---

#### Task 48: Biological Motion Perception (Point-Light Displays)

**Description:** Participants view point-light display stimuli, animations created by placing markers on the joints of a person performing actions and capturing only the light points. The resulting stimuli (12-15 dots representing joints) convey complex human actions (walking, running, dancing) from minimal motion cues. Participants may recognize actions, judge coherence (upright vs. inverted), or discriminate biological from scrambled motion. The task measures perception of complex human movement and activates the posterior superior temporal sulcus, a region specialized for biological motion processing.

**Cognitive Concepts Tested:**
- Biological motion perception
- Action recognition
- Form-from-motion processing
- Social perception
- Motion integration
- Figure-ground segregation

**Key References:**
1. Johansson, G. (1973). Visual perception of biological motion and a model for its analysis. *Perception & Psychophysics*, 14(2), 201-211.
2. Grossman, E. D., & Blake, R. (2002). Brain areas active during visual perception of biological motion. *Neuron*, 35(6), 1167-1175.
3. Blake, R., & Shiffrar, M. (2007). Perception of human motion. *Annual Review of Psychology*, 58, 47-73.

---

#### Task 49: Face Processing / FFA Localizer Task

**Description:** The FFA Localizer presents alternating blocks of faces and non-face objects (houses, cars, scrambled images) while participants perform passive viewing or a simple task (one-back matching, gender judgment). The contrast of faces > objects identifies face-selective regions, particularly the fusiform face area (FFA) in ventral temporal cortex. The task provides an individually-defined localizer for face-selective cortex and has been fundamental to understanding the neural basis of face perception and the question of domain-specific processing modules.

**Cognitive Concepts Tested:**
- Face perception and recognition
- Visual category selectivity
- Face detection
- Holistic face processing
- Social perception
- Domain-specific visual processing

**Key References:**
1. Kanwisher, N., McDermott, J., & Chun, M. M. (1997). The fusiform face area: A module in human extrastriate cortex specialized for face perception. *Journal of Neuroscience*, 17(11), 4302-4311.
2. Grill-Spector, K., Knouf, N., & Kanwisher, N. (2004). The fusiform face area subserves face perception, not generic within-category identification. *Nature Neuroscience*, 7(5), 555-562.
3. Haxby, J. V., Hoffman, E. A., & Gobbini, M. I. (2000). The distributed human neural system for face perception. *Trends in Cognitive Sciences*, 4(6), 223-233.

---

#### Task 50: Attention Network Test (ANT)

**Description:** The Attention Network Test (ANT) combines elements of the Posner cueing paradigm and the Eriksen flanker task to provide separate measures of three attention networks in a single task. Participants respond to the direction of a central arrow flanked by congruent or incongruent flankers, with the target preceded by no cue, a center cue, a double cue, or a spatial cue. The ANT yields three independent efficiency scores: alerting (double cue benefit over no cue), orienting (spatial cue benefit over center cue), and executive control (incongruent flanker cost). The task operationalizes Posner's attention network model.

**Cognitive Concepts Tested:**
- Alerting attention (tonic and phasic)
- Orienting attention (spatial)
- Executive attention (conflict resolution)
- Attentional network efficiency
- Conflict monitoring

**Key References:**
1. Fan, J., McCandliss, B. D., Sommer, T., Raz, A., & Posner, M. I. (2002). Testing the efficiency and independence of attentional networks. *Journal of Cognitive Neuroscience*, 14(3), 340-347.
2. Fan, J., McCandliss, B. D., Fossella, J., Flombaum, J. I., & Posner, M. I. (2005). The activation of attentional networks. *NeuroImage*, 26(2), 471-479.
3. Petersen, S. E., & Posner, M. I. (2012). The attention system of the human brain: 20 years after. *Annual Review of Neuroscience*, 35, 73-89.

---

## 5. Cognitive Concept Taxonomy

The following is a consolidated taxonomy of cognitive concepts engaged across the 50 tasks, organized hierarchically:

### 5.1 Attention
- **Selective attention**: Filtering relevant from irrelevant information (Tasks 1, 2, 4, 6, 11, 39, 50)
- **Sustained attention / Vigilance**: Maintaining attention over time (Tasks 6, 50)
- **Spatial attention**: Orienting to locations (Tasks 3, 4, 50)
- **Temporal attention**: Processing sequences over time (Tasks 5)
- **Attentional capture**: Involuntary attention to salient stimuli (Tasks 46, 47)
- **Attentional filtering**: Suppressing irrelevant information (Tasks 1, 2, 4, 39)

### 5.2 Executive Function
- **Inhibitory control**: Suppressing prepotent responses (Tasks 1, 7, 8, 12)
- **Cognitive flexibility / Set-shifting**: Switching between rules or task sets (Tasks 9, 11, 22)
- **Planning**: Organizing sequences of actions toward goals (Task 10)
- **Conflict monitoring**: Detecting and resolving response conflicts (Tasks 1, 2, 50)
- **Working memory updating**: Maintaining and manipulating information (Tasks 13, 14, 15)
- **Error monitoring**: Detecting and correcting mistakes (Tasks 9, 22)

### 5.3 Memory
- **Working memory**: Short-term maintenance and manipulation (Tasks 13, 14, 15)
- **Episodic memory**: Encoding and retrieving personal experiences (Tasks 17, 18, 19, 25)
- **Procedural / Implicit memory**: Learning without conscious awareness (Tasks 16, 23, 24)
- **Associative learning**: Binding stimuli to outcomes or locations (Tasks 19, 20, 21, 22)
- **Spatial memory**: Representing locations and spatial relationships (Tasks 19, 25)
- **Recognition memory**: Discriminating old from new items (Tasks 17)
- **Fear memory**: Conditioning and extinction of fear associations (Task 20)

### 5.4 Language
- **Lexical access**: Retrieving word forms (Tasks 26, 27, 28)
- **Semantic processing**: Accessing word meanings (Tasks 26, 27, 28)
- **Phonological processing**: Analyzing sound structure (Task 30)
- **Syntactic processing**: Parsing sentence structure (Task 29)
- **Speech production**: Planning and executing speech (Task 28)

### 5.5 Decision-Making
- **Risk assessment**: Evaluating uncertain outcomes (Tasks 31, 32)
- **Reward learning**: Learning from positive outcomes (Tasks 21, 22, 23)
- **Temporal discounting**: Valuing delayed rewards (Task 33)
- **Value-based decision-making**: Choosing based on expected value (Tasks 31, 33)
- **Feedback-driven learning**: Adapting behavior based on outcomes (Tasks 9, 22, 23)

### 5.6 Social Cognition
- **Theory of mind**: Attributing mental states to others (Tasks 37, 38)
- **Fairness and norm evaluation**: Judging equitable distributions (Tasks 34, 36)
- **Social trust and reciprocity**: Predicting and responding to others' cooperation (Task 35)
- **Empathy and perspective-taking**: Understanding others' emotional states (Tasks 36, 38)

### 5.7 Emotion
- **Emotional perception**: Recognizing emotions in stimuli (Tasks 40, 43)
- **Emotional interference**: Impact of emotion on cognition (Tasks 39, 41)
- **Emotion regulation**: Modulating emotional responses (Task 42)
- **Automatic emotional processing**: Unconscious affective evaluation (Tasks 41, 43)
- **Fear processing**: Amygdala-mediated threat detection (Tasks 20, 40)

### 5.8 Motor
- **Motor execution**: Performing movements (Tasks 44, 24)
- **Motor sequence learning**: Acquiring movement patterns (Tasks 16, 24)
- **Motor timing and rhythm**: Temporal control of movements (Task 44)
- **Oculomotor control**: Controlling eye movements (Task 12)

### 5.9 Perception
- **Visual object recognition**: Identifying objects from visual input (Tasks 4, 28, 49)
- **Face perception**: Specialized face processing (Tasks 40, 49)
- **Motion perception**: Detecting and interpreting movement (Task 48)
- **Spatial visualization**: Mentally manipulating spatial representations (Task 45)
- **Auditory change detection**: Detecting acoustic deviations (Tasks 46, 47)

---

## 6. Cognitive Models and Theoretical Frameworks

### 6.1 Baddeley's Working Memory Model

A multicomponent model proposing that working memory comprises: (1) the Central Executive (supervisory control), (2) the Phonological Loop (verbal/auditory maintenance), (3) the Visuospatial Sketchpad (visual-spatial manipulation), and (4) the Episodic Buffer (integration across subsystems and long-term memory). Relevant to tasks 13, 14, 15 and any task with working memory demands.

**References:**
- Baddeley, A. D., & Hitch, G. J. (1974). Working memory. In G. H. Bower (Ed.), *The psychology of learning and motivation* (Vol. 8, pp. 47-89). Academic Press.
- Baddeley, A. (2000). The episodic buffer: A new component of working memory? *Trends in Cognitive Sciences*, 4(11), 417-423.

### 6.2 Atkinson-Shiffrin Multi-Store Memory Model

Three-store model: Sensory Memory (high capacity, rapid decay) -> Short-Term Memory (limited capacity, ~20-30s) -> Long-Term Memory (unlimited capacity). Information flow is actively controlled through encoding, maintenance, and retrieval processes.

**References:**
- Atkinson, R. C., & Shiffrin, R. M. (1968). Human memory: A proposed system and its control processes. In K. W. Spence & J. T. Spence (Eds.), *The psychology of learning and motivation* (Vol. 2, pp. 89-195). Academic Press.

### 6.3 Posner's Attention Network Model

Three anatomically distinct attention networks: Alerting (maintaining readiness), Orienting (prioritizing spatial locations), and Executive Control (resolving conflicts). Operationalized by the Attention Network Test (Task 50). Each network has distinct neural substrates and neurochemical modulators.

**References:**
- Posner, M. I., & Petersen, S. E. (1990). The attention system of the human brain. *Annual Review of Neuroscience*, 13, 25-42.
- Fan, J., McCandliss, B. D., Sommer, T., Raz, A., & Posner, M. I. (2002). Testing the efficiency and independence of attentional networks. *Journal of Cognitive Neuroscience*, 14(3), 340-347.

### 6.4 Desimone & Duncan Biased Competition Model

Selective attention arises from competitive interactions among neural populations representing multiple stimuli. Top-down attentional signals bias competition in favor of task-relevant stimuli. Bottom-up salience also biases competition.

**References:**
- Desimone, R., & Duncan, J. (1995). Neural mechanisms of selective visual attention. *Annual Review of Neuroscience*, 18, 193-222.
- Reynolds, J. H., & Desimone, R. (2003). Interacting roles of attention and visual salience in V4. *Neuron*, 37(5), 853-863.

### 6.5 Norman & Shallice Supervisory Attentional System (SAS)

Two-level model: Contention Scheduling handles routine behavior through automatic schema activation; the Supervisory Attentional System (SAS) intervenes for novel situations, error prevention, and complex multitasking. SAS is localized to frontal cortex.

**References:**
- Norman, D. A., & Shallice, T. (1986). Attention to action: Willed and automatic control of behavior. In R. J. Davidson, G. E. Schwartz, & D. Shapiro (Eds.), *Consciousness and Self-Regulation* (Vol. 4, pp. 1-18). Plenum Press.
- Shallice, T., & Burgess, P. W. (1991). Deficits in strategy application following frontal lobe damage in man. *Brain*, 114(2), 727-741.

### 6.6 Dual-Process Theory (Kahneman)

System 1: Fast, automatic, intuitive, heuristic-based. System 2: Slow, deliberate, analytical, rule-based. Most daily decisions rely on System 1; complex reasoning engages System 2. System 2 can override System 1 but is effortful and capacity-limited.

**References:**
- Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
- Evans, J. S. B., & Stanovich, K. E. (2013). Dual-process theories of higher cognition: Advancing the debate. *Perspectives on Psychological Science*, 8(3), 223-241.

### 6.7 Drift-Diffusion Model (DDM)

An evidence accumulation model for binary decisions. A decision variable accumulates noisy evidence from a starting point toward one of two response boundaries. Key parameters: drift rate (evidence quality), decision boundary (response caution), non-decision time (encoding + motor), starting bias. DDM decomposes RT distributions into latent cognitive processes.

**References:**
- Ratcliff, R. (1978). A theory of memory retrieval. *Psychological Review*, 85(2), 59-108.
- Ratcliff, R., & McKoon, G. (2008). The diffusion decision model: Theory and data for two-choice decision tasks. *Neural Computation*, 20(4), 873-922.
- Forstmann, B. U., Ratcliff, R., & Wagenmakers, E. J. (2016). Sequential sampling models in cognitive neuroscience. *Annual Review of Psychology*, 67, 641-666.

### 6.8 Reinforcement Learning Models

**Rescorla-Wagner Model:** Learning occurs through prediction error (difference between expected and actual outcome). Positive errors strengthen associations; negative errors weaken them.

**Temporal Difference (TD) Learning:** Extends Rescorla-Wagner by generating prediction errors at each time step, enabling real-time learning signals. Mathematically linked to dopamine reward prediction error signals.

**References:**
- Rescorla, R. A., & Wagner, A. R. (1972). A theory of Pavlovian conditioning. In A. H. Black & W. F. Prokasy (Eds.), *Classical conditioning II* (pp. 64-99). Appleton-Century-Crofts.
- Sutton, R. S., & Barto, A. G. (1998). *Reinforcement Learning: An Introduction*. MIT Press.
- Schultz, W., Dayan, P., & Montague, P. R. (1997). A neural substrate of prediction and reward. *Science*, 275(5306), 1593-1599.

### 6.9 Predictive Coding / Free Energy Principle

The brain minimizes surprise by maintaining hierarchical generative models that predict sensory inputs. Feedforward pathways convey prediction errors; feedback pathways convey predictions. Perception is inference: the brain infers the most likely causes of sensory data.

**References:**
- Rao, R. P., & Ballard, D. H. (1999). Predictive coding in the visual cortex. *Nature Neuroscience*, 2(1), 79-87.
- Friston, K. (2010). The free-energy principle: A unified brain theory? *Nature Reviews Neuroscience*, 11(2), 127-138.

### 6.10 Global Workspace Theory

Consciousness emerges when information is broadcast widely across the brain from a "global workspace." Automatic processes operate unconsciously; selective attention brings information into conscious awareness through sudden widespread cortical amplification.

**References:**
- Baars, B. J. (1988). *A Cognitive Theory of Consciousness*. Cambridge University Press.
- Dehaene, S., & Changeux, J. P. (2011). Experimental and theoretical approaches to conscious processing. *Neuron*, 70(2), 200-227.

### 6.11 ACT-R Cognitive Architecture

A comprehensive cognitive architecture combining symbolic (production rules, declarative memory) and subsymbolic (probabilistic learning, activation dynamics) components. Specifies modules for perception, motor control, memory, and attention, with a central procedural system. Used to simulate human performance on many of the tasks in this document.

**References:**
- Anderson, J. R., & Lebiere, C. (1998). *The Atomic Components of Thought*. Lawrence Erlbaum Associates.
- Anderson, J. R. (2007). *How Can the Human Mind Occur in the Physical Universe?* Oxford University Press.

---

## 7. Existing Ontologies and Formal Modeling Approaches

### 7.1 Cognitive Atlas

A collaborative knowledge base maintaining two interlinked ontologies: one for tasks and one for cognitive concepts. Tasks are mapped to the concepts they engage through explicit relationships. Community-driven curation with 800+ terms.

**Key Reference:** Poldrack, R. A., et al. (2011). The Cognitive Atlas: Toward a knowledge foundation for cognitive neuroscience. *Frontiers in Neuroinformatics*, 5, 17.

**Strengths:** Separates tasks from concepts; community-driven; machine-actionable (OWL).  
**Limitations:** Manual curation; limited algorithmic extraction; no trial-level detail.

### 7.2 BrainMap Database and Taxonomy

A curated database of fMRI/PET findings with a hierarchical taxonomy organizing paradigms by context, contrast, and paradigm class (100+ categories). Enables coordinate-based meta-analysis.

**Key Reference:** Laird, A. R., et al. (2005). BrainMap: The social evolution of a human brain mapping database. *Neuroinformatics*, 3(1), 65-78.

**Strengths:** Comprehensive; supports meta-analysis; 20+ year track record.  
**Limitations:** Manual curation limits scalability; no event-level annotation.

### 7.3 Cognitive Paradigm Ontology (CogPO)

A formal ontology representing task paradigms through Stimulus, Response, and Instruction components. Developed from the BrainMap taxonomy using Basic Formal Ontology (BFO).

**Key Reference:** Turner, J. A., & Laird, A. R. (2012). The cognitive paradigm ontology: Design and application. *Neuroinformatics*, 10(1), 57-66.

**Strengths:** Formal, computationally tractable; fine-grained task comparison.  
**Limitations:** Focuses on external structure; limited adoption outside neuroimaging.

### 7.4 NeuroSynth

Automated extraction of activation coordinates from published papers combined with term-based tagging for large-scale meta-analysis. Supports forward inference (concept -> brain) and reverse inference (brain -> concept).

**Key Reference:** Yarkoni, T., Poldrack, R. A., Nichols, T. E., Van Essen, D. C., & Wager, T. D. (2011). Large-scale automated synthesis of human functional neuroimaging data. *Nature Methods*, 8(8), 665-670.

**Strengths:** Scales to large literature; automated; enables discovery.  
**Limitations:** Crude term-based tagging; publication bias; no event-level structure.

### 7.5 HED (Hierarchical Event Descriptors)

A standardized, controlled vocabulary for annotating events in neuroimaging experiments. Hierarchical schema with composable tags describing stimuli, responses, task properties, and experimental events. Integrated with BIDS. Extensible through library schemas.

**Key Reference:** Bigdely-Shamlo, N., Cockfield, J., Makeig, S., Rognon, T., La Valle, C., Miyakoshi, M., & Robbins, K. A. (2016). Hierarchical Event Descriptors (HED): Semi-structured tagging for real-world events in large-scale EEG. *Frontiers in Neuroinformatics*, 10, 42.

**Strengths:** Machine-actionable event annotation; hierarchical; BIDS integration; trial-level detail.  
**Limitations:** Requires manual annotation; curators must decide granularity; adoption still growing.

### 7.6 BIDS Task Event Modeling

BIDS mandates task event files (_events.tsv) with onset, duration, and flexible additional columns. JSON sidecars define column semantics. HED annotations can be included for machine-actionable description.

**Key Reference:** Gorgolewski, K. J., et al. (2016). The brain imaging data structure, a format for organizing and describing outputs of neuroimaging experiments. *Scientific Data*, 3, 160044.

**Strengths:** Widely adopted; simple format; flexible; enables reproducible pipelines.  
**Limitations:** No enforced semantic standard; limited expressivity for hierarchical events.

---

## 8. Proposed Strategies for Conceptual Modeling

### Strategy 1: Bottom-Up Structural Task Decomposition + Ontology Mapping

Extract task structure (stimuli, responses, instructions, trial structure) from published protocols. Map extracted structures to cognitive concepts via existing literature. Build on CogPO's Stimulus-Response-Instruction framework. This approach is systematic, reproducible, and aligns with existing frameworks, but requires NLP for automation and does not guarantee cognitive equivalence from structural similarity.

### Strategy 2: Top-Down Theory-Driven Mapping

Start from established cognitive theories and formally define latent constructs. For each construct, specify which tasks engage it and what behavioral/neural signatures are predicted. Use cognitive architectures (ACT-R) for computational simulation. This approach is grounded in theory and supports falsification, but requires deep expertise and is limited to well-studied domains.

### Strategy 3: Data-Driven Discovery

Apply unsupervised learning (clustering, dimensionality reduction, topic modeling) to neuroimaging meta-analytic databases to discover latent task dimensions from brain activation patterns. This is objective and scalable but may yield dimensions lacking clear interpretability.

### Strategy 4: Formal Ontology + Semantic Web

Develop a comprehensive OWL/RDF ontology integrating tasks, concepts, brain systems, and events with formal reasoning capabilities. Extend the Cognitive Atlas with explicit relationships and HED event annotations. This is maximally expressive and supports machine reasoning, but requires substantial ontological engineering.

### Strategy 5: Hybrid Knowledge-Graph Integration (Recommended)

Create a graph-based representation where (Task, Concept, Event, Brain Region) tuples are linked to evidence sources with confidence scores. Integrate bottom-up task descriptions, top-down theoretical predictions, and data-driven discoveries. Implement uncertainty quantification using Bayesian approaches. Develop interactive visualization and query interfaces. This combines the strengths of all other strategies and supports incremental knowledge accumulation.

**Recommended Prioritization:**
- **Short-term (1-2 years):** Strategies 1 + 4 — Systematic task decomposition with formal ontology foundation
- **Medium-term (2-4 years):** Strategy 5 — Hybrid integration with multi-modal evidence
- **Long-term (4+ years):** Full integration with predictive modeling for novel tasks

---

## 9. Task-Concept Cross-Reference Matrix

The following abbreviated matrix maps the 50 tasks to primary cognitive concept domains. Full = primary engagement; Partial = secondary engagement.

| Task | Sel.Attn | Inhib. | WM | Episodic | Procedural | Language | Decision | Social | Emotion | Motor | Perception |
|------|----------|--------|-----|----------|------------|----------|----------|--------|---------|-------|------------|
| 1. Stroop | Full | Full | | | | Partial | | | | | |
| 2. Flanker | Full | Full | | | | | | | | | |
| 3. Posner | Full | | | | | | | | | | |
| 4. Visual Search | Full | | | | | | | | | | Full |
| 5. Attentional Blink | Full | | Partial | | | | | | | | |
| 6. CPT | Full | Partial | Partial | | | | | | | | |
| 7. Go/No-Go | | Full | | | | | | | | | |
| 8. Stop-Signal | | Full | | | | | | | | Full | |
| 9. WCST | | Partial | Full | | | | Partial | | | | |
| 10. Tower of London | | Partial | Full | | | | | | | | |
| 11. Task Switching | Full | | Full | | | | | | | | |
| 12. Anti-Saccade | | Full | | | | | | | | Full | |
| 13. N-Back | Partial | | Full | | | | | | | | |
| 14. Sternberg | | | Full | | | | | | | | |
| 15. DMTS | | | Full | | | | | | | | |
| 16. SRTT | Partial | | | | Full | | | | | Full | |
| 17. Old/New Recognition | | | | Full | | | | | | | |
| 18. Free Recall | | | | Full | | | | | | | |
| 19. PAL | | | | Full | | | | | | | Partial |
| 20. Fear Conditioning | | | | | Full | | | | Full | | |
| 21. Operant Conditioning | | | | | Full | | Full | | | | |
| 22. Reversal Learning | | Partial | | | Partial | | Full | | | | |
| 23. Weather Prediction | | | | | Full | | Partial | | | | |
| 24. Motor Sequence | | | | | Full | | | | | Full | |
| 25. Morris Water Maze | | | | Full | | | | | | | Partial |
| 26. Lexical Decision | | | | | | Full | | | | | |
| 27. Semantic Priming | | | | | | Full | | | | | |
| 28. Picture Naming | | | | | | Full | | | | | Full |
| 29. Garden-Path | | | Full | | | Full | | | | | |
| 30. Rhyme Judgment | | | | | | Full | | | | | |
| 31. Iowa Gambling | | | | | | | Full | | Partial | | |
| 32. BART | | Partial | | | | | Full | | | | |
| 33. Delay Discounting | | Partial | | | | | Full | | | | |
| 34. Ultimatum Game | | | | | | | Full | Full | Partial | | |
| 35. Trust Game | | | | | | | | Full | | | |
| 36. Dictator Game | | | | | | | | Full | | | |
| 37. False Belief | | | | | | | | Full | | | |
| 38. Eyes Task | | | | | | | | Full | Full | | |
| 39. Emotional Stroop | Full | Partial | | | | | | | Full | | |
| 40. Ekman Faces | | | | | | | | Partial | Full | | Full |
| 41. Affective Priming | | | | | | | | | Full | | |
| 42. Reappraisal | | | | | | | | | Full | | |
| 43. IAPS Viewing | | | | | | | | | Full | | |
| 44. Finger Tapping | | | | | | | | | | Full | |
| 45. Mental Rotation | | | Full | | | | | | | | Full |
| 46. Oddball (P300) | Full | | Partial | | | | | | | | Full |
| 47. MMN | | | | | | | | | | | Full |
| 48. Biological Motion | | | | | | | | Partial | | | Full |
| 49. FFA Localizer | | | | | | | | Partial | | | Full |
| 50. ANT | Full | Partial | | | | | | | | | |

---

## Document Metadata

**Compiled:** April 11, 2026  
**Tasks Covered:** 50  
**Cognitive Domains:** 9 (Attention, Executive Function, Memory, Language, Decision-Making, Social Cognition, Emotion, Motor, Perception)  
**Cognitive Models Reviewed:** 11  
**Ontological Frameworks Reviewed:** 6  
**Total References:** ~170 papers cited
