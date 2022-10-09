import {NotificationController} from "../notifications/notificationController.js"

import { pubSub } from "../pub-sub/pubSub.js"
import { CreateAdController } from "./createAdController.js"

document.addEventListener('DOMContentLoaded', () => {

  const checkUserLogged = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No autorizado')
      setTimeout(() => {
        window.location = '/signup.html'
      }, 2000);
    }
  }

  const notificationContainerElement = document.querySelector('.notification-container');
  const notificationController = new NotificationController(notificationContainerElement);

  const createAdElement = document.querySelector('#create-ad-form');
  const createAdController = new CreateAdController(createAdElement)

  checkUserLogged();
})
