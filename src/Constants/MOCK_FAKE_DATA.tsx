import {ILogement} from "../Interfaces/ILogement"

export const MOCK_FAKE_DATA: ILogement = {
	id: "fakeId",
	title: "Appart Test",
	cover: "https://fake-link",
	pictures: ["https://fake-link"],
	description: "Cette donnee n'existe pas",
	host: {
		name: "Somebody Someone",
		picture: "https://fake-link",
	},
	rating: "2",
	location: "Nowhere - Earth",
	equipments: ["Aucun Équipements.."],
	tags: ["Fake Data", "Test Error"],
}