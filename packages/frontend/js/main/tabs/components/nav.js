import style from '../style.css';

export default ({ owner }) => (
    <ul className={style.tabNav}>
        {owner.simple.nodes.navItem}
        {owner.batch.nodes.navItem}
        {owner.diff.nodes.navItem}
    </ul>
);
