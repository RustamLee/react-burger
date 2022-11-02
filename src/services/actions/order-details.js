
import { apiConfig} from "../../utils/burger.config";
import {checkResponse} from '../../utils/burger.config'

export const GET_ORDER_DETAILS = 'GET_ORDER_DETAILS';

export const getOrderId = (id) => ({
    type: GET_ORDER_DETAILS,
    id,
})

export const getOrderIdThunk = (idSet) => {
    return (dispatch) => {

      fetch(`${apiConfig.baseUrl}${apiConfig.orders}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ingredients: idSet
            })
        })
            .then(checkResponse)
            .then(({ order:{number}}) => {
                dispatch(getOrderId(number));
            })
            .catch((err) => console.log(err))
    }
}