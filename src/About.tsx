import * as React from "react";
import { Link } from "react-router-dom";

export interface Props {}

export const about: React.FC<Props> = () => {
  return (
    <div>
      <div>about</div>
      <Link to="/home">Go to About!</Link>
    </div>
  );
};
