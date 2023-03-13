import { useState } from "react";
import useEventListener from './useEventListener';

const useViewportSize = () => {
	const [params, setParams] = useState({ height: window.innerHeight, width: window.innerWidth });

	useEventListener('resize', (event) => updateWindowSizeParams(event));

	const updateWindowSizeParams = (event: Event) => {
		const target = event.target as Window;
		const { innerHeight, innerWidth } = target;

		setParams({ height: innerHeight, width: innerWidth })
	}

	return { height: params.height, width: params.width };
}

export default useViewportSize;