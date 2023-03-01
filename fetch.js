let p = fetch("https://crud-products-z7th.onrender.com/")
    p.then((value1) => {
        return value1.json()
    }).then((value2) => {
        console.log(value2)
    });