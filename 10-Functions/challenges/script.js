const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    };

const registerNewAnswer = function () {
    let validNum = false;
    while (!validNum) {
        let promptStr = poll.question;
        for(const language of poll.options) promptStr += `\n${language}`;
        promptStr += '\nWrite option number: ';
        const optionNum = prompt(promptStr);
        if(optionNum <= 3 && optionNum >= 0) {
            poll.answers[optionNum] += 1;
            validNum = true;
        } else {
            registerNewAnswer();
        }
    }
    displayResults(poll.answers);
}

const displayResults = function(type) {
    if(typeof type === 'string') {
        console.log(`Poll results are ${poll.answers[0]}, ${poll.answers[1]}, ${poll.answers[2]}, ${poll.answers[3]}`);
    } else {
        console.log(type)
    }
}

document.querySelector('.poll').addEventListener('click', registerNewAnswer);

