// Game States
// "WIN" - player robot defeated all enemy-robots
//       * Fight all enemy-robots
//       * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 0;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you you'd like to quit? ");

            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from player for skipping 
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        //check enemy's health 
        if (enemyHealth <= 0 ){
            window.alert(enemyName + " has died :( ");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave the while() loop since enemy is dead
            break
        }else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

         // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
         playerHealth = playerHealth - enemyAttack;
         console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player health 
        if (playerHealth <= 0){
            window.alert(playerName + " has died :(");
            break;
        }else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0){
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gldiator! Round" + (i+1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // use debugger to pause script from running and check what's going on at that moment in the code
            enemyHealth = 50;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

    }
    endGame();
};
var endGame = function(){
    //if player is still alive, player wins!
    if (playerHealth > 0 ){
        window.alert("Great job, you've survived the game! You now have a score of "+ playerMoney + ".");
    }else{
        window.alert("You've lost your robot in battle. ");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart game
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();
