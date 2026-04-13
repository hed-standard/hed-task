# HED task developer instructions

If `.status/local-environment.md` exists, read it first for local OS, shell, and virtual environment details.

Use Google format for docstrings (`Parameters:` not `Args:`). When you create summaries of what you did, always put them in a `.status/` directory at the repository root.

## Markdown style

- Use **sentence case** for all headings: capitalize only the first word (and proper nouns/acronyms like HED, JSON, BIDS, AI).
- Correct: `## Task structure overview`
- Incorrect: `## Task Structure Overview`

## Project overview

This repository (`hed-task`) analyzes **task structure and concepts** in the context of HED (Hierarchical Event Descriptors). It examines how experimental tasks are organized, what concepts they involve, and how task structure relates to events in neuroscience and BIDS datasets.

**Purpose**: Provide research and documentation that:

- Analyzes the structure of experimental tasks and their relationship to events
- Identifies common task concepts and themes across neuroscience experiments
- Supports consistent HED annotation of task-related events
- Serves as a reference for AI systems and developers working with HED tasks

### Related repositories

- **[hed-python](https://github.com/hed-standard/hed-python)**: Python HED tools (primary tooling)
- **[hed-specification](https://github.com/hed-standard/hed-specification)**: Formal specification defining HED rules (source of truth)
- **[hed-schemas](https://github.com/hed-standard/hed-schemas)**: HED schema vocabulary definitions
- **[hed-tests](https://github.com/hed-standard/hed-tests)**: Official HED validation test suite

## Repository structure

```
hed-task/
├── src/                                # Source scripts and utilities
├── tests/                              # Unit tests
├── docs/                               # Sphinx documentation
├── .working/                           # Working notes and analysis drafts
├── .status/                            # Local environment and session notes
├── .github/workflows/                  # CI/CD pipelines (note: folder is "worflows")
└── pyproject.toml                      # All dependencies managed here
```

## Build and validation commands

**Local development uses `pip`; GitHub Actions CI uses `uv`.** Do not use `uv` locally unless the user explicitly asks.

Always activate the virtual environment before running any command. The working sequence is:

```bash
# 1. Install (first time or after dependency changes)
pip install -e ".[dev,docs]"

# 2. Run tests
python -m unittest discover -s tests -v

# 3. Build documentation
sphinx-build -b html docs docs/_build/html
```

After running commands, verify there are no errors before considering the task done.

## CI/CD pipeline

GitHub Actions in `.github/worflows/` (note: the folder is named `worflows`) use `uv` for fast dependency installation:

- `ruff.yaml`: Python code formatting and linting
- `typos.yaml`: Spell checking
- `links.yaml`: Broken link checking

Replicate CI checks locally before pushing: run tests and linting.

## Naming conventions

- Python files: `snake_case.py`
- Documentation files: `snake_case.md` or `snake_case.rst`
- 4-space indentation for Python and JSON

## Common pitfalls

- Don't hardcode file paths — use relative paths
- Use platform-independent path handling (`pathlib`) in Python scripts
- On Windows, always activate the virtual environment before running Python

Trust these instructions. Only search for additional information if something here is incomplete or found to be incorrect.
