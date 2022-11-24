import React from "react"
import {IPath} from "../Interface/IPath"

export class PathModel {
	private readonly _path: string
	private readonly _title: string
	private readonly _label: string
	private readonly _component: React.ReactNode

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