export const buildNotificationView = (message) =>{
    return `
        <p>Ups! ${message}</p>
        <button class="close-notification">Cerrar</button>
    `;
}