# Security audit — Virtus Dental Center

Date: 2026-10-02

## Scope

Local application review of the React/Vite frontend, Node/Express API, SQLite persistence, contact endpoint, chatbot endpoint, Docker configuration and backup mechanism.

## Controls verified

- Helmet security headers.
- CSP in the production Nginx container.
- CORS allow-list.
- Same-origin defence on contact/CSRF endpoints.
- HMAC CSRF token with production secret requirement.
- Rate limiting on API, contact and chatbot.
- JSON body limit.
- Contact validation + honeypot + minimum submission time.
- Chatbot message length limit and session-id validation.
- Prepared SQLite statements.
- SQLite WAL, `synchronous=FULL`, foreign keys, secure delete and trusted schema disabled.
- Database and backup file permissions restricted to the service user in deployment.
- Database health endpoint does not expose the filesystem path in production.
- No API route exposes environment secrets.
- SQLite database is not mounted into the Nginx frontend container.
- Daily backup service with 14-snapshot retention.
- Backup verification with `PRAGMA integrity_check`.
- Backend automated validation tests.
- Non-destructive security smoke tests.

## Security smoke result

All local checks passed:

```text
PASS health + database
PASS health does not expose secrets
PASS nosniff header
PASS CSP header
PASS foreign origin blocked
PASS chatbot length limit
PASS contact requires CSRF
PASS content endpoint does not expose server secrets
```

## Important limits

This is not a certification and does not replace an independent penetration test. An external test against the production VPS/domain must be performed only after deployment and authorization. Dependency CVE scanning (`npm audit`) also has to be run from a network-connected environment before release because the isolated build environment cannot reach the npm registry reliably.
