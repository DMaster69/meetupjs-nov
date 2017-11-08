const addToArrayCallback = (data, array, callback) => {
    if (!array) {
      callback(new Error('No existe el array'), null)
    } else {
      setTimeout(() => {
        array.push(data)
        callback(null, array)
      }, 1000)
    }
}

module.exports = addToArrayCallback