
/**
 * Esta función me permite tomar una carta
 * @param { Array<String> } deck Is one array of string
 * @returns { String } return of deck a card
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No cards in the deck';
    }

    const carta = deck.pop();
    console.log( carta );
    return carta;
}