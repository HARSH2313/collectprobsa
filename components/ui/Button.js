// components/ui/Button.js
import React from 'react';

const Button = ({ children, href, type = 'button', onClick, variant = 'primary', ...props }) => {
  const baseClasses = 'inline-block px-6 py-3 rounded-full font-semibold transition';
  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary',
    secondary: 'bg-secondary text-white hover:bg-accent',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    link: 'text-primary hover:underline',
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
