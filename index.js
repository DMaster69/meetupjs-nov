const addToArrayCallback = require('./methods/callback');
const addToArrayPromise = require('./methods/promise');

const method = process.argv[2];

let array = [1,2,3];

// Callback hell
const callCallback = () => {
    addToArrayCallback(4, array, err => {
        if (err) return console.log(err.message)
        console.log(array)
        addToArrayCallback(5, array, err => {
            if (err) return console.log(err.message)
            console.log(array)
            addToArrayCallback(6, array, err => {
                if (err) return console.log(err.message)
                console.log(array)
                addToArrayCallback(7, array, err => {
                    if (err) return console.log(err.message)
                    console.log(array)
                })
            })
        })
    })
}
//Promise
const callPromise = () => {
    addToArrayPromise(4, array)
        .then(() => { console.log(array); return addToArrayPromise(5, array) })
        .then(() => { console.log(array); return addToArrayPromise(6, array) })
        .then(() => { console.log(array); return addToArrayPromise(7, array) })
        .then(() => { console.log(array) })
        .catch(err => console.log(err.message))
}

const callAsync = () => {
    async function processData (data, array) {
        try {
          const result = await addToArrayPromise(data, array);
          console.log(array);
        } catch (err) {
          return console.log(err.message);
        }
      }
      
      processData(4, array);
      processData(5, array);
      processData(6, array);
      processData(7, array);
}

switch (method) {
    case 'callback':
        callCallback();
        break;
    case 'promise':
        callPromise();
        break;
    case 'async':
        callAsync();
        break;
    default:
        console.log('method handler not defined');
        break;
}