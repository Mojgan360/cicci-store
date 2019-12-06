import React from "react";

export default function CartColumns() {
  return (
    //show not in desplay large:  d-lg-block
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* Start of single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">product</p>
        </div>
        {/* End of single column */}
        {/* Start of single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>
        {/* End of single column */}
        {/* Start of single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* End of single column */}
        {/* Start of single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* End of single column */}
        {/* Start of single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/* End of single column */}
        {/* Start of single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/* End of single column */}
      </div>
    </div>
  );
}
