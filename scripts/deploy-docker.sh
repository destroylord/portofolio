#!/usr/bin/env bash

set -eu

MODE="${1:-}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"

if [ -z "$MODE" ]; then
  echo "Usage: ./scripts/deploy-docker.sh <init|update|logs|restart|shell|clean-init>"
  exit 1
fi

if [ ! -f ".env.production" ]; then
  echo ".env.production belum ada. Buat dulu dari .env.docker.example atau template lain."
  exit 1
fi

compose() {
  docker compose --env-file .env.production -f "$COMPOSE_FILE" "$@"
}

case "$MODE" in
  init)
    compose build
    compose up -d
    compose exec app npm run db:push
    # compose exec app npm run db:seed-content
    BETTER_AUTH_DISABLE_SIGN_UP=false compose exec app npm run auth:seed-admin
    ;;
  update)
    compose build
    compose up -d
    ;;
  clean-init)
    echo "Stopping containers..."
    compose down -v
    echo "Removing images..."
    docker rmi portfolio-app || true
    echo "Building fresh..."
    compose build
    compose up -d
    compose exec app npm run db:push
    # compose exec app npm run db:seed-content
    BETTER_AUTH_DISABLE_SIGN_UP=false compose exec app npm run auth:seed-admin
    echo "Clean init complete!"
    ;;
  logs)
    compose logs -f app
    ;;
  restart)
    compose restart app
    ;;
  shell)
    compose exec app sh
    ;;
  *)
    echo "Mode tidak dikenal: $MODE"
    echo "Gunakan salah satu: init, update, logs, restart, shell, clean-init"
    exit 1
    ;;
esac
