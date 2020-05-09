import style from '../style.css';

export default ({ owner }) => (
    <div className={style.batchItem}>
        <span className={style.deleteButton} onClick={(evt) => owner.onClickDelete(evt)}>
            Delete
        </span>
    </div>
);
