import React, {useRef} from "react";
import styles from './burger-ingredients.module.css'
import Tab from "../tabs/tab";
import { useDispatch, useSelector } from '../../utils/types';
import { Ingredient } from '../ingredient/ingredient';
import { selectTabs } from '../../services/actions/tabs'


export default function BurgerIngredients() {
  const ingredients = useSelector(store => store.ingredientsSet.ingredients);
  /*  */
  const scroll = useSelector(store => store.tabs.scroll);
  const dispatch = useDispatch();
  const container = useRef<HTMLDivElement>(null);
  const buns = useRef<HTMLHeadingElement>(null);
  const sauces = useRef<HTMLHeadingElement>(null);
  const mains = useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    if(scroll === 'one') {
      buns.current?.scrollIntoView({behavior: 'smooth'})
    }
    if(scroll === 'two') {
      sauces.current?.scrollIntoView({behavior: 'smooth'})
    }
    if(scroll === 'three') {
      mains.current?.scrollIntoView({behavior: 'smooth'})
    }

  }, [scroll])

  React.useEffect(() => { 
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if(entry.target === buns.current ) {
          dispatch(selectTabs('one'))
        }
        if(entry.target === sauces.current ) {
          dispatch(selectTabs('two'))
        }
        if(entry.target === mains.current ) {
          dispatch(selectTabs('three'))
        }
      })
    } 
    const options = {
      root: container.current,
      rootMargin: '0px 0px -90% 0px',
      threshold: 0.5,
    }
    const observer = new IntersectionObserver(handleIntersect, options);
    
    observer.observe(buns.current!)
    observer.observe(sauces.current!)
    observer.observe(mains.current!)
  }, [dispatch])

/*  */

  return (
    <div className={styles.ingredients}>
      <h1 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h1>
      <Tab />
      <div className={styles.container} ref={container}>{/*  */}
        <h2 ref={buns} className={`${styles.title} text text_type_main-medium mt-10`}>Булки</h2>{/*  */}
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'bun')
              return <Ingredient key={element._id} element={element} />
          }
          )}
        </section>
        <h2 ref={sauces} className={`${styles.title} text text_type_main-medium mt-10`}>Соусы</h2>{/*  */}
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'sauce')
              return <Ingredient key={element._id} element={element} />
          }
          )}
        </section>
        <h2 ref={mains} className={`${styles.title} text text_type_main-medium mt-10`}>Начинки</h2>{/*  */}
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'main')
              return <Ingredient key={element._id} element={element} />
          })}
        </section>
      </div>

    </div>
  )
}
