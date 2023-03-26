import { FunctionComponent } from 'react';
// @ts-ignore
import style from './style.module.scss';
import cn from 'classnames';

interface InputProps {
  name: string;
  label: string;
  error?: string;
  disabled?: boolean;
}

const RadioInput: FunctionComponent<InputProps> = ({
  name,
  label,
  error,
  disabled
}) => {
  return (
    <div className={style.input__container}>
      <label className={style['input__label-wrapper']}>
        <input
          className={style.input}
          type="radio"
          name={name}
          disabled={disabled}
          value={label.toLowerCase()}
        />
        <span className={style.input__label}>{label}</span>
      </label>
      {error && <span className={style.input__error}>{error}</span>}
    </div>
  );
};

export default RadioInput;
