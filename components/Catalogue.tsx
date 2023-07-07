import React from 'react';

import { SearchBar, CustomFilter, CarCard } from '@/components';
import { ICar } from '@/types';

const Catalogue = ({ data }: {data: ICar[]}) => {

	const isCarsEmpty = !Array.isArray(data) || data.length < 1 || !data;

	return (
		<>
			<div className='home__text-container'>
				<h1 className='text-4xl font-extrabold'>Liste des véhicules</h1>
				<p>
					{/* Explore the cars you might like */}
					Explorez les véhicules que vous pourriez aimer
				</p>
			</div>
      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>

      </div>
				{!isCarsEmpty ? (
					<section>
						<div className='home__cars-wrapper'>
							{data.map((car) => <CarCard car={car} />)}
						</div>
					</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-black text-xl font-bold'>Ooops, il n'y a rien à montrer ici</h2>
					</div>
				)}
		</>
	);
};

export default Catalogue;
