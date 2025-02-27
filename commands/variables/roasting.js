const Interaction = [
    'Oh man bots are taking over the world.',
    `Nah bro, I ain't letting you do that.`,
    'Get a life, mate.'
];
module.exports = function () {
    return Interaction[Math.floor(Math.random() * Interaction.length)];
}

const Rickroll = [
    'Why in the world are you rickrolling a bot?! :0',
    'Why, just why.',
    'Bot\'s dont know what its like to get rickrolled bruh.'
]
module.exports = function () {
    return Rickroll[Math.floor(Math.random() * Rickroll.length)];
}

const Nsfw = [
    'You seriously need mental help.',
    'Why are you lewding a bot??',
    '...'
]
module.exports = function () {
    return Nsfw[Math.floor(Math.random() * Nsfw.length)];
}