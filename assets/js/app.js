let sideMenuLinks = document.querySelectorAll('.side-menu a')
sideMenuLinks.forEach((item) => {
  item.addEventListener('click', (event) => {
    let helpClass = item.dataset.class

    if (!item.classList.contains('active')) {
      sideMenuLinks.forEach((item) => item.classList.remove('active'))
      item.classList.add('active')
    }

    event.preventDefault()
  })
})
