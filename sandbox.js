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
const getTodos = (callback) => {
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
  request.open('GET', 'todos.json');
  request.send();
};

console.log(1);
console.log(2);

// This is Asynchronous code which is started now & will end up later
getTodos((err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
