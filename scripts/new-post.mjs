#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function main() {
  console.log('\n📝 Create a New Post\n');

  const title = await question('Post title: ');
  const description = await question('Post description: ');
  
  console.log('\nSelect category:');
  console.log('1. Research');
  console.log('2. Commentary');
  console.log('3. Literature Reviews');
  const categoryChoice = await question('Enter number (1-3): ');
  
  const categoryMap = {
    '1': 'research',
    '2': 'commentary',
    '3': 'literature reviews',
  };
  
  const category = categoryMap[categoryChoice] || 'commentary';

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const frontmatter = `---
title: "${title}"
description: "${description}"
pubDate: ${today}
tags: []
category: "${category}"
---

## Introduction

Write your content here.

## Section 2

More content...

## Conclusion

Wrap up your thoughts.
`;

  const postsDir = path.join(__dirname, '..', 'src', 'content', 'posts');
  const filePath = path.join(postsDir, `${slug}.md`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`\n❌ Error: File ${slug}.md already exists!`);
    rl.close();
    return;
  }

  // Create the file
  fs.writeFileSync(filePath, frontmatter);

  console.log(`\n✅ Created new post: ${slug}.md`);
  console.log(`📁 Location: src/content/posts/${slug}.md`);
  console.log(`\n🎯 Next steps:`);
  console.log(`   1. Edit the file to add your content`);
  console.log(`   2. Save the file`);
  console.log(`   3. The post will appear on your site\n`);

  rl.close();
}

main();

