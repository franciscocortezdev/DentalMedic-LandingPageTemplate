const sliders = [...document.querySelectorAll('.testimonyBody')]
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










