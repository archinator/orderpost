import { combineReducers } from 'redux';
import ShopsReducer from './reducer_shops';
import CategoriesReducer from './reducer_categories';
import CategoriesReducerAdmin from './reducer_categories_admin';
import ProductsReducerAdmin from './reducer_products_admin';
import ProductVariantsReducerAdmin from './reducer_productvariants_admin';
import ProductsReducer from './reducer_products';
import ShopVariantsReducer from './reducer_shopVariants';
import AuthReducer from './reducer_auth';
import CartReducer from './reducer_cart';
import CheckoutReducer from './reducer_checkout';

const rootReducer = combineReducers({
    shops: ShopsReducer,
    shopVariants: ShopVariantsReducer,
    categories: CategoriesReducer,
    categories_admin: CategoriesReducerAdmin,
    products_admin: ProductsReducerAdmin,
    productvariants_admin: ProductVariantsReducerAdmin,
    products: ProductsReducer,
    auth: AuthReducer,
    cart: CartReducer,
    checkout: CheckoutReducer
});

export default rootReducer;