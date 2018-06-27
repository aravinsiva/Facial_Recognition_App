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
                  'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxODAxNTQ0MjA1/mother-teresa-9504160-1-402.jpg';
                  
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
                               let jsonResponse = JSON.parse(body);
                               console.log('Analysis Of Picture:\n');
                               
                               console.log("The sex of the individual is: "+jsonResponse[0].faceAttributes.gender+"\n\n");
                               
                               console.log("The age of the individual:"+jsonResponse[0].faceAttributes.age+"\n\n");
                               
                               if (!(jsonResponse[0].faceAttributes.eyeMakeup))
                               console.log("The person is not wearing makeup\n\n");
                               
                               else{
                               console.log("This person is wearing makeup\n\n");
                               }
                               
                               console.log("Percent of facail hair that is Moustache:"+jsonResponse[0].faceAttributes.facialHair.moustache*100+"%\n");
                               
                               console.log("Percent of facial hair that is a beard:"+jsonResponse[0].faceAttributes.facialHair.beard*100+"%\n");
                               
                               console.log("Percent of facial hair that is sideburns:"+jsonResponse[0].faceAttributes.facialHair.sideburns*100+"%\n\n");
                               
                               console.log("Percent of emotion that is anger:"+jsonResponse[0].faceAttributes.emotion.anger*100+"%\n");
                               
                               console.log("Percent of emotion that is contempt:"+jsonResponse[0].faceAttributes.emotion.contempt*100+"%\n");
                               
                               console.log("Percent of emotion that is disgust:"+jsonResponse[0].faceAttributes.emotion.disgust*100+"%\n");
                               
                               console.log("Percent of emotion that is fear:"+jsonResponse[0].faceAttributes.emotion.fear*100+"%\n");
                               
                               console.log("Percent of emotion that is happiness:"+jsonResponse[0].faceAttributes.emotion.happiness*100+"%\n");
                               
                               
                               console.log("Percent of emotion that is neutral:"+jsonResponse[0].faceAttributes.emotion.neutral*100+"%\n");
                               
                               
                               console.log("Percent of emotion that is sadness:"+jsonResponse[0].faceAttributes.emotion.sadness*100+"%\n");
                               
                               console.log("Percent of emotion that is surprise:"+jsonResponse[0].faceAttributes.emotion.surprise*100+"%\n");
                               
                               
                               var html = buildHtml(req);
                               
                               res.writeHead(200, {
                                             'Content-Type': 'text/html',
                                             'Content-Length': html.length,
                                             'Expires': new Date().toUTCString()
                                             });
                               res.end(html);
                               
                               
                               
                               function buildHtml(req) {
                               var header = 'FACIAL ANALYSIS';
                               
                               var body = "The sex of the individual is: "+jsonResponse[0].faceAttributes.gender+"\n\n";
                               
                               var body2="Percent of facail hair that is Moustache:"+jsonResponse[0].faceAttributes.facialHair.moustache*100+"%\n";
                               
                               var body3="Percent of facial hair that is a beard:"+jsonResponse[0].faceAttributes.facialHair.beard*100+"%\n";
                               
                               var body4="Percent of facial hair that is sideburns:"+jsonResponse[0].faceAttributes.facialHair.sideburns*100+"%\n\n";
                               
                               var body5="Percent of emotion that is anger:"+jsonResponse[0].faceAttributes.emotion.anger*100+"%\n";
                               
                               var body6="Percent of emotion that is contempt:"+jsonResponse[0].faceAttributes.emotion.contempt*100+"%\n";
                               
                               var body7="Percent of emotion that is disgust:"+jsonResponse[0].faceAttributes.emotion.disgust*100+"%\n";
                               
                               var body8="Percent of emotion that is fear:"+jsonResponse[0].faceAttributes.emotion.fear*100+"%\n";
                               
                               var body9="Percent of emotion that is happiness:"+jsonResponse[0].faceAttributes.emotion.happiness*100+"%\n";
                               
                               
                               var body10="Percent of emotion that is neutral:"+jsonResponse[0].faceAttributes.emotion.neutral*100+"%\n";
                               
                               
                               var body11="Percent of emotion that is sadness:"+jsonResponse[0].faceAttributes.emotion.sadness*100+"%\n";
                               
                               var body12="Percent of emotion that is surprise:"+jsonResponse[0].faceAttributes.emotion.surprise*100+"%\n";
                               
                               
                               var body13="The age of the individual:"+jsonResponse[0].faceAttributes.age+"\n\n";
                               
                               

                               
                               
                               
                               
                               // concatenate header string
                               // concatenate body string
                               
                               return '<!DOCTYPE html>'
                               + '<html><header>' + header+'<br /><br /><br />' + '</header><body>' + body    +'<br />'+'<br />'+ body2 +'<br />'+ body3+'<br />'+body4+'<br /><br />'+body5+'<br />'+body6+'<br />'+body7+'<br />'+body8+'<br />'+body9+'<br />'+body10+'<br />'+body11+'<br />'+body12+'<br /><br />'+body13+'<br />'+'</body></html>';
                               };
                               
                               
              
                               });
                  
                  
                  
                  }).listen(8080);





    
                  
                  

