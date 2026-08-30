# my-portfolio API

This is a public, no-auth Express API for the portfolio website.

## Getting started

```bash
npm install
npm start
```

The server runs by default on:

```text
http://localhost:5000
```

## Available endpoints

- `GET /` — API welcome message and available routes
- `GET /api/health` — Service health check
- `GET /api/profile` — Portfolio profile and summary stats
- `GET /api/about` — About content, values, and achievements
- `GET /api/projects` — Featured projects
- `GET /api/skills` — Skill categories and items
- `GET /api/experience` — Professional experience timeline
- `POST /api/contact` — Public contact form submission without authentication

## Example request

```bash
curl http://localhost:5000/api/profile
```

## Example contact submission

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Project inquiry",
    "message": "I would like to discuss a DevOps project."
  }'
```
