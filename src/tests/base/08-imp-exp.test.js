import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe( 'Pruebas del archivo 08-imp-exp.' , () => {
    
    test( 'Debe de retornar un héroe por id.' , () => {
        
        const id = 1;

        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test( 'Debe de retornar un undefined si Héroe no existe.' , () => {
        
        const id = 10;

        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    test( 'Debe de retornar un arreglo con los héroes de DC.' , () => {
        
        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );
        
        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );

    });
    
    test( 'Debe de retornar un arreglo con los héroes de Marvel.' , () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );

    });

});
