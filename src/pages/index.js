import Head from 'next/head';
import { useEffect, useState } from 'react';
import Article from '../components/Article';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Reason from '../components/Reason';
import { reasonsContent, articlesContent } from '../data/infoContent';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const hideDropdown = () => {
		if (window.innerWidth > 1024 && isOpen) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', hideDropdown);
		return () => {
			window.removeEventListener('resize', hideDropdown);
		};
	});

	return (
		<div className='min-h-screen font-publicSans relative'>
			<Head>
				<title>Easybank Landing Page</title>
				<meta name='description' content='Easybank landing page project' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar toggle={toggle} isOpen={isOpen} />

			<main>
				<Hero isOpen={isOpen}/>

				<div>
					{/* Why Choose / Reasons Section */}
					<section className='spacing py-16 bg-light-grayish-blue text-center'>
						<h2 className='mb-4 text-dark-blue text-3xl md:text-3.5xl leading-9 md:text-left'>
							Why choose
							<span className='block md:inline-block md:ml-2'>Easybank?</span>
						</h2>

						<p className='text-grayish-blue text-sm md:text-left lg:text-base'>
							We leverage Open Banking to turn your bank account into your
							financial hub.
							<span className='ml-1 md:block md:ml-0'>
								Control your finances like never before.
							</span>
						</p>

						<div className='mt-14 grid gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-16 desktop:grid-cols-4 desktop:gap-x-20'>
							{reasonsContent.map((reason) => {
								return <Reason key={reason.title} reason={reason} />;
							})}
						</div>
					</section>

					<section className='bg-very-light-gray spacing py-16 text-center'>
						<h2 className='text-dark-blue text-3.5xl leading-9 md:text-left'>
							Latest Articles
						</h2>

						<div className='mt-10 grid gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-12 desktop:grid-cols-4 desktop:gap-x-20'>
							{articlesContent.map((article) => {
								return <Article key={article.title} article={article} />;
							})}
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
