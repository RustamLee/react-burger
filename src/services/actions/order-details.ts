
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'
import { AppThunk } from "../../utils/types";
import { getCookie } from "../../utils/coockie";
export const GET_ORDER_DETAILS: 'GET_ORDER_DETAILS' = 'GET_ORDER_DETAILS';

interface IGetOrderId {
    readonly type: typeof GET_ORDER_DETAILS
    id: string
}
export type TGetOrderId =
    | IGetOrderId

export const getOrderId = (id: string): IGetOrderId => ({
    type: GET_ORDER_DETAILS,
    id,
})

export const getOrderIdThunk: AppThunk = (idSet: Array<string>) => {
    return (dispatch) => {

        fetch(`${apiConfig.baseUrl}${apiConfig.orders}`, {
            method: 'POST',
            headers: {
                authorization: 'Bearer ' + getCookie('accessToken'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ingredients: idSet
            })
        })
            .then(checkResponse)
            .then(({ order: { number } }) => {
                dispatch(getOrderId(number));
            })
            .catch((err) => console.log(err))
    }
}
