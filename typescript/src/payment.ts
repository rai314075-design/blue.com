export function addPayment(val:Number ){
    console.log(val);
}
export function gerDetails(){ }

//this is default export 

 export default class BottleSeller{
    
  constructor(public name: string, public price: number) {}

  sell() {
    console.log(`${this.name} sold at ${this.price}`);
  }

}

