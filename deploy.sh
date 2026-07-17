#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${GREEN}🚀 Rajshahi Online Hosting — Automated Deployment${NC}"

# 1. Pull latest
echo -e "${GREEN}⬇️  Pulling latest...${NC}"
git pull origin main --allow-unrelated-histories --no-edit || true

# 2. Stage changes
echo -e "${GREEN}📦 Staging...${NC}"
git add .

# 3. Check if there are changes to commit
if git diff --staged --quiet; then
    echo -e "${YELLOW}⚠️  No changes to commit.${NC}"
    echo -e "${GREEN}✅ Deployment skipped – nothing to push.${NC}"
    exit 0
fi

# 4. Commit
COMMIT_MSG="${1:-Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')}"
echo -e "${GREEN}📝 Committing: $COMMIT_MSG${NC}"
git commit -m "$COMMIT_MSG"

# 5. Push
echo -e "${GREEN}⬆️  Pushing...${NC}"
git push origin master:main

# 6. Show summary of what changed
echo -e "\n${CYAN}📊 Summary of this deployment:${NC}"
git show --stat --oneline HEAD

echo -e "\n${GREEN}✅ Deployment complete!${NC}"
