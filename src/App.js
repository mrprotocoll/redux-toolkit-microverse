import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './app/components/CartContainer';
import Modal from './app/components/Modal';
import Navbar from './app/components/Navbar';
import { total } from './app/features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  useEffect(() => {
    dispatch(total());
  }, [items]);
  return (
    <main>
      { isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
