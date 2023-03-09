import { useState } from "react";
import useEventListener from './useEventListener';

const useViewportSize = () => {
	useEventListener('resize', (event) => {
		const target = event.target as Window;
		const { innerHeight, innerWidth } = target;

		setParams({ height: innerHeight, width: innerWidth })
	});
	const [params, setParams] = useState({ height: window.innerHeight, width: window.innerWidth });

	return { height: params.height, width: params.width };
}

export default useViewportSize;