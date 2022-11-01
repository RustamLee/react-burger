
export const GET_ORDER_DETAILS = 'GET_ORDER_DETAILS';

export const getOrderId = (id) => ({
    type: GET_ORDER_DETAILS,
    id,
})

export const getOrderIdThunk = (idSet) => {
    return (dispatch) => {
        fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ingredients: idSet
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(({ order }) => {/*  */
                const { number } = order;/*  */
                dispatch(getOrderId(number));
            })
            .catch((err) => console.log(err))/*  */
    }
}