import { CartItem } from '@models/cartItem';

type ActionType =
  | { type: 'ADD'; payload: CartItem }
  | { type: 'REMOVE'; payload: string };

const defaultCartState = {
  items: [] as CartItem[],
  totalAmount: 0,
};

const cartReducer = (state: typeof defaultCartState, action: ActionType) => {
  switch (action.type) {
    case 'ADD': {
      let updatedItems = [];
      const existedItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      const existedItem = state.items[existedItemIndex];
      if (existedItem) {
        updatedItems = [...state.items];
        updatedItems[existedItemIndex] = {
          ...existedItem,
          amount: existedItem.amount + action.payload.amount,
        };
      } else {
        updatedItems = [...state.items, action.payload];
      }

      return {
        items: updatedItems,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
    }
    case 'REMOVE': {
      let updatedItems = [];
      const existedItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      const existedItem = state.items[existedItemIndex];
      if (existedItem.amount > 1) {
        updatedItems = [...state.items];
        updatedItems[existedItemIndex] = {
          ...existedItem,
          amount: existedItem.amount - 1,
        };
      } else {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount - existedItem.price,
      };
    }
    default:
      return defaultCartState;
  }
};

export default cartReducer;
export { defaultCartState };
