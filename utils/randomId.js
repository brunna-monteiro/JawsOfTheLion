const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const getRandomCharacter = (val = characters.length) => {
    const randomIndex = Math.floor(Math.random() * val)
    return characters.charAt(randomIndex)
}

export const randomId = (length = 24) => {
    const letters = characters.length - 10
    let id = getRandomCharacter(letters)
    for (let i = 1; i <= length; i++) {
        id += getRandomCharacter()
    }
    return id
}