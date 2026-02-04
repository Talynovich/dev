import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

const CartPage = () => {
  const carts = useSelector((state) => state.products.carts)
  const dispatch = useDispatch()
  return (
    <div>
      {console.log(carts)}
    </div>
  );
};

export default CartPage;