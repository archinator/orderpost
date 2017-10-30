import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Main from './components/Main';
import ShopVariantExtended from './components/ShopVariantExtended';
import LoginContainer from './containers/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import ProfileContainer from './containers/ProfileContainer';
import AdminPage from './components/AdminPage';
import AdminShopVariantCategoriesContainer from './containers/AdminShopVariantCategoriesContainer';
import AdminShopVariantProductsContainer from './containers/AdminShopVariantProductsContainer';
import AdminShopVariantProductExtendedContainer from './containers/AdminShopVariantProductExtendedContainer';
import AdminShopVariantProductCategoriesContainer from './containers/AdminShopVariantProductCategoriesContainer';
import AdminShopVariantProductVariantsContainer from './containers/AdminShopVariantProductVariantsContainer';
import AdminShopVariantProductManufacturersContainer from './containers/AdminShopVariantProductManufacturersContainer';
import CartContainer from './containers/CartContainer';
import ProductVariantExtendedContainer from './containers/ProductVariantExtendedContainer';
import CheckoutContainer from './containers/CheckoutContainer';
import AdminShopVariantDashboard from './components/AdminShopVariantDashboard';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Main} />
        <Route path='/branch/:id' component={ShopVariantExtended} />
        <Route path='/variant/:id' component={ProductVariantExtendedContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/register' component={RegistrationContainer} />
        <Route path='/profile' component={ProfileContainer} />
        <Route path='/cart' component={CartContainer} />
        <Route path='/checkout' component={CheckoutContainer} />
        <Route path='/admin' component={AdminPage}>
                <IndexRoute component={AdminShopVariantDashboard}/>
                <Route path='/admin/categories' component={AdminShopVariantCategoriesContainer}/>
                <Route path='/admin/dashboard' component={AdminShopVariantDashboard}/>
                <Route path='/admin/products' component={AdminShopVariantProductsContainer}/>
                <Route path='/admin/products/:id' component={AdminShopVariantProductExtendedContainer}>
                        <Route path='/admin/products/:id/variants' component={AdminShopVariantProductVariantsContainer}/>
                        <Route path='/admin/products/:id/categories' component={AdminShopVariantProductCategoriesContainer}/>
                        <Route path='/admin/products/:id/manufacturers' component={AdminShopVariantProductManufacturersContainer}/>
                </Route>
        </Route>
    </Route>
);