import React from "react";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
    label?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  console.log('apakah ssr?')
    const { label = "Default Label" } = props;
    return <button>{label}</button>;
};

export default Button;
