import { AdsListController } from "./ads-list/ads-list-controller.js";

document.addEventListener('DOMContentLoaded', ()=>{

    const createControllers = () => {
        // Nodos ha capturar.
        const adListElement = document.querySelector('#ads-list');


        // Invocación de controladores con los nodos como parámetro.
        const adsListController = new AdsListController(adListElement);
    }


    createControllers();
});