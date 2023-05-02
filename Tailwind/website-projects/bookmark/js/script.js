const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
const logo = document.getElementById('logo');

// Hamburger Event Listener
const navToggle = () => {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
};

// Tabs menu event listener
const onTabClick = function (e) {
  // Deactive all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    );
  });

  //   Hide all panels
  panels.forEach((panel) => {
    panel.classList.add('hidden');
  });

  //   Activate a new tab and panel based on the target
  e.target.classList.add('border-softRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
};

menuBtn.addEventListener('click', navToggle);
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));
