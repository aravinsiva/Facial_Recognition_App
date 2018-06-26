var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
                  
                  
                  
                  'use strict';
                  
                  var request = require('request');
                  
                  // Replace <Subscription Key> with your valid subscription key.
                  const subscriptionKey = '83ce0c13a5bf47e1aad6f7d679282858';
                  
                  // You must use the same location in your REST call as you used to get your
                  // subscription keys. For example, if you got your subscription keys from
                  // westus, replace "westcentralus" in the URL below with "westus".
                  const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
                  
                  const imageUrl =
                  'https://upload.wikimedia.org/wikipedia/commons/b/b2/LeBron_James_%2815662939969%29.jpg';
                  
                  // Request parameters.
                  const params = {
                  'returnFaceId': 'true',
                  'returnFaceLandmarks': 'false',
                  'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
                  'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
                  };
                  
                  const options = {
                  uri: uriBase,
                  qs: params,
                  body: '{"url": ' + '"' + imageUrl + '"}',
                  headers: {
                  'Content-Type': 'application/json',
                  'Ocp-Apim-Subscription-Key' : subscriptionKey
                  }
                  };
                  
                  request.post(options, (error, response, body) => {
                               if (error) {
                               console.log('Error: ', error);
                               return;
                               }
                               let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
                               console.log('JSON Response\n');
                               console.log(jsonResponse);
                               
                               
                               
                          
                               
                               });
                  
                  
                  
                  
                  
                  
                  }).listen(8080);

    
                  
                  

