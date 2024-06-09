# Thích Đọc Truyện

Software Design course final project.

Story reading web application with capabilities to search, read, and enjoy a variety types of story on the Internet (We do not steal them, we just use them as academic material).

Should there be any inconvience to you who owns a story we use, please kindly contact us for resolution.

## Team members

| Student ID | Full Name        |
| ---------- | ---------------- |
| 21120502   | Trần Đức Minh    |
| 21120515   | Trần Phước Nhân  |
| 21120519   | Lê Thanh Phát    |
| 21120521   | Nguyễn Phúc Phát |
| 21120524   | Trương Minh Phát |

## Features - Client Side

- Search for a story by name or author name from a story source
- Display details of a story (story title, description, number of chapters, genres, etc.) and chapter list
- Choose a specific chapter to read (the story content is formatted a bit)
- UI elements of the reading pad can be adjusted (background color, font family, font size)
- Chapter detail can be saved to local as PDF, EPUB, and images
- Switch the source of a chapter detail if possible
- Quickly navigate to previous, next, or a specific chapter
- Save reading history to local

## Prerequisites

1. [Node](https://nodejs.org/en) >= v18.21 (For the pnpm to work)
2. [pnpm](https://pnpm.io/) >= 9.1.0

## Getting started with this project

Create `.env` or `.env.local` file and fill all the variables (see `.env.example`)

```
# Backend API URL
NEXT_PUBLIC_API_URL=
```

Install dependencies

```bash
pnpm i
```

Spin up the `dev` server

```bash
pnpm run dev
```

You can run tests (for fun)

```bash
pnpm run test # unit & integration tests (vitest)
```

```bash
pnpm run test:ese # e2e tests (playwright)
```

## Acknowledgements

- I am, [@tmphat1312](https://github.com/tmphat1312), the only one who maintains this project will abandon it when the Software Design course ends.
- Actions in this repo are just for demo only (I just got my hands dirty with GitHub Actions)
- There was a getting started option with Docker. However I ran into problem wiht node-18 lately and decided to quit (I'm new to Docker btw)
- You can use this repo (I don't care anyway), but be careful with hidden code smell and bugs.

## License

[The Unlicense](https://choosealicense.com/licenses/unlicense/#)
