
const content = "Lorem ipsum dolor amet heirloom gastropub kombucha woke godard literally kitsch adaptogen master cleanse try-hard. Tumeric VHS man bun, polaroid occupy tote bag you probably haven't heard of them paleo organic pinterest sriracha cred. Adaptogen butcher neutra snackwave. Put a bird on it enamel pin cred pork belly blog schlitz polaroid. Copper mug mlkshk truffaut taiyaki cloud bread echo park mumblecore, prism cliche hammock thundercats vice. Sartorial quinoa portland man braid jean shorts. Before they sold out disrupt readymade, organic banjo meh artisan flannel thundercats gluten-free intelligentsia cred try-hard man bun."

const make = (word) => {
    let words = content.split(" ").sort( () => 0.5 - Math.random() )
    words = words.splice(0,25);
    words[0] = words[0].charAt(0).toUpperCase() + words[0].substr(1);
    words = words.join(` ${word.toLowerCase()} `);
    return words;
}

const stores = [
    { city:"Portland", addr:"1200 Grover Avenue, Portland, Oregon, USA"},
    { city:"Boston", addr:"24 Brookline Avenue, Boston, Mass, USA"},
    { city:"San Francisco", addr:"12 Groovy Lane, SF, California, USA"},
    { city:"New Orleans", addr:"20 Garden Plaza, New Orleans, Louisiana, USA"}
]

const randomStore = () => stores[ Math.floor( Math.random() * stores.length )]

export { make, randomStore, stores, content }

