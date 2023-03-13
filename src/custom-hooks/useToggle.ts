import { useState } from "react";

const useToggle = (defaultValue: string[] = []): [string | boolean, (newValue?: string) => void] => {
	const [value, setValue] = useState<string | boolean>(defaultValue[0] || false);
	const isEmptyDefaultValue = defaultValue.length === 0;

	const isLastValue = (index: number) => defaultValue.length - 1 === index

	const toggleValue = (newValue?: string): void => {
		if (newValue) {
			setValue(newValue);
		} else if (isEmptyDefaultValue) {
			setValue(!value);
		} else if (typeof value === 'string') {
			const currentValueIndex = defaultValue.indexOf(value);

			if (isLastValue(currentValueIndex)) {
				setValue(defaultValue[0]);
			} else {
				setValue(defaultValue[currentValueIndex + 1])
			}
		}
	}

	return [value, toggleValue];
}

export default useToggle;