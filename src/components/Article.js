import Image from 'next/image';
import Link from 'next/link';

const Article = ({ article }) => {
	const { image, author, title, text } = article;

	return (
		<article className='bg-white-main shadow-md grid place-items-center transform hover:scale-105 transition duration-500 ease-in-out'>
			
			<div className='w-full'>
				<Link href='#'>
					<a>
						<img
							src={`/${image}`}
							alt={title}
							className='rounded-t-md w-full h-56 object-cover'
						/>
					</a>
				</Link>
			</div>
			
			<div className='p-5 lg:p-7 text-left'>
				<p className='text-sm text-grayish-blue font-light'>{author}</p>
				<Link href='#'>
					<a>
						<h3 className='text-dark-blue mt-3 mb-2 lg:text-lg  hover:text-bright-cyan'>
							{title}
						</h3>
					</a>
				</Link>
				<p className='text-grayish-blue text-article-paragraph md:text-base'>
					{text}
				</p>
			</div>

		</article>
	);
};

export default Article;
