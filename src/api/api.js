import axios from 'axios'
let url = 'https://tech-stack-server.herokuapp.com/apartments'

export const getApartments = async (price = '', rooms = 0) => {
	try {
		const res = await axios.get(url + `?price=${price}&rooms=${rooms}`)
		return res.data;

	} catch (error) {
		console.log(error);
	}
}

export const postApartments = async (title, rooms, price, description = '') => {
	try {
		const res = await axios.post(url, {
			"title": title,
			"price": price,
			"rooms": rooms,
			"description": description
		})
		return res.data;

	} catch (error) {
		console.log(error);
	}
}
export const deleteApartment = async (id) => {
	try {
		const res = await axios.delete(url + '/' + id)
		return res.data;
	} catch (error) {
		console.log(error);

	}
}