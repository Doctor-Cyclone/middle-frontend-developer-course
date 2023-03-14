import useViewportSize from '../../custom-hooks/useViewportSize';

const Task_4 = () => {
	const { height, width } = useViewportSize();

	return (
		<>
			Width: {width}, height: {height}
		</>
	);
}

export default Task_4;
