var express = require('express');
var router = express.Router();
var config = require('config');
var _ = require('underscore');
var digestRequest = require("request-digest")(config.httpDigestAuth.user, config.httpDigestAuth.password);

/* GET home page. */
router.get('/opcounter', function(req, res, next) {
    digestRequest.request({
        host: 'http://54.249.48.203',
        path: '/api/public/v1.0/groups/5823e8f1e4b07efb54b957f2/hosts/2a284201464cbf2ad1ce6c75f5f1c007/metrics/OPCOUNTERS_QUERY',
        port: 8080,
        method: 'GET'
    }, function (error, response, body) {
        if (error) {
            throw error;
        }
        var data = JSON.parse(body);
        var result = [];
        for (var i = 0; i < data.dataPoints.length; i++) {
            result.push([i, data.dataPoints[i].value]);
        }
        
        // console.log(body);
        res.status(response.statusCode).json(result);
    });
});

module.exports = router;
