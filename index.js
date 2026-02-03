const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Navigate to second.html when the hi button is clicked (index -> second)
const hiBtn = document.querySelector('.hi-button');
if (hiBtn) {
  hiBtn.addEventListener('click', () => {
    if (question) {
      question.innerHTML = 'not trying to waste ur time but...';
    } else if (wrapper) {
      const p = document.createElement('p');
      p.className = 'question';
      p.textContent = 'not trying to waste ur time but...';
      if (gif) wrapper.insertBefore(p, gif);
      else wrapper.appendChild(p);
    }
    if (gif) gif.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG1lMTJjcHhoMjhqbzFxdjFyNmlrOHB1djdyN2h0OWFiMGIzejJvbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q/sWBzg2D15WwQjHcxbt/giphy.gif';
    hiBtn.textContent = 'but...?';
    const newBtn = hiBtn.cloneNode(true);
    hiBtn.parentNode.replaceChild(newBtn, hiBtn);
    newBtn.addEventListener('click', () => {
      window.location.href = 'second.html';
    });
  });
}

if (yesBtn) {
  yesBtn.addEventListener('pointerdown', () => {
    if (typeof confetti === 'function') {
      confetti({ particleCount: 150, spread: 60 });
    }
  });

  yesBtn.addEventListener("click", () => {
    if (question) {
      // Toggle text: first click => Yay..., second click => i love youu
      const cur = question.innerHTML || '';
      if (cur.includes('Yay')) {
        question.innerHTML = 'i love youu';
      } else {
        question.innerHTML = 'Yayyyyyyyyyyyyyyyyyyyyyyy';
      }
    }
    if (gif) gif.src = "https://media.giphy.com/media/qkbCdaJWt2STm/giphy.gif";
    if (typeof confetti === 'function') {
      confetti({ particleCount: 150, spread: 60 });
    }
  });
}

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * Math.max(0, maxX));
    const randomY = Math.floor(Math.random() * Math.max(0, maxY));

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });
}



