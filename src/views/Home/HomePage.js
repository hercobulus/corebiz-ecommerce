import React from "react";
import { connect } from "react-redux";
import {
  getProducts,
  postNewsletter,
  clearNewsletter,
} from "./HomePageActions";
import { Slider, Products, Newsletter } from "../../components";

function HomePage({
  products,
  getProducts,
  postNewsletter,
  clearNewsletter,
  subscribed,
}) {
  React.useEffect(
    function () {
      getProducts();
    },
    [getProducts]
  );
  return (
    <>
      <Slider />
      <Products products={products} />
      <Newsletter
        postNewsletter={postNewsletter}
        subscribed={subscribed}
        clearNewsletter={clearNewsletter}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  const { homePageReducer } = state;
  return homePageReducer;
};

export default connect(mapStateToProps, {
  getProducts,
  postNewsletter,
  clearNewsletter,
})(HomePage);
