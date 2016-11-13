const config = require('./config');

$('#check-form').submit(() => {
    var candidate = $('[name=prime-number-candidate]').val();
    if(!candidate){
        alert('Please insert a number, com\'on.');
        return;
    }
    fetch(config.API + candidate)
        .then(response => response.json())
        .then(json => {
            $('#result').text(json.result
                ? 'Yes, it\'s a prime number :)'
                : 'No, sadly it\'s not a prime number :('
            );
        });

    return false;
});
