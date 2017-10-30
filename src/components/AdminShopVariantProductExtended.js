import React from 'react';
import AdminShopVariantProductVariantsContainer from "../containers/AdminShopVariantProductVariantsContainer";
import AdminShopVariantProductCategoriesContainer from "../containers/AdminShopVariantProductCategoriesContainer";

const AdminShopVariantProductExtended = (props) => (
    <div className="row">
        <AdminShopVariantProductVariantsContainer productId={props.routeParams.id}/>
        {/*<AdminShopVariantProductCategoriesContainer productId={props.routeParams.id}/>*/}
    </div>
)

export default AdminShopVariantProductExtended;
