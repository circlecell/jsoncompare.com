import style from '../style.css';

export default owner => (<div class={style.batchItem}>
    <span class={style.deleteButton} title="Delete" onClick={evt => owner.onClickDelete(evt)}></span>
</div>)
