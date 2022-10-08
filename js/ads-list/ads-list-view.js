export const buildAdView = (ad) => {
    // const formattedDate = new Date (ad.updatedAt);

    const adView = `
        <p>${ad.name}</p>
        <p>${ad.description}</p>
        <p>${ad.price} €</p>
        <div>
            <img src="${ad.image}" alt="Imagen de ${ad.name}">
        </div>
        <p>En venta: ${ad.sale}</p>
        <br>
    `;

    return adView;
}

export const buildAdsSpinner = () => {
    return `
        <div class="lds-roller spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    `;
}

export const buildEmptyAdsList = () => {
    return `
        <h2>No hay ningún anuncio disponible.</h2>
    `;
}