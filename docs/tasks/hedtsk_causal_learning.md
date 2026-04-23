(hedtsk_causal_learning)=
# Causal Learning Task

**HED Task ID:** `hedtsk_causal_learning`

**Also known as:** Contingency Judgment Task, Contingency Learning Task, Causal Judgment Task, Causal Induction Task, Delta-P Task, Allergy Prediction Task

Participants observe cue-outcome pairings across trials and judge the causal strength of the relationship; judgment profiles across contingency conditions index causal induction and associative learning mechanisms.

## Description

Causal learning tasks measure how people acquire and represent causal relationships from observed co-occurrences. In the standard contingency judgment paradigm, participants observe a series of trials in which a candidate cause (e.g., a food, a medicine, a button press) is either present or absent and an outcome (e.g., an allergic reaction, a health improvement, a light turning on) either occurs or does not. After observing multiple trials, participants rate the causal strength of the relationship (typically -100 to +100 or 0 to 100). The normative benchmark is delta-P (P(outcome|cause) - P(outcome|no cause)), but human judgments systematically deviate: they are sensitive to outcome density, show cue competition effects (blocking, overshadowing), and are influenced by prior causal beliefs. Associative models (Rescorla-Wagner) and statistical models (causal power; Cheng, 1997) compete to explain these patterns. The paradigm bridges associative learning, causal reasoning, and Bayesian inference literatures. It is the human analogue of animal conditioning studies and is foundational for understanding how people learn cause-effect relationships in medicine, engineering, and everyday reasoning.

## Inclusion test

```{list-table}
:widths: 15 85
:header-rows: 0

* - **Procedure**
  - Participants observe a series of trials presenting the presence/absence of candidate causes and occurrence/non-occurrence of outcomes, then judge the causal strength of cause-outcome relationships.
* - **Manipulation**
  - Contingency (delta-P value: positive, zero, negative); outcome base rate (common vs. rare outcomes); cue competition (blocking, overshadowing, relative validity); number of trials; trial-by-trial vs. summary presentation; number of candidate causes; temporal contiguity between cause and outcome.
* - **Measurement**
  - Causal strength ratings; trial-by-trial prediction accuracy; judgment latency; sensitivity to contingency components (P(O|C) and P(O|~C) separately); blocking magnitude; correspondence between judgments and normative models (delta-P, causal power, Rescorla-Wagner).
```

## Variations

```{list-table}
:widths: 25 40 35
:header-rows: 1

* - Variation
  - Description
  - Justification
* - Allergy Prediction Task
  - Cover story: patients eat foods and develop (or don't develop) allergies. The most common contingency learning cover story. Naturalistic and intuitive framing.
  - Canonical food-allergy prediction: participant judges cause-effect contingencies
* - Blocking Paradigm
  - Pre-train cause A → outcome, then present compound AB → outcome. Test causal rating for B. Blocking (low B ratings) demonstrates cue competition and supports associative models.
  - Pre-training on one cue blocks learning about second cue; distinct compound conditioning procedure
* - Outcome Density Manipulation
  - Vary the base rate of the outcome (P(O|~C)). High outcome density inflates causal ratings even at zero contingency (outcome density bias).
  - Systematically varies base rate of outcomes; changes the statistical environment
* - Trial-by-Trial Prediction
  - Participants predict the outcome on each trial before seeing it. Prediction error drives learning. Allows modeling of trial-by-trial associative strength updating.
  - Participant predicts on each trial before feedback; different response requirement from summary judgment
* - Summary vs. Sequential Presentation
  - Summary: all contingency information presented simultaneously in a table. Sequential: one trial at a time. Different formats can produce different judgments (format effect).
  - Summary table vs. trial-by-trial presentation; changes information format and cognitive demand
* - Multi-Cause (Relative Validity)
  - Multiple candidate causes present; some perfectly predictive, others partially redundant. Tests relative validity and cue selection.
  - Multiple competing cues; relative validity procedure changes causal inference structure
* - Causal Direction Manipulation
  - Predictive (cause → effect: given cause, judge effect likelihood) vs. diagnostic (effect → cause: given effect, judge cause likelihood). Tests asymmetry in causal reasoning.
  - Manipulates whether participant judges cause→effect or effect→cause; different reasoning direction
* - Backward Blocking / Retrospective Revaluation
  - Post-training information about one cause changes judgments about a previously trained compound partner. Tests whether causal knowledge is updated retrospectively.
  - Post-training devaluation of compound changes prior learning; distinct temporal structure
```

## Cognitive processes

This task engages the following cognitive processes:

