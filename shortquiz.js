const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText= document.getElementById('question-text');

let currentQuestion = 0;
let score = 0;
let questions = [
    {
        question: 'Barrack Obama is the current President of the United State',
        answers: [
            { option: 'For sure!', answer: true

            },
            {
                option: 'no', answer: false
            }
        ]
    },

 { question: 'All humans must die',
    answers:[
        { option: 'Yes', answer: true

        },
        {
            option: 'I guess no', answer: false
        }
    ]

 },
 
 
 { question: 'The sun shines during the night',
    answers:[
        {option: 'Noo', answer: 'true'

        },
        {
            option:'yes' , answer: 'false'
        }
    ]


 },
 
 { question: 'You can eat water' ,
    answers:[
        {option:'yes' , answer: 'false'

        },
        {
            option: 'no', answer: 'true'
        }
    ]
    },
    
    { question: 'Javascript is easy to learn',
        answers:[
            {option: 'yes' , answer:'false'
    
            },
            {
                option:'no' , answer: 'true'
            }
        ]
    },

    { question: 'This quiz is easy',
    answers:[
        {option: 'yes' , answer: 'true'

        },
        {
            option: 'no' , answer: 'false'
        }
    ]
},

];

restartBtn.addEventListener('click' , restart);
prevBtn.addEventListener('click' , prev);
nextBtn.addEventListener('click' , next);
submitBtn.addEventListener('click', submit);

function  beginQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answer[0].option;
    trueBtn.onclick = () => {
        let ano = 0;
        if (questions[currentQuestion].answers[ano].answer) { 
            if (score<5) {
                score++;
            }
            
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion <5) {
        next();
    }


falseBtn.innerHTML = questions[currentQuestion].answer[1].option;
falseBtn.onclick = () => {
    let anon = 1;
    if(questions[currentQuestion].answers[anon].answer)
    {
        if(score<5){
            score++; 
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
        next();
    }
}
prevBtn.classList.add('hide');
}
beginQuiz();

function restart( ) {
    currentQuestion =0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next() {
    currentQuestion++;
    if (currentQuestion>=2){
nextBtn.classList.add('hide');
prevBtn.classList.remove('hide');  
}
questionText.innerHTML = questions[currentQuestion].question;
trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
trueBtn.onclick = () => {
    let anon = 0;
    if(questions[currentQuestion].answers[anon].answer){
        if (score<4){
            score++;
        
        }
    }
    userScore.innerHTML = score;
    if(currentQuestion<2){
        next ();
    } 
}
falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
falseBtn.onclick = () =>{
    let ano =1;
    if (questions[currentQuestion].answers[ano].answer){
        if(score<4){
            score++;

    }
}
 userScore.innerHTML = score;
 if (currentQuestion<3){
    next();
 }

}
prevBtn.classList.remove('hide');
}

function prev( ) { currentQuestion--;
    if (currentQuestion<=0){
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        let ano =0;
        if(questions[currentQuestion].answers[ano].answer){
            if (score <4){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<3) {
            next() ;
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = ()=>{
        let ano = 1;
        if(questions[currentQuestion].amswers[ano].answer){
            if (score<4){
                score++;
            }
        }
        userScore.innerHTML=score;
        if
            (currentQuestion<3){
                next();
            }
        
    }
    nextBtn.classList.remove('hide');
}

function submit( ) {
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML = 'Congratulations on submiting the quiz!';
}