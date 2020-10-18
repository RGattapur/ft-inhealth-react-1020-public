
const makeKey = song => `${song.title.split(" ").join("-").toLowerCase()}_${Math.floor(Math.random()*100000)}`

let bluesSongs = [
    { title:"The Thrill Is Gone", artist:"B.B. King", sales:0 },
    { title:"Hoochie Coochie Man", artist:"Muddy Waters", sales:0 },
    { title:"Slow Blues", artist:"Buddy Guy", sales:0 },
    { title:"Cross Road Blues", artist:"Robert Johnson", sales:0 },
    { title:"Boom Boom", artist:"John Lee Hooker", sales:0 },
    { title:"Got My Mojo Working", artist:"Muddy Waters", sales:0 },
    { title:"The Red Rooster", artist:"Howlin' Wolf", sales:0 },
    { title:"Pride and Joy", artist:"Stevie Ray Vaughan", sales:0 },
    { title:"Id Rather Go Blind", artist:"Etta James", sales:0 },
    { title:"Smokestack Lightnin", artist:"Howlin' Wolf",sales:0 }
]

// Add unique ID to each song.
bluesSongs = bluesSongs.map( song => ({...song, id:makeKey(song)}))
  
export {bluesSongs}