- [Causal reasoning](../processes/reasoning_and_problem_solving.md#hed-causal-reasoning)
- [Associative learning](../processes/associative_learning_and_reinforcement.md#hed-associative-learning)
- [Reward prediction error](../processes/associative_learning_and_reinforcement.md#hed-reward-prediction-error)
- [Probability judgment](../processes/value_based_decision_making_under_risk_and_uncertainty.md#hed-probability-judgment)

## Key references

- {'authors': 'Shanks, D. R.', 'year': 1987, 'title': 'Acquisition functions in contingency judgment', 'venue': 'Learning and Motivation', 'venue_type': 'journal', 'journal': 'Learning and Motivation', 'volume': '18', 'issue': '2', 'pages': '147-166', 'doi': '10.1016/0023-9690(87)90008-7', 'openalex_id': None, 'pmid': None, 'citation_string': 'Shanks, D. R., & Dickinson, A. (1987). Associative accounts of causality judgment. *Psychology of Learning and Motivation*, 21, 229-261.', 'url': 'https://doi.org/10.1016/0023-9690(87)90008-7', 'source': 'crossref', 'confidence': 'high', 'verified_on': '2026-04-20'}
- {'authors': 'Cheng, P. W.', 'year': 1997, 'title': 'From covariation to causation: A causal power theory.', 'venue': 'Psychological Review', 'venue_type': 'journal', 'journal': 'Psychological Review', 'volume': '104', 'issue': '2', 'pages': '367-405', 'doi': '10.1037//0033-295x.104.2.367', 'openalex_id': None, 'pmid': None, 'citation_string': 'Cheng, P. W. (1997). From covariation to causation: A causal power theory. *Psychological Review*, 104(2), 367-405.', 'url': 'https://doi.org/10.1037//0033-295x.104.2.367', 'source': 'crossref', 'confidence': 'high', 'verified_on': '2026-04-20'}
- {'authors': 'Dickinson, A., Shanks, D., & Evenden, J.', 'year': 1984, 'title': 'Judgement of Act-Outcome Contingency: The Role of Selective Attribution', 'venue': 'The Quarterly Journal of Experimental Psychology Section A', 'venue_type': 'journal', 'journal': 'The Quarterly Journal of Experimental Psychology Section A', 'volume': '36', 'issue': '1', 'pages': '29-50', 'doi': '10.1080/14640748408401502', 'openalex_id': None, 'pmid': None, 'citation_string': 'Dickinson, A., Shanks, D., & Evenden, J. (1984). Judgement of act-outcome contingency: The role of selective attribution. *Quarterly Journal of Experimental Psychology Section A*, 36(1), 29-50.', 'url': 'https://doi.org/10.1080/14640748408401502', 'source': 'crossref', 'confidence': 'high', 'verified_on': '2026-04-20'}

## Recent references

- {'authors': 'De Houwer, J., & Beckers, T.', 'year': 2002, 'title': 'A Review of Recent Developments in Research and Theories on Human Contingency Learning', 'venue': 'The Quarterly Journal of Experimental Psychology Section B', 'venue_type': 'journal', 'journal': 'The Quarterly Journal of Experimental Psychology Section B', 'volume': '55', 'issue': '4b', 'pages': '289-310', 'doi': '10.1080/02724990244000034', 'openalex_id': None, 'pmid': None, 'citation_string': 'De Houwer, J., & Beckers, T. (2002). A review of recent developments in research and theories on human contingency learning. *Quarterly Journal of Experimental Psychology Section B*, 55(4), 289-310.', 'url': 'https://doi.org/10.1080/02724990244000034', 'source': 'crossref', 'confidence': 'high', 'verified_on': '2026-04-20'}
- {'authors': 'Griffiths, T. L., & Tenenbaum, J. B.', 'year': 2005, 'title': 'Structure and strength in causal induction☆', 'venue': 'Cognitive Psychology', 'venue_type': 'journal', 'journal': 'Cognitive Psychology', 'volume': '51', 'issue': '4', 'pages': '334-384', 'doi': '10.1016/j.cogpsych.2005.05.004', 'openalex_id': None, 'pmid': None, 'citation_string': 'Griffiths, T. L., & Tenenbaum, J. B. (2005). Structure and strength in causal induction. *Cognitive Psychology*, 51(4), 334-384.', 'url': 'https://doi.org/10.1016/j.cogpsych.2005.05.004', 'source': 'crossref', 'confidence': 'high', 'verified_on': '2026-04-20'}
- {'authors': 'Perales, J. C., Catena, A., Shanks, D. R., & González, J. A.', 'year': 2005, 'title': 'Dissociation Between Judgments and Outcome-Expectancy Measures in Covariation Learning: A Signal Detection Theory Approach.', 'venue': 'Journal of Experimental Psychology: Learning, Memory, and Cognition', 'venue_type': 'journal', 'journal': 'Journal of Experimental Psychology: Learning, Memory, and Cognition', 'volume': '31', 'issue': '5', 'pages': '1105-1120', 'doi': '10.1037/0278-7393.31.5.1105', 'openalex_id': None, 'pmid': None, 'citation_string': 'Perales, J. C., Catena, A., Shanks, D. R., & Gonzalez, J. A. (2005). Dissociation between judgments and outcome-expectancy measures in covariation learning: A signal detection theory approach. *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 31(5), 1105-1120.', 'url': 'https://doi.org/10.1037/0278-7393.31.5.1105', 'source': 'crossref', 'confidence': 'high', 'verified_on': '2026-04-20'}
- {'authors': 'Lu, H., Yuille, A. L., Liljeholm, M., Cheng, P. W., & Holyoak, K. J.', 'year': 2008, 'title': 'Bayesian generic priors for causal learning.', 'venue': 'Psychological Review', 'venue_type': 'journal', 'journal': 'Psychological Review', 'volume': '115', 'issue': '4', 'pages': '955-984', 'doi': '10.1037/a0013256', 'openalex_id': None, 'pmid': None, 'citation_string': 'Lu, H., Yuille, A. L., Liljeholm, M., Cheng, P. W., & Holyoak, K. J. (2008). Bayesian generic priors for causal learning. *Psychological Review*, 115(4), 955-984.', 'url': 'https://doi.org/10.1037/a0013256', 'source': 'crossref', 'confidence': 'high', 'verified_on': '2026-04-20'}

