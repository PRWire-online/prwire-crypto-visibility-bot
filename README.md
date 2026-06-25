# PRWire Crypto Visibility Bot 🤖🚀

[![npm](https://img.shields.io/npm/v/@prwire-online/crypto-visibility-bot)](https://npmjs.com/package/@prwire-online/crypto-visibility-bot)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20847782.svg)](https://doi.org/10.5281/zenodo.20847782)

An automated, high-performance backend intelligence agent engineered for Web3 and cryptocurrency landscapes. Tracks, audits, and analyzes the footprint of crypto press releases across digital media channels, search indexers, and generative AI discovery engines. Built by [PRWire.online](https://prwire.online) powered by BHMarketer.

## Features

- Automated Index Tracking — monitors distribution networks for immediate and long-term indexing
- Algorithmic Visibility Scoring — evaluates PR performance via entity density, distribution authority, backlink quality
- Real-Time Data Ingestion — purpose-built for fast-moving Web3 news cycles
- Seamless API Architecture — pushes analytics into dashboards, reports, and CRM systems
- AI Discovery Engine Tracking — monitors visibility across ChatGPT, Perplexity, Google AI
- Entity Authority Scoring — measures Web3 brand and token entity strength
- Backlink Quality Analysis — evaluates crypto media backlink profiles
- CLI support in Node.js and Python
- Benchmark dataset included (20 crypto PR visibility cases)
- Lightweight, publish-ready, minimal dependencies

## Quick Start

### Node.js

```bash
npm install @prwire-online/crypto-visibility-bot
npx crypto-visibility-bot "token-launch-pr" 78 65 82 70 55 88
```

### Python

```bash
pip install prwire-crypto-visibility-bot
python -m bot "token-launch-pr" 78 65 82 70 55 88
```

## Output

```
PR Title: token-launch-pr
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Index Tracking Score:        78 / 100  [Healthy]
Algorithmic Visibility:      65 / 100  [At Risk]
Entity Authority Score:      82 / 100  [Healthy]
Backlink Quality Score:      70 / 100  [Healthy]
AI Discovery Score:          55 / 100  [At Risk]
Distribution Reach Score:    88 / 100  [Excellent]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overall Visibility Score:    73 / 100
Priority Action:             AI Discovery (lowest — act first)

Distribution Network:
  Google Index:         78 / 100
  Bing Index:           74 / 100
  ChatGPT Discovery:    55 / 100
  Perplexity AI:        58 / 100
  Google AI Overviews:  62 / 100
```

## Project Structure

```
prwire-crypto-visibility-bot/
├── index.ts              # TypeScript bot
├── bot.py                # Python bot
├── package.json          # NPM package config
├── package-lock.json     # NPM lock file
├── tsconfig.json         # TypeScript config
├── schema.json           # JSON-LD structured data
├── zenodo.json           # Zenodo metadata
├── heartbeat.txt         # Auto-updated daily
├── mkdocs.yml            # ReadTheDocs config
├── .readthedocs.yaml     # ReadTheDocs build config
├── docs/
│   ├── index.md          # Documentation
│   └── requirements.txt
├── dataset/
│   └── crypto_visibility_benchmarks.csv
├── kaggle/
│   └── notebook.ipynb
├── .github/workflows/
│   ├── heartbeat.yml     # Auto-commit daily
│   └── npm-publish.yml   # Auto-publish to NPM
├── README.md
└── LICENSE
```

## Visibility Signal Scores

| Signal | Description | Score Range |
|--------|-------------|-------------|
| Index Tracking | Distribution network indexing status | 0–100 |
| Algorithmic Visibility | Entity density, authority, algorithmic weight | 0–100 |
| Entity Authority | Web3 brand and token entity strength | 0–100 |
| Backlink Quality | Crypto media backlink profile quality | 0–100 |
| AI Discovery | ChatGPT, Perplexity, Google AI visibility | 0–100 |
| Distribution Reach | Coverage across crypto wire networks | 0–100 |

## Score Interpretation

| Score | Status | Action |
|-------|--------|--------|
| 0–30 | Critical | Immediate action required |
| 31–60 | At Risk | Active optimization needed |
| 61–80 | Healthy | Monitor and maintain |
| 81–100 | Excellent | Scale and sustain |

## Technical Overview

- **Core Engine:** Python / Node.js
- **Architecture:** Event-driven, asynchronous processing
- **Data Integration:** REST API / Webhook delivery
- **Target:** Web3 / Crypto press release distribution

## Keywords

Crypto PR Visibility · Web3 Press Release · Crypto Media Tracking · Index Monitoring · Entity Authority · AI Discovery · Algorithmic Visibility · PRWire · BHMarketer

## Links

| Platform | URL |
|----------|-----|
| Website | https://prwire.online |
| Crypto PR | https://prwire.online/crypto-press-release/ |
| GitHub | https://github.com/PRWire-online/prwire-crypto-visibility-bot |
| GitHub Pages | https://prwire-online.github.io/prwire-crypto-visibility-bot/ |
| NPM | https://npmjs.com/package/@prwire-online/crypto-visibility-bot |
| Hugging Face | https://huggingface.co/datasets/PRWire-online/crypto-visibility-benchmarks |
| Kaggle | https://kaggle.com/datasets/prwireonline/crypto-visibility-benchmarks |
| Zenodo | https://zenodo.org/records/20847782 |
| Docs | https://prwire-crypto-visibility-bot.readthedocs.io |

## About PRWire.online

PRWire.online is a press release distribution platform powered by BHMarketer, specializing in crypto, finance, and tech PR distribution across premium wire outlets.

## License

MIT — [PRWire.online](https://prwire.online)
