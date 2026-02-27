/**
 * En caso de ser una letra (J, Q, K, A) se extrae la letra 
 * y se le asigna el valor por defecto en base a las reglas 
 * de la baraja americana
 * @param {String} carta 
 * @returns {Number} Devuelve el valor de la carta
 */
export const valorCarta = ( carta ) => {

    if(!carta) throw Error('Se necesita la carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}