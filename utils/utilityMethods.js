const axios = require('axios');

function validateURL(url) {
    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url)) {
        return true;
    } else {
        return false;
    }
}

function absoluteUrl(url){
  const result = url.includes('://');
  if(result){
      return url;
  }else{
      return 'https://' + url;
  }
}


async function stringGenerator(){
    
const encodedParams = new URLSearchParams();
encodedParams.append("length", "8");
encodedParams.append("type", "alphanumeric");

const options = {
  method: 'POST',
  url: 'https://random-string-generator.p.rapidapi.com/randomstring',
  params: {length: '7', type: 'alphanumeric'},
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '02f9195aa2mshba83aa07a8d3f2bp1a18cejsn95c1ea4abdfd',
    'X-RapidAPI-Host': 'random-string-generator.p.rapidapi.com'
  },
  data: encodedParams
};

const response = await axios.request(options);

return response;

}


module.exports = {
    validateURL, stringGenerator,
    absoluteUrl
}


