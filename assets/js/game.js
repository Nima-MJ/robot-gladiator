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
    while(enemyHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT"){

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            // check player health 
            if (playerHealth <= 0){
                window.alert(playerName + " has died :(");
            }else{
                window.alert(playerName + " still has " + playerHealth + " health left.")
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            
            //check enemy's health 
            if (enemyHealth <= 0 ){
                window.alert(enemyName + " has died :( ")
            }else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }
        }else if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you you'd like to quit? ")

            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!")
                // subtract money from player for skipping 
                playerMoney = playerMoney - 2;
            }
            //if no (false), ask question again by running figh again
            else{
                fight()
            }

        }else{
            window.alert("You need to choose a valid option. Try again!")
        }
    }
};
for(var i = 0; i < enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}