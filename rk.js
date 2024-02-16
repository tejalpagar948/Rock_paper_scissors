let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let button = document.querySelector('.but button');
let uh = document.querySelector('#hh1');
let ch = document.querySelector('#hh2');

let submit = document.querySelector('.but1 button');
let head = document.querySelector('.cont h2');

let n = 0;
let m = 0;

let us = 0;
let cs = 0;

let count = 0;

submit.addEventListener('click', () => {
  hh1.innerHTML = '0';
  hh2.innerHTML = '0';
  // if (us > cs) {
  //   head.style.visibility = 'visible';
  //   head.innerHTML = 'Congratulations you win';
  //   head.style.color = 'green';
  // } else if (us < cs) {
  //   head.style.visibility = 'visible';
  //   head.innerHTML = 'Sorry you loose';
  //   head.style.color = 'red';
  // }
  us = 0;
  cs = 0;
  count = 0;
  head.style.visibility = 'hidden';
});

if (count >= 5) {
  if (us > cs) {
    head.style.visibility = 'visible';
    head.innerHTML = 'Congratulations you win';
    head.style.color = 'green';
  } else if (us < cs) {
    head.style.visibility = 'visible';
    head.innerHTML = 'Sorry you loose';
    head.style.color = 'red';
  }
}

rock.addEventListener('click', function () {
  n = 0;
  m = Math.round(Math.random() * 100) % 3;
  if (n == m) {
    button.innerHTML = 'It is a Tie';
    button.style.backgroundColor = 'rgb(211, 156, 28)';
    us = us + 0;
    cs = cs + 0;
    count = count + 0;
  } else if ((n == 0 && m == 1) || (n == 1 && m == 2) || (n == 2 && m == 0)) {
    button.innerHTML = 'You Win';
    button.style.backgroundColor = 'blue';
    us = us + 1;
    cs = cs + 0;
    hh1.innerHTML = us;
    count = count + 1;
  } else if ((n == 0 && m == 2) || (n == 2 && m == 1) || (n == 1 && m == 0)) {
    button.innerHTML = 'You Loose';
    button.style.backgroundColor = 'red';
    us = us + 0;
    cs = cs + 1;
    hh2.innerHTML = cs;
    count = count + 1;
  }
});

paper.addEventListener('click', function () {
  n = 1;
  m = Math.round(Math.random() * 100) % 3;
  if (n == m) {
    button.innerHTML = 'It is a Tie';
    button.style.backgroundColor = 'rgb(211, 156, 28)';
    us = us + 0;
    cs = cs + 0;
    count = count + 0;
  } else if ((n == 0 && m == 1) || (n == 1 && m == 2) || (n == 2 && m == 0)) {
    button.innerHTML = 'You Win';
    button.style.backgroundColor = 'blue';
    us = us + 1;
    cs = cs + 0;
    hh1.innerHTML = us;
    count = count + 1;
  } else if ((n == 0 && m == 2) || (n == 2 && m == 1) || (n == 1 && m == 0)) {
    button.style.backgroundColor = 'red';
    button.innerHTML = 'You Loose';
    us = us + 0;
    cs = cs + 1;
    count = count + 1;
    hh2.innerHTML = cs;
  }
});

scissor.addEventListener('click', function () {
  n = 2;
  m = Math.round(Math.random() * 100) % 3;
  if (n == m) {
    button.innerHTML = 'It is a Tie';
    button.style.backgroundColor = 'rgb(211, 156, 28)';
    us = us + 0;
    cs = cs + 0;
    count = count + 0;
  } else if ((n == 0 && m == 1) || (n == 1 && m == 2) || (n == 2 && m == 0)) {
    button.innerHTML = 'You Win';
    button.style.backgroundColor = 'blue';
    us = us + 1;
    cs = cs + 0;
    count = count + 1;
    hh1.innerHTML = us;
  } else if ((n == 0 && m == 2) || (n == 2 && m == 1) || (n == 1 && m == 0)) {
    button.style.backgroundColor = 'red';
    button.innerHTML = 'You Loose';
    us = us + 0;
    cs = cs + 1;
    count = count + 1;
    hh2.innerHTML = cs;
  }
});

console.log(count);
