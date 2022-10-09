export const buildAdDetail = (ad) => {
  
    // const updatedAt = new Date(ad.updatedAt);
    return `
    <p>${ad.name}</p>
    <p>${ad.description}</p>
    <p>${ad.price} €</p>
    <div>
        <img width="300" height="300" src="${ad.photo}" alt="Imagen de ${ad.name}">
    </div>
    <p>En venta: ${ad.sale}</p>
      
    <button style="display: none">Borrar Anuncio</button>
    `;
    // return `
    //   <p>${JSON.stringify(ad)}</p>
    // `;
  }