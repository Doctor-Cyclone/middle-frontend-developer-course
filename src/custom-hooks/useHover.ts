import {useEffect, useRef, useState} from "react";

const useHover = () => {
	const [hovered, setHovered] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		console.log(1)
			const element = ref.current! as HTMLDivElement;

			if (element) {
				element.addEventListener("mouseover", () => setHovered(true));
				element.addEventListener("mouseout", () => setHovered(false));

				return () => {
					element.removeEventListener("mouseover", () => setHovered(true));
					element.removeEventListener("mouseout", () => setHovered(false));
				};
			}
		},[]);

	return { hovered, ref }
}

export default useHover;