class Player {
  constructor(name) {
      this.name = name;
      this.totalCoins = 0;
      this.status = 'Small';
      this.hasStar = false;
      this.gameActive = true;
  }

  setName(namePicked) {
      this.name = namePicked;
  }


  gotHit() {
      if (this.hasStar) {
          this.hasStar = false;
          console.log('Your star protected you!')
      } else if (this.status === 'Powered Up') {
          this.status = 'Big';
      } else if (this.status === 'Big') {
          this.status = 'Small';
      } else {
          this.status = 'Dead';
          this.gameActive = false;
      }
  }

  gotPowerup() {
      if (this.status === 'Big') {
          this.status = 'Powered Up';
      } else if (this.status === 'Small') {
          this.status = 'Big';
      } else if (this.status === 'Powered Up') {
          console.log('You got a Star!')
          this.hasStar = true;
      }
  }

  addCoin() {
      this.totalCoins += 1;
  }

  print() {
      console.log(`Name: ${this.name}\nCoins: ${this.totalCoins}\nStatus: ${this.status}\nStar Power: ${this.hasStar}\n `)
  }
}

const user = new Player('Luigi');


// console.log(user);
const savePrincess = (user) => {
  let random = Math.ceil(Math.random()*3);
  if (user.status === 'Dead') {
      clearInterval(start);
  } else if (random === 1) {
      user.gotHit();
      user.print();
  } else if (random === 2) {
      user.addCoin();
      user.print();
  } else if (random === 3) {
      user.gotPowerup();
      user.print();
  }
}

const start = setInterval(() => savePrincess(user), 1500);




