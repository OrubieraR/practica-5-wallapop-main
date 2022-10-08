import { getAds } from "./ads-list-provider.js";
import { buildAdView, buildAdsSpinner, buildEmptyAdsList } from "./ads-list-view.js";
import { pubSub } from "../pub-sub/pubSub.js";

export class AdsListController {
    constructor(nodeElement){
        this.adsContainerElement = nodeElement;
        this.loadAds();
    }

    async loadAds() {
        this.adsContainerElement.innerHTML = buildAdsSpinner();
        let ads=[];
    
        try {
            ads = await getAds();
            // console.log(ads);
        } catch (error) {
            // console.log('Ha habido un error');
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error cargando anuncios');
        }
        
        if (ads.length === 0) {
            this.showNoAvailableAds();
        }

        this.adsContainerElement.querySelector('.spinner').classList.toggle('hide');


        this.drawAds(ads);
    }

    showNoAvailableAds(){
        const divLayer = document.createElement('div');
        divLayer.innerHTML = buildEmptyAdsList();
        this.adsContainerElement.appendChild(divLayer);
    }

    drawAds(ads){
        for (const ad of ads) {
            const articleElement = document.createElement('article');

            articleElement.innerHTML = buildAdView(ad);

            this.adsContainerElement.appendChild(articleElement);
        }
    }
}

