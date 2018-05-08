new Vue({
  el: "#app",
  data: {
    gameIsRunning: false, //check if game is running
    youHealth: 100,
    monsterHealth: 100,
    // battleLog: [],
    turns: []
    // youStyle: {
    //   backgroundColor: 'green',
    //   margin: 0,
    //   color: 'white',
    //   width: '100%'
    // },
    // monsterStyle: {
    //   backgroundColor: 'green',
    //   margin: 0,
    //   color: 'white',
    //   width: '100%'
    // }
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.youHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function(){
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
      // var monsterHit = Math.round((Math.random() * (15 - 1) + 1))
      // this.monsterStyle.width = this.monsterStyle.width.split('%')[0] - monsterHit + '%';
      // this.monsterHealth = this.monsterStyle.width.split('%')[0];

      // var playerHit = Math.round((Math.random() * (15 - 1) + 1))
      // this.youStyle.width = this.youStyle.width.split('%')[0] - playerHit + '%';
      // this.youHealth = this.youStyle.width.split('%')[0];
      // var newPlayerWidth = 100 - this.youStyle.width.split('%')[0];
      // var newMonsterWidth = 100 - this.monsterStyle.width.split('%')[0];
      // this.battleLog.unshift({type: "monster", message: "Monster hits player for " + playerHit + "."}, {type: "player", message: "Player hits monster for " + monsterHit + "."});
      // if (this.monsterHealth <= 0) {
      //   alert('You Won!');
      //   this.giveUp();
      // } else if (this.youHealth <= 0) {
      //   alert('You Lost!');
      //   this.giveUp();
      // }
    },
    specialAttack: function(){
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + damage
      });
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
      // var monsterHit = Math.round((Math.random() * (25 - 1) + 1));

      // this.monsterStyle.width = this.monsterStyle.width.split('%')[0] - monsterHit + '%';
      // this.monsterHealth = this.monsterStyle.width.split('%')[0];

      // var playerHit = Math.round((Math.random() * (10 - 1) + 1))
      // this.youStyle.width = this.youStyle.width.split('%')[0] - playerHit + '%';
      // console.log(this.youStyle.width.split('%')[0] - playerHit + '%')
      // this.youHealth = this.youStyle.width.split('%')[0];
      // var newPlayerWidth = 100 - this.youStyle.width.split('%')[0];
      // var newMonsterWidth = 100 - this.monsterStyle.width.split('%')[0];
      // this.battleLog.unshift({type: "monster", message: "Monster hits player for " + playerHit + "."}, {type: "player", message: "Player hits monster for " + monsterHit + "."});

      // if (this.monsterHealth <= 0) {
      //   alert('You Won!');
      //   this.giveUp();
      // } else if (this.youHealth <= 0) {
      //   alert('You Lost!');
      //   this.giveUp();
      // }
    },
    heal: function(){
      if (this.youHealth <= 90) {
        this.youHealth += 10;
      } else {
        this.youHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
      this.monsterAttacks();
      // console.log("Heal thyself");
      // if (this.youHealth < '80') {
      //   var maxHealth = Math.round((Math.random() * (15 - 1) + 1));
      //   var playerHit = Math.round((Math.random() * (8 - 1) + 1));
      //   var finalHealth = Math.max(maxHealth, playerHit) - Math.min(maxHealth, playerHit)
      //   this.youStyle.width = Number(this.youStyle.width.split('%')[0]) + finalHealth + '%';
      //   this.youHealth = this.youStyle.width.split('%')[0];

      //   this.battleLog.unshift({type: "monster", message: "Monster hits player for " + playerHit + "."}, {type: 'player', message: 'You gained ' + maxHealth + ' points'});
      // } else {
      //   alert('Can not give health up.');
      // }
    },
    giveUp: function(){
      this.gameIsRunning = false;
      this.turns = [];

      // if (confirm("Are you sure you want to start over?")) {
      //   this.startGame = false;
      //   this.battleLog = [];
      //   this.youHealth = 100;
      //   this.monsterHealth = 100;
      //   this.youStyle.width = '100%';
      //   this.monsterStyle.width = '100%';
      // }
    },
    monsterAttacks: function() {
      var damage = this.calculateDamage(5, 12);;
      this.youHealth -= damage
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      });
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) +1, min);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won. New game?")) {
          this.startGame();
        } else {
            this.gameIsRunning = false;
        }
        return true;
      } else if (this.youHealth <= 0) {
        if (confirm("You lost. New game?")) {
          this.startGame();
        } else {
            this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})