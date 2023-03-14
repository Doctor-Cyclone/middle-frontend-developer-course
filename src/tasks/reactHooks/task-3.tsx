import useHover from '../../custom-hooks/useHover';

const Task_3 = () => {
	const { hovered, ref } = useHover();

	return (
		<div ref={ref}>
			{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
		</div>
	);
}

export default Task_3;
