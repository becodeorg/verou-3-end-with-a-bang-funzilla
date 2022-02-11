const quizData = [
    {
        question: 'Who invented HTML?',
        a:'Jackie-Chan',
        b:'Tim Berger',
        c:'Nikola Tesla',
        d:'Tim Berners-Lee',
        correct: 'd'
    },{
        question: 'How old is HTML?',
        a:'31 years old',
        b:'15 years old',
        c:'25 years old',
        d:'42 years old',
        correct: 'a'
    
    },{
        question: 'What is the most used programming language in 2020?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'Javascript',
        correct: 'd'
    
    },{
        question: 'How old is the President of France?',
        a:'56',
        b:'55',
        c:'45',
        d:'58',
        correct: 'c'
    },{
        question: 'What does HTML stands for?',
         a:'Hypertext Markup Language',
        b:'Hyper Technical Machine Learning',
        c:'Heavy Terror Mass Leftovers',
        d:'Helicoptsers Terminals Motorboats Lunges',
        correct: 'a'
    },{
        question: 'What year was JavaScript launched?',
        a:'2020',
        b:'1995',
        c:'1994',
        d:'1998',
        correct: 'b'
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl =document.getElementById("question");
//radio buttons
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',() =>{
	// SELECTOR VALIDATION RIGHT OR WRONG

	// currentQuiz++;

const answer = getSelected();
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		// go to next question for as long there is a next question
        currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			// GET POPUP FOR SCORE
			quiz.innerHTML = `
    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
    <button onclick="location.reload()">Reload</button>`;
		}
	}
});

    // TODO DESELECT CHOICE AFTER HITTING SUBMIT 





