const userIcon = document.querySelector('.user_icon.cercle_icon');
const logoutPopup = document.querySelector('.logout_popup');
logoutPopup.style.display = 'block';
const popupLogout = function() {
  if (logoutPopup.classList.contains('fade-hidden')) {
    logoutPopup.classList.remove('fade-hidden');
    logoutPopup.classList.add('fade-show');
    return true;
  }
  logoutPopup.classList.remove('fade-show');
  logoutPopup.classList.add('fade-hidden');
  return true;
};
userIcon.addEventListener('click', popupLogout);

document.addEventListener('DOMContentLoaded', function() {
  const fb_page = document.querySelector('.wrapper_fb_page');
  const faq_icon = document.querySelector('.footer_faq_icon');
  const close_faq_icon = document.querySelector('.close_faq_plugin');

  const currentUrl = document.location.pathname;
  if (
    currentUrl.indexOf('scenarios') > -1 ||
    currentUrl.indexOf('analytics') > -1
  ) {
    faq_icon.style.visibility = 'hidden';
  }

  const moveUp = () => {
    let bottom = -500;

    const frame = () => {
      bottom += 5;
      fb_page.style.bottom = bottom + 'px';

      if (bottom >= 0) {
        clearInterval(id);
      }
    };
    const id = setInterval(frame, 1);
  };

  const moveDown = () => {
    let top = 0;

    const frame = () => {
      top -= 5;
      fb_page.style.bottom = top + 'px';

      if (top <= -500) {
        clearInterval(id);
      }
    };
    const id = setInterval(frame, 1);
  };

  faq_icon.addEventListener('click', moveUp);
  close_faq_icon.addEventListener('click', moveDown);
});
