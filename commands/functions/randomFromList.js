const randomFromList = function(variable) {
     return variable[Math.floor(Math.random() * variable.length)]
}
module.exports = { randomFromList }