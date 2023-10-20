const sushi = require('./sushi.json')
let sushiId = 6

module.exports = {
    getSushi: (req, res) => {
        res.status(200).send(sushi)
    },
    addSushi: (req, res) => {
        const {name, image, fish} = req.body
        let newSushi = {
            id: sushiId,
            name,
            image,
            fish
        }
        sushi.push(newSushi)
        sushiId++
        res.status(200).send(sushi)
    },
    getFish: (req, res) => {
        let foundSushi = sushi.findIndex(sush => sush.id === +req.params.id)
        res.status(200).send(sushi[foundSushi].fish)
        // Fixed the typo of 'feesh' to 'fish'
    }
}