# Portfolio Website — How It Works

This is a static website (no backend, no database) that you can open directly in a browser or host anywhere. All the project content lives in simple text files on your computer, and a Python script converts them into the website.

---

## Folder Structure

```
Portfolio-Website/
│
├── index.html          ← The main portfolio grid page
├── project.html        ← The individual project detail page
│
├── css/
│   └── style.css       ← All the visual styling
│
├── js/
│   ├── config.js       ← Audience profiles (what to show/hide) — edit this
│   ├── data.js         ← All project content, auto-generated — don't edit directly
│   ├── main.js         ← Powers the grid and sorting logic
│   └── project.js      ← Powers the individual project page
│
├── projects/           ← One folder per project, with your content files
│   ├── mood-logger/
│   │   ├── archive.md  ← Project metadata and story text
│   │   ├── images/     ← Images used in this project's story
│   │   └── vault/      ← Raw/archived files, ignored by the website
│   ├── foggy/
│   ├── haptics_kit/
│   └── ...
│
├── images/
│   └── projects/       ← Compressed images, auto-generated — don't edit directly
│
├── generate_data.py    ← The script that reads all archive.md files and builds data.js
└── extract_projects.py ← One-time tool to pull old project data from Showspace
```

---

## How a Project Gets on the Website

Each project lives in its own folder inside `projects/`. The key file in each folder is `archive.md`, which has two parts:

**1. The frontmatter (top section between `---` markers)** — this is the metadata:

```
---
id: 001
title: "Mood Logger"
description: "A fidget cube to track your mood."
type: "Interaction Design"
date: "Nov 2025"
status: published
thumbnailUrl: "images/thumbnail.jpg"
skills:
  - "Industrial Design"
  - "ESP32"
---
```

**2. The body (everything below the second `---`)** — this is the story, written in Markdown. Regular paragraphs, headings with `##`, images with `![caption](filename.jpg)`, bold with `**text**`.

When you run `generate_data.py`, it reads every `archive.md` file and converts all of this into `js/data.js`, which is what the website actually uses.

**Projects with `status: published` appear on the grid. Everything else is hidden.**

---

## Updating Content — The Workflow

1. Edit (or create) an `archive.md` file in the relevant project folder
2. Drop any new images into that project's `images/` subfolder
3. Run the script from your terminal:
   ```
   python3 generate_data.py
   ```
4. The script updates `js/data.js` and compresses any new images into `images/projects/`
5. Open `index.html` in your browser to see the result

The script is safe to run repeatedly — it skips images that haven't changed.

---

## Controlling What the Grid Shows — config.js

`js/config.js` lets you curate the website for different audiences without touching any project files.

It works with **named profiles**. Each profile can:
- Pin specific projects to the top of the grid in a fixed order
- Hide projects entirely

```js
const profiles = {
    default: {
        customProjectOrder: [],   // empty = sort by date, newest first
        hiddenProjectIds: [],     // empty = show everything published
    },
    jobApp: {
        customProjectOrder: [
            "003",  // appears first
            "014",  // appears second
            // ... and so on
        ],
        hiddenProjectIds: [
            "016",  // hidden from grid
            "015",
        ],
    },
};

// ← Change this one line to switch audiences
const activeProfile = profiles.jobApp;
```

To switch back to the default public view, change the last line to:
```js
const activeProfile = profiles.default;
```

To add a new audience profile, add another entry to `profiles` and switch to it.

**This file is not touched by `generate_data.py`** — it's safe to edit at any time.

---

## The Python Scripts

### `generate_data.py` — Run this whenever you update content

Reads all `archive.md` files, converts Markdown to HTML, compresses images, and writes everything into `js/data.js`. This is the only file you need to run regularly.

**What it does:**
- Parses the frontmatter metadata from each `archive.md`
- Converts the Markdown story body to HTML (headings, images, bold, links, lists)
- Compresses images to JPEG at 80% quality, max 1600px wide, skipping ones already processed
- Outputs everything as a single JavaScript file (`js/data.js`)

**What it doesn't touch:** `config.js`, `index.html`, `project.html`, `style.css`, or anything in `js/` except `data.js`.

### `extract_projects.py` — One-time migration tool

This was used to pull project data from Showspace (the old platform) into `extracted_data.json`. You probably won't need to run it again — it's kept as a backup reference.

---

## Adding a New Project

1. Create a new folder in `projects/` (use lowercase with hyphens, e.g. `projects/my-new-project/`)
2. Create `archive.md` inside it — copy the frontmatter structure from an existing project
3. Pick an `id` that isn't already in use (check other `archive.md` files)
4. Set `status: draft` while you're working on it, change to `published` when ready
5. Add images to `projects/my-new-project/images/`
6. Run `python3 generate_data.py`
