#!/usr/bin/env python3
"""Assemble GPT knowledge bundle from configured Markdown sources."""
from __future__ import annotations

import os
import pathlib
import sys


def main() -> int:
    try:
        config_file = os.environ["CONFIG_FILE"]
        output_file = os.environ["OUTPUT_FILE"]
    except KeyError as exc:  # pragma: no cover - guarded by workflow config
        missing = exc.args[0]
        print(f"Required environment variable missing: {missing}", file=sys.stderr)
        return 1

    repo_root = pathlib.Path.cwd().resolve()
    config_path = (repo_root / config_file).resolve() if not os.path.isabs(config_file) else pathlib.Path(config_file).resolve()
    output_path = (repo_root / output_file).resolve() if not os.path.isabs(output_file) else pathlib.Path(output_file).resolve()

    if not config_path.exists():
        print(f"Config file not found: {config_path}", file=sys.stderr)
        return 1

    files: list[pathlib.Path] = []
    included_src_paths: set[pathlib.Path] = set()
    src_dir = (repo_root / "src").resolve()

    for line in config_path.read_text(encoding="utf-8").splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        candidate = pathlib.Path(stripped)
        if not candidate.is_absolute():
            candidate = (repo_root / candidate).resolve()
        else:
            candidate = candidate.resolve()
        if not candidate.exists():
            print(f"Configured file missing: {stripped}", file=sys.stderr)
            return 1
        files.append(candidate)
        if src_dir in candidate.parents or candidate == src_dir:
            included_src_paths.add(candidate)

    if not files:
        print("No source files were configured for GPT knowledge bundle.", file=sys.stderr)
        return 1

    if src_dir.exists():
        for md_file in sorted(src_dir.rglob("*.md")):
            if not md_file.is_file():
                continue
            resolved = md_file.resolve()
            if resolved not in included_src_paths:
                rel_path = resolved.relative_to(repo_root)
                print(f"::warning ::Markdown file not included in GPT knowledge bundle: {rel_path}")

    output_path.parent.mkdir(parents=True, exist_ok=True)

    with output_path.open("w", encoding="utf-8") as dest:
        for idx, path in enumerate(files):
            content = path.read_text(encoding="utf-8").rstrip()
            dest.write(content)
            if idx < len(files) - 1:
                dest.write("\n\n")
            else:
                dest.write("\n")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
