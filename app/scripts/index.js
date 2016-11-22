const config = require('./config');

let results = [];
$('[name=prime-number-candidate]').val(getRandom());
let i = 0;

$('#check-form').submit(() => {
    let candidate = $('[name=prime-number-candidate]').val();
    $('[name=prime-number-candidate]').val(getRandom());
    if (!candidate) {
        alert('Please insert a number, com\'on.');
        return;
    }

    results.push({n: candidate, number: 'computing...', i: ++i});
    let index = i;
    render();

    fetch(config.API + candidate)
        .then(response => response.json())
        .then(json => {
            results = results.filter(result => result.n != candidate);
            results.push({n: candidate, number: json.result, i: index});
            render();
        });

    return false;
});

function render() {
    $('#result').html('');
    results.sort((a, b) => a.i - b.i);
    let max = Math.max.apply(null, results.map(result => result.i));
    results.filter(result => result.i > max - 10).forEach(result => {
        $('#result').append(`<span class="nth">Prime ${result.n}:</span><span class="number">${result.number}</span><br>`);
    });
}

function getRandom() {
    return Math.floor((Math.random() * 100000) + 1);
}