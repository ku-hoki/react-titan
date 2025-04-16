
import styles from './CardTest.module.scss';

console.log(styles);

function CardTest(props){
    return(
        <div className={styles.card_test}> 
            <h3>Тест: {props.title}</h3>
            <img width = {496} height = {190} src = {props.imgUrl} alt = "Пример теста"/>
            <p>{props.description}</p>
            <button>Пройти тест</button>
        </div>
    );
}

export default CardTest;