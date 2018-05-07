new Vue({
  el: "#app",
  data: {
    gameIsRunning: false, //check if game is running
    youHealth: 100,
    monsterHealth: 100,
    battleLog: [],
    youStyle: {
      backgroundColor: 'green',
      margin: 0,
      color: 'white',
      width: '100%'
    },
    monsterStyle: {
      backgroundColor: 'green',
      margin: 0,
      color: 'white',
      width: '100%'
    }
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.youHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function(){
      var damage = calculateDamage(3, 10);
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        alert('You Won!');
        this.gameIsRunning = false;
        return;
      }

      max = 12;
      min = 5;
      damage = calculateDamage(5, 12);
      this.youHealth -= damage;

      if (this.youHealth <= 0) {
        alert('You Lost!');
        this.gameIsRunning = false;

      }

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
      // if (confirm("Are you sure you want to start over?")) {
      //   this.startGame = false;
      //   this.battleLog = [];
      //   this.youHealth = 100;
      //   this.monsterHealth = 100;
      //   this.youStyle.width = '100%';
      //   this.monsterStyle.width = '100%';
      // }
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) +1, min);
    }
  }
})