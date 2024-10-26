import React, { FC, FormEvent, PropsWithChildren } from 'react';
import './Form.scss';

interface Props extends PropsWithChildren {
  customCls?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

/**
 * @description Input box
 * @param children - Any JSX Element / text / icon
 * @param customCls (optional) - custom CSS class
 * @param onSubmit - submit handler
 */
const Form: FC<Props> = ({ customCls = '', onSubmit, children }) => {
  return (
    <form className={`form ${customCls}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
