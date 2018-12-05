const deleteEntry = (elementToDelete) => {

    var url = `https://react-test-22eeb.firebaseio.com/pets/${elementToDelete}.json`;
    console.log(url);
    
    fetch(`${url}`,{method: 'DELETE'}).then(res => {
        console.log(res)
        window.location.reload()
    })

}

export default deleteEntry