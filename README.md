# Portfolio Starter

**UNLV Software Engineering Club workshop.** By the end, you'll have a personal portfolio site live on the internet at a URL you can put on your resume and text to your friends!

```
your laptop  →  GitHub  →  GitHub Pages  →  https://your-username.github.io/portfolio
  (code)       (stores it)    (hosts it)         (anyone can visit)
```

## What you need

- A **GitHub account** (free): https://github.com/signup
- **Git** installed: https://git-scm.com/downloads
- **VS Code**: https://code.visualstudio.com
- The **Live Server** extension for VS Code (search "Live Server" by Ritwick Dey in the Extensions tab)

Check Git works by opening a terminal and running:

```bash
git --version
```

> **Stuck on setup?** Skip to [Plan B: do it all in the browser](#plan-b-do-it-all-in-the-browser). You'll still deploy a site today.

---

## Step 1: Get your own copy 

1. On this repo's GitHub page, click the green **Use this template** button → **Create a new repository**.
2. Name it `portfolio`, set it to **Public**, and click **Create repository**.
3. On your new repo, click the green **Code** button and copy the HTTPS URL.
4. In a terminal:

```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio
code .
```

(If `code .` doesn't work, open VS Code and use **File → Open Folder** instead.)

## Step 2: Run it locally 

Right-click `index.html` in VS Code → **Open with Live Server**. Your site opens in the browser, and it refreshes every time you save a file. Keep it open next to your code.

## Step 3: Make it yours 

Search the files for `CHECKPOINT` (Ctrl/Cmd + Shift + F) to find every spot to edit.

| Checkpoint | File | What to change |
|---|---|---|
| 1 | `index.html` | Tab title, initials, your name |
| 2 | `style.css` | `--accent`: your site's main color |
| 3 | `index.html` | About text, skills, project cards, contact links |
| 4 | `script.js` | The rotating roles under your name |

**Tips**
- Save often (Ctrl/Cmd + S) and watch Live Server update.
- Adding a project: copy one whole `<article> ... </article>` block and paste it below the others.
- No projects yet? Class assignments, a hackathon project, or "this website" all count.
- Broke something? Press Ctrl/Cmd + Z, or ask a helper. Everyone breaks something.

## Step 4: Save and upload your changes 

Back in the terminal (VS Code has one under **Terminal → New Terminal**):

```bash
git add .
git commit -m "Make the portfolio mine"
git push
```

| Command | What it does |
|---|---|
| `git add .` | Picks every changed file to include |
| `git commit -m "..."` | Saves a snapshot with a message describing it |
| `git push` | Uploads your snapshots to GitHub |

The first time you push, Git may ask you to sign in to GitHub. Choose **Sign in with your browser**.

Refresh your repo on GitHub and you should see your changes.

## Step 5: Go live 

1. On your repo, go to **Settings → Pages** (in the left sidebar).
2. Under **Build and deployment → Source**, pick **Deploy from a branch**.
3. Under **Branch**, pick `main` and `/ (root)`, then click **Save**.
4. Wait about a minute, then refresh the page. Your link appears at the top:
   `https://YOUR-USERNAME.github.io/portfolio/`

🎉 **Open it on your phone and drop the link in the workshop Discord channel.**

## Step 6: Watch it update automatically 

Change anything (a new skill, a different color), then:

```bash
git add .
git commit -m "Update my site"
git push
```

Wait a minute and refresh your live site [Use (Ctrl/Cmd + Shift + R) since github pages stores cache for 10 mins]. Every push redeploys it. That's the same idea behind the CI/CD pipelines real companies use, and exactly how your RebelHacks demo should go live.

---

## Bonus challenges

- **Shorter URL:** rename your repo to `YOUR-USERNAME.github.io` (Settings → General → Repository name). Your site moves to `https://YOUR-USERNAME.github.io` with nothing after it.
- **Add a resume:** drop `resume.pdf` in the folder and link to it with `<a class="btn btn-ghost" href="resume.pdf">Resume</a>`.
- **Try Vercel:** sign in at https://vercel.com with GitHub, click **Add New → Project**, import this repo, and click **Deploy**. Same site, different host.

## Plan B: do it all in the browser

If Git or VS Code won't install, you can still ship today:

1. Do Step 1 parts 1–2 (Use this template → create repo).
2. On your new repo page, press the **`.`** (period) key. A full VS Code editor opens in your browser.
3. Edit the checkpoints. (No live preview here; you'll see changes once deployed.)
4. Click the **Source Control** icon on the left (it looks like a branch), type a message, and click **Commit & Push**.
5. Do Step 5 to go live.

## Stuck?

| Problem | Try this |
|---|---|
| `git: command not found` | Git isn't installed, or you need to restart your terminal after installing it. |
| `git push` asks for a password | Use the browser sign-in option. GitHub doesn't accept account passwords in the terminal. |
| Live site shows a 404 | Wait 1–2 minutes. Check Settings → Pages says `main` and `/ (root)`. The file must be named exactly `index.html`. |
| Live site doesn't show my latest change | Wait a minute, then hard refresh (Ctrl/Cmd + Shift + R). |
| My styles disappeared | Make sure `style.css` is still in the same folder as `index.html` and the name wasn't changed. |
| Rotating text stopped working | Check `roles` in `script.js`: every role needs quotes, with commas between them. |

Want to see a fully filled-in example? Check out the `finished` branch of the workshop repo.
