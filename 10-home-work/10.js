function changeFollowingButton() {
  const conditionButton = document.querySelector('.js-follow-button');
  if (conditionButton.innerText === 'Follow') {
    conditionButton.innerHTML = 'Following';
    conditionButton.classList.add('following-button');
    return;
  }
  else {
    conditionButton.innerHTML = 'Follow';
    conditionButton.classList.remove('following-button');
    return;
  }
}

function checkButton() {
  const conditionButton = document.querySelector('.js-button');

  if (conditionButton.classList.contains('js-button')) {
    console.log('This button has the class');

  }
}

function fun1() {
  const button1 = document.querySelector('.js-button-1');

    if (!button1.classList.contains('is-toggled')) {
      button1.classList.add('is-toggled');
    } else {
      button1.classList.remove('is-toggled');
    }
}

function fun2() {
  const button2 = document.querySelector('.js-button-2');

    if (!button2.classList.contains('is-toggled')) {
      button2.classList.add('is-toggled');
    } else {
      button2.classList.remove('is-toggled');
    }
}

function fun3() {
  const button3 = document.querySelector('.js-button-3');

    if (!button3.classList.contains('is-toggled')) {
      button3.classList.add('is-toggled');
    } else {
      button3.classList.remove('is-toggled');
    }
}

function checkAll1() {
  const button2 = document.querySelector('.js-button-2');
  const button3 = document.querySelector('.js-button-3');
  
  if (button2.classList.contains('is-toggled')) {
    button2.classList.remove('is-toggled');
  }

  if (button3.classList.contains('is-toggled')) {
    button3.classList.remove('is-toggled');
  }
  
}

function checkAll2() {
  const button1 = document.querySelector('.js-button-1');
  const button3 = document.querySelector('.js-button-3');
  
  if (button1.classList.contains('is-toggled')) {
    button1.classList.remove('is-toggled');
  }

  if (button3.classList.contains('is-toggled')) {
    button3.classList.remove('is-toggled');
  }
  
}

function checkAll3() {
  const button2 = document.querySelector('.js-button-2');
  const button1 = document.querySelector('.js-button-1');
  
  if (button2.classList.contains('is-toggled')) {
    button2.classList.remove('is-toggled');
  }

  if (button1.classList.contains('is-toggled')) {
    button1.classList.remove('is-toggled');
  }
  
}