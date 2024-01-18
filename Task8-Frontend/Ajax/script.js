function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Registration done');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
