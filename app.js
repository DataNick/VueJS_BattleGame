new Vue({
  el: "#app",
  data: {
    startGame: false,
    battleLog: [],
    youStyle: {
      backgroundColor: 'green',
      margin: 0,
      color: 'white'
    },
    monsterStyle: {
      backgroundColor: 'green',
      margin: 0,
      color: 'white'
    }
  },
  methods: {
    setAttack: function(){
      console.log("attack!");
    },
    specialAttack: function(){
      console.log('special attack');
    },
    setHeal: function(){
      console.log("Heal thyself");
    },
    giveUp: function(){
      console.log("Run Away!");
    }
  }
})