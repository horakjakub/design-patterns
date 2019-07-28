// Pattern which describing creating class only for one for one instance 
// - it's not recomended to use to much singletons, because there 
// are problems with testing, during t
// 

const myAwesomeSingleton = (()=>{
    let instance; 

    function init() {
        // Singleton body 
    }
    return {
        getInstance: () => {

        // Get the Singleton instance if one exist
            if ( !instance ) {
                instance = init();
            }
    
            return instance;
        }
    }
})();
