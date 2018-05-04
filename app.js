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
      console.log("attack!");
      this.monsterStyle.width = "50%"
      this.youStyle.width = "80%"
      console.log(this.monsterStyle.width)
      this.monsterHealth = this.monsterStyle.width.split('%')[0];
      this.youHealth = this.youStyle.width.split('%')[0];
      this.battleLog.unshift({type: "player", message: "You lost 20%"}, {type: "monster", message: "Monster lost 50%"});
      //how should points vs injuries be determined. Randomly?
      //add to the battleLog to show person and monster points taken away
    },
    specialAttack: function(){
      console.log('special attack');
      //should double the impact
    },
    setHeal: function(){
      console.log("Heal thyself");
      this.youHealth < '80' ? this.battleLog.unshift({type: 'player', message: 'You gained 5 points'}) : alert('Can not give health up.');
      //heal after health reach below a certain point. Shouldn't be able to heal when person is above 75%
    },
    giveUp: function(){
      this.startGame = false;
      this.battleLog = [];
      this.youHealth = 100;
      this.monsterHealth = 100;
      this.youStyle.width = '100%';
      this.monsterStyle.width = '100%';
    }
  }
})