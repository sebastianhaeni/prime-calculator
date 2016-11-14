const config = require('./config');

$('#check-form').submit(() => {
    var candidate = $('[name=prime-number-candidate]').val();
    if (!candidate) {
        alert('Please insert a number, com\'on.');
        return;
    }

    $('#result').text('computing...');

    fetch(config.API + candidate)
        .then(response => response.json())
        .then(json => {
            $('#result').text(json.result);
        });

    return false;
});
