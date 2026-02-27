/**
 * Funcion que crear la imagen de la carta
 * @param {String} carta La carta que se solicito
 * @returns {HTMLImageElement} Imagen de la carta
 */

export const crearCartaHTML = ( carta ) => {

    if( !carta ) throw new Error('La carta es un argumento obligatorio');
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        return imgCarta;
}