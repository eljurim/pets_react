const addNewEntry = (obj) => {

    var url = 'https://react-test-22eeb.firebaseio.com/pets.json';
    var data = obj;

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));


}

export default addNewEntry