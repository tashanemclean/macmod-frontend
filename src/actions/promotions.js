import {
    FETCH_PROMOTIONS
} from './types';

export function fetchPromotions() {
    return ({
        type: FETCH_PROMOTIONS,
        payload: [
            {
                _id: 0,
                promotiontitle: 'Random promotions title',
                promotiondescription: 'Buy any combination of two 1.7 or 2.0 &mciro;m ACE Excel® or 2.0 µm HALO® UHPLC columns from MAC-MOD and get either a FitBit® Charge 3 or a $250 MAC-MOD gift card for a future purchase.',
                promotionimages: {
                    promotionthumbnail: 'https://mac-mod.vseen.com/wp-content/uploads/2019/09/UHPLC-promo.png',
                    promotioninfographic: 'http://via.placeholder.com/800x400'
                },
                promotionexpires: new Date(),
                promotionnotes: 'test notes for promotion',
                promotionpath: '/promotions/content/randompromo'
            }
        ]
    })
}
