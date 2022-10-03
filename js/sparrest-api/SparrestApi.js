class SparrestApi {
    // Variables para la url y los endpoints
    baseUrl = 'http://localhost:8000';
    endpoints = {
        login: '/auth/login',
        signup: '/auth/register',
        ads: '/api/ads',
    };

    // Constructor vacío
    constructor(){}

    // Creación del método get para obtener datos del servidor.
    async get(endpoint){
        const response = await fetch(`${this.baseUrl}${endpoint}`);

        if (!response.ok) {
            throw new Error('No existen resultados');
        }

        const data = await response.json();
        
        return data;
    }

    // Creación del método post para crear datos en el servidor


    // Creación del método delete para borrar datos en el servidor
}

export const sparrestApi = new SparrestApi();