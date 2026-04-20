(hedtsk_multi_armed_bandit)=

# Multi-Armed Bandit Task

**HED Task ID:** `hedtsk_multi_armed_bandit`

**Also known as:** MAB, Bandit Task, K-Armed Bandit

Repeated choice among options with unknown or changing reward distributions; choice sequences dissociate exploration from exploitation.

## Description

Participants choose among multiple options (the "arms" of a slot machine), each yielding rewards with unknown and often changing probabilities. The central challenge is the explore-exploit dilemma: whether to exploit the currently best-known option or explore alternatives that might yield higher returns. Reward probabilities may be stationary or volatile (drifting over time), with the volatile version (restless bandit) requiring continuous updating of value estimates. This paradigm is the dominant tool in computational psychiatry for studying reinforcement learning, and its computational tractability — fitting with Bayesian, Kalman-filter, or upper-confidence-bound models — has made it central to understanding decision-making deficits in addiction, schizophrenia, depression, and anxiety.

## Inclusion Test

```{list-table}
---
widths: 15 85
header-rows: 0
---
* - **Procedure**
  - Participants choose repeatedly among multiple options (arms) that deliver stochastic rewards drawn from different distributions. They must balance exploring unknown options with exploiting known good ones.
* - **Manipulation**
  - Number of arms; reward distributions (stationary vs. drifting); horizon length; information asymmetry.
* - **Measurement**
  - Total reward earned; exploration-exploitation ratio; fit to reinforcement learning models (learning rate, inverse temperature); regret.
```

## Variations

```{list-table}
---
widths: 30 70
header-rows: 1
---
* - Variation
  - Description
* - Two-Armed Stationary Bandit
  - Simplest version; two options with fixed reward probabilities.
* - Restless (Volatile) Bandit
  - Reward probabilities drift over time via Gaussian random walk; requires continuous updating.
* - Contextual Bandit
  - Reward probabilities depend on observable context features; tests generalization across contexts.
* - Horizon Task (Wilson et al.)
  - Short vs. long decision horizons to separately measure directed and random exploration.
* - Four-Armed Bandit with Reversal
  - Multiple arms with occasional reward-probability reversals; combines bandit with reversal-learning demands.
* - Informative vs. Non-Informative Exploration
  - Designs that separate information-seeking exploration from random exploration (e.g., observed vs. chosen options).
* - Social Bandit
  - Observing another agent's choices and outcomes before making own decisions; adds social learning dimension.
* - Bandit with Effort Cost
  - Incorporating physical or cognitive effort cost into exploration decisions.
* - Bandit with Partial Observability
  - Only the chosen arm's outcome is observed (standard) vs. all arms' outcomes are observed; separates learning from exploration.
```

## Cognitive Processes

This task engages the following cognitive processes:

- [Reinforcement learning](../processes/associative_learning_and_reinforcement.md#hed-reinforcement-learning)
- [Value learning](../processes/associative_learning_and_reinforcement.md#hed-value-learning)
- [Reward prediction error](../processes/associative_learning_and_reinforcement.md#hed-reward-prediction-error)
- [Value-based decision making](../processes/value_based_decision_making_under_risk_and_uncertainty.md#hed-value-based-decision-making)
- [Strategy use](../processes/cognitive_flexibility_and_higher_order_executive_function.md#hed-strategy-use)

## Key References

- Daw, N. D., O'Doherty, J. P., Dayan, P., Seymour, B., & Dolan, R. J. (2006). Cortical substrates for exploratory decisions in humans. *Nature*, 441, 876–879.
- Cohen, J. D., McClure, S. M., & Yu, A. J. (2007). Should I stay or should I go? How the human brain manages the trade-off between exploitation and exploration. *Philosophical Transactions of the Royal Society B*, 362(1481), 933–942.
- Sutton, R. S., & Barto, A. G. (2018). *Reinforcement learning: An introduction* (2nd ed.). MIT Press.

## Recent References

- Gershman, S. J. (2018). Deconstructing the human algorithms for exploration. *Cognition*, 173, 34–42.
- Schulz, E., & Gershman, S. J. (2019). The algorithmic architecture of exploration in the human brain. *Current Opinion in Neurobiology*, 55, 7–14.
- Cogliati Dezza, I., Yu, A. J., Cleeremans, A., & Alexander, W. (2017). Learning the value of information and reward over time when solving exploration–exploitation problems. *Scientific Reports*, 7, 16919.
- Chakroun, K., Mathar, D., Wiehler, A., Ganzer, F., & Peters, J. (2020). Dopaminergic modulation of the exploration/exploitation trade-off in human decision-making. *eLife*, 9, e51260.
