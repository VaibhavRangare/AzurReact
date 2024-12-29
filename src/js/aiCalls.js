import { uploadFiletoAIServer_url } from './settings'

export async function getResponseFromAIBackend(query) {
  console.log("query: "+ query)
  
  let AI_URL = "http://localhost:9081/askai"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    query: query
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
  console.log('AI Response1', res)
   
   //let res = {
   // 'airesponse':'Response from AI'
  // }
  return res
}

export async function getLChainResponseFromAIBackend(query) {
  console.log("query: "+ query)
  let x = await fe_getspFromAIBackend(query)

  //console.log("x: "+ x)
  //let x = ["What is AI?","Prepare Email for What is AI?","In this case, the subject is \"What is AI?\" and the predicate is \"Prepare Email for What is AI?\"."]
  
  console.log("x: "+ x['apiresponse'])
  console.log("x: "+ x['apiresponse'][0])
  console.log("x: "+ x['apiresponse'][1])
  
  //return x
  
  let AI_URL = "http://localhost:9081/asklchainai"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    'query': x['apiresponse'][0],
    'instructions':'',
    //'req':x['apiresponse'][1]
    'req':query
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
  console.log('AI Response1', res)
   
   //let res = {
   // 'airesponse':'Response from AI'
  // }
  return res
}


export async function getCGResponseFromAIBackend(query) {
  console.log("query: "+ query)
  let x = await fe_getspFromAIBackend(query)

  //console.log("x: "+ x)
  //let x = ["What is AI?","Prepare Email for What is AI?","In this case, the subject is \"What is AI?\" and the predicate is \"Prepare Email for What is AI?\"."]
  
  console.log("x: "+ x['apiresponse'])
  console.log("x: "+ x['apiresponse'][0])
  console.log("x: "+ x['apiresponse'][1])
  
  //return x
  
  let AI_URL = "http://localhost:9081/generatecontent"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    'query': x['apiresponse'][0],
    'instructions':'',
    //'req':x['apiresponse'][1]
    'req':query
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
  console.log('AI Response1', res)
   
   //let res = {
   // 'airesponse':'Response from AI'
  // }
  return res
}



export async function getCGResponseForDB(query,doc) {
  console.log("query: "+ query)
  console.log("doc: "+ doc)
  
  
  let AI_URL = "http://localhost:9081/generatecontent"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    'query': query,
    'instructions':'',
    //'req':x['apiresponse'][1]
    'req':doc
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
  console.log('AI Response1', res)
   
   //let res = {
   // 'airesponse':'Response from AI'
  // }
  return res
}

export async function fe_getspFromAIBackend(query) {
  console.log("query: "+ query)
  
  
  let AI_URL = "http://localhost:9081/getsp"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    'query': query
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
  console.log('AI Response1', res)
   
   //let res = {
   // 'airesponse':'Response from AI'
  // }
  return res
}

export async function fe_getMilvusCollection() {
  let AI_URL = "http://localhost:9081/listMilvusCollections"
  
  console.log("AI_URL: "+ AI_URL)
  let l_headers = {'Content-Type': 'application/json'};
  
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers
  })
  res = await res.json()
   console.log('AI Response', res)
   
   
  return res
}


export async function fe_getMilvusIds() {
  let AI_URL = "http://localhost:9081/getAllIds"
  
  console.log("AI_URL: "+ AI_URL)
  let l_headers = {'Content-Type': 'application/json'};
  
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers
  })
  res = await res.json()
   console.log('AI Response123', res)
   
   
  return res
}




export async function fe_getContent(query,req) {
  
  let AI_URL = "http://localhost:9081/generatecontent"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    query: query,
    req:req
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   console.log('AI Response', res)
   
   //let res = {
   // 'airesponse':'Email from AI'
   //}
  return res
}


export async function fe_sendEmail(email_body, type) {
  
  let AI_URL = "http://localhost:9081/snedEmail"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    'email_body': email_body,
    'type':type
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   console.log('AI Response', res)
   
   //let res = {
   // 'airesponse':'Email from AI'
   //}
  return res
}


export async function getEmail(query) {
  /*
  let AI_URL = "http://localhost:9081/getAIResponse"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    query: query
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   console.log('AI Response', res)
   */
   let res = {
    'airesponse':'Email from AI'
   }
  return res
}


