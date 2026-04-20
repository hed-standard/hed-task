(hedtsk_rapid_serial_visual_presentation)=

# Rapid Serial Visual Presentation Task

**HED Task ID:** `hedtsk_rapid_serial_visual_presentation`

**Also known as:** RSVP Task, Attentional Blink Task, AB Task, RSVP Attentional Blink, RSVP Target Detection, RSVP Stream Task, Dual-Target RSVP

A rapid stream of visual items is presented at a single location (typically 6-20 items/second); participants detect one or more targets among distractors. Target detection accuracy, especially for a second target shortly after a first (attentional blink), indexes temporal attention allocation.

## Description

Rapid Serial Visual Presentation (RSVP) is a paradigm for studying the temporal dynamics of visual attention. A stream of visual items (letters, digits, words, images, or complex scenes) is presented sequentially at a single spatial location at rates of 6-20 items per second. Participants must detect, identify, or categorize one or more targets embedded among distractors. The signature finding is the attentional blink (Raymond, Shapiro, & Arnell, 1992): when two targets appear in the stream, detection of the second target (T2) is severely impaired when it follows the first target (T1) by approximately 200-500 ms (lag 2-5), recovering at longer lags. Lag-1 sparing (intact T2 detection when T2 immediately follows T1) is a robust exception. The attentional blink reveals fundamental bottlenecks in temporal attention and has generated competing theoretical accounts: the two-stage model (Chun & Potter, 1995), the episodic simultaneous type/serial token model (Bowman & Wyble, 2007), and the boost-and-bounce model (Olivers & Meeter, 2008). Beyond the attentional blink, RSVP is used to study categorical perception (rapid scene gist extraction), emotion-attention interactions (emotion-induced blindness), and rapid image triage. Applications include brain-computer interfaces (RSVP-based P300 spellers and image triage systems, including satellite imagery analysis), clinical assessment of temporal attention in ADHD and dyslexia, and speed-reading technologies.

## Inclusion Test

```{list-table}
---
widths: 15 85
header-rows: 0
---
* - **Procedure**
  - A rapid serial stream of visual items is presented at a single location; participants detect, identify, or categorize one or more targets embedded among distractors. Presentation rate is typically 6-20 items per second.
* - **Manipulation**
  - Number of targets (single vs. dual); T1-T2 lag (temporal separation between targets); target-distractor similarity; stream rate (items per second); target category (letter among digits, face among objects, scene category); distractor set composition; emotional content of targets or distractors.
* - **Measurement**
  - Target detection accuracy (T1 and T2); attentional blink magnitude (T2 accuracy deficit at short lags, conditional on correct T1 detection); lag-1 sparing; T1-T2 intrusion errors (order reversals); P300 ERP amplitude for detected targets; d-prime for target discrimination.
```

## Variations

```{list-table}
---
widths: 30 70
header-rows: 1
---
* - Variation
  - Description
* - Dual-Target Attentional Blink
  - Two targets in a single stream; T2 accuracy at varying lags from T1. The canonical paradigm for studying the attentional blink. Raymond et al. (1992).
* - Single-Target RSVP
  - One target in the stream; measures basic temporal attention and target detection at rapid rates. Baseline for attentional blink studies.
* - Emotion-Induced Blindness
  - Emotionally arousing distractor (e.g., threat image) impairs detection of a subsequent neutral target. Emotional analogue of the attentional blink. Most et al. (2005).
* - Rapid Scene Categorization
  - Natural scene images presented at high rates (20 ms per image); participants detect a target category (animal, vehicle). Demonstrates rapid perceptual gist extraction. Potter (1976).
* - RSVP Image Triage (BCI)
  - Participants view rapid streams of images (e.g., satellite imagery, surveillance footage) while EEG detects P300 responses to target-category images. Used in brain-computer interface applications for rapid image screening.
* - Triple-RSVP (Multiple Streams)
  - Three concurrent RSVP streams; target can appear in any stream. Increases target detection rate for BCI applications; adds spatial competition to temporal attention demands.
* - Whole-Report RSVP
  - Report all items from a short RSVP stream (4-8 items). Measures visual short-term memory capacity under rapid presentation conditions.
* - RSVP with Task Switch
  - T1 and T2 require different judgments (e.g., identify T1 letter, detect T2 presence). Task switch between targets amplifies the attentional blink.
* - Detection vs. Identification
  - T2 requiring simple presence detection vs. full identity report; manipulates the depth of processing needed to reveal the blink.
* - Three-Target Variant
  - Third target added to probe extended temporal limits of attention beyond the standard T1-T2 paradigm.
* - Cross-Modal Attentional Blink
  - Targets in different modalities (e.g., auditory T1, visual T2); tests whether the attentional bottleneck is supramodal.
* - Emotional Attentional Blink
  - Emotional stimuli (faces, words) as T1 or T2; emotional targets modulate blink magnitude. Distinct from emotion-induced blindness (which uses emotional distractors).
* - Spatial Two-Stream RSVP
  - Two concurrent RSVP streams at different locations; targets may appear in either stream, separating spatial and temporal attention limits.
```

