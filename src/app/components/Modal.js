import { useDispatch } from 'react-redux';
import { clear } from '../features/cart/cartSlice';
import { close } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clear());
              dispatch(close());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(close())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
