import useWindowScroll from '../../custom-hooks/useWindowScroll';

const AdditionalTask_1 = () => {
	const [position, scrollTo] = useWindowScroll();

	return (
		<div className="container">
			<p className="text">
				Scroll position x: {position.x}, y: {position.y}
			</p>
			<button className="button" onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
		</div>
	);
}


export default AdditionalTask_1;
