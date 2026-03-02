const header = document.querySelector('header')
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

// TODO: decide whether or not to put the img logo in the header
const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Bayonetta Characters'

const headerSubText = document.createElement('p')
headerSubText.textContent = 'Showcasing the main character\'s from the Bayonetta Series!'

// headerLeft.appendChild(headerLogo,headerTitle)
headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)
headerLeft.appendChild(headerSubText)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('buttons')
headerButton.textContent = 'Home'
headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

headerRight.appendChild(headerButton)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)
