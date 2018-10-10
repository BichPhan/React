var initialState = [
    {
        id: 1,
        name: 'IP 6 plus',
        price: 400,
        status: true
    },
    {
        id: 2,
        name: 'samsung galaxy',
        price: 500,
        status: true
    },
    {
        id: 3,
        name: 'Oppo F7s',
        price: 700,
        status: true
    }
];
const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;