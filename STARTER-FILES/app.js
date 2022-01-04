const questionsList = document.querySelectorAll('li');

for (let i = 0; i < questionsList.length; i++) {
  questionsList[i].addEventListener('click', () => {
    questionsList[i].classList.add('expand');
    const pseudoElement = questionsList[i].querySelector('.question');
    const styles = window.getComputedStyle(pseudoElement, ':after');
    // const closeBtn = url('./images/close.svg');
    styles['background-image'] = 1;

  });
  // questionsList[i].addEventListener('mouseover', () => {
  //   questionsList[i].classList.add('expand');
  // // });
  // questionsList[i].addEventListener('mouseout', () => {
  //   questionsList[i].classList.remove('expand');
  // });


};