export async function getSummary(query) {
  /*
  let AI_URL = "http://localhost:9081/getAIResponse"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    query: query
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   console.log('AI Response', res)
   */
   let res = {
    'airesponse':'Summary from AI'
   }
  return res
}

export async function getSentiment(query) {
  /*
  let AI_URL = "http://localhost:9081/getAIResponse"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    query: query
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   console.log('AI Response', res)
   */
   let res = {
    'airesponse':'Sentiment from AI'
   }
  return res
}


export async function submitQA(q,a) {
  
  let AI_URL = "http://localhost:9081/insertqa"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    'question': q,
    'answer':a
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   console.log('AI Response', res)
  
  return res
}




export async function fe_getContentFromID(id) {
  
  let AI_URL = "http://localhost:9081/getContentFromID"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    'id': id
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   console.log('AI Response', res)
  
  return res
}



export async function getDocumentsFromAIServer(q,a) {
  
  let AI_URL = "http://localhost:9081/getDocumentsFromAIServer"
  let l_headers = {'Content-Type': 'application/json'};
  
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers    
  })
  res = await res.json()
   console.log('AI Response', res)
  
  return res
}


export async function uploadDoctoMilusDB(doc) {

  let AI_URL = "http://localhost:9081/uploadDocToMilvusDB"
  let l_headers = {'Content-Type': 'application/json'};
    let obj = {
    'doc': doc
  }
  
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   console.log('AI Response', res)
  
  return res

}

export async function uploadFiletoAIServer(file) {
  
  console.log("reqObj11: "+ file.name)
  console.log("reqObj11: "+ file.name)
  /*
  let reqObj = {    
    'file': file
  };
  */
    
  console.log("uploadFiletoAIServer_url: "+ uploadFiletoAIServer_url)
  //var input = document.querySelector('input[type="file"]')
  //var data = new FormData()
  //data.append('file', input.files[0])
  
 //const fileInput = document.getElementById('myFile');
 //console.log("File DDDD: "+ file[0].name)
 //console.log("File DDDD: "+ file[0].path)
 //console.log("File DDDD: "+ file[0].location)
 //console.log("File DDDD: "+ file[0].url)
 //console.log("File DDDD: "+ file[0].mozFullPath)
 
 const form = new FormData();
 //form.append('file', file[0]);
 form.append('file', file);
 //const myArray = Object.values(form); 
 //console.log("File form OOOOOOOOOO: "+ form)
 //console.log("File form OOOOOOOOOO: "+ myArray)
 //const files = document.getElementById('testinput1');
 //console.log("File length XXXXXXXXXXXX: "+ files)
 //for (let i = 0; i < files.length; i++) {
//  console.log("File XXXXXXX: "+ files[i])
//  console.log("File XXXXXXXXXXXX: "+ files[i].name)
// }
  
  //console.log("ai_headers1: "+ JSON.stringify(ai_headers))
  //let access_token = localStorage.getItem('token');
  //let userdata = localStorage.getItem('userdata');
  //console.log("userdata1: "+ JSON.stringify(userdata))
  //let l_headers = { 'Authorization': 'Bearer '+userdata};
  //console.log("l_headers: "+ JSON.stringify(l_headers))
  let res = await fetch(uploadFiletoAIServer_url, {
    method: 'POST',
    //headers: l_headers,
    cache: 'no-cache',    
    body: form
  });  
  res = await res.json()
  return res
}



export async function fe_getRestApiResponse(message) {
  
  //let AI_URL = "http://localhost:9081/generatecontent"
  //let AI_URL = "http://13.201.223.42/pyapp/sendApiResponse"
  let AI_URL = "https://260s4ct2wh.execute-api.ap-south-1.amazonaws.com/fe1/njapp/sendApiResponse"
  let l_headers = {'Content-Type': 'application/json'};
  let obj = {
    'message': message
  }
  let res = await fetch(AI_URL, {
    method:'POST',
    headers: l_headers,
    body: JSON.stringify(obj)
  })
  res = await res.json()
   //console.log('AI Response', res)
   
   //let res = {
   // 'airesponse':'Email from AI'
   //}
  return res
}