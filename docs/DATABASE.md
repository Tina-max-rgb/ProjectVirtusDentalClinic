# Virtus Dental Center — database

The backend now uses a persistent SQLite database through Node 22's native `node:sqlite` API. No ORM or native addon is required.

## Stored data

- patients
- leads / contact requests
- appointment requests
- chatbot conversations and messages
- doctors
- treatments and translations
- review metadata
- media
- FAQ and translations
- audit logs

## Initialize / seed

```bash
cd backend
npm run db:init
```

The default database path is `./data/virtus.sqlite`.

## Production persistence

The database is a file, so the host **must mount persistent storage** at the directory containing `DATABASE_PATH`. Without a persistent volume, a container restart can delete the database.

Set:

```env
DATABASE_PATH=./data/virtus.sqlite
NOTIFY_EMAIL=virtusdentalpro@gmail.com
```

The application initializes the schema safely at startup and applies idempotent seed data.

## Backup

```bash
npm run db:backup
```

For a high-availability / multi-instance deployment, move the same schema to managed PostgreSQL and keep the API behind a single shared database. The current application is intentionally dependency-light so the migration can be done without changing the public frontend API.
