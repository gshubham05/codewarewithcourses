# CodewareIT — Homepage Rebuild
## Copy-Paste Instructions

---

## Files in this zip

```
src/
  app/
    page.js                  ← Main homepage  (REPLACE existing)
    api/
      lead/
        route.js             ← Lead form API  (NEW file)
```

---

## Step 1 — Replace page.js

Copy `src/app/page.js` from this zip into your project at the **same path**:

```
your-project/src/app/page.js   ← replace this entirely
```

---

## Step 2 — Add the lead API route

1. Create this folder if it doesn't exist:
   ```
   your-project/src/app/api/lead/
   ```

2. Copy `src/app/api/lead/route.js` into that folder.

---

## Step 3 — Run the dev server

```bash
npm run dev
```

Open http://localhost:3000 — done.

---

## Updating batch date & seats (no code needed)

Edit the `CONFIG` block at the top of `page.js`:

```js
const CONFIG = {
  batchDate: "June 10, 2025",   // ← change this
  seatsLeft: "12",              // ← change this
  ...
};
```

Save — the countdown timer and urgency pill update automatically.

---

## What this page does NOT include
(already handled by your existing `layout.js`)

- `<Navbar />` — your existing navbar
- `<Footer />` — your existing footer
- `<Whatsappicon />` — your existing WhatsApp icon
- Google Analytics / Ads tags — already in your layout
- Meta Pixel — already in your layout

The new page adds its **own** sticky WhatsApp button (inside the page body)
that works alongside the layout one. If you want only one, delete the
`<StickyElements>` component call at the bottom of `Page()`.

---

## Enabling email notifications from the lead form

In `src/app/api/lead/route.js`, uncomment the email block and it will
use your existing `src/app/lib/mailer.js` to send an email to
`info@codewareit.in` on every form submission.

---

## GA4 Events fired automatically

| Event name         | Trigger                          |
|--------------------|----------------------------------|
| `cta_hero_click`   | Hero "Apply" button              |
| `cta_courses_click`| Any course card or audience CTA  |
| `call_click`       | Call Now button                  |
| `whatsapp_click`   | Any WhatsApp link                |
| `form_submit`      | Successful form submission       |
| Google Ads conversion | Hero apply + form submit      |
