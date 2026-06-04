.PHONY: init update clean-init logs restart shell help

ENV_FILE := .env.production
COMPOSE_CMD := docker compose --env-file $(ENV_FILE)

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  init          - Build and start containers, setup database"
	@echo "  update        - Rebuild and restart containers"
	@echo "  clean-init    - Full reset: stop, remove volumes, rebuild, init"
	@echo "  logs          - Follow app logs"
	@echo "  restart       - Restart app container"
	@echo "  shell         - Open shell in app container"
	@echo "  db-push       - Push database schema"
	@echo "  db-seed       - Seed database with initial content"
	@echo "  admin-seed    - Seed admin user"

init:
	$(COMPOSE_CMD) build
	$(COMPOSE_CMD) up -d
	$(COMPOSE_CMD) exec app npm run db:push
	BETTER_AUTH_DISABLE_SIGN_UP=false $(COMPOSE_CMD) exec app npm run auth:seed-admin

update:
	$(COMPOSE_CMD) build
	$(COMPOSE_CMD) up -d

clean-init:
	@echo "Stopping containers..."
	$(COMPOSE_CMD) down -v
	@echo "Removing images..."
	docker rmi portfolio-app || true
	@echo "Building fresh..."
	$(COMPOSE_CMD) build
	$(COMPOSE_CMD) up -d
	$(COMPOSE_CMD) exec app npm run db:push
	BETTER_AUTH_DISABLE_SIGN_UP=false $(COMPOSE_CMD) exec app npm run auth:seed-admin
	@echo "Clean init complete!"

logs:
	$(COMPOSE_CMD) logs -f app

restart:
	$(COMPOSE_CMD) restart app

shell:
	$(COMPOSE_CMD) exec app sh

db-push:
	$(COMPOSE_CMD) exec app npm run db:push

db-seed:
	$(COMPOSE_CMD) exec app npm run db:seed-content

admin-seed:
	BETTER_AUTH_DISABLE_SIGN_UP=false $(COMPOSE_CMD) exec app npm run auth:seed-admin
