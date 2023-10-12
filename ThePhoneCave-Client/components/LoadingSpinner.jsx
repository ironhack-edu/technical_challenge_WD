import React from "react";
import { css } from "@emotion/react";
import { ScaleLoader } from "react-spinners";

function LoadingSpinner() {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `;

  return (
    <div className="blue-scale-loader">
      <ScaleLoader css={override} size={50} loading={true} />
    </div>
  );
}
export default LoadingSpinner;
