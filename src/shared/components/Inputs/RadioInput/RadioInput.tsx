import { FunctionComponent } from 'react';
// @ts-ignore
import style from './style.module.scss';
import cn from 'classnames';

type Size = {
  s: string;
  m: string;
  l: string;
};

interface InputProps {
  name: string;
  label: string;
  error?: string;
  size?: Size;
  disabled?: boolean;
  withAsterisk?: boolean;
}

const RadioInput: FunctionComponent<InputProps> = ({
  name,
  label,
  error,
  size = 'm',
  disabled,
  withAsterisk
}) => {
  return (
    <div className={style.input__container}>
      <label className={style['input__label-wrapper']} htmlFor={name}>
        <span
          className={
            !withAsterisk
              ? style.input__label
              : cn([style.input__label, style['input__label-asterisk']])
          }
        >
          {label}
        </span>
      </label>
      <input
        className={cn([style.input, style[`input_size-${size}`]])}
        type="radio"
        name={name}
        disabled={disabled}
      />
      {error && <span className={style.input__error}>{error}</span>}
    </div>
  );
};

export default RadioInput;
