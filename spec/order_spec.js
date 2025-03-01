import { Order } from '../Order.js';

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Clara's Ramen House");
    });
    it("test menu", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("1 - Tonkotsu Ramen");
    });
    it("test no menu", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thanks, come again!");
    });
    it("test valid menu item", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        const aResults = oOrder.handleInput("1");
        expect(aResults[0]).toBe("1 - Regular");
    });
    it("test invalid menu item", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        const aResults = oOrder.handleInput("8");
        expect(aResults[0]).toBe("Sorry, I couldn't understand your order. Please call us at 123-456-7890");
    });
    it("test cancel menu item", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        const aResults = oOrder.handleInput("4");
        expect(aResults[0]).toBe("Your order is cancelled. Thank you, come again!");
    });
    it("test valid size", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        oOrder.handleInput("1");
        const aResults = oOrder.handleInput("1");
        expect(aResults[0]).toBe("1 - Egg");
    });
    it("test invalid size", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        oOrder.handleInput("1");
        const aResults = oOrder.handleInput("7");
        expect(aResults[0]).toBe("Sorry, I couldn't understand your order. Please call us at 123-456-7890");
    });
    it("test valid topping", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        oOrder.handleInput("1");
        oOrder.handleInput("1");
        const aResults = oOrder.handleInput("1");
        expect(aResults[0]).toBe("Would you like any add ons?");
    });
    it("test invalid topping", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        oOrder.handleInput("1");
        oOrder.handleInput("1");
        const aResults = oOrder.handleInput("6");
        expect(aResults[0]).toBe("Sorry, I couldn't understand your order. Please call us at 123-456-7890");
    });
    it("test valid upsell item", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        oOrder.handleInput("1");
        oOrder.handleInput("1");
        oOrder.handleInput("1");
        const aResults = oOrder.handleInput("1");
        expect(aResults[0]).toBe("Order confirmed.");
    });
    it("test invalid upsell item", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        oOrder.handleInput("1");
        oOrder.handleInput("1");
        oOrder.handleInput("1");
        const aResults = oOrder.handleInput("7");
        expect(aResults[0]).toBe("Sorry, I couldn't understand your order. Please call us at 123-456-7890");
    });
  });
  
  // one for hello
  // one for menu
  // one for no i dont want to see menu
  // one for valid menu item
  // one for invalid menu item
  // one for cancel menu item
  // one for valid size
  // one for invalid size
  // one for valid topping
  // one for invalid topping
  // one for valid upsell addon
  // one for invalid upsell addmon
 