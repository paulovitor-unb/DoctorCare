setupScroll()

function setupScroll() {
  window.addEventListener('scroll', onScroll)
  onScroll()
}

function onScroll() {
  showNavOnScroll()
  showHomeButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showHomeButtonOnScroll() {
  const homeHeight = home.offsetHeight

  if (scrollY > homeHeight) {
    homeButton.classList.add('show')
  } else {
    homeButton.classList.remove('show')
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTopLine = section.offsetTop
  const sectionBottomLine = sectionTopLine + section.offsetHeight

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTopLine
  const sectionBottomPassedTargetLine = targetLine > sectionBottomLine

  const sectionIsActive =
    sectionTopReachedOrPassedTargetLine && !sectionBottomPassedTargetLine

  const sectionMenuElement = document.querySelector(
    `.menu a[href*=${section.getAttribute('id')}]`
  )

  sectionMenuElement.classList.remove('active')
  if (sectionIsActive) {
    sectionMenuElement.classList.add('active')
  }
}

function openMenu() {
  document.body.classList.add('menu-open')
}

function closeMenu() {
  document.body.classList.remove('menu-open')
}

ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services .card,
  #about,
  #about img
  #contact,
  #contact img,
  footer
  `)
