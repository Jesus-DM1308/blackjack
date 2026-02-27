/**
 * Esta función permite pedir una carta 
 * @param {Array<String>} deck Un arreglo de string
 * @returns {Array<String>} Retorna una carta
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 )
        throw Error('No hay cartas en el deck');
    const carta = deck.pop();
    return carta;
}