import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string
	setCurrentText: (currentText: string)=> void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.currentTarget.value.length > 0 ? props.setCurrentText(event.currentTarget.value) : props.setCurrentText('');
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
