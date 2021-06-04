import Link from 'next/link';

const Hero = () => {
	return (
		<section className='bg-very-light-gray grid md:grid-cols-2 md:my-4 lg:my-0 items-center overflow-visible'>
			
			{/* Heading + Text */}
			<div className='spacing mt-8 text-center md:mt-0 md:text-left'>

				<h1 className='text-4xl md:text-5xl text-dark-blue mb-4 lg:mb-8 font-light'>Next generation digital banking</h1>
				
				<p className='text-md md:text-lg text-grayish-blue mb-8'>
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
				</p>
				
				<Link href='#'>
						<a className='cta-button'>Request Invite</a>
				</Link>
			</div>

			{/* Images */}
			<div 
				className="relative order-first md:order-last bg-hero-mobile bg-cover bg-no-repeat bg-center min-h-mobile-image-height 
				lg:h-hero-desktop lg:bg-hero-desktop
				lg:bg-left-center overflow-visible
				">
				
				<div className='absolute h-full w-full bg-mockups bg-size bg-mobile-position bg-no-repeat
				lg:bg-left-top 
				'></div>
			
			</div>
		</section>
	);
};

export default Hero;
