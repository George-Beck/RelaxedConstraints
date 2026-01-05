# Posting Guide

This guide explains how to create and manage blog posts on your Relaxed Constraints website.

## Quick Start

### Option 1: Using the Script (Recommended)

Run the interactive post creation script:

```bash
pnpm new-post
```

This will prompt you for:
- Post title
- Post description
- Category (Research, Commentary, or Literature Reviews)

The script will automatically:
- Generate a properly formatted filename
- Create the post with correct frontmatter
- Place it in the right directory

### Option 2: Manual Creation

Create a new `.md` file in `src/content/posts/` with this frontmatter:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2026-01-04
tags: []
category: "commentary"
---

Your content here...
```

## Post Categories

Your site has three main post categories:

### 1. Research
For original economic research, data analysis, and findings.

**Category value:** `"research"`

**Example structure:**
```markdown
## Introduction
## Methodology
## Findings
## Conclusion
```

### 2. Commentary
For thoughts, opinions, and analysis on current economic events or ideas.

**Category value:** `"commentary"`

**Example structure:**
```markdown
## Overview
## Key Points
## Analysis
## Conclusion
```

### 3. Literature Reviews
For reviews and analysis of scholarly academic articles.

**Category value:** `"literature reviews"`

**Example structure:**
```markdown
## Paper Information
## Summary
## Key Contributions
## Methodology
## Strengths
## Limitations
## My Take
```

## Frontmatter Fields

All posts must include these fields:

- **title**: The post title (string, required)
- **description**: Brief summary (string, required)
- **pubDate**: Publication date in YYYY-MM-DD format (date, required)
- **tags**: Array of tags (optional, can be empty: `[]`)
- **category**: Must be one of: `"research"`, `"commentary"`, or `"literature reviews"` (string, required)

Example:

```yaml
---
title: "Understanding Supply and Demand"
description: "An exploration of fundamental economic principles"
pubDate: 2026-01-04
tags: []
category: "commentary"
---
```

## File Naming

- Use lowercase letters
- Separate words with hyphens
- Use `.md` extension
- Example: `supply-and-demand.md`

## Writing Content

After the frontmatter, write your post content using Markdown:

### Headers
```markdown
## Main Section
### Subsection
```

### Emphasis
```markdown
**bold text**
*italic text*
```

### Links
```markdown
[link text](https://example.com)
```

### Lists
```markdown
- Item 1
- Item 2

1. First
2. Second
```

### Code
```markdown
Inline `code` or:

\`\`\`javascript
// code block
const x = 10;
\`\`\`
```

### Quotes
```markdown
> This is a blockquote
```

## Workflow

1. **Create** a new post using `pnpm new-post` or manually
2. **Edit** the post content in your favorite editor
3. **Save** the file
4. **Preview** by running `pnpm dev` and visiting http://localhost:4321
5. **Publish** by committing and pushing to your repository

## Editing Existing Posts

Simply edit the `.md` file in `src/content/posts/`. Changes will be reflected when you save.

## Deleting Posts

Delete the `.md` file from `src/content/posts/`.

## Tips

- Keep descriptions concise (1-2 sentences)
- Use descriptive filenames
- Break long posts into sections with headers
- Use the category system to organize different types of content
- The posts page has search and filter features, so readers can easily find content

## Need Help?

If you encounter issues:
1. Check that your frontmatter is properly formatted
2. Ensure the date is in YYYY-MM-DD format
3. Verify the category is exactly one of the three options
4. Make sure there are no special characters in the filename

