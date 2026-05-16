"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.gerDetails = gerDetails;
function addPayment(val) {
    console.log(val);
}
function gerDetails() { }
//this is default export 
class BottleSeller {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    sell() {
        console.log(`${this.name} sold at ${this.price}`);
    }
}
exports.default = BottleSeller;
//# sourceMappingURL=payment.js.map