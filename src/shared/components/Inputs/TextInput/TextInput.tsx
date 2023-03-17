import { FunctionComponent } from 'react';
// @ts-ignore
import style from './style.module.scss';
import cn from 'classnames';

type BorderRadius = {
  none: string;
  s: string;
  m: string;
  l: string;
  xl: string;
};

type Size = {
  s: string;
  m: string;
  l: string;
};

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
  description?: string;
  error?: string;
  borderRadius?: BorderRadius;
  size?: Size;
  disabled?: boolean;
  withAsterisk?: boolean;
}

const TextInput: FunctionComponent<InputProps> = ({
  type,
  name,
  placeholder,
  label,
  value,
  description,
  error,
  borderRadius = 'm',
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
      {description && (
        <span className={style.input__description}>{description}</span>
      )}
      <input
        className={cn([
          style.input,
          style[`input_border-${borderRadius}`],
          style[`input_size-${size}`]
        ])}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && (
        <div className={style.input__error}>
          <img
            className={style['input__error-icon']}
            src="./caution.png"
            alt="Error"
          />
          <span className={style['input__error-text']}>enter name</span>
        </div>
      )}
    </div>
  );
};

export default TextInput;