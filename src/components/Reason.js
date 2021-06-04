const Reason = ({ reason }) => {
	const { image, title, text } = reason;

	return (
		<article className='text-center grid place-items-center'>
			<img src={image} alt={title} />
			<h3 className='text-dark-blue text-lg mt-5 mb-4 lg:text-lg'>{title}</h3>
			<p className='text-grayish-blue text-md lg:text-base'>{text}</p>
		</article>
	);
};

export default Reason;
