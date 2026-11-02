# Tazyeenul Quran Academy (تزيين القرآن أكاديمي)

> **"Beautifying Hearts with the Light of the Quran."**

A modern, responsive, and international online Quran & Islamic education platform built with React, TypeScript, and Tailwind CSS.

---

## 🌟 Academy Information & Quick Links

- **Institution:** Tazyeenul Quran Academy
- **Official WhatsApp:** [+92 305 2350269](https://wa.me/923052350269)
- **Target Audience:** Muslims in USA, UK, Canada, Australia, Europe, Saudi Arabia, UAE, Pakistan, and worldwide.
- **Social Media Links:**
  - **Instagram:** [https://www.instagram.com/tazyeenulquran7869](https://www.instagram.com/tazyeenulquran7869)
  - **TikTok:** [https://www.tiktok.com/@tazyeenulquran.ac](https://www.tiktok.com/@tazyeenulquran.ac)
  - **Facebook:** [https://www.facebook.com/share/18XLwa5Pxm/](https://www.facebook.com/share/18XLwa5Pxm/)
  - **YouTube:** [https://www.youtube.com/@TazyeenulQuranAcademy](https://www.youtube.com/@TazyeenulQuranAcademy)

---

## 🎨 Theme & Palette

- **Primary:** Dark Emerald Green (`#064E3B`)
- **Secondary:** Deep Islamic Green (`#0B3D2E`)
- **Accent:** Elegant Gold (`#D4AF37`)
- **Background:** Warm Ivory (`#FAF8F0`)
- **Text:** Dark Charcoal (`#252525`)
- **Typography:** Plus Jakarta Sans & Amiri (Arabic Calligraphy)

---

## 📚 Key Features & Navigation

1. **Home Page:**
   - Conversion-focused Hero with Quran & Rehal imagery, trust badges.
   - 8 Why Choose Us feature cards.
   - Popular courses showcase (with modal for in-depth syllabus).
   - 4-Step Learning Roadmap.
   - Teaching approach & pedagogy.
   - Meet our qualified teachers.
   - Honest sample student/parent testimonials.
   - Interactive FAQ Accordion.
   - Latest educational blog preview.

2. **About Us Page:**
   - Academy mission and vision statements.
   - Educational objectives & methodology pillars.
   - Traditional Sanad-based authentic teaching commitment.

3. **Our Courses (12 Full Courses):**
   1. Noorani Qaida (Beginners / Kids)
   2. Quran Reading (Nazra)
   3. Quran Recitation (Tartil)
   4. Tajweed Course
   5. Quran Memorization (Hifz)
   6. Quran Translation
   7. Quran Tafseer
   8. Ten Qirat Course
   9. Arabic Language
   10. Islamic Studies
   11. Daily Duas & Masnoon Prayers
   12. Islamic Education for Kids

4. **Our Teachers:**
   - Dedicated filter bar: Male, Female, English, Urdu, Arabic.
   - Verified profile cards with qualifications, experience, and direct trial booking.

5. **Pricing Plans:**
   - Basic Plan, Standard Plan, Premium Plan, Family Plan.
   - Multi-currency switcher: USD ($), GBP (£), EUR (€), PKR (₨), SAR (ر.س).
   - Direct WhatsApp inquiry button for each plan.

6. **Free Trial Registration (Conversion Core):**
   - Full registration form with comprehensive validation.
   - Automatic application reference ID generation (e.g., `TQA-10021`).
   - Confetti celebratory animation on submission.
   - Direct one-click WhatsApp redirect with pre-filled application details.
   - Persisted in localStorage database and immediately manageable in Admin Panel.

7. **Islamic Blog:**
   - 8 in-depth educational articles covering Tajweed, Hifz, Duas, and Kids.
   - Search bar and category filters.
   - Dedicated full article reader view with Arabic quotes and WhatsApp share.

8. **Contact Us:**
   - Interactive contact form.
   - Direct WhatsApp link and official phone details.
   - Working social media buttons.

9. **Student Dashboard:**
   - Enrolled courses progress bars.
   - Upcoming live class countdown with direct Zoom / Meet link.
   - Attendance tracking (96% rate).
   - Homework and audio recitation submission.
   - Notifications center.

10. **Admin Dashboard:**
    - Passcode protected (`786` for demo).
    - Manage Free Trial Applications (change status: New, Contacted, Trial Scheduled, Enrolled; direct WhatsApp button).
    - Manage contact inquiries.
    - Manage teacher profiles & pricing packages.
    - One-click demo data reset.

11. **Utilities & Modals:**
    - Floating pulsating WhatsApp button.
    - Privacy Policy and Terms of Conditions modals.
    - Cookie consent banner.

---

## 🚀 Running Locally

```bash
# Navigate to the project directory
cd "C:\Users\Mega Computer\.gemini\antigravity\scratch\tazyeenul-quran-academy"

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Production Build & Deployment

To build the optimized static production bundle:

```bash
npm run build
```

This generates a high-performance production distribution inside the `dist/` folder.

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the project folder.
3. Set build command to `npm run build` and output directory to `dist`.

### Deploying to Netlify
1. Drag and drop the `dist` folder to Netlify, or link your GitHub repository.
2. Build command: `npm run build`, Publish directory: `dist`.
