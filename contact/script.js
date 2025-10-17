document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-btn");
  const form = document.getElementById("contact-form");

  // EMAILJS initialisation. Replace with your real public key from EmailJS dashboard
  emailjs.init({ publicKey: "XygeyG1feR7vFbZCD" });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_xv2lmn2",    // Service ID
        "template_o8ec4tn",   // Template ID
        form
      );

      alert("Message sent!");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Sorry, your message could not be sent. Please try again later.");
      form.reset();
    }
  });
});