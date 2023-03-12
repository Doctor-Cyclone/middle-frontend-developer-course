import { useState } from "react";

const useToggle = (defaultValue: string[] = ['true', 'false']): [string, (newValue?: string) => void] => {
	const [value, setValue] = useState(defaultValue[0]);

	const isLastValue = (index: number) => defaultValue.length - 1 === index

	const toggleValue = (newValue?: string) => {
		if (newValue) {
			setValue(newValue);
			return;
		}

		const currentValueIndex = defaultValue.indexOf(value);
		if (isLastValue(currentValueIndex)) {
			setValue(defaultValue[0]);
		} else {
			setValue(defaultValue[currentValueIndex + 1])
		}
	}

	return [value, toggleValue];
}

export default useToggle;