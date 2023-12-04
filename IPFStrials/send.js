const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK({ pinataJWTKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjNWNlYWE0Mi02NjliLTQwODgtYjk1NS02N2IwNTAxN2Q1Y2YiLCJlbWFpbCI6ImFudXJhZ2U2NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYWMwMzczMzYxMTY5ODNjNzIxNDMiLCJzY29wZWRLZXlTZWNyZXQiOiI4ZDQ3Yzc1OTBkOTcwMjg0MjBiMzEzMTcwMWU3MjZhNDliNmE5MWZkOGEzOTQ0YjM3NmJlMmFjZWMzM2MxZmIyIiwiaWF0IjoxNzAxNDYwNTQ0fQ.OwqCebwFJs-c18Q3-kyNjTob9tcND0FSWDFBjfPdPN0'});

const options = {
  pinataMetadata: {
      name: "helloworld",
      keyvalues: {
          customKey: 'customValue',
          customKey2: 'customValue2'
      }
  },
  pinataOptions: {
      cidVersion: 1
  }
};

const pinToIpfs = async() =>{
  const stream = fs.createReadStream('./1.png');
  const res = await pinata.pinFileToIPFS(stream, options);
  console.log("success");
}

pinToIpfs();
