const eightball = function() {
     let outcomes = [
          "Ehh.. I'm not sure",
          "What did you say again?",
          "I'm 69% sure",
          "Yeah, probably",
          "Try asking again",
          "Unfortunately, no",
          "Unfortunately, yes",
          "Surely not",
          "Who knows?",
          "Possibly not",
          "Your question was dumb, ask again",
          "Unfortunately, not a single living being in this indefinite universe has a proper answer to a question like that",
          "I must disagree",
          "Shut up mate",
          "What about you? What do you think",
          "I don't know if I should answer this or not..",
          "I wanted to give you a good answer, but.. it's impossible",
          "What is that question dude what the hell"
     ]
     return outcomes[Math.floor(Math.random() * outcomes.length)]
}
module.exports = { eightball }