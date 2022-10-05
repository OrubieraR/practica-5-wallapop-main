import { getAds } from "./ads-list-provider.js";
import { buildAdView } from "./ads-list-view.js";
import { pubSub } from "../pub-sub/pubSub.js";

export class AdsListController {
    constructor(nodeElement){
        this.adsContainerElement = nodeElement;
        this.loadAds();
    }

    async loadAds() {
        let ads=[];
    
        try {
            ads = await getAds();
            // console.log(ads);
        } catch (error) {
            // console.log('Ha habido un error');
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error cargando anuncios');
        }

        this.drawAds(ads);
    }

    drawAds(ads){
        for (const ad of ads) {
            const articleElement = document.createElement('article');

            articleElement.innerHTML = buildAdView(ad);

            this.adsContainerElement.appendChild(articleElement);
        }
    }
}

