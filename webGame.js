const hat  = '^'
const hole = 'O'
const fieldCharacter = '░';
const pathCharacter = '*';
let locationRow = 0;
let locationColumn = 0;
let lastPositionRow = 0;
let lastPositionColumn = 0;
const fieldArr = [];
let playing = true;


const generateField = (rows,columns) => {
    for(let i = 0; i < rows; i++) {
        fieldArr[i] = [];
        for(let n = 0; n < columns; n++) {
            fieldArr[0][0] = pathCharacter;
            let random = Math.random();
            let difficulty = 0.1;
            random > difficulty ? 
            fieldArr[i][n] = fieldCharacter
            : fieldArr[i][n] = hole;
        }
    } 
    const hatPositionRow = Math.floor(Math.random() * rows);
    const hatPositionColumns = Math.floor(Math.random() * columns);
    fieldArr[hatPositionRow][hatPositionColumns] = hat
    runGame()
}

const print = (fieldArr) => {
    let field = []
    for(let i = 0; i < fieldArr.length; i++) {
        field.push(fieldArr[i].join(''));
    }
    document.getElementById('para1').innerHTML = field[0]
    document.getElementById('para2').innerHTML = field[1]
    document.getElementById('para3').innerHTML = field[2]
    document.getElementById('para4').innerHTML = field[3]
    document.getElementById('para5').innerHTML = field[4]
    document.getElementById('para6').innerHTML = field[5]
    document.getElementById('para7').innerHTML = field[6]
    document.getElementById('para8').innerHTML = field[7]
    document.getElementById('para9').innerHTML = field[8]
    document.getElementById('para10').innerHTML = field[9]
}

const up = () => {
    lastPositionRow = locationRow;
    lastPositionColumn = locationColumn;
    locationRow -= 1;
    playing = true;
    runGame()
}
const down = () => {
    lastPositionRow = locationRow;
    lastPositionColumn = locationColumn;
    locationRow += 1;
    playing = true;
    runGame()
}
const right = () => {
    lastPositionRow = locationRow;
    lastPositionColumn = locationColumn;
    locationColumn += 1;
    playing = true;
    runGame()
}
const left = () => {
    lastPositionRow = locationRow;
    lastPositionColumn = locationColumn;
    locationColumn -= 1;
    playing = true;
    runGame()
}
const isInBounds = () => {
    if((locationRow > fieldArr.length || locationRow < 0) ||
      (locationColumn > fieldArr[0].length - 1 || locationColumn < 0)) { 
          playing = false;
          return false } else { return true }
 }
const isHole = () => {
    if(fieldArr[locationRow][locationColumn] === hole) { playing = false; return true} else { return false }
}

const isHat = () => {
    if(fieldArr[locationRow][locationColumn] === hat) {playing = false; return true} else { return false }
}

const runGame = () => {
    while(playing) {
        if(!isInBounds()) {
            alert('Out of bounds instruction!')
            playing = false;
            break;
        }
        if(isHole()) {
            alert('Sorry, you fell down a hole!');
            playing = false;
            break;
        }
        if(isHat()) {
            alert('Congrats, you found your hat!')
            playing = false;
            break;
        }
        fieldArr[locationRow][locationColumn] = pathCharacter;
        fieldArr[lastPositionRow][lastPositionColumn] = fieldCharacter;
        print(fieldArr)
        playing = false;
    }
}



