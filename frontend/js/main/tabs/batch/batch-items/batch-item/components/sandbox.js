import style from '../style.css';

export default ({ owner }) => (<div className={style.batchItem}>
    <span className={style.deleteButton} title="Delete" onClick={evt => owner.onClickDelete(evt)} />
</div>);
