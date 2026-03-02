const renderCharacters = async () => {
    const response = await fetch('/characters')
    console.log("RenderCharacters function, the response from fetch /characters: " + response)
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    console.log("RenderCharacters function : Creating the datacards")
    if(data){
        data.map(character => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${character.image})`

            const name = document.createElement('h3')
            name.textContent = character.name
            bottomContainer.appendChild(name)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Health: ' + character.health
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Primary Weapon: ' + character.weapon_of_choice
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role','button')
            link.href = `/characters/${character.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    }else{
        const message = document.createElement('h2')
        message.textContent("No Characters Available 😞")
        mainContent.appendChild(message)
    }
}
const requestedURL = window.location.href.split('/').pop()
console.log("requested URL is : " + requestedURL)
if(requestedURL){
    window.location.href = '../404.html'
}else{ 
    renderCharacters()
}