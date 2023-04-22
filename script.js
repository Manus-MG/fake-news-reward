// Listen for submit event on the form
const progress = document.querySelector('.progress');
const count = document.querySelector('.count');
const addBtn = document.getElementById('add-btn');
const claimBtn = document.getElementById('claim-btn');

let points = 0;
let angle = 0;

addBtn.addEventListener('click', () => {
  points++;
  count.textContent = points;
  angle = points * 3.6;
  progress.style.clip = `rect(0, 200px, 200px, 100px)`;
  progress.style.transform = `rotate(${angle}deg)`;
});

claimBtn.addEventListener('click', () => {
  if (points >= 10) {
    alert('Congratulations! You have claimed your reward.');
    points -= 10;
    count.textContent = points;
    angle = points * 3.6;
    progress.style.clip = `rect(0, 200px, 200px, 100px)`;
    progress.style.transform = `rotate(${angle}deg)`;
  } else {
    alert('You need at least 10 points to claim a reward.');
  }
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the form from submitting
  
    // Get the value of the input field
    const newsInput = document.querySelector('#news-input').value;
  
    // Check if the input is empty
    if (newsInput.trim() === '') {
      alert('Please enter news!');
      return;
    }
  
    // Check if the input contains the word "fake"
    if (newsInput.toLowerCase().includes('fake')) {
      // Increment fake news counter
      let fakeCount = parseInt(localStorage.getItem('fakeCount')) || 0;
      fakeCount++;
      localStorage.setItem('fakeCount', fakeCount);
  
      // Display fake news message and update counter on the page
      const fakeMessage = document.createElement('p');
      fakeMessage.textContent = 'Thank you for reporting fake news!';
      const fakeCountMessage = document.createElement('p');
      fakeCountMessage.textContent = `You have reported ${fakeCount} fake news so far.`;
      const resultContainer = document.querySelector('#result');
      resultContainer.innerHTML = '';
      resultContainer.appendChild(fakeMessage);
      resultContainer.appendChild(fakeCountMessage);
      resultContainer.classList.add('fade-in');
  
      // Reset input field
      document.querySelector('#news-input').value = '';
    } else {
      // Increment genuine news counter
      let genuineCount = parseInt(localStorage.getItem('genuineCount')) || 0;
      genuineCount++;
      localStorage.setItem('genuineCount', genuineCount);
  
      // Display genuine news message and update counter on the page
      const genuineMessage = document.createElement('p');
      genuineMessage.textContent = 'Thank you for reporting genuine news!';
      const genuineCountMessage = document.createElement('p');
      genuineCountMessage.textContent = `You have reported ${genuineCount} genuine news so far.`;
      const resultContainer = document.querySelector('#result');
      resultContainer.innerHTML = '';
      resultContainer.appendChild(genuineMessage);
      resultContainer.appendChild(genuineCountMessage);
      resultContainer.classList.add('fade-in');
  
      // Reset input field
      document.querySelector('#news-input').value = '';
    }
  });
  