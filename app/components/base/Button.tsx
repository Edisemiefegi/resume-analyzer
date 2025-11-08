import React from "react";
import { twMerge } from "tailwind-merge"; 

const ButtonClasses = {
  variant: {
    default: "bg-primary text-white hover:opacity-90",
    text: "bg-transparent ",
  },
  size: {
    default: "px-4 py-2",
    small: "px-2 py-1 text-sm",
    large: "px-6 py-3 text-lg",
  },
};

type VariantType = keyof typeof ButtonClasses.variant;
type SizeType = keyof typeof ButtonClasses.size;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: VariantType;
  size?: SizeType;
}

function Button({
  children,
  variant = "default",
  size = "default",
  className,
  ...rest
}: Props) {
  const base = "cursor-pointer rounded-full transition-all font-medium";
  const computedClass = twMerge(
    base,
    ButtonClasses.variant[variant],
    ButtonClasses.size[size],
    className
  );

  return (
    <button className={computedClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;
