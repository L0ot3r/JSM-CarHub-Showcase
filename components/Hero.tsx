'use client';

import Image from 'next/image';

import { CustomButton } from '@/components';

const handleScroll = () => {
	// scroll vers discover
	const discover = document.getElementById('discover');
	discover!.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>
					{/* Find, book, or rent a car - quickly and easily! Traduit en français */}
					Trouvez, <br /> réservez ou louez une voiture - rapidement et
					facilement!
				</h1>

				<p className='hero__subtitle'>
					{/* Stremline your car rental experience with our effortless booking process. traduit en français */}
					Simplifiez votre expérience de location de voiture avec notre
					processus de réservation sans effort.
				</p>

				<CustomButton
					title='Voir les véhicules'
					btnType='button'
					containerStyles='bg-primary-blue text-white rounded-full mt-10'
					handleClick={handleScroll}
				/>
			</div>
			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image src='/hero.png' alt='hero' fill className='object-contain' />
				</div>
				<div className='hero__image-overlay' />
			</div>
		</div>
	);
};

export default Hero;
