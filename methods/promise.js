const addToArrayPromise = (data, array) => {
    const promise = new Promise((resolve, reject) => {
      if (!array) {
        reject(new Error('No existe un array'))
      }
      setTimeout(() => {
        array.push(data)
        resolve(array)
      }, 1000);
       
    })
    
    return promise
}

module.exports = addToArrayPromise
