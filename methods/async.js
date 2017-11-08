const addToArrayPromise = (data, array) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        array.push(data)
        resolve(array)
      }, 1000);
      
      if (!array) {
        reject(new Error('No existe un array'))
      }
    })
    
    return promise
}

module.exports = addToArrayPromise
