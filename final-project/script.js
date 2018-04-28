//store variable
const questionList = [
    {
        imgQuestion: "images/gambar1.jpg",
        answers: "kambing guling"
    },
    {
        imgQuestion: "images/gambar2.jpg",
        answers: "sarung bantal"
    },
    {
        imgQuestion: "images/gambar3.jpg",
        answers: "tahi lalat"
    },
    {
        imgQuestion: "images/gambar4.jpg",
        answers: "tuang air"
    },
    {
        imgQuestion: "images/gambar5.jpg",
        answers: "satu jalan"
    },
    {
        imgQuestion: "images/gambar6.jpg",
        answers: "congrats"
    }
];

let currentSlide = 0;

function buildQuiz() {
    //store html output into array
    var quizContainer = document.getElementById("quiz");
    var output = [];

    //looping got each question
    questionList.forEach((currentQuestion, questionNumber) => {
        // store list of answer into array
        var htmlQuiz = `
        <div class="slide">
            <div class="quiz-continer">
                <img src="` + currentQuestion.imgQuestion + `" />
            </div>`;
        // if finish display congrats page otherwise display di submit button.
        if (currentQuestion.answers === "congrats") {
            htmlQuiz = htmlQuiz + 
            `<div id="congrats">ANDA BERHASIL MENYELESAIKAN QUIZ INI</div>
            </div>`;
        }
        else {
            htmlQuiz = htmlQuiz + 
                `<div class="quiz-answer">
                <input type="text" name="answer" id="answer-` + questionNumber + `" class="answer">
                <input type="submit" value="Cek" id="` +
                questionNumber + '" ' + `onclick="showResults   (this.id)" class="submit">
                </div>
            </div>`

        }
        output.push(htmlQuiz);
    })
    // join output an array into one string HTML
    quizContainer.innerHTML = output.join("");
    showSlide(0);
}

function showResults(clickId) {
    var currentAnswer = document.getElementById("answer-" + clickId).value;
    // display pop up correct answer
    if (currentAnswer === '') {
        alert('Isi Dulu Jawabannya')
    } else {
        if (currentAnswer.toLowerCase() === questionList[clickId].answers.toLowerCase()) {
            alert("BENAR!! :)");
            document.getElementById("next-quiz").disabled = false;
        } else {
            alert("Jawaban Masih Salah :p !!");
        }
    }
}

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const previousButton = document.getElementById("previous-quiz");
    const nextButton = document.getElementById("next-quiz");
    const reloadButton = document.getElementById("reload");

    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        reloadButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
    document.getElementById("next-quiz").disabled = true;        
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
    document.getElementById("next-quiz").disabled = false;
}

    // on submit, show results
// submitButton.addEventListener("click", showResults);
// submitButton.innerHTML = "test";

//display quiz;
// window.onload = buildQuiz();