const questionsList = document.querySelectorAll('li');

for (let i = 0; i < questionsList.length; i++) {
  questionsList[i].addEventListener('click', () => {
      questionsList[i].classList.toggle('expand');
  });
}
