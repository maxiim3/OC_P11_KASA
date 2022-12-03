import React, {ReactElement} from "react"
import {IPath} from "../Interfaces/IPath"

/**
 * # Path Models
 * @description Create a Path Object
 * @implements IPath
 * @requires IPath
 * @see IPath
 */
export class PathModel implements IPath {
	private readonly _path: string
	private readonly _title: string
	private readonly _label: string
	private readonly _component: React.ReactNode

	/**
	 * ## PathModel Constructor
	 * @constructor
	 * @param {string} path
	 * @param {string} title
	 * @param {string} label
	 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} component
	 */
	constructor({path, title, label, component}: IPath) {
		this._path = path
		this._title = title
		this._label = label
		this._component = component
	}

	get path(): string {
		return this._path
	}

	get title(): string {
		return this._title
	}

	get label(): string {
		return this._label
	}

	get component(): React.ReactNode {
		return this._component
	}
}
