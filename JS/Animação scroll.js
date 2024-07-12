const observador = new IntersectionObserver((entries) => {
  entries.forEach( (entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('visivel')
    } else{
        entry.target.classList.remove('visivel')
        }
    })
})

const elements = document.querySelectorAll('.escondido')

elements.forEach((element) => observador.observe(element))


/*tri*/ 
const obv = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add('visivel-tri')
      } else{
          entry.target.classList.remove('visivel-tri')
          }
      })
  })
  
  const elementos = document.querySelectorAll('.escondido-tri')
  
  elementos.forEach((element) => obv.observe(element))

  const obvs = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add('visivel-tri2')
      } else{
          entry.target.classList.remove('visivel-tri2')
          }
      })
  })
  
  const element = document.querySelectorAll('.escondido-tri2')
  
  element.forEach((element) => obv.observe(element))



  const obvss = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add('visivel-tri3')
      } else{
          entry.target.classList.remove('visivel-tri3')
          }
      })
  })
  
  const eleme = document.querySelectorAll('.escondido-tri3')
  
  eleme.forEach((element) => obv.observe(element))
  
