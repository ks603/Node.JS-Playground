const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  // Solution 1
  // get everything ready and sends it over all at once
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.group(err)
  //   res.end(data)
  // })

  // Solution 2: Streams
  // streams it in pieces ratehr than sending all at once
  const readable = fs.createReadStream('testt-file.txt')
  readable.on('data', (chunk) => {
    res.write(chunk)
  })
  readable.on('end', () => {
    res.end()
  })
  readable.on('error', (err) => {
    console.log(err)
    res.statusCode = 500
    res.end('File not found!')
  })
})

server.listen(8000, '127.0.0.1', () => {
  console.log('waiting for requst')
})
