var arr = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9')
var turn = 0,
    p1 = 0,
    p2 = 0,
    tie = 0,
    count = 0,
    rounds = 0,
    win = 'n',
    str = "c"

// To clear all the inputs
function defaultValues() {
    if (turn % 2 == 0) {
        document.getElementById('msg').innerHTML = "Turn : Player X"

    } else {
        document.getElementById('msg').innerHTML = "Turn : Player O"
    }
    str = "c"
    count = 0
    console.log('Funciton invoked')
    for (let i = 0; i <= 8; i++) {
        str = str + i
        arr[i] = 'i'
        document.getElementById(str).innerHTML = ""
        str = "c"
    }
    close_all()
}

function scoreboard(w) {
    if (w == 'X') {
        p2++
    } else if (w == 'O') {
        p1++

    } else if (w == 't') {
        // w = 't'
        tie++
        show_menu()
    }

}

// To take inputs
function takeInput(position) {
    if (turn % 2 == 0) {
        document.getElementById('msg').innerHTML = "Turn : Player O"
        document.getElementById('msg').setAttribute("style", "background-color : rgb(255, 206, 187);transition: 300ms")
    } else {
        document.getElementById('msg').innerHTML = "Turn : Player X"
        document.getElementById('msg').setAttribute("style", "background-color : rgb(201, 255, 188);transition: 300ms")
    }
    // document.getElementById('msg').setAttribute("style", "display:none")

    str = str + position
    if (arr[position] == "X" || arr[position] == "O") {
        document.getElementById('msg').innerHTML = "Already Filled...!"
        document.getElementById('msg').setAttribute("style", "top: 1vh;background-color: #FEC0C0;color: red;transition: 300ms")

    } else {
        if (turn % 2 == 0) {
            document.getElementById(str).innerHTML = "X"
            arr[position] = 'X'
            win = 'X'
        } else {
            document.getElementById(str).innerHTML = "O"
            arr[position] = 'O'
            win = 'O'
        }
        count++
        turn++
    }
    if ((arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O') || (arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O') || (arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O') || (arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O') || (arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O') || (arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O') || (arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O') || (arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O') || (arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X') || (arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X') || (arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X') || (arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X') || (arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X') || (arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X') || (arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X') || (arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X')) {
        document.getElementById('result').innerHTML = "Player " + arr[position] + " Won the game...!<br>Steps Taken : " + count
        document.getElementById('result').setAttribute("style", "background-color: rgb(203, 255, 203);color: green;transition: 300ms")
        scoreboard(win)
        show_menu()
        rounds++
    } else if (count == 9) {
        document.getElementById('result').innerHTML = "Game tied...!<br>Steps Taken : " + count
        document.getElementById('result').setAttribute("style", "background-color: rgb(255, 218, 139);color: rgb(241, 129, 0)")
        count = 0
        win = 't'
        defaultValues()
        scoreboard(win)
        show_menu()
        rounds++
    }
    str = "c"
    console.log(count)
}

function show_menu() {
    document.getElementById('menu').setAttribute("style", "display: block")
    document.getElementById('backg').setAttribute("style", "display: block")

}


function cellCall() {
    document.getElementsByTagName('td').setAttribute("style", "border: black dashed;font: 510% bold;transition: 150ms")
}

function show_score() {
    document.getElementById('rounds').innerHTML = "Rounds : " + rounds
    document.getElementById('p1').innerHTML = "Player O : " + p1
    document.getElementById('p2').innerHTML = "Player X: " + p2
    document.getElementById('tie').innerHTML = "Ties : " + tie
    document.getElementById('score').setAttribute("style", "display: block")
    document.getElementById('backg').setAttribute("style", "display: block")
    document.getElementById('menu').setAttribute("style", "display: none")
}

function close_score() {
    document.getElementById('menu').setAttribute("style", "display: block")
    document.getElementById('backg').setAttribute("style", "display: block")
    document.getElementById('score').setAttribute("style", "display: none")
        // defaultValues()
}

function close_all() {
    document.getElementById('menu').setAttribute("style", "display: none")
    document.getElementById('backg').setAttribute("style", "display: none")
    document.getElementById('score').setAttribute("style", "display: none")

}


// for (let i = 1; i < 10; i++) {
//     console.log(arr[i])
// }