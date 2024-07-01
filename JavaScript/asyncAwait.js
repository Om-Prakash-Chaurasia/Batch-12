function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const data = 'Fetched Data';
            res(data);
        }, 3000);
    })
}

async function processData() {
    try {
        const data = await fetchData();
        console.log('Processing: ', data);
    } catch (error) {
        console.log('Error: ', error);
    } finally {
        console.log('Operation completed');
    }
}

processData();