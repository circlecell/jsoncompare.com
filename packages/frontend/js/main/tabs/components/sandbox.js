import style from '../style.css';

export default ({ owner }) => (
    <div className={style.tabs}>
        {owner.simple.nodes.sandbox}
        {owner.batch.nodes.sandbox}
        {owner.diff.nodes.sandbox}
    </div>
);
