let data = [
	{
		id: 1,
		fecha: 'Monday 10th',
		hora: '2:28',
		diaNoche: 'PM',
		ciudadOrigen: 'Houston, TX, 33619',
		ciudadDestino: 'Atlanta, GA, 30123',
		precio: 250.00
	},
	{
		id: 2,
		fecha: 'friday 10th',
		hora: '2:28',
		diaNoche: 'PM',
		ciudadOrigen: 'Villeta, VL, 23444',
		ciudadDestino: 'Manizales, MZ, 211444',
		precio: 140.00
	},
	{
		id: 3,
		fecha: 'Monday 10th',
		hora: '2:28',
		diaNoche: 'PM',
		ciudadOrigen: 'Medellin, MD, 48488',
		ciudadDestino: 'Bucaramanga, BC, 97766',
		precio: 850.00
	},
	{
		id: 4,
		fecha: 'saturday 10th',
		hora: '2:28',
		diaNoche: 'PM',
		ciudadOrigen: 'Paris, PR, 14422',
		ciudadDestino: 'Barcelona, BC, 90120',
		precio: 1000.00
	},
	{
		id: 5,
		fecha: 'thusday 10th',
		hora: '2:28',
		diaNoche: 'PM',
		ciudadOrigen: 'London, LD, 53766',
		ciudadDestino: 'Belfast, BF, 66555',
		precio: 325.00
	}
];

export function getData() {
    return data;
}

export function getDataById(id) {
    return data.find(element => element.id == id);
}

export function updateData(updating) {
    const indexToUpdate = data.findIndex(element => element.id == updating.id);
    data[indexToUpdate] = updating;
}

export function deleteData(id) {
    const indexToDelete = data.findIndex(element => element.id == id);
    data.splice(indexToDelete, 1);
}

export function addData(elemento) {
    const ids = data.map(row => row.id);
    data.push({
        id: Math.max(...ids) + 1,
        ...elemento
    });
}