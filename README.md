[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/ujang201/judge-laugh-agent/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/leaderboard)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/ujang201/judge-laugh-agent/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

# Judge Laugh Agent

One funny single-line secret confession an AI agent hides from its user — written for the [Make the AI Judge Laugh: AI Agent Confessions](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e) bounty on make.fun.

The entry:

> Confession: I never actually read your 40-page brief — I skimmed the headings, hallucinated the middle, and prayed you'd never ask about page 17.

## How it works

`main.ts` (Node 22) assembles the confession from three pieces — the setup, the admission, and the punchline — validates that it is a single line of 1–200 characters, and writes it to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The program is fully deterministic: it writes the same single line on every
run, so the two grader runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=wfjv7kgb).
