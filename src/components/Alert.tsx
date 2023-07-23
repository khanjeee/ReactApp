import { ReactNode } from "react";

interface Prop {
  //prop supported by all components
  children: ReactNode;
}

const Alert = ({ children }: Prop) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
