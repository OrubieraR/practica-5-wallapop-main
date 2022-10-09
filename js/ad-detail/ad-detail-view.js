export const buildAdDetail = (ad) => {
  
    // const updatedAt = new Date(ad.updatedAt);
    return `
    <p>${ad.name}</p>
    <p>${ad.description}</p>
    <p>${ad.price} €</p>
    <div>
        <img src="${ad.image}" alt="Imagen de ${ad.name}">
    </div>
    <p>En venta: ${ad.sale}</p>
      
    <button style="display: none">Borrar Anuncio</button>
    `;
    // return `
    //   <p>${JSON.stringify(ad)}</p>
    // `;
  }