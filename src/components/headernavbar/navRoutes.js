const navbarRoutes = [
    {
        _id: 0,
        title: 'BRANDS',
        active: false,
        isDropDown: true,
        dropdownItems: [
            {
                _id: 0,
                name: 'ALL Brands',
                path: '/products/brand/All Brands Layout'
            },
            {
                _id: 1,
                name: 'NEW PRODUCTS',
                path: '/products/brand/content/newprod'
            },
            {
                _id: 2,
                name: 'AVANTOR ACE®',
                path: '/products/brand/content/ace/UHPLC Columns HPLC Columns'
            },
            {
                _id: 13,
                name: 'AVANTOR',
                path: '/products/brand/content/grace-columns/AVANTOR HPLC Columns'
            },
            {
                _id: 3,
                name: 'HALO®',
                path: '/products/brand/content/halo/HALO Fused-Core UHPLC Columns HPLC Columns'
            },
            {
                _id: 4,
                name: 'MAC-MOD CHROMATOGRAPHY',
                path: '/products/brand/content/mac-mod-chromatography-solutions/MAC-MOD CHROMATOGRAPHY SOLUTIONS'
            },
            {
                _id: 5,
                name: 'MAC-MOD SAFETY SOLUTIONS',
                path: '/products/brand/content/mac-mod-safety-solutions/MAC-MOD SAFETY SOLUTIONS'
            },
            {
                _id: 6,
                name: 'PRONTOSIL®',
                path: '/products/brand/content/prontosil/Prontosil HPLC Columns'
            }
        ]
    },
    {
        _id: 1,
        title: 'PRODUCTS',
        active: false,
        isDropDown: true,
        dropdownItems: [
            {
                _id: 0,
                name: 'UHPLC Columns',
                path: '/products/brand/content/ace halo/UHPLC Columns'
            },
            {
                _id: 1,
                name: 'HPLC Columns',
                path: '/products/brand/content/ace halo/PRODUCTS HPLC Columns'
            },
            {
                _id: 2,
                name: 'Superficially Porous Particle Columns',
                path: '/products/brand/content/ace halo/Superficially Porous Particle Columns'
            },
            {
                _id: 13,
                name: 'LC-MS Columns',
                path: '/products/brand/content/ace halo/LC-MS Columns'
            },
            {
                _id: 3,
                name: 'Bioanalytical Columns',
                path: '/products/brand/content/ace halo/Bioanalytical Columns'
            },
            {
                _id: 4,
                name: 'HILIC Columns',
                path: '/products/brand/content/ace halo/HILIC Columns'
            },
            {
                _id: 5,
                name: 'Preperative and Semi-Preparative Columns',
                path: '/products/brand/content/ace halo/Preperative and Semi-Preparative Columns'
            },
            {
                _id: 6,
                name: 'Micobore, Capillary and Nano Columns',
                path: '/products/brand/content/ace halo/Micobore, Capillary and Nano Columns'
            },
            {
                _id: 7,
                name: 'Method Development Kits',
                path: '/products/brand/content/ace halo/Method Development Kits'
            },
            {
                _id: 8,
                name: 'Safety Solutions',
                path: '/products/brand/content/mac-mod-safety-solutions/MAC-MOD SAFETY SOLUTIONS'
            },
            {
                _id: 9,
                name: 'Guard Columns and Pre-Column Filters',
                path: '/products/brand/content/ace halo/Guard Columns and Pre-Column Filters'
            },
            {
                _id: 10,
                name: 'Stem Trap Columns',
                path: '/products/brand/content/ace halo/Stem Trap Columns'
            },
            {
                _id: 11,
                name: 'Precision Parts and Fittings',
                path: '/products/brand/content/ace halo/Precision Parts and Fittings'
            },
            {
                _id: 12,
                name: 'Bulk Media',
                path: '/products/brand/content/ace halo/Bulk Media'
            },
        ]
    },
    {
        _id: 1,
        title: 'SHOP',
        isDropDown: false,
        active: false,
        path: '/shop'
    },
    {
        _id: 2,
        title: 'RESOURCES',
        active: false,
        isDropDown: true,
        dropdownItems: [
            {
                _id: 0,
                name: 'ALL RESOURCES',
                path: '/resources/all-resources'
            },
            {
                _id: 1,
                name: 'APPLICATIONS',
                path: '/resources/content/Applications'
            },
            {
                _id: 2,
                name: 'APPLICATION GUIDES',
                path: '/resources/content/Application Guides'
            },
            {
                _id: 3,
                name: 'CHROMATOGRAPHIC TOOLS',
                path: '/resources/content/Chromatographic Tools'
            },
            {
                _id: 4,
                name: 'INDUSTRY',
                path: '/resources/content/Industry'
            },
            {
                _id: 5,
                name: 'LABNOTES',
                path: '/resources/content/Lab Notes'
            },
            {
                _id: 6,
                name: 'LC MODE',
                path: '/products/brand/content/lc-mode/lc-mode'
            },
            {
                _id: 7,
                name: 'POSTERS AND PRESENTATIONS',
                path: '/resources/content/Posters and Presentations'
            },
            {
                _id: 8,
                name: 'PRODUCT BULLETINS',
                path: '/resources/content/Product Bulletins'
            },
            {
                _id: 9,
                name: 'VIDEOS AND WEBINARS',
                path: '/resources/content/Webinars'
            },
            {
                _id: 10,
                name: 'TECHNICAL NOTES',
                path: '/resources/content/Technical Notes'
            }
        ]
    },
    {
        _id: 3,
        title: 'PROMOTIONS',
        isDropDown: false,
        active: false,
        path: '/promotions'
    },{
        _id: 4,
        title: 'WHO WE ARE',
        isDropDown: false,
        active: false,
        path: '/whoweare'
    },{
        _id: 5,
        title: 'CONTACT US',
        isDropDown: false,
        active: false,
        path: '/contact-us'
    }
]

export default navbarRoutes;