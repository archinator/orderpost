import React from 'react';
import CategoriesFilterContainer from '../containers/CategoriesFilterContainer';
import ProductsContainer from '../containers/ProductsContainer';

const ShopVariantExtended = (props) => (
    <div className="row">
        <CategoriesFilterContainer shopVariantId={props.routeParams.id}/>
        <ProductsContainer shopVariantId={props.routeParams.id}/>
    </div>
)

export default ShopVariantExtended;
