import { MouseEventHandler } from 'react';

export interface ICustomBtnProps {
	title: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	containerStyles?: string;
	textStyles?: string;
	btnType?: 'button' | 'submit';
	rightIcon?: string;
	isDisabled?: boolean;
}

export interface ICustomFilterProps {
	title: 'fuel' | 'year';
}

export interface ISearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}

export interface ICar {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export interface ICarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: ICar;
}

export interface IFilterProps {
	manufacturer: string;
	year: number;
	fuel: string;
	limit: number;
	model: string;
}