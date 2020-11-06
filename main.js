const fs = require('fs')

fs.readFile('./app.config', 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log(data)
})