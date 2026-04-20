(hedtsk_two_stage_decision)=

# Two-Stage Decision Task

**HED Task ID:** `hedtsk_two_stage_decision`

**Also known as:** Two-Step Task, Daw Task, MB/MF Task

Sequential two-choice task with probabilistic transitions to second-stage states and drifting rewards; choice patterns dissociate model-based from model-free control.

## Description

Participants make two sequential choices per trial. The first-stage choice leads (with fixed transition probabilities — 70% common, 30% rare) to one of two second-stage states, each containing its own pair of options. Second-stage options yield rewards with slowly drifting probabilities. Daw et al. (2011) designed this task to dissociate model-based reinforcement learning (using knowledge of the transition structure to plan) from model-free reinforcement learning (repeating previously rewarded actions regardless of transition type). The diagnostic signature is the interaction between reward and transition type on subsequent first-stage choices: model-based agents show opposite stay/switch patterns after common vs. rare transitions, while model-free agents show the same pattern regardless of transition type.

## Inclusion Test

```{list-table}
---
widths: 15 85
header-rows: 0
---
* - **Procedure**
  - First stage: choose between two options that lead probabilistically (70/30) to one of two second-stage choice sets. Second stage: choose between two options with drifting reward probabilities. This separates model-based from model-free learning.
* - **Manipulation**
  - Transition structure (common vs. rare); reward probability drift rate; reward magnitude.
* - **Measurement**
  - Stay probability as a function of previous trial outcome × transition type; model-based index; computational model fits (hybrid MB/MF learning rates, mixing weight).
```

## Variations

```{list-table}
---
widths: 30 70
header-rows: 1
---
* - Variation
  - Description
* - Standard Daw et al. (2011) Version
  - Two first-stage options, two second-stage states, each with two options; 70/30 transition probabilities.
* - Shortened/Simplified Versions
  - Fewer trials or simplified transition structure for clinical or developmental populations.
* - Enhanced Model-Based Version
  - More complex transition structures (three or more stages) to increase model-based demands.
* - Devaluation Manipulation
  - Changing reward magnitudes mid-task to test sensitivity to outcome value (model-based predicts rapid adjustment).
* - Two-Stage with Instructed Knowledge
  - Explicitly teaching the transition structure before the task; tests whether model-based behavior increases with explicit knowledge.
```

## Cognitive Processes

This task engages the following cognitive processes:

- [Model-based learning](../processes/associative_learning_and_reinforcement.md#hed-model-based-learning)
- [Model-free learning](../processes/associative_learning_and_reinforcement.md#hed-model-free-learning)
- [Reinforcement learning](../processes/associative_learning_and_reinforcement.md#hed-reinforcement-learning)
- [Reward prediction error](../processes/associative_learning_and_reinforcement.md#hed-reward-prediction-error)
- [Value-based decision making](../processes/value_based_decision_making_under_risk_and_uncertainty.md#hed-value-based-decision-making)

## Key References

- Daw, N. D., Gershman, S. J., Seymour, B., Dayan, P., & Dolan, R. J. (2011). Model-based influences on humans' choices and striatal prediction errors. *Neuron*, 69(6), 1204–1215.
- Dolan, R. J., & Dayan, P. (2013). Goals and habits in the brain. *Neuron*, 80(2), 312–325.
- Glascher, J., Daw, N., Dayan, P., & O'Doherty, J. P. (2010). States versus rewards: Dissociable neural prediction error signals underlying model-based and model-free reinforcement learning. *Neuron*, 66(4), 585–595.

## Recent References

- Kool, W., Cushman, F. A., & Gershman, S. J. (2016). When does model-based control pay off? *PLoS Computational Biology*, 12(8), e1005090.
- Gillan, C. M., Kosinski, M., Whelan, R., Phelps, E. A., & Daw, N. D. (2016). Characterizing a psychiatric symptom dimension related to deficits in goal-directed control. *eLife*, 5, e11305.
- da Silva, C. F., & Hare, T. A. (2020). Humans primarily use model-based inference in the two-stage task. *Nature Human Behaviour*, 4, 1053–1066.
- Feher da Silva, C., & Hare, T. A. (2018). A note on the analysis of two-stage task results: How changes in task structure affect what model-free and model-based strategies predict about the effects of reward and transition on the stay probability. *PLoS ONE*, 13(4), e0195328.
