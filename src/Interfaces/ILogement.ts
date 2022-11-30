import {IHost} from "./IHost"

/**
 * # Logement Object Interfaces
 * @interface
 * @description Data from API. Logement Interfaces
 * @requires IHost
 * @property id string
 * @property title string
 * @property cover string
 * @property pictures string[]
 * @property description string
 * @property host IHost
 * @property rating string
 * @property location string
 * @property equipments string[]
 * @property tags string[]
 */
export interface ILogement {
	id: string
	title: string
	cover: string
	pictures: string[]
	description: string
	host: IHost
	rating: string
	location: string
	equipments: string[]
	tags: string[]
}
