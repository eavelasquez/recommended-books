# Recommended Books

This is a simple web app that displays a list of recommended books. It is built using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Additionally, it uses [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) to animate the page transitions.

**Note:** it's based on Recommended Books by [Addy Osmani](https://books.zaps.dev/).

<img src="https://repository-images.githubusercontent.com/662319946/f3833167-e3cb-42aa-91bb-a8163188bf74" alt="Recommended Books" width="640" />

## 🚀 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BookItem.astro
│   │   ├── Copyright.astro
│   │   ├── ListOfBooks.astro
│   │   └── Title.astro
│   ├── data/
│   │   └── books.js
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│       ├── [book].astro
│   │   ├── 404.astro
│   │   └── index.astro
│   └── utils/
│       └── navigation.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
