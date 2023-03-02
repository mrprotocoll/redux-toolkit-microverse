import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'icons.js';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';

const CartItem = ({ data }) => {
  const {
    id, img, title, price, amount,
  } = data;
  const dispatch = useDispatch();
  return (
    <article key={id} className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">
          $
          {price}
        </h4>
        <button type="button" className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button type="button" className="amount-btn" onClick={() => dispatch(increase({ id }))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button type="button" className="amount-btn" onClick={() => dispatch(decrease({ id }))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.string,
  }).isRequired,
};

export default CartItem;
