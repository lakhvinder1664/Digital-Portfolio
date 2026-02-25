const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

/**
 * Triggered when a new contact form message is added to /messages.
 * Creates a mail job in /mail for the Firebase Trigger Email extension.
 */
exports.notifyOnNewContactMessage = onDocumentCreated("messages/{messageId}", async (event) => {
  const snapshot = event.data;

  if (!snapshot) {
    console.warn("No snapshot data found for new message event.");
    return;
  }

  const data = snapshot.data() || {};
  const name = data.name || "Unknown";
  const email = data.email || "No email provided";
  const subject = data.subject || "(No subject)";
  const message = data.message || "(No message body)";

  await db.collection("mail").add({
    to: ["REPLACE_WITH_YOUR_EMAIL@example.com"],
    message: {
      subject: `New contact form message: ${subject}`,
      text: [
        "You received a new message from your portfolio contact form.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: `
        <h3>New contact form message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${String(message).replace(/\n/g, "<br>")}</p>
      `
    },
    source: "contact-form",
    createdAt: FieldValue.serverTimestamp()
  });
});
