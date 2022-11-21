import styles from './cards.module.scss'

interface Card {
    image: string
    name: string
    description: string
    price: string
}

export const Card = (props: Card) => {
    return (
        <div className={styles.card}>
            <img src={props.image}></img>
            <p>{props.name}</p>
            <span className={styles.description}>{props.description}</span>
            <p className={styles.price}>{props.price}</p>
            <select>
                <option>Regular</option>
            </select>
            <button>ADD TO CART</button>
        </div>
    )
}