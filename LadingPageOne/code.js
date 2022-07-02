const sliders = [...document.querySelectorAll('.testimonyBody')]
const titleQuestions = [...document.querySelectorAll('.questionTitle')]
const beforeSlide = document.getElementById('leftArrow')
const nextSlide = document.getElementById('rightArrow')

let value = 0

nextSlide.addEventListener('click', () => {
    changePosition(1)
})

beforeSlide.addEventListener('click', () => {
  changePosition(-1)
})

const changePosition = (slide)=>{
  const currentSlide = document.querySelector('.testimonyBodyShow').dataset.id
  value = Number(currentSlide)
  value += Number(slide)

  value = value === 0 ? sliders.length : value > sliders.length ? 1 : value
  sliders[Number(currentSlide)-1].classList.remove('testimonyBodyShow')
  sliders[value-1].classList.add('testimonyBodyShow')
}

titleQuestions.forEach(question => {
  question.addEventListener('click', ()=>{
    let height = 0;
    let answer = question.nextElementSibling;
    let addPadding = question.parentElement.parentElement

    addPadding.classList.toggle('questionPaddingAdd')
    question.children[0].classList.toggle('questionArrowRotate')

    if(answer.clientHeight === 0){
      height = answer.scrollHeight

    }
    answer.style.height = `${height}px`
  })
})







