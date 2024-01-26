import classNames from 'classnames';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps): JSX.Element {
  const classes = classNames(
    className,
    'mx-auto',
    'sm:max-w-xl',
    'md:max-w-2xl',
    'lg:max-w-4xl',
    'xl:max-w-6xl',
  );

  return <div className={classes}>{children}</div>;
}
