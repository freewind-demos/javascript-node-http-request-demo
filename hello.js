const http = require('http')

const options = {
    host: 'stackoverflow.com',
    path: '/'
}

const request = http.request(options, function (res) {
    let data = ''
    res.on('data', function (chunk) {
        data += chunk
    })
    res.on('end', function () {
        console.log(data)
    })
})

request.on('error', function (e) {
    console.log(e.message)
})

request.end()