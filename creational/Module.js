// Very important hisoricaly pattern in JS
// enable dividing variables namespaces in objects which contains
// often IIF are used to declare Module space
// Adventages:
// - there is limatations global variables
// - it's possible to add some privacy into modules
// - also it's possible to easy change
// Flaws:
// - if we want change something from private to public,
// everything has to be refactored
// - difficult to test for privates, and also making changes in privates
//

const superHeroesSpace = (()=>{
    const heroesNames = new Set([
        'Jacob',
        'Batman',
        'Kitty',
    ]);

    function addNewHeroName(name){
        heroesNames.add(name);
        console.log(`current hidden heroes names: ${
            [...heroesNames]}`)
    }


    return {
        addNewHeroName
    };
})()

superHeroesSpace.addNewHeroName('Jacob');

console.log(superHeroesSpace);

