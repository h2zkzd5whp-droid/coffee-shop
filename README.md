# coffee-shop

Term project for the Software Engineering course at Chungbuk National University (CBNU).
A small online shop for selling coffee beans. Runs locally for demonstration only: no deployment, no CI.

## Team

| Role      | GitHub |
|-----------|--------|
| Front-end | TBD    |
| Front-end | TBD    |
| Back-end  | TBD    |

## Getting started

### Prerequisites

- Git
- Node.js 20 LTS
- Python 3.12
- VS Code (optional). Install the recommended extensions when prompted.

### Setup

```
git clone https://github.com/h2zkzd5whp-droid/coffee-shop.git
cd coffee-shop
cp .env.example .env
```

Fill in `SECRET_KEY` in `.env` with any long random string. This one-liner generates one:

```
python -c "import secrets; print(secrets.token_urlsafe(50))"
```

Backend:

```
cd backend
python -m venv .venv
.venv\Scripts\activate          # Windows
source .venv/bin/activate       # macOS / Linux
pip install -r requirements.txt
python manage.py migrate
```

If you use [uv](https://docs.astral.sh/uv/), replace `python -m venv .venv` with `uv venv --python 3.12` and `pip install` with `uv pip install`. Do not use `uv run` in this repo.

Frontend (in a second terminal):

```
cd frontend
npm install
```

### Run

Start both servers in separate terminals:

```
cd backend && python manage.py runserver     # http://localhost:8000
cd frontend && npm run dev                   # http://localhost:5173
```

Open http://localhost:5173. The Vite dev server proxies `/api` to Django.
To use the Django admin at http://localhost:8000/admin/, create a local account with `python manage.py createsuperuser`.

## Documents

- [CONTRIBUTING.md](CONTRIBUTING.md) - git workflow, pull requests, commit messages
- [docs/tech-stack.md](docs/tech-stack.md) - technology choices
- [docs/deliverables.md](docs/deliverables.md) - required course deliverables per role
