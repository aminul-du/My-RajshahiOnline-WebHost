#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🚀 Rajshahi Online Hosting — Automated Deployment${NC}"

# 1. Pull latest
echo -e "${GREEN}⬇️  Pulling latest...${NC}"
git pull origin main --allow-unrelated-histories --no-edit || true

# 2. Stage changes
echo -e "${GREEN}📦 Staging...${NC}"
git add .

# 3. Commit
COMMIT_MSG="${1:-Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')}"
echo -e "${GREEN}📝 Committing: $COMMIT_MSG${NC}"
git commit -m "$COMMIT_MSG" || echo -e "${YELLOW}⚠️  No changes to commit.${NC}"

# 4. Push
echo -e "${GREEN}⬆️  Pushing...${NC}"
git push origin master:main

echo -e "${GREEN}✅ Deployment complete!${NC}"
