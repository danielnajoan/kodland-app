import React, { memo } from "react";
import { Product } from "../../components";
import { productObj } from "./Data";
function Home() {
  return (
    <>
      <Product {...productObj} />
    </>
  );
}

export default memo(Home);
