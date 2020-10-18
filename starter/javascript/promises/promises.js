 
// Create a promise that is unpredictable in 2 ways: time and outcome.

 const create = s => {

     return new Promise((resolve,reject) => {

        const config = {
            outcome : Math.random() > 0.5,
            time : Math.floor(Math.random() * 1000)
        }
    
        const fn = () => {
            console.log(s,config.time);
            config.outcome ? resolve(s) : reject(s);
        }

        setTimeout(fn, config.time);
     })
 }
 