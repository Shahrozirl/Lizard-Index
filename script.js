function toggleMenu() {
  const menu = document.getElementById("sideNav");
  menu.classList.toggle("open");
}

const serviceID = "service_pvaz9jx";
const templateID = "TQnTKivGdFVOB_yY0";
const publicKey = "TQnTKivGdFVOB_yY0";

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(serviceID, templateID, this, publicKey)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      console.error("FAILED...", error);
      alert("There was an error sending your message. Please try again later.");
    });
});
