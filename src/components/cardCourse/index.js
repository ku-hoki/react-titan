
import styles from './CardCourse.module.scss';

function CardCourse(props){
    return(
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <p>{props.topicCourse}</p>
            <img width = {363} height = {249.12} src={props.imgUrl} alt="Илюстрация курса"/>
            <button>Перейти</button>
        </div>
    );
}

export default CardCourse;