import {
    SET_FILTER_OPTIONS
} from './types';

export function filterOptions() {
    return ({
        type: SET_FILTER_OPTIONS,
        payload: [
            {
                _id: 0,
                dropdownlabel: 'Product Type',
                dropdowntitle: 'ALL PRODUCTS',
                dropdownitems: [
                    'ALL PRODUCTS',
                    'BULK PACKING',
                    'CARTRIDE'
                ]
            },
            {
                _id: 1,
                dropdownlabel: 'Particle Size',
                dropdowntitle: 'ALL PARTICLE SIZES',
                dropdownitems: [
                    'ALL PARTICLE SIZES',
                    '1.2',
                    '1.5',
                    '1.7'
                ]
            },
            {
                _id: 2,
                dropdownlabel: 'Pore Size',
                dropdowntitle: 'ALL PORE SIZES',
                dropdownitems: [
                    'ALL PORE SIZES',
                    '100',
                    '1000',
                    '110'
                ]
            },
            {
                _id: 3,
                dropdownlabel: 'Brand',
                dropdowntitle: 'ALL BRANDS',
                dropdownitems: [
                    'ALL BRANDS',
                    'ALL PARTICLE SIZES',
                    'ACE',
                    'EXCEL'
                ]
            },
            {
                _id: 4,
                dropdownlabel: 'Column ID',
                dropdowntitle: 'ALL COLUMN IDS',
                dropdownitems: [
                    'ALL COLUMN IDS',
                    '0.075',
                    '0.1'
                ]
            },
            {
                _id: 5,
                dropdownlabel: 'Part Number',
                dropdowntitle: 'ENTER PART NUMBER',
                dropdownitems: [
                    'ENTER PART NUMBER'
                ]
            },
            {
                _id: 6,
                dropdownlabel: 'Bonded Phase',
                dropdowntitle: 'ALL PHASES',
                dropdownitems: [
                    'ALL PHASES',
                    'AMIDE',
                    'AMINO '
                ]
            },
            {
                _id: 7,
                dropdownlabel: 'Column Length',
                dropdowntitle: 'ALL COLUMN LENGTHS',
                dropdownitems: [
                    'ALL COLUMN LENGTHS',
                    '10',
                    '100',
                    '120'
                ]
            },
        ]
    })
}