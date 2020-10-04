// ***************** GAMEBOARD LOGIC **************************** 

const gameBoard = (() => {

    const gameArray = ['', '', '', '', '', '', '', '', ''];
    const columns = document.querySelectorAll('.play');
    let moves = 0;

    let gameOver = false;




    const revealBoard = () => {
        for (let i = 0; i < gameArray.length; i++) {
            columns[i].innerHTML = gameArray[i];
        }
    }

    const endGame = () => {
        //ROWS
        const columnOneFullX = gameArray[0] === "X" && gameArray[1] === "X" && gameArray[2] === "X";
        const columnOneFullO = gameArray[0] === "O" && gameArray[1] === "O" && gameArray[2] === "O";

        const columnTwoFullX = gameArray[3] === "X" && gameArray[4] === "X" && gameArray[5] === "X";
        const columnTwoFullO = gameArray[3] === "O" && gameArray[4] === "O" && gameArray[5] === "O";

        const columnThreeFullX = gameArray[6] === "X" && gameArray[7] === "X" && gameArray[8] === "X";
        const columnThreeFullO = gameArray[6] === "O" && gameArray[7] === "O" && gameArray[8] === "O";

        //COLUMNS
        const topRowFullX = gameArray[0] === "X" && gameArray[3] === "X" && gameArray[6] === "X";
        const topRowFullO = gameArray[0] === "O" && gameArray[3] === "O" && gameArray[6] === "O";

        const middleRowFullX = gameArray[1] === "X" && gameArray[4] === "X" && gameArray[7] === "X";
        const middleRowFullO = gameArray[1] === "O" && gameArray[4] === "O" && gameArray[7] === "O";

        const bottomRowFullX = gameArray[2] === "X" && gameArray[5] === "X" && gameArray[8] === "X";
        const bottomRowFullO = gameArray[2] === "O" && gameArray[5] === "O" && gameArray[8] === "O";

        //ACROSS
        const topLeftBottomX = gameArray[0] === "X" && gameArray[4] === "X" && gameArray[8] === "X";
        const topLeftBottomO = gameArray[0] === "O" && gameArray[4] === "O" && gameArray[8] === "O";

        //6 4 2
        const topRightBottomX = gameArray[6] === "X" && gameArray[4] === "X" && gameArray[2] === "X";
        const topRightBottomO = gameArray[6] === "O" && gameArray[4] === "O" && gameArray[2] === "O";


        const playerOneWin = player.playerOne.value + " has won the game";
        const playerTwoWin = player.playerTwo.value + " has won the game"
        
        if (columnOneFullX) {
            alert(playerOneWin)
            gameBoard.gameOver = true;
        } else if (columnOneFullO) {
            gameBoard.gameOver = true;
            alert(playerTwoWin)
        } else if (columnTwoFullX) {
            gameBoard.gameOver = true;
            alert(playerOneWin)
        } else if (columnTwoFullO) {
            gameBoard.gameOver = true;
            alert(playerTwoWin)
        } else if (columnThreeFullX) {
            gameBoard.gameOver = true;
            alert(playerOneWin)
        } else if (columnThreeFullO) {
            gameBoard.gameOver = true;
            alert(playerTwoWin)
        } else if (topRowFullX) {
            gameBoard.gameOver = true;
            alert(playerOneWin)
        } else if (topRowFullO) {
            gameBoard.gameOver = true;
            alert(playerTwoWin)
        } else if (middleRowFullX) {
            gameBoard.gameOver = true;
            alert(playerOneWin)
        } else if (middleRowFullO) {
            gameBoard.gameOver = true;
            alert(playerTwoWin)
        } else if (bottomRowFullX) {
            gameBoard.gameOver = true;
            alert(playerOneWin)
        } else if (bottomRowFullO) {
            gameBoard.gameOver = true;
            alert(playerTwoWin)

        } else if (topLeftBottomX) {
            gameBoard.gameOver = true;
            alert(playerOneWin)
        } else if (topLeftBottomO) {
            gameBoard.gameOver = true;
            alert(playerTwoWin)
        } else if (topRightBottomX) {
            gameBoard.gameOver = true;
            alert(playerOneWin)
        } else if (topRightBottomO) {
            gameBoard.gameOver = true;
            alert(playerTwoWin)
        }

        if (gameBoard.moves === 9 && gameOver === false) {
            gameOver = true;
            alert("Its a draw")
        }

    }



    return {
        //revealBoard: revealBoard,
        columns: columns,
        gameArray: gameArray,
        revealBoard: revealBoard,
        endGame: endGame,
        moves: moves,
        gameOver: gameOver,

    }
})();



// ********************* PLAYER LOGIC ************************
const player = (() => {

    const playerOutput = document.getElementById("player-output");
    const playerFormDiv = document.getElementById("form-container");
    const outputPlayers = (player1, player2) => {
        let newDiv = document.createElement("div");
        newDiv.className = "output-div";
        newDiv.innerHTML += `
        <p>X is: ${player1}</p>
        <p>O is: ${player2}`;

        playerOutput.appendChild(newDiv);
    }

    let playerOne = document.getElementById("add-player1");
    let playerTwo = document.getElementById("add-player2");

    const addPlayers = (event) => {
        event.preventDefault();



        console.log(playerOne, playerTwo)
        if(playerOne.value === "" && playerTwo.value === ""){
            alert("you must input both names!")
        } else {
            outputPlayers(playerOne.value, playerTwo.value);
            playerFormDiv.classList.toggle("hidden");
        }

       

        

    }




    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener('click', () => {

        gameBoard.gameArray = ['', '', '', '', '', '', '', '', ''];
        playerOne.value = "";
        playerTwo.value = "";
        window.location.reload();
    });




    const addXorY = () => {
        //We need to link the ID of the board which is clicked, to where we will put the X or O in the array.
        //id = array[id]
        let switchSign = true;




        for (let i = 0; i < gameBoard.columns.length; i++) {

            let id = document.getElementById(i).id;



            //For next: try to move the switchplayer, and remove the event listener in some other function.
            gameBoard.columns[i].addEventListener('click', function switchPlayer() {

                if (gameBoard.gameArray[i] === "X" || gameBoard.gameArray[i] === "O") {
                    return;
                } else {
                    if (switchSign) {
                        gameBoard.moves++;
                        gameBoard.gameArray.splice(id, 1, "X")
                        switchSign = false;

                    } else {
                        gameBoard.moves++;
                        gameBoard.gameArray.splice(id, 1, "O");
                        switchSign = true;
                    }
                }


                if (gameBoard.gameOver === true) {
                    gameBoard.columns.removeEventListener('click');
                }

                gameBoard.revealBoard();
                gameBoard.endGame();

                console.log(gameBoard.gameOver)

                //This is where the logic for X or O is needed. 
                console.log(gameBoard.gameArray)

                //console.log(gameBoard.moves);
            })
        }
    }

    //Reset logic


    return {
        addXorY: addXorY,
        addPlayers: addPlayers,
        playerOne: playerOne,
        playerTwo: playerTwo,
    }



})();

// ****************** DISPLAY *************************
const displayController = (() => {

    //gameBoard.revealBoard();

    player.addXorY();

    gameBoard.endGame();
})();


