# Dark Matter Studio — Website Setup Guide

## Files in this folder

| File | What it is |
|------|-----------|
| `index.html` | Main homepage |
| `portfolio.html` | Portfolio page (products, publications, skills) |
| `style.css` | All styles for both pages |
| `main.js` | Animations, cursor, scroll effects, form handling |
| `favicon.svg` | Browser tab icon |
| `headshot.jpeg` | Your photo (add this yourself — see Step 2) |

---

## Step 1 — Set up GitHub Pages (free hosting)

1. Go to **github.com** and create a free account if you don't have one
2. Click the **+** icon top right → **New repository**
3. Name it exactly: `dark-matter-studio` (or any name you like)
4. Set it to **Public**
5. Click **Create repository**
6. On the next screen, click **uploading an existing file**
7. Drag ALL files from this folder into the upload area
8. Click **Commit changes**
9. Go to **Settings** → **Pages** (left sidebar)
10. Under "Source" select **Deploy from a branch** → branch: **main** → folder: **/ (root)**
11. Click **Save**
12. Your site will be live at: `https://yourusername.github.io/dark-matter-studio`

---

## Step 2 — Add your headshot

1. Rename your headshot file to exactly: `headshot.jpeg`
2. Upload it to the same GitHub repository folder
3. The site will automatically display it in the hero section

---

## Step 3 — Connect your custom domain (darkmatter.studio)

1. Buy **darkmatter.studio** at namecheap.com (~$15-25/year)
2. In Namecheap, go to **Domain List** → **Manage** → **Advanced DNS**
3. Add these DNS records:

| Type | Host | Value |
|------|------|-------|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

4. Back in GitHub: **Settings** → **Pages** → **Custom domain**
5. Type: `darkmatter.studio` and click **Save**
6. Check **Enforce HTTPS** (free SSL certificate — takes ~24 hours to activate)

---

## Step 4 — Set up the contact form (free)

The contact form needs a backend to actually send emails. Use Formspree (free tier = 50 submissions/month):

1. Go to **formspree.io** and create a free account
2. Click **New Form** → name it "Dark Matter Studio Contact"
3. Copy your **Form ID** (looks like: `xpzgkrbe`)
4. Open `index.html` and find this line:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID
6. Save and re-upload `index.html` to GitHub

---

## Step 5 — Update your LinkedIn URL

In `index.html` and `portfolio.html`, find:
```
https://www.linkedin.com/in/tarapaglino
```
Make sure this matches your exact LinkedIn profile URL.

---

## Things to update over time

- **Testimonials**: Add a testimonials section once you have your first client (ask Claude to build it)
- **Case studies**: As you complete projects, add them to `portfolio.html`
- **Blog/thought leadership**: Ask Claude to build a writing section when ready
- **Analytics**: Add Google Analytics or Plausible by pasting their script tag before `</body>`

---

## Need help?

All files were built by Claude (Anthropic). To make changes, go back to your Claude conversation and ask for specific edits — Claude can update any section, add new pages, or adjust copy and colors.
