;

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var aleatoria = randomDate(new Date(2012, 0, 1), new Date());

var display = document.getElementById('descpremios');
display.value = aleatoria;
