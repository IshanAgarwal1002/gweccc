import React, { ChangeEvent, FC, useCallback, KeyboardEvent } from 'react';
import { debounce, InputChangeEventData } from '../../../Shared';
import './Input.scss';

interface Props {
  label?: string;
  customCls?: string;
  lazyOnChange?: boolean;
  lazyOnChangeThresholdTime?: number;
  data?: any;
  onChange?: (eventData: InputChangeEventData) => void;
  validateOnKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * @description Input box
 * @param label (optional) - label associated with input element
 * @param customCls (optional)
 * @param lazyOnChange (optional) - true/false
 * @param lazyOnChangeThresholdTime (optional)
 * @param data (optional)
 * @param onChange (optional) function
 * @param validateOnKeyDown (optional) function
 */
const Input: FC<Props> = ({ label, customCls = '', lazyOnChange, lazyOnChangeThresholdTime = 300, data, onChange, validateOnKeyDown }) => {
  // eslint-disable-next-line
  const lazyOnChangeHandler = useCallback(debounce(onChange!, lazyOnChangeThresholdTime), [
    onChange,
    lazyOnChangeThresholdTime
  ]);

  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const eventData: InputChangeEventData = {
        value: event.target.value,
        data
      };
      if (lazyOnChange) {
        lazyOnChangeHandler(eventData);
      } else {
        onChange?.(eventData);
      }
    },
    [lazyOnChange, data, lazyOnChangeHandler, onChange]
  );

  return (
    <div className={`input-wrapper ${customCls}`}>
      {label && (
        <label className='input-label'>
          {label}
        </label>
      )}
      <input className='input-box' onChange={onInputChange} onKeyDown={validateOnKeyDown}/>
    </div>
  );
};

export default Input;
