// === HTTP Requests
/*const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request, request.responseText);
    } else if(request.readyState === 4){
        console.log('Could not fetch data');
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();*/

// === Callback Functions
/*const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // === Using JSON Data
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
      //callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });

  //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  //request.open('GET', 'todos.json');
  request.open('GET', resource)
  request.send();
};


// This is Asynchronous code which is started now & will end up later

getTodos((err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

// === Callback Hell ===
getTodos('todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/shaun.json', (err, data) => {
      console.log(data);
    });
  });
});*/

// === Promises ===
/*const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });

    request.open("GET", resource);
    request.send();
  });
};*/

// === Chaining Promises ===
/*getTodos('todos/luigi.json').then(data => {
  console.log('promise 1 resolved:', data);
  return getTodos('todos/mario.json');
}).then(data => {
  console.log('promise 2 resolved:', data);
  return getTodos('todos/shaun.json');
}).then(data => {
  console.log('promise 3 resolved:', data);
}).catch((err) => {
  console.log('promise rejected:', err);
});*/


// === Fetch api ===
//It is use when we make network requests it will not reject request it will show resolved on console but in status it will show 404
/*fetch('todos/luigi.json').then((response) => {
  console.log('resolved', response);
  return response.json(); //we will take response to json which will return promise after fetching data 
}).then(data => {
  console.log(data);
}).catch((err) => {
  console.log('rejected', err);
});*/


// === Async & await ===
const getTodos = async () => {
  const response =  await fetch('todos/luigi.json');

  if(response.status !== 200){
    throw new Error('cannot fetch the data');
  }

  const data =  await response.json();

  return data;

};

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));
