import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './app/components/CartContainer';
import Navbar from './app/components/Navbar';
import { total } from './app/features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
