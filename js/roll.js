//Creates two random numbers and displays the corresponding image. Points are added after each roll.

function roll() {

  let dice1 = Math.floor(Math.random() * 6 + 1);
  let dice2 = Math.floor(Math.random() * 6 + 1);

  let player = document.getElementById('player').innerHTML;
  let player1Sum = parseInt(document.getElementById('scoreP1').innerHTML);
  let player2Sum = parseInt(document.getElementById('scoreP2').innerHTML);

  console.log(player1Sum);
  console.log(player2Sum);

  if (player1Sum <= 100 && player2Sum <= 100) {

    //condition checks which player's dice to roll.
    if (player == 1) {


      let diceSum1 = dice1 + dice2;

      //display dice
      document.getElementById('player1dice1').setAttribute("src", "images/dice" + dice1 + ".jpg");
      document.getElementById('player1dice2').setAttribute("src", "images/dice" + dice2 + ".jpg");
      document.getElementById('player').innerHTML = "2";

      if (dice1 == dice2) {

        diceSum1 = diceSum1 * 2;
        document.getElementById('scoreP1').innerHTML = player1Sum + diceSum1;

      } else {

        document.getElementById('scoreP1').innerHTML = player1Sum + diceSum1;
      }

    } else {

      let diceSum2 = dice1 + dice2;

      document.getElementById('player2dice1').setAttribute("src", "images/dice" + dice1 + ".jpg");
      document.getElementById('player2dice2').setAttribute("src", "images/dice" + dice2 + ".jpg");
      document.getElementById('player').innerHTML = "1";
      document.getElementById('scoreP2').innerHTML = diceSum2;

      if (dice1 == dice2) {

        diceSum2 = diceSum2 * 2
        document.getElementById('scoreP2').innerHTML = player2Sum + diceSum2;

      } else {

        document.getElementById('scoreP2').innerHTML = player2Sum + diceSum2;
      }
    }

  } else if (player1Sum >= 100) {

    window.alert("Player 1 is the winner!");

  } else if (player2Sum >= 100) {

    window.alert("Player 2 is the winner!");

  }
}
