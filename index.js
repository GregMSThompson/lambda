const https = require("https");

exports.handler = async (event) => {
    var result = '';

    return new Promise((resolve, reject) => {
        const options = {
            host: 'api.nasa.gov',
            path: '/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=LrGt91Cceg0uBPp1ioaSbAbc4b8D08uPB81dQRfZ',
            port: 443,
            method: 'GET'
        }

        https.request(options, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                result += chunk;
            });
            res.on('end', () => {
                console.log(result);
                var data = JSON.parse(result)
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({earth_engine_url: data['url']}),
                });
            });
            res.on('error', (e) => {
                console.error(`problem with request: ${e.message}`);
                reject({
                    statusCode: 500,
                    body: JSON.stringify(e.message),
                });
            });
        }).end();
    });
}
