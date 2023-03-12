import { useEffect } from 'react';

const useEventListener = <K extends keyof WindowEventMap>(
	event: K,
	func: (this: Window, ev: WindowEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions
) => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(event, func, options);

			return () => window.removeEventListener(event, func, options);
		}
	}, [event, func]);
}

export default useEventListener;