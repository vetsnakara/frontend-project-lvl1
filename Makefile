install:
	npm ci

brain-games:
	node bid/brain-games

publish:
	npm publish --dry-run