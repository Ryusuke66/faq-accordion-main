let questions = Array.from(document.querySelectorAll('.question'));
let answers = document.querySelectorAll('.answer');
let plusIcon = document.querySelectorAll('.question span');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        if(answers[i].classList.contains('hidden')) {
            answers.forEach(e => e.classList.add('hidden'));
            answers[i].classList.remove('hidden');
            plusIcon.forEach(e => e.classList.remove('opened'));
            plusIcon[i].classList.add('opened');
        } else {
            answers.forEach(e => e.classList.add('hidden'));
            plusIcon[i].classList.remove('opened');
        }
    })
}

document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp') {
        if (questions.indexOf(e.target) !== 0) {
            questions[questions.indexOf(e.target) - 1].focus();
        } 
    } else if (e.key == "ArrowDown") {
        if (questions.indexOf(e.target) !== questions.length - 1) {
            questions[questions.indexOf(e.target) + 1].focus();
        }
    }

    if (e.key == "Enter") {
        if(answers[questions.indexOf(e.target)].classList.contains('hidden')) {
            answers.forEach(e => e.classList.add('hidden'));
            answers[questions.indexOf(e.target)].classList.remove('hidden');
            plusIcon.forEach(e => e.classList.remove('opened'));
            plusIcon[questions.indexOf(e.target)].classList.add('opened');
        } else {
            answers.forEach(e => e.classList.add('hidden'));
            plusIcon[questions.indexOf(e.target)].classList.remove('opened');
        }
    }
})
