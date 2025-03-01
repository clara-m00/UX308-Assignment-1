export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          aReturn.push("Welcome to Clara's Ramen House");
          aReturn.push("Would you like to see the menu?");
          this.stateCur = this.OrderState.MENU;
          return aReturn;
        },
        MENU: (sInput) => {
          let aReturn = [];
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push("1 - Tonkotsu Ramen");
            aReturn.push("2 - Shoyu Ramen");
            aReturn.push("3 - Miso Ramen");
            aReturn.push("4 - Cancel order");
            aReturn.push("Please type the number of the desired item.");
            this.stateCur = this.OrderState.SIZES;
          } else {
            aReturn.push("Thanks, come again!");
            this.isDone = true;
          }
          return aReturn;
        },
        SIZES: (sInput) => {
          let aReturn = [];
          if (sInput === '1' || sInput === '2' || sInput === '3') {
            aReturn.push("1 - Regular");
            aReturn.push("2 - Large");
            aReturn.push("Please type the number of the desired item.");
            this.stateCur = this.OrderState.TOPPINGS;
          } else if (sInput === '4') {
            aReturn.push("Your order is cancelled. Thank you, come again!");
            this.isDone = true;
          } 
          
          else {
            aReturn.push("Sorry, I couldn't understand your order. Please call us at 123-456-7890");
            this.isDone = true;
          }
          return aReturn;
        },
        TOPPINGS: (sInput) => {
          let aReturn = [];
          if (sInput === '1' || sInput === '2') {
            aReturn.push("1 - Egg");
            aReturn.push("2 - Fish cakes");
            aReturn.push("3 - Bok Choy");
            aReturn.push("4 - Bamboo Shoot");
            aReturn.push("Please type the number of the desired item.");
          } else {
            aReturn.push("Sorry, I couldn't understand your order. Please call us at 123-456-7890");
            this.isDone = true;
          }
          this.stateCur = this.OrderState.UPSELL;
          return aReturn;
        },
        UPSELL: (sInput) => {
          let aReturn = [];
          if (sInput === '1' || sInput === '2' || sInput === '3' || sInput === '4') {
            aReturn.push("Would you like any add ons?");
            aReturn.push("1 - Extra meat");
            aReturn.push("2 - Extra green onion");
            aReturn.push("3 - Pop");
            aReturn.push("4 - No thank you");
          } else {
            aReturn.push("Sorry, I couldn't understand your order. Please call us at 123-456-7890");
            this.isDone = true;
          }
          this.stateCur = this.OrderState.CHECKOUT;
          return aReturn;
        },
        CHECKOUT: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput === '1' || sInput === '2' || sInput === '3' || sInput === '4') {
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push("Order confirmed.");
            aReturn.push(`Please pick it up before ${d.toTimeString()}`);
          } else {
            aReturn.push("Sorry, I couldn't understand your order. Please call us at 123-456-7890");
          }
          return aReturn;
        }
      };
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }