import useEventListener from './useEventListener';
import {useEffect, useState} from "react";

type Position = {
	y: number;
	x: number
}

const getPosition = (): Position => {
	return {
		x: window.scrollX,
		y: window.scrollY
	}
};

const useWindowScroll = (): [Position, ({y, x}: {x?: number, y?: number}) => void] => {
	const [position, setPosition] = useState<Position>(getPosition());

	useEventListener('scroll', () => setPosition(getPosition()));

	const scrollTo = ({y = position.y, x = position.x}: Partial<Position>): void => {
		window.scrollTo({
			left: x,
			top: y,
			behavior: 'smooth'
		});

		setPosition({x, y})
	};

	useEffect(() => {
		setPosition(getPosition());
	}, []);

	return [position, scrollTo];
};

export default useWindowScroll;