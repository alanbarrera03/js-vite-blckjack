
/**
 * 
 * @param { String } carta 
 * @returns { HTMLImageElement } Returns of Image
 */

export const createCardHTML = ( carta ) => {

    if ( !carta ) throw new Error( 'Card is a argument request' );

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;

}