import classNames from 'classnames';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  error?: boolean;
  onClick?: () => void;
  primary?: boolean;
  rounded?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
}

export default function Button({
  children,
  className,
  error,
  primary,
  rounded,
  secondary,
  success,
  warning,
  ...props
}: ButtonProps): JSX.Element {
  const classes = classNames(
    className,
    'mb-4 flex px-4 py-2 text-white outline-0',
    {
      'bg-blue-500': primary,
      'bg-gray-500': secondary,
      'bg-green-500': success,
      'bg-red-500': error,
      'bg-yellow-500': warning,
      'rounded-full': rounded,
    },
  );

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
