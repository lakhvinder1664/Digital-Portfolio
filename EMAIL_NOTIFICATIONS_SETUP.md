# Email Notifications Setup (Option A: Firebase Trigger Email Extension)

This project already stores contact form entries in the Firestore `messages` collection from `index.html`.

To receive email notifications whenever a new message is submitted:

## 1) Install Firebase Extension: Trigger Email

1. Open Firebase Console for project `portfolio-contact-fe911`
2. Go to **Extensions**
3. Install **Trigger Email** (`firebase/firestore-send-email`)
4. Use `mail` as the email documents collection path
5. Configure SMTP provider settings (SendGrid/Mailgun/Gmail SMTP)

## 2) Deploy Cloud Function in this repository

The function in `functions/index.js` listens to `messages/{messageId}` and creates a document in `mail`.
The extension then sends an email for each `mail` document.

### Commands

```bash
npm install --prefix functions
firebase deploy --only functions
```

## 3) Update recipient email

Before deploying, replace:

- `REPLACE_WITH_YOUR_EMAIL@example.com`

inside `functions/index.js` with your real recipient email address.

## 4) Test

1. Submit the contact form from the portfolio site
2. Confirm a document is added to `messages`
3. Confirm function writes a document to `mail`
4. Confirm email arrives in inbox

## Notes

- Keep client-side form submission unchanged (`index.html` already writes to `messages`).
- Email secrets stay in Firebase Extension config, not in frontend code.
