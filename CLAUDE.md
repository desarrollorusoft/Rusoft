# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run serve    # Dev server with hot reload
npm run build    # Production build
npm run lint     # Lint and fix files
```

No test suite is configured.

## Architecture

**Stack**: Vue 3 + TypeScript, Vue Router 4, Vuex 4, Vue-i18n 9, Axios, Vue CLI 5 (webpack-based).

This is the corporate portfolio/website for Rusoft, an Argentine software development company.

### Key directories

- `src/content/site.ts` — Centralized site copy (nav, hero text, services list, testimonials, client logos). Edit here when updating any visible text.
- `src/views/` — Page-level components, lazy-loaded via webpack chunks. Routes: home, nosotros, contacto, cv.
- `src/components/` — Shared components: `AppHeader`, `AppFooter`, `Preloader`.
- `src/store/modules/preloader.ts` — Sophisticated asset preloading system. Tracks progress across 25+ videos/images; enforces a minimum display time of 1.5s; has per-asset (10s) and total (30s) timeouts. Configured in `src/config/preloader.ts`.
- `src/services/` — Axios-based API layer (`http.ts` sets base URL + 20s timeout; `contact.ts`, `cv.ts` wrap endpoints).
- `src/router/index.ts` — Routes include per-route SEO meta (title, description, keywords) updated via a navigation guard.

### Environment

Copy `.env` for local development. Key variable:

```
VUE_APP_API_BASE_URL=http://api.rusoft.test
```

### i18n

Spanish (`es`) is the default locale; English (`en`) is the fallback. Translations live in `src/i18n/index.ts`. The site content itself is in `src/content/site.ts`, not in i18n message files.

## Backend (api.rusoft)

The backend lives at `C:\Users\Marcos\code\api.rusoft` — a **Laravel 5.8 / PHP 7.3** API project with a MySQL database.

### Backend commands

```bash
php artisan serve          # Dev server
php artisan migrate        # Run migrations
php artisan tinker         # REPL
npm run dev / npm run prod # Compile assets via Laravel Mix
```

### API endpoints

All public routes are in `routes/api.php` with CORS middleware:

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/contacts` | Submit contact form |
| GET | `/api/contacts/{id}` | Get contact by ID |
| POST | `/api/cvs` | Upload CV (PDF/DOC/DOCX, max 5MB) |
| GET | `/api/cvs/{id}` | Get CV by ID |

### Backend structure

- `app/Http/Controllers/Api/` — `ContactApiController`, `CvApiController` (public API)
- `app/Http/Controllers/Admin/` — `DashboardController` (admin panel at `/admin/`)
- `app/Contact.php`, `app/Cv.php` — Eloquent models
- `app/Mail/` — `ContactNotification`, `CvNotification` (email alerts to `config('app.api_notification_email')`)
- `database/migrations/` — Contacts and CVs tables with `is_read`/`read_at` tracking fields

### Backend environment

Copy `.env.example` to `.env`. Key variables: `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`, `APP_URL`, and `api_notification_email` in `config/app.php`.
