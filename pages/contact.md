---
title: Contact Decoded Codex
layout: base.njk
description: "Connect with Decoded Codex easily. Use our contact form to send messages, ask questions, or provide feedback. We're here to listen and assist you on your journey of discovery."
image: /images/Home/DecodedCodex.webp
---

# Contact Decoded Codex

<p>Connect with Decoded Codex using the form below to send a message, ask a question, or give feedback.</p>

<form
  action="https://formspree.io/f/xnngzpyq"
  method="POST"
  id="contact-form">
  <label>
    Your email:
    <input type="email" name="email" autocomplete="off" required>
  </label>

  <label>
    Your message:
    <textarea name="message" required rows="7"></textarea>
  </label>

  <div class="form-buttons">
    <button type="submit">Send Message</button>
    <button type="reset" class="clear-btn">Clear Text</button>
  </div>
</form>

<p id="contact-form-status"></p>

<img src="/images/Home/DecodedCodex.webp" alt="A open book written in an unknown language" id="site-image">

<script>
  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById("contact-form-status");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      submitBtn.disabled = true;
      const data = new FormData(event.target);
      try {
        const response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          status.textContent = "Thanks for your message! Send successful.";
          form.reset();
        } else {
          status.textContent = "There was a problem submitting.";
        }
      } catch (error) {
        status.textContent = "There was a problem submitting.";
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
</script>