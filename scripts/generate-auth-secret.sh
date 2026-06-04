#!/bin/bash

# Generate a secure random secret for Better Auth
# Output: 32 character alphanumeric secret

SECRET=$(openssl rand -base64 32 | tr -d '\n')
echo "BETTER_AUTH_SECRET=$SECRET"


## Cara pakai: bash scripts/generate-auth-secret.sh >> .env.production