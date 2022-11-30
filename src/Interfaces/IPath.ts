import React from "react"

/**
 * @interface
 * # Path Object Interfaces
 * @description Paths for Routes and Navigation
 * @property path string
 * @property title string
 * @property label string
 * @property component React.ReactNode
 */
export interface IPath {
	path: string
	title: string
	label: string
	component: React.ReactNode
}