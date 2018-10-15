import * as Types from './../constants/actionType'
import { findIndex } from 'lodash';

var initialState = [];
const products = (state = initialState, action) => {
    var { id } = action;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            var index = findIndex(state, (state) => {
                return state.id === id;
            });
            state.splice(index, 1); // splice de xoa phan tu index vaf 1 ban ghi
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];

        default: return [...state];
    }
}

export default products;