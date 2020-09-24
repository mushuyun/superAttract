import { createSelector } from "reselect";


// const COLLECTION_ID_MAP ={
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// if we use SHOP_DATA as array
// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [selectCollections],
//         collections => collections.find(
//             collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] 
//         )
//     )

// we conver SHOP_DATA to object to make it simple and more efficient, it is called data normalization
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    )

// convert back to array to work on pages
export const selectCollectionsForPreview = createSelector (
    [selectCollections],
    collections =>
        collections ? 
        Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionsFetching = createSelector (
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);