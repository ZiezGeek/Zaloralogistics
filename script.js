// Handles the "Send an Enquiry" form on the Contact section.
// Currently just shows a confirmation message on the button.
// Replace this with a real submit (e.g. fetch() to your backend or a form service) when ready.

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('enquiry-form');

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var button = form.querySelector('.btn');
    if (button) {
      button.textContent = 'Sent — thank you!';
    }
  });
});
