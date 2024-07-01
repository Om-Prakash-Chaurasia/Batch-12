function fetchData(callback) {
    setTimeout(() => {
        const data = 'Fetched data';
        callback(data);
    }, 2000)
}

function processData(data) {
    console.log('Processing', data);
}

fetchData(processData);