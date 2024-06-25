function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Fetched Data";
            resolve(data);
        }, 2000);
    });
}

fetchData().then((data) => {
    console.log("Processing", data);
}).catch(error => {
    console.log('Error', error);
}).finally(() => {
    console.log('Operation completed');
});