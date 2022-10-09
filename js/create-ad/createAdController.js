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
    const ad = formData.get('ad');
    createApiAd(ad);
  }
}
