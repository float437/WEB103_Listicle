const rendercharacter = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/characters')
    const data = await response.json()

    const characterContent = document.getElementById('character-content')
    let character;
    character = data.find(character => character.id === requestedID)
    
    if (character) {
        // this info is from the data 
        document.getElementById('image').src = character.image
        document.getElementById('name').textContent = character.name
        document.getElementById('other_names').textContent = 'Other Names: ' + character.other_names
        document.getElementById('health').textContent = 'Health: ' + character.health
        document.getElementById('affiliation').textContent = 'Affiliation: ' + character.affiliation
        document.getElementById('game_introduced').textContent = 'Game First Introduced: ' + character.game_introduced
        document.getElementById('weapon_of_choice').textContent = 'Weapon of Choice: ' + character.weapon_of_choice
        document.getElementById('origin').textContent = 'Origin: ' + character.origin
        document.getElementById('description').textContent = 'Description: ' + character.description
        
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'Character Info Available 😞'
        characterContent.appendChild(message)
    }
}

rendercharacter()