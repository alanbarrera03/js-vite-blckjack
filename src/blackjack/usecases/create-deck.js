import _ from 'underscore';

/**
 * This function create a new deck
 * @param {Arrar<string>} typesOfCard   Example: ['C','D','H','S']
 * @param {Arrar<string>} typesSpecials Example: ['A','J','Q','K']
 * @returns {Arrar} return a new deck of cards
 */

// Esta función crea un nuevo deck
export const crearDeck = ( typesOfCard, typesSpecials ) => {

    if( !typesOfCard || typesOfCard.lenght === 0 )
        throw new Error( 'typesOfCard is requered with a array of string');

    if( !typesSpecials || typesSpecials.lenght === 0 )
        throw new Error( 'typesSpecials is requered with a array of string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of typesOfCard ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of typesOfCard ) {
        for( let esp of typesSpecials ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}