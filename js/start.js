import { hinoDoFluminense } from './audio.js'

const modalWrapperStart = document.querySelector('.modal-wrapper-start')
const startButton = document.querySelector('#startButton')

const questionText = document.querySelector('.question')
const answerButton = document.querySelectorAll('.answerButton')
const answerButtonArray = Array.from(answerButton)

const modalWrapperResult = document.querySelector('.modal-wrapper-result')
const resultTitle = document.querySelector('#resultTitle')
const resultSubTitle = document.querySelector('#resultSubTitle')
const videoWinner = document.querySelector('.video-winner')
const tryAgainContainer = document.querySelector('.tryAgainButton')

const modalWrapperCheckAnswer = document.querySelector('.modal-wrapper-check-answer')
const checkedAnswer = document.querySelector('.checkedAnswer')
const closeModalAnswer = document.querySelector('.closeModalAnswer')

const questionList = [
    'Qual foi o primeiro jogador do Fluminense a marcar nessa edição da libertadores',
    'Quantas vitórias o Fluminense teve na fase de grupos dessa libertadores?',
    'Quais jogadores foram expulsos no mata mata?',
    'Qual foi o jogo mais épico da libertadores do Fluminense em 2023?'
]


let correctCount = 0

startButton.addEventListener('click', () => {
    modalWrapperStart.classList.remove('open')
    question1()
})

function question1() {
    questionText.innerText = questionList[0]

    answerButtonArray[0].innerText = 'German Cano'
    answerButtonArray[1].innerText = 'Felipe Melo'
    answerButtonArray[2].innerText = 'John Kennedy'
    answerButtonArray[3].innerText = 'John Arias'

    answerButtonArray.forEach((answer) => {
        answer.addEventListener('click', () => {
            if(answer.textContent === 'German Cano') {
                correctCount++
                correctAnswer(answer)
                question2()
            } else {
                wrongAnswer(answer)
                question2()
            }
        })
    })
}

function question2() {

    questionText.innerText = questionList[1]

    answerButtonArray[0].innerText = '4'
    answerButtonArray[1].innerText = '3'
    answerButtonArray[2].innerText = '5'
    answerButtonArray[3].innerText = '6'

    answerButtonArray.forEach((answer) => {
        answer.addEventListener('click', () => {
            if(answer.textContent === '3') {
                correctCount++
                correctAnswer(answer)
                question3()
            } else {
                wrongAnswer(answer)
                question3()
            }
        })
    })
}

function question3() {
    questionText.innerText = questionList[2]

    answerButtonArray[0].innerText = 'Marcelo e Cano'
    answerButtonArray[1].innerText = 'Felipe Melo e John Arias'
    answerButtonArray[2].innerText = 'Marcelo e Samuel Xavier'
    answerButtonArray[3].innerText = 'Marcelo e Nino'

    answerButtonArray.forEach((answer) => {
        answer.addEventListener('click', () => {
            if(answer.textContent === 'Marcelo e Samuel Xavier') {
                correctCount++
                correctAnswer(answer)
                question4()
            } else {
                wrongAnswer(answer)
                question4()
            }
        })
    })
}

function question4() {
    questionText.innerText = questionList[3]

    answerButtonArray[0].innerText = 'Fluminense 2 x 0 Olimpia'
    answerButtonArray[1].innerText = 'Internacional 1 x 2 Fluminense'
    answerButtonArray[2].innerText = 'Argentino Jrs 1 x 1 Fluminense'
    answerButtonArray[3].innerText = 'Fluminense 2 x 2 Internacional'

    answerButtonArray.forEach((answer) => {
        answer.addEventListener('click', () => {
            if(answer.textContent === 'Internacional 1 x 2 Fluminense') {
                correctCount++
                correctAnswer(answer)
            }
            if(correctCount >= 3) {
                showReward()
            } else {
                tryAgain()
            }
        })
    })
}

function showReward() {
    hinoDoFluminense.pause()
    modalWrapperResult.classList.add('open')

    videoWinner.classList.add('open')
}

function tryAgain() {
    hinoDoFluminense.pause()
    correctCount = 0
    modalWrapperResult.classList.add('open')

    resultTitle.innerText = 'Você Perdeu! Tente novamente.'
    resultSubTitle.innerText = 'Não desanima não! O Fluzão é gigante.'

    tryAgainContainer.classList.add('open')
}

function correctAnswer(a) {
    modalWrapperCheckAnswer.classList.add('open')
    
    checkedAnswer.innerText = 'Correta!'
    checkedAnswer.style.color = '#00ca00'

    closeModal()
}

function wrongAnswer(a) {
    modalWrapperCheckAnswer.classList.add('open')
    
    checkedAnswer.innerText = 'Errada!'
    checkedAnswer.style.color = '#ff0000'

    closeModal()
}

function closeModal() {
    closeModalAnswer.addEventListener('click', () => {
        modalWrapperCheckAnswer.classList.remove('open')
    })
}