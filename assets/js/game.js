// Game States
// "WIN" - player robot defeated all enemy-robots
//       * Fight all enemy-robots
//       * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less]

var fight = function(enemy) {
    while(enemy.health > 0 && playerInfo.health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you you'd like to quit? ");

            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from player for skipping 
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

        //check enemy's health 
        if (enemy.health <= 0 ){
            window.alert(enemy.name + " has died :( ");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;

            //leave the while() loop since enemy is dead
            break
        }else{
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

         // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        var damage = randomNumber(enemy.attack -3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        // check player health 
        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died :(");
            break;
        }else{
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};
var startGame = function(){
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0){
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gldiator! Round" + (i+1));

            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            //if we're not at the last enemy in the array
            if (i < enemyInfo.length - 1 && playerInfo.health > 0){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm){
                    shop();
                }
            }
        }else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

    }
    endGame();
};
var endGame = function(){
    //if player is still alive, player wins!
    if (playerInfo.health > 0 ){
        window.alert("Great job, you've survived the game! You now have a score of "+ playerInfo.money + ".");
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

var shop = function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt){
        case "refill":
        case "REFILL":
            playerInfo.refilHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option. Try Again.");
            shop();
            break;  
    }

};

//funtion to generate a random numeric value
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money : 10,
    reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refilHealth: function(){
        if(this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars");
            //increase health and decrease money 
            this.health += 20;
            this.money -= 7;
        }else{
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if(this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars");
            // increase attack and decrease money 
            this.attack += 6;
            this.money -= 7;
        }else{
            window.alert("You do not have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

startGame();