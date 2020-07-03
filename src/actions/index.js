import {
    setHeaderLinks,
    setNavbarLinks,
    changeNavbarActive
} from './headernavbar';

import {
    fetchSubNavCategories,
    setSubNavLinks,
    changeSubNavActive,
    setSubHeaderLinks
} from './subnavbar';

import {
    fetchUserPurchases,
    setPurchaseDetail,
    fetchCartProducts,
    addCartProduct,
    deleteCartProduct,
    signIn
} from './user';

import {
    fetchShopCategories,
    fetchShopProducts,
    fetchShopProductsQuery,
    // fetchFilterLists,
    filterProductsWithCategoryId,
    filterProductsWithQuery,
    fetchShopFilterLists,
    setShopFilter
} from './shop';

import {
    fetchHomePDF,
    fetchFeaturedHomeResources,
    fetchHomeResources,
    fetchLabNotes,
    fetchPageCSV
} from './page';

import {
    fetchBrands,
    fetchBrandContent,
    fetchPhaseImages,
    setProductPageImage,
    setClickedBuyNow
} from './brands';

import {
    fetchResources,
    fetchResourcesContent,
    fetchResourcesDetails,
    fetchPostersPresentions,
    fetchFilterResourcesLists,
    fetchResourcesFilesInfo,
    setResourcesFilter
} from './resources';

import {
    fetchPromotions
} from './promotions'

import {
    filterOptions
} from './options';

import {
    fetchContacts,
    fetchContactDetails
} from './contactus';

import {
    fetchOrderPlaced,
    fetchRecentOrders,
    fetchOrderedItems
} from './order';

import {
    fetchPhasePage
} from './phasepage'

export {
    setHeaderLinks,
    setNavbarLinks,
    changeNavbarActive,

    fetchSubNavCategories,
    setSubHeaderLinks,
    setSubNavLinks,
    changeSubNavActive,

    fetchUserPurchases,
    setPurchaseDetail,
    fetchCartProducts,
    addCartProduct,
    deleteCartProduct,
    signIn,

    fetchShopCategories,
    fetchShopProducts,
    fetchShopProductsQuery,
    filterProductsWithCategoryId,
    filterProductsWithQuery,
    // fetchFilterLists,
    fetchShopFilterLists,
    setShopFilter,

    fetchPageCSV,

    fetchBrands,
    fetchBrandContent,

    fetchPhaseImages,
    fetchPhasePage,

    fetchResources,
    fetchResourcesContent,
    fetchResourcesDetails,
    fetchPostersPresentions,
    fetchFilterResourcesLists,
    fetchResourcesFilesInfo,
    setResourcesFilter,

    fetchPromotions,

    fetchHomePDF,
    filterOptions,
    fetchFeaturedHomeResources,
    fetchHomeResources,
    fetchLabNotes,

    fetchContacts,
    fetchContactDetails,

    setProductPageImage,
    setClickedBuyNow,

    fetchOrderPlaced,
    fetchRecentOrders,
    fetchOrderedItems
};