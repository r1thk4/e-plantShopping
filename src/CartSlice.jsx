import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  items: [], // Each item will have { name, image, cost, quantity }
};

// Create the cart slice
export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity++;
      } else {
        // Otherwise, add new item
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove item from cart by name
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // Update quantity of specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions to use in your components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer to include in the store
export default CartSlice.reducer;
