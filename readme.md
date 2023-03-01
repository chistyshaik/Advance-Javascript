### FETCH API
- The word **fetch** is used to get data over the network for http requests.

- **fetch** will always return a promise
```javascript
    fetch("url");   //returns promise
```
- we can assign fetch to a **variable**
```javascript
    const api = fetch("url");  
```

```javascript
// syntax of fetch 

fetch("url")
    .then((response) => {})
    .catch((error) => {});
```
```javascript
// syntax of fetch 

let api = fetch("https://crud-products-z7th.onrender.com/") 
    api.then((value1) => {
        return value1.json()  //here value1 is response object
    }).then((value2) => {
        console.log(value2)
    })
    .catch((error)=>{
        console.log(error)
    });
    
    
```

### .then( )

- the function which was passed in .then() as an argument only executes and returns on successful completion of code execution.

- the function in .then() always has a response object.

- we can create promise chaining with .then()

### .catch( )
- the error will be tracked in .catch()

- the function in .catch() always has a error object.



