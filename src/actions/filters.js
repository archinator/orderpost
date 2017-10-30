export const SET_SHOP_FILTER = 'SET_SHOP_FILTER';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';

export function setShopFilter(shopId) {
    return {
        type: SET_SHOP_FILTER,
        payload: shopId
    };
}
export function toggleCategory(categoryId){
    return {
        type: TOGGLE_CATEGORY,
        payload: categoryId
    };
}