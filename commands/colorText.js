const colorText = function (text, color) {
     if (color === "red") {
          return `\x1b[31m` + text + `\x1b[0m`
     }
     if (color === "green") {
          return `\x1b[32m` + text + `\x1b[0m`
     }
     if (color === "yellow") {
          return `\x1b[33m` + text + `\x1b[0m`
     }
     if (color === "purple") {
          return `\x1b[35m` + text + `\x1b[0m`
     }
     if (color === "aqua") {
          return `\x1b[36m` + text + `\x1b[0m`
     }
     return text
}

const seperateText = function () {
     // サンキュウ！
     var amount = 39;
     var text = '';
     var seperator = '=';

     for (var i = 0; i < amount; i++) {
          text = text+seperator;
     }
     return text;
}

module.exports = { colorText, seperateText }