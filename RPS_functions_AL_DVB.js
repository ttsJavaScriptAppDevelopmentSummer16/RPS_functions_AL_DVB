
var hands = ["Rock", "Paper", "Scissors"];
var winner = {
    present: false,
    player: " ",
    score: 0
};
var players = {
    player1: {
        name: "Daniel",
        getHand: function() {return hands[parseInt(Math.random()*hands.length)%3];},
        curHand: "",
        score: 0
    },
    player2: {
        name: "Alex",
        getHand: function() {return hands[parseInt(Math.random()*hands.length)%3]},
        curHand: "",
        score: 0
    }
};

function playRound(player1, player2){
    console.log("Starting Rock, Paper, Scissors!");
    console.log(hands.join(" , ") + ", SHOOT!");
    players.player1.curHand = players.player1.getHand();
    players.player2.curHand = players.player2.getHand();
    var hand1 = players.player1.curHand;
    var hand2 = players.player2.curHand;
    console.log(player1.name + " chose " + hand1 + " and " + player2.name + " chose " + hand2);
    if(hand1 === hand2) {
            console.log("Looks like this round was a tie!");
            players.player1.score ++;
            players.player2.score ++;
            return null;
        } else if( (hand1 === "Paper" && hand2 === "Rock") || (hand1 === "Rock" && hand2 === "Scissors") || (hand1 === "Scissors" && hand2 === "Paper")) {
            console.log("Player 1 has won this round!");
            players.player1.score ++;
            return player1;
        } else {
            console.log("Player 2 has won this round!");
            player2.score ++;
            return player2;
        }
}

function playGame(player1, player2, playUntil){
        while(winner.present != true) {
            playRound(player1, player2);  
            if(player1.score === playUntil && (player1.score > player2.score)) {
                winner.present = true;
                winner.name = player1.name;
                winner.score = player1.score;
            } else if(player2.score === playUntil && (player2.score > player1.score)) {
                winner.present = true;
                winner.name = player2.name;
                winner.score = player2.score;
            } else if(player1.score === playUntil && player2.score === playUntil) {
                winner.present = true;
                winner.name = player1.name + " and " + player2.name ;
                winner.score = playUntil;
            }
        }

    console.log("The overall winner is " + winner.name + "!" + " With a score of " + winner.score);

}

playGame(players.player1, players.player2, 5);

