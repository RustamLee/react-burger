import React from "react";
import styles from './profile-order.module.css';
import { OrderCard } from '../../components/order-card/order-card';
import { useSelector, useDispatch } from "../../utils/types";
import {
  useLocation
} from "react-router";
import { userWsConnectionInitial, userWsConnectionClose } from "../../services/actions/user-socket";
import { getCookie } from "../../utils/coockie";
import { apiConfig } from "../../utils/burger.config";

export default function ProfileOrder() {

  const location = useLocation()
  const dispatch = useDispatch()
  const { orders } = useSelector(store => store.userSocket);
  React.useEffect(() => {
    const token = getCookie('accessToken')
    dispatch(userWsConnectionInitial(`${apiConfig.userSocketEndPoint}${token}`))
  }, [])

  React.useEffect(() => {

    return () => { dispatch(userWsConnectionClose()) }

  }, [])

  if (!orders) {
    return <></>
  }

  return (
    <div className={styles.orders}>
      {orders.map((card, index) => {
        if (card)
          return <OrderCard key={`${card._id}${index}` }
            number={card.number} name={card.name}
            createdAt={card.createdAt} status={card.status} elements={card.ingredients} />
      })}
    </div>
  )
}
