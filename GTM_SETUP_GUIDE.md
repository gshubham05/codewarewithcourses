# Google Tag Manager Setup Guide — CodewareIT
## GTM Container ID: GTM-XXXXXXX ← Replace with yours

---

## Step 1: Get Your GTM Container ID
1. Go to https://tagmanager.google.com
2. Select your account → your container
3. Your Container ID is shown in the top-right: **GTM-XXXXXXX**
4. Replace `GTM-XXXXXXX` in `src/app/layout.js` line 12

---

## Step 2: Get Your Google Ads Conversion Labels
1. Go to https://ads.google.com → Goals → Conversions
2. Create 5 conversion actions:
   | Action Name | Category | Count | Value |
   |---|---|---|---|
   | Form Start | Lead | Every | 0 |
   | WhatsApp Click | Lead | Every | 0 |
   | Demo Form Submit | Lead | Every | 500 |
   | Phone Call Click | Lead | Every | 0 |
   | Thank You Page | Lead | One | 500 |

3. For each: Tag Setup → "Use Google Tag Manager" → copy the label (looks like: `AbCdEfGhIjK`)
4. Replace in `src/app/lib/gtag.js`:
   ```js
   CONVERSION_FORM_START  = "AW-16549958925/YOUR_LABEL"
   CONVERSION_WHATSAPP    = "AW-16549958925/YOUR_LABEL"
   CONVERSION_DEMO_SUBMIT = "AW-16549958925/YOUR_LABEL"
   CONVERSION_THANK_YOU   = "AW-16549958925/YOUR_LABEL"
   CONVERSION_PHONE_CALL  = "AW-16549958925/YOUR_LABEL"
   ```

---

## Step 3: Inside GTM Console — Create These Tags

### Tag 1: Google Ads Remarketing (All Pages)
- Tag Type: Google Ads Remarketing
- Conversion ID: 16549958925
- Trigger: All Pages

### Tag 2: GA4 Configuration
- Tag Type: Google Analytics: GA4 Configuration
- Measurement ID: G-CHHEXD2NKX
- Trigger: All Pages
- Enable: Send page view when loaded = YES
- Link Google Ads: AW-16549958925

### Tag 3: Google Ads Conversion — Form Submit
- Tag Type: Google Ads Conversion Tracking
- Conversion ID: 16549958925
- Conversion Label: YOUR_FORM_SUBMIT_LABEL
- Trigger: Custom Event → event name: `demo_form_submit`

### Tag 4: Google Ads Conversion — WhatsApp
- Tag Type: Google Ads Conversion Tracking
- Conversion Label: YOUR_WHATSAPP_LABEL
- Trigger: Custom Event → event name: `whatsapp_click`

### Tag 5: Google Ads Conversion — Phone
- Tag Type: Google Ads Conversion Tracking
- Conversion Label: YOUR_PHONE_LABEL
- Trigger: Custom Event → event name: `phone_click`

### Tag 6: Google Ads Conversion — Thank You Page (URL Destination)
- Tag Type: Google Ads Conversion Tracking
- Conversion Label: YOUR_THANK_YOU_LABEL
- Trigger: Page View → Page URL contains `/thank-you`
- ✅ This is the PRIMARY Quality Score conversion Google Ads measures

### Tag 7: Enhanced Conversions
- In Google Ads: Goals → Conversions → Settings → Enhanced Conversions → ON
- Select "Use Google Tag" method

---

## Step 4: Google Ads Campaign Setup for Maximum Quality Score

### Keywords (Phrase + Exact Match):
```
[java course dehradun]
[python course dehradun]
[mern stack course dehradun]
[react js course dehradun]
[nodejs course dehradun]
[full stack course dehradun]
[coding institute dehradun]
[coding classes dehradun]
"java training dehradun"
"python training dehradun"
"web development course dehradun"
"best coding institute dehradun"
```

### Ad Copy Formula (High Quality Score):
- Headline 1: Best Java Course in Dehradun
- Headline 2: ₹[Price] · Free Demo Class Available  
- Headline 3: 4.7★ Rated · Placement Support
- Description: Learn Java at Dehradun's #1 coding institute. Real projects, small batches, job placement support. Book FREE demo — only 8 seats left!

### Landing Page → Ad Match (CRITICAL for Quality Score):
| Keyword | Landing Page URL |
|---|---|
| java course dehradun | /java-course-dehradun |
| python course dehradun | /python-course-dehradun |
| mern stack dehradun | /mern-stack-course-dehradun |
| react js dehradun | /react-js-course-dehradun |
| nodejs dehradun | /nodejs-course-dehradun |
| full stack dehradun | /full-stack-course-dehradun |

---

## Step 5: Verify Everything Works
1. Install "Tag Assistant" Chrome extension
2. Visit each landing page — verify GTM fires
3. Submit a test form — verify `demo_form_submit` fires in GTM preview
4. Check `/thank-you` page — verify Thank You conversion fires
5. Google Ads → Diagnostics → Conversion status should show "Recording"
