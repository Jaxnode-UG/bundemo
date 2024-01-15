// Bun file reader is a simple way to read files from the file system
const airports = Bun.file('airports.dat'); 
console.log(`Size: ${airports.size}, type: ${airports.type}`); // number of bytes and mimetype

// Bun.file returns a promise, so we need to use await
const airporttext = await airports
    .text();

const airportArray = airporttext
    .trim()
    .split('\n')
    .map(line => line.split(','));

const airportObjectArray = airportArray.map(line => {
    const airportObject = {
        id: line[0],
        name: line[1].replace(/"/g, ''),
        city: line[2].replace(/"/g, ''),
        country: line[3].replace(/"/g, ''),
        iata: line[4].replace(/"/g, ''),
        icao: line[5].replace(/"/g, ''),
        latitude: line[6].replace(/"/g, ''),
        longitude: line[7].replace(/"/g, ''),
        altitude: line[8].replace(/"/g, ''),
        timezone: line[9].replace(/"/g, ''),
        dst: line[10].replace(/"/g, ''),
        tzDatabase: line[11].replace(/"/g, ''),
        type: line[12].replace(/"/g, ''),
        source: line[13].replace(/"/g, '')
    };
    return airportObject;
});

const crgAirport = airportObjectArray.find(airport => airport.icao === 'KCRG'); //KHBI
console.log(crgAirport);

// console.log(airportArray[3]);

