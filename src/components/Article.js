import Image from 'next/image';
import Link from 'next/link';

const Article = ({ article }) => {
	const { image, author, title, text } = article;

	return (
		<article className='bg-white-main shadow-md text-left grid place-items-center'>
			<Link href='#'>
				<a>
					<Image
						src={`/${image}`}
						alt={title}
						height={365}
						width={600}
						objectFit='cover'
						className='rounded-t-md transform hover:scale-125 transition duration-500 ease-in-out'
					/>
				</a>
			</Link>
			<div className='p-5 lg:p-7'>
				<p className='text-sm text-grayish-blue font-light'>{author}</p>
				<Link href='#'>
					<a>
						<h3 className='text-dark-blue mt-3 mb-2 lg:text-lg hover:opacity-70'>
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
