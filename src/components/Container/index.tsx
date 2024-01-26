import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const classes = classNames(
    className,
    'mx-auto',
    'sm:max-w-xl',
    'md:max-w-2xl',
    'lg:max-w-4xl',
    'xl:max-w-6xl',
  );

  return <div className={classes}>{children}</div>;
};

export default Container;
