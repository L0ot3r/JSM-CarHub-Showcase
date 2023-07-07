import { ICar } from '@/types';
import { IFilterProps } from '@/types';

export async function getCars(filters: IFilterProps) {

	const { manufacturer, year, fuel, limit, model } = filters;

	const headers = {
		'X-RapidAPI-Key': '5877955de5mshda765927c870fe1p1e0160jsn8cb1c5422786',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};
	const response = await fetch(
		`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}&model=${model}`,
		{
			headers: headers,
		}
	);

	const result = await response.json();

	return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Prix de base par jour
	const MileageFactor = 0.1; // Prix en fonction de la consommation

	const ageFactor = 0.05; // Prix en fonction de l'année du véhicule

	// Calcul du prix de la location par jour en fonction de la consommation, de l'année et du prix de base
	const mileageRate = city_mpg * MileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calcul du prix de la location par jour
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0); // On arrondi le prix à l'entier le plus proche
};

export const generateCarImageUrl = (car: ICar, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getImage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'copyright-imaginstudio');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
	if (angle) {
		url.searchParams.append('angle', `${angle}`);
	}

  return `${url}`;
};
