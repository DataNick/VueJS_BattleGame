new Vue({
  el: "#app",
  data: {
    startGame: false,
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
    setAttack: function(){
      var monsterHit = Math.round((Math.random() * (15 - 1) + 1))
      this.monsterStyle.width = this.monsterStyle.width.split('%')[0] - monsterHit + '%';
      this.monsterHealth = this.monsterStyle.width.split('%')[0];

      var playerHit = Math.round((Math.random() * (15 - 1) + 1))
      this.youStyle.width = this.youStyle.width.split('%')[0] - playerHit + '%';
      this.youHealth = this.youStyle.width.split('%')[0];
      var newPlayerWidth = 100 - this.youStyle.width.split('%')[0];
      var newMonsterWidth = 100 - this.monsterStyle.width.split('%')[0];
      this.battleLog.unshift({type: "monster", message: "Monster hits player for " + playerHit + "."}, {type: "player", message: "Player hits monster for " + monsterHit + "."});
      //how should points vs injuries be determined. Randomly?
      //add to the battleLog to show person and monster points taken away
    },
    specialAttack: function(){
      // console.log('special attack');
      //should double the impact
      var monsterHit = Math.round((Math.random() * (25 - 1) + 1))
      console.log(monsterHit)
      this.monsterStyle.width = this.monsterStyle.width.split('%')[0] - monsterHit + '%';
      this.monsterHealth = this.monsterStyle.width.split('%')[0];

      var playerHit = Math.round((Math.random() * (10 - 1) + 1))
      this.youStyle.width = this.youStyle.width.split('%')[0] - playerHit + '%';
      this.youHealth = this.youStyle.width.split('%')[0];
      var newPlayerWidth = 100 - this.youStyle.width.split('%')[0];
      var newMonsterWidth = 100 - this.monsterStyle.width.split('%')[0];
      this.battleLog.unshift({type: "monster", message: "Monster hits player for " + playerHit + "."}, {type: "player", message: "Player hits monster for " + monsterHit + "."});
    },
    setHeal: function(){
      console.log("Heal thyself");
      var maxHealth
      this.youStyle.width = this.youStyle.width.split('%')[0] +
      this.youHealth < '80' ? this.battleLog.unshift({type: 'player', message: 'You gained 5 points'}) : alert('Can not give health up.');
      //heal after health reach below a certain point. Shouldn't be able to heal when person is above 75%
    },
    giveUp: function(){
      if (confirm("Are you sure you want to start over?")) {
        this.startGame = false;
        this.battleLog = [];
        this.youHealth = 100;
        this.monsterHealth = 100;
        this.youStyle.width = '100%';
        this.monsterStyle.width = '100%';
      }
    }
  }
})