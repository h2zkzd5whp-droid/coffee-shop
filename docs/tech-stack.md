# Tech Stack

| Area             | Choice                                              | Notes                                                                 |
|------------------|-----------------------------------------------------|-----------------------------------------------------------------------|
| Frontend         | React (Vite)                                        |                                                                       |
| Backend          | Django + Django REST Framework                      |                                                                       |
| Database         | SQLite                                              | Never commit `db.sqlite3`                                             |
| API              | REST + JSON                                         | Vite dev proxy: `/api` -> `localhost:8000`                            |
| Auth             | JWT (`djangorestframework-simplejwt`)               | Frontend: axios interceptor sets `Authorization`, refreshes on 401    |
| HTTP client      | axios                                               | Single instance in `frontend/src/api/client.js`                       |
| Routing          | react-router-dom                                    |                                                                       |
| Styling          | Tailwind CSS (`@tailwindcss/vite`)                  |                                                                       |
| State management | None (`useState` + props)                           | Do not add a state management library                                 |
| Formatters       | black (Python) / prettier + prettier-plugin-tailwindcss (JS) | Commit config files only                                     |
| Versions         | Python 3.12 / Node 20 LTS                           |                                                                       |
| Env vars         | `.env` + `.env.example`                             | Never commit `.env`                                                   |
| Line endings     | `.gitattributes`: `* text=auto eol=lf`              |                                                                       |
| Docs             | Markdown in `docs/` + Google Docs                   | No Word or HWP files in the repo                                      |
