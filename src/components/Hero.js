import Link from 'next/link';
import Dropdown from './Dropdown';

const Hero = ({isOpen}) => {
	return (
		<section className='relative bg-very-light-gray grid lg:grid-cols-2 lg:my-0 items-center overflow-visible desktop:grid-cols-9'>
			
			{/* Heading + Text */}
			<div className='spacing mb-8 text-center lg:mb-0 
			lg:text-left desktop:col-span-3'>

				<h1 className='text-4xl md:text-5xl text-dark-blue mb-8 font-light'>Next generation digital banking</h1>
				
				<p className='text-md md:text-lg text-grayish-blue mb-10'>
					Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
				</p>
				
				<div className='md:mb-2'>
					<Link href='#'>
							<a className='cta-button'>Request Invite</a>
					</Link>
				</div>
			</div>

			{/* Images */}
			
			<div 
				className='w-full relative bg-hero-mobile h-96 order-first bg-no-repeat bg-cover overflow-hidden mb-4
				
				md:mb-10 md:overflow-visible

				lg:mb-0 lg:order-last lg:bg-hero-desktop lg:bg-auto lg:h-hero-desktop lg:bg-left
				
				desktop:col-span-6'
				>

				<div 
					className='absolute h-full w-full bg-mockups bg-size-90 bg-no-repeat bg-bottom -top-4
					
					md:bg-center-top md:bg-size-60 md:top-0
					
					lg:h-inner-hero-desktop lg:bg-right-bottom lg:bg-cover
					
					desktop:bg-size-60 desktop:bg-bottom
					'>
				</div>

				<div className='absolute z-10 w-full h-full'>
					<Dropdown isOpen={isOpen} />
				</div>

			</div> 
			
		</section>
	);
};

export default Hero;
