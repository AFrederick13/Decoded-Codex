---
title: Contact Decoded Codex
layout: base.njk
description: "Connect with Decoded Codex easily. Use our contact form to send messages, ask questions, or provide feedback. We're here to listen and assist you on your journey of discovery."
image: /images/Home/DecodedCodex.jpg
---

# Contact Decoded Codex

<p>Connect with Decoded Codex using the form below to send a message, ask a question, or give feedback.</p>


<form
  action="https://formspree.io/f/xnngzpyq"
  method="POST"
  id="contact-form">
  <label>
    Your email:
    <input type="email" name="email" required>
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

<img src="/images/Home/DecodedCodex.jpg" alt="A open book written in an unknown language" id="site-image">

<script>
  const form = document.getElementById('contact-form');
  if (form) {
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) form.reset();
    });
  }
</script>