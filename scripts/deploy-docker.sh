#!/usr/bin/env bash

set -eu

MODE="${1:-}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"

if [ -z "$MODE" ]; then
  echo "Usage: ./scripts/deploy-docker.sh <init|update|logs|restart|shell>"
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
    compose exec app npm run auth:seed-admin
    ;;
  update)
    compose build
    compose up -d
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
    echo "Gunakan salah satu: init, update, logs, restart, shell"
    exit 1
    ;;
esac
