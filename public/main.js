let sushiSection = document.getElementById('sushi-section')
let requestForm = document.getElementById('request-form')

function displaySushi(rolls) {
    sushiSection.textContent = ''
    for(let i = 0; i < rolls.length; i++){
        let sushiCard = document.createElement('div')
        sushiCard.setAttribute('id', rolls[i].id)
        sushiCard.innerHTML = `
            <img class='sushi-img' src='${rolls[i].image}'/>
            <div>
                <h2>${rolls[i].name}</h2>
                <button class='fish-btn' id='fish-btn-${rolls[i].id}'>Get Fish</button>
            </div>
        `
        sushiSection.appendChild(sushiCard)
        document.getElementById(`fish-btn-${rolls[i].id}`).addEventListener('click', getFish)
    }
}

function getSushi() {
    axios.get('http://localhost:6543/sushi').then((res) => {
        displaySushi(res.data)
    })
}

function addSushi(event) {
    event.preventDefault()
    let sushiData = {
        name: document.getElementById('name').value,
        image: document.getElementById('image').value,
        fish: document.getElementById('fish').value
    }
    axios.post('http://localhost:6543/sushi', sushiData).then((res) => {
        displaySushi(res.data)
        document.getElementById('name').value = ''
        document.getElementById('image').value = ''
        document.getElementById('fish').value = ''
    })
}

function getFish(event){
    axios.get(`http://localhost:6543/sushi/${event.target.parentNode.parentNode.id}`).then((res) => {
        alert(`This roll is made with ${res.data}.`)
    })
}

requestForm.addEventListener('submit', addSushi)

getSushi()