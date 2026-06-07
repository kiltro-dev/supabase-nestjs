# supabase-nestjs

Minimal NestJS boilerplate with a globally injectable Supabase client and a health endpoint.

Quick start

1. Copy `.env.example` to `.env` and fill values for local development.

Production notes:
- Do NOT store server secrets (`SUPABASE_KEY`) in your repo. Use a secrets manager and inject
	them into the environment at deploy time. Set `NODE_ENV=production` in production.
- The app ignores `.env` when `NODE_ENV=production` and validates required variables at startup.
2. Install deps:

```bash
npm install
```

3. Run in dev:

```bash
npm run start:dev
```

Endpoint: `GET /health` — verifies Supabase connectivity.
# supabase-nestjs