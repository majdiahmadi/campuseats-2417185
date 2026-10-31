
import { createContext } from 'react'

// Create a React Context for sharing shopping cart data.
//
// This context will allow different components to access
// the same cart and orders without passing props manually.
//
// The default value is null because CartProvider will
// supply the actual data and functions.
export const CartContext = createContext(null)
