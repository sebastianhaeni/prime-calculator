const config = require('./config');

let results = [];
$('[name=prime-number-candidate]').val(getRandom());
let i = 0;

$('#check-form').submit(() => {
    let input = $('[name=prime-number-candidate]');
    let candidate = input.val();
    input.val(getRandom());
    if (!candidate) {
        alert('Please insert a number, com\'on.');
        return;
    }

    results.push({n: candidate, number: 'computing...', i: ++i});
    let index = i;
    render();
    compute(candidate, index);

    return false;
});

function compute(candidate, index) {
    fetch(config.API + candidate)
        .then(response => response.json())
        .then(json => {
            results = results.filter(result => result.n != candidate);
            results.push({n: candidate, number: json.result, i: index, server: json.server});
            render();
        })
        .catch(() => compute(candidate, index));
}

function render() {
    $('#result').html('');
    results.sort((a, b) => a.i - b.i);
    let max = Math.max.apply(null, results.map(result => result.i));
    results.filter(result => result.i > max - 10).forEach(result => {
        let str = `<span class="nth">Prime ${result.n}:</span>`;
        str += `<span class="number">${result.number}</span>`;
        str += `<span class="server">${result.server || ''}</span>`;
        str += `<br>`;
        $('#result').append(str);
    });
}

function getRandom() {
    return Math.floor((Math.random() * 100000) + 1);
}