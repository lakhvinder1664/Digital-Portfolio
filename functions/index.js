const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { logger } = require("firebase-functions");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

function parseRecipients(raw) {
  if (!raw) return [];
  return raw
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

/**
 * Triggered when a new contact form message is added to /messages.
 * Creates a mail job for the Firebase Trigger Email extension.
 *
 * Optional env var:
 * - CONTACT_NOTIFICATION_TO="owner@example.com,another@example.com"
 *   If empty, extension-level default recipients are used.
 */
exports.notifyOnNewContactMessage = onDocumentCreated("messages/{messageId}", async (event) => {
  const snapshot = event.data;

  if (!snapshot) {
    logger.warn("No snapshot data found for new message event.");
    return;
  }

  const data = snapshot.data() || {};
  const name = data.name || "Unknown";
  const email = data.email || "No email provided";
  const subject = data.subject || "(No subject)";
  const message = data.message || "(No message body)";

  const recipients = parseRecipients(process.env.CONTACT_NOTIFICATION_TO);
  const mailPayload = {
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
  };

  if (recipients.length > 0) {
    mailPayload.to = recipients;
  }

  try {
    const mailRef = await db.collection("mail").add(mailPayload);

    await snapshot.ref.set(
      {
        notification: {
          status: "queued",
          mailDocId: mailRef.id,
          usedCustomRecipients: recipients.length > 0,
          queuedAt: FieldValue.serverTimestamp()
        }
      },
      { merge: true }
    );

    logger.info("Queued contact notification email", {
      messageId: snapshot.id,
      mailDocId: mailRef.id,
      recipientsCount: recipients.length
    });
  } catch (error) {
    logger.error("Failed to queue contact notification email", {
      messageId: snapshot.id,
      error: error?.message || String(error)
    });

    await snapshot.ref.set(
      {
        notification: {
          status: "queue_failed",
          error: error?.message || String(error),
          failedAt: FieldValue.serverTimestamp()
        }
      },
      { merge: true }
    );

    throw error;
  }
});
