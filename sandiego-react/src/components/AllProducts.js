import React from "react";
import { useState, useEffect } from "react";

function AllProducts() {
  const [allProductsState, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3080/api/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos a la venta
          </h5>
        </div>
        <div className="row">
          {allProductsState.map((product, i) => (
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{product.name}</div>
                {/* {`${i}`} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