## Cognitive Processes

This task engages the following cognitive processes:

- [Temporal attention](../processes/selective_and_sustained_attention.md#hed-temporal-attention)
- [Selective attention](../processes/selective_and_sustained_attention.md#hed-selective-attention)
- [Sustained attention](../processes/selective_and_sustained_attention.md#hed-sustained-attention)
- [Categorization](../processes/reasoning_and_problem_solving.md#hed-categorization)
- [Attentional awareness](../processes/awareness_agency_and_metacognition.md#hed-attentional-awareness)
- [Perceptual awareness](../processes/awareness_agency_and_metacognition.md#hed-perceptual-awareness)
- [Working memory updating](../processes/short_term_and_working_memory.md#hed-working-memory-updating)

## Key References

- Raymond, J. E., Shapiro, K. L., & Arnell, K. M. (1992). Temporary suppression of visual processing in an RSVP task: An attentional blink? Journal of Experimental Psychology: Human Perception and Performance, 18(3), 849-860.
- Chun, M. M., & Potter, M. C. (1995). A two-stage model for multiple target detection in rapid serial visual presentation. Journal of Experimental Psychology: Human Perception and Performance, 21(1), 109-127.
- Potter, M. C. (1976). Short-term conceptual memory for pictures. Journal of Experimental Psychology: Human Learning and Memory, 2(5), 509-522.

## Recent References

- Dux, P. E., & Marois, R. (2009). The attentional blink: A review of data and theory. Attention, Perception, & Psychophysics, 71(8), 1683-1700.
- Olivers, C. N. L., & Meeter, M. (2008). A boost and bounce theory of temporal attention. Psychological Review, 115(4), 836-863.
- Cecotti, H., Eckstein, M. P., & Giesbrecht, B. (2014). Single-trial classification of event-related potentials in rapid serial visual presentation tasks using supervised spatial filtering. IEEE Transactions on Neural Networks and Learning Systems, 25(11), 2030-2042.
- Most, S. B., Chun, M. M., Widders, D. M., & Zald, D. H. (2005). Attentional rubbernecking: Cognitive control and personality in emotion-induced blindness. Psychonomic Bulletin & Review, 12(4), 654-661.
- Willems, C., & Martens, S. (2022). The Attentional Blink at 30: Current and future directions. Attention, Perception, & Psychophysics, 84, 1643-1652.
- Marois, R., & Ivanoff, J. (2005). Capacity limits of information processing in the brain. Trends in Cognitive Sciences, 9(6), 296-305.
- Asplund, C. L., Fougnie, D., Zughni, S., Martin, J. W., & Marois, R. (2014). The attentional blink reveals the probabilistic nature of discrete conscious perception. Psychological Science, 25(3), 824-831.

## External Links

- [Cognitive Atlas entry](https://www.cognitiveatlas.org/task/id/trm_551f06a08dcc4)
