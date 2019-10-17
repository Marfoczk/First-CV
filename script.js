const barButton = document.getElementsByClassName("ham")[0]
const dropDownLinks = document.getElementsByClassName("main-nav")[0]
const headerHidden = document.getElementsByClassName("header")[0]

barButton.addEventListener('click', () => {
    dropDownLinks.classList.toggle('active')
    headerHidden.classList.toggle('active')
})
