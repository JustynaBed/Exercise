fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countries => {
        getPolandNeighbors = countries.filter(function(contry) {
            return contry.borders.includes('POL');
        });

        getInfo = getPolandNeighbors.reduce(function (acc, next) {
            return Object.assign(acc, {
                [next.name.toUpperCase()]: {
                    asMoreThanFourNeighbors: next.borders.length > 4 ? 'YES' : 'NO',
                    population: next.population,
                    area: Math.floor(next.area) + ' KM2'
                }});
            }, {}
        );
       }
    );
