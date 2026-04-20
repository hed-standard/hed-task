# hed-task

[![Deploy documentation](https://github.com/hed-standard/hed-task/actions/workflows/docs.yaml/badge.svg)](https://github.com/hed-standard/hed-task/actions/workflows/docs.yaml) [![Ruff](https://github.com/hed-standard/hed-task/actions/workflows/ruff.yaml/badge.svg)](https://github.com/hed-standard/hed-task/actions/workflows/ruff.yaml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A catalog of standard cognitive and behavioral neuroscience tasks and the cognitive processes they engage, developed as part of the [HED (Hierarchical Event Descriptors)](https://www.hedtags.org/) standardization effort.

The catalog currently covers **103 tasks**, **172 cognitive processes** in **19 categories**, and **486 task–process links**. It provides standard definitions, inclusion criteria, named variations, and bidirectional cross-references to support consistent HED annotation of experimental events across laboratories and BIDS datasets.

The catalog is published as a searchable website at **<https://hed-task.readthedocs.io/>**.

## Contents

| Section                                                                         | Description                                                                             |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Task catalog](https://hed-task.readthedocs.io/tasks/index.html)                | 103 tasks with canonical definitions, inclusion criteria, variations, and process links |
| [Process catalog](https://hed-task.readthedocs.io/processes/index.html)         | 172 cognitive processes in 19 categories, each with definition and references           |
| [Cross-reference](https://hed-task.readthedocs.io/crossref.html)                | Bidirectional table mapping processes to tasks and tasks to processes                   |
| [Criteria and methodology](https://hed-task.readthedocs.io/criteria/index.html) | Inclusion criteria and editorial decisions for tasks and processes                      |

## Repository structure

```
hed-task/
├── src/                    # Documentation generators (Python)
│   ├── generate_docs.py    # Entry point — regenerates all docs/ from .working/
│   └── generators/         # Per-section generator modules
├── docs/                   # Sphinx source (generated — do not edit by hand)
├── .working/               # Authoritative data (task_details.json, process_details.json)
├── tests/                  # Unit tests
└── pyproject.toml
```

The files in `docs/` are generated from the JSON data in `.working/` by the scripts in `src/`. See [Regenerating the site](#regenerating-the-site) below.

## Local development

**Prerequisites:** Python 3.10 or later.

```bash
# Clone and set up
git clone https://github.com/hed-standard/hed-task.git
cd hed-task
python -m venv .venv

# Activate (Windows)
.venv\Scripts\activate
# Activate (Linux / macOS)
source .venv/bin/activate

# Install dependencies
pip install -e ".[dev,docs]"
```

### Regenerating the site

The files in `docs/` are generated from the JSON data in `.working/` — never edit them by hand. Whenever the data in `.working/` changes, run both steps below:

**Step 1 — regenerate the Markdown source:**

```bash
python src/generate_docs.py
```

This reads `task_details.json` and `process_details.json` from `.working/` and overwrites all 129 files in `docs/`.

**Step 2 — build the HTML:**

```bash
sphinx-build -b html docs docs/_build/html
```

Then open `docs/_build/html/index.html` in a browser to preview. A clean build produces zero warnings.

### Run tests

```bash
python -m unittest discover -s tests -v
```

### Lint and format

```bash
ruff check .
ruff format --check .
```

## CI/CD

| Workflow     | Trigger             | Purpose                                   |
| ------------ | ------------------- | ----------------------------------------- |
| `docs.yaml`  | Push / PR to `main` | Build and deploy the site to GitHub Pages |
| `ruff.yaml`  | Push / PR to `main` | Lint and format checks                    |
| `typos.yaml` | Push / PR to `main` | Spell checking                            |
| `links.yaml` | Push / PR to `main` | Broken link detection                     |

## Related resources

- [HED homepage](https://www.hedtags.org/)
- [HED specification](https://github.com/hed-standard/hed-specification)
- [HED Python tools](https://github.com/hed-standard/hed-python)
- [HED schemas](https://github.com/hed-standard/hed-schemas)

## License

This project is licensed under the [MIT License](LICENSE).
