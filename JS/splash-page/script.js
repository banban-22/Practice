const { body } = document;

function changeBackground(number) {
  // Check if background already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset CSS Class for body
  body.className = '';

  switch (number) {
    case '1':
      //   body.classList.add('background-1');
      return previousBackground === 'background-1'
        ? false
        : body.classList.add('background-1');
      break;

    case '2':
      //   body.classList.add('background-2');
      return previousBackground === 'background-2'
        ? false
        : body.classList.add('background-2');
      break;

    case '3':
      //   body.classList.a\d('background-3');
      return previousBackground === 'background-3'
        ? false
        : body.classList.add('background-3');
      break;

    default:
      break;
  }
}
