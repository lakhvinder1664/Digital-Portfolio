# Email Notifications Setup (Option A: Firebase Trigger Email Extension)

This project stores contact form entries in Firestore `messages`.
The Cloud Function in `functions/index.js` converts each new `messages` document into a `mail` job for the Trigger Email extension.

## 1) Install Firebase Extension: Trigger Email

1. Open Firebase Console for project `portfolio-contact-fe911`
2. Go to **Extensions**
3. Install **Trigger Email** (`firebase/firestore-send-email`)
4. Set **Email documents collection** to `mail`
5. Configure SMTP provider settings (SendGrid/Mailgun/Gmail SMTP)
6. Configure default recipient email in extension settings (**recommended**)

## 2) Deploy Cloud Function in this repository

```bash
npm install --prefix functions
firebase deploy --only functions
```

### Optional custom recipient override

If you want to control recipients from function env vars (instead of extension defaults), create `functions/.env` with:

```env
CONTACT_NOTIFICATION_TO=your-email@example.com
```

You can add multiple recipients with commas:

```env
CONTACT_NOTIFICATION_TO=first@example.com,second@example.com
```

Then deploy functions again:

```bash
firebase deploy --only functions
```

If `CONTACT_NOTIFICATION_TO` is not set, extension default recipients are used.

## 3) Test end-to-end

1. Submit contact form from website
2. Check Firestore `messages` has the new document
3. Check Firestore `mail` has a new document created by function
4. Check `messages/{id}.notification.status`:
   - `queued` => function successfully queued mail
   - `queue_failed` => function failed; inspect `notification.error`
5. In Firebase Console -> Extensions -> Trigger Email -> Logs, verify provider send status

## 4) Common reasons email is not received

- Extension not installed or disabled
- Extension collection path is not `mail`
- SMTP credentials/sender are invalid
- Email landed in spam folder
- Recipient not configured (no extension default recipient and no `CONTACT_NOTIFICATION_TO`)

## Notes

- No frontend secret is needed.
- Contact form submission in `index.html` remains unchanged (writes only to `messages`).
