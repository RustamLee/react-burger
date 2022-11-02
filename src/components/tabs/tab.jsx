import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";/*  */
import { selectTabs, selectScroll } from "../../services/actions/tabs";/*  */
import styles from './tab.module.css';

export default function Tabs() {
  /*  */
  const current = useSelector(store => store.tabs.select);
  const dispatch = useDispatch();
  const setCurrent = (current) => {
    dispatch(selectTabs(current))
    dispatch(selectScroll(current))
  }
  /*  */
  return (
    <div className={styles.tab}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>)
}