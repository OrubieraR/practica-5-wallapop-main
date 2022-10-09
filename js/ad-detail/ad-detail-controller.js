import { pubSub } from "../pub-sub/pubSub.js";
import { getAdById, removeTweetById } from "./ad-detail-provider.js";
import { buildAdDetail } from "./ad-detail-view.js";

export class AdDetailController {
    constructor(nodeElement){
        this.adDetailElement= nodeElement;
    }

    async drawAdDetail(adId) {
        try {
            const ad = await getAdById(adId);
            this.ad = ad;
            this.adDetailElement.innerHTML = buildAdDetail(ad);

            // Pintar botón de borrado si está logado y es su anuncio.

            
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error obteniendo el anuncio');
        }
    }
}

