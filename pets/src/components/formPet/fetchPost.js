const addNewEntry = (name='', breed='', owner='', checkIn='', symptoms='', diagnosis='TBD', checkOut='TBD') => {

    var url = 'https://react-test-22eeb.firebaseio.com/pets.json';

    var data = {name,breed,owner,checkIn,symptoms,diagnosis,checkOut}
    
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