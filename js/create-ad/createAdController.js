import { createApiAd } from "./createAdProvider.js"

export class CreateAdController {
  constructor(nodeElement) {
    this.createAdElement = nodeElement

    this.subscribeToEvents();
  }

  subscribeToEvents() {
    const createAdButton = this.createAdElement.querySelector('.create-ad-button');

    this.createAdElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    createAdButton.addEventListener('click', () => {
      this.createAd();
    })
  }

  createAd() {
    const formData = new FormData(this.createAdElement);
    // const ad = formData.get({});
    let adString = '{';
    let contador;
    
    for (const pair of formData.entries()) {
      contador++;
      
      console.log(`${pair[0]}, ${pair[1]},`);
      // ad.pair[0] = pair[1];
      adString += `"${pair[0]}": "${pair[1]}",`;
    }

    
    
    let lastIndex = adString.lastIndexOf(',');
    console.log(lastIndex);
    let ad = adString.slice(0,lastIndex);
    ad += '}';
    console.log(ad);
    ad = JSON.parse(ad);
    console.log(typeof ad);
    createApiAd(ad);
  }
}
