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

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burgerBtn');
  var navlinks = document.getElementById('navlinks');

  if (!burger || !navlinks) return;

  burger.addEventListener('click', function () {
    var isOpen = navlinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navlinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navlinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});
