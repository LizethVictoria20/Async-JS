const somethingWillHappend = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    }
    else {
      reject('Oops!')
    }
  })
}

somethingWillHappend()
  .then(response => console.log(response))
  .catch(error => console.log(error))


const somethingWillHappend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True')
      }, 2000)
    }
    else {
      const error = new Error('Opps2!')
      reject(error)
    }
  })
}

somethingWillHappend2()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))



Promise.all([somethingWillHappend(), somethingWillHappend2()])
  .then(response => {
    console.log('Array of results', response)
  })
  .catch(error => {
    console.log(error)
  })