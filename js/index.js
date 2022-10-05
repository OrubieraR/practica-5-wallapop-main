import { AdsListController } from "./ads-list/ads-list-controller.js";
import { NotificationController } from "./notifications/notificationController.js";




document.addEventListener('DOMContentLoaded', ()=>{

    const createControllers = () => {
        // Nodo anuncios ha capturar.
        const adListElement = document.querySelector('#ads-list');
        // Nodo notificaciones ha capturar.
        const notificationElement = document.querySelector('#notifications');

        // Invocación de controladores con los nodos como parámetro.
        const adsListController = new AdsListController(adListElement);
        const notificationController = new NotificationController(notificationElement);
    }


    createControllers();
});