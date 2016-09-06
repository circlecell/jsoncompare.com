import className from 'matreshka/binders/classname';
import style from '../style.css';

export default ({ owner }) => (
    <li
        className={style.navItem}
        onClick={evt => owner.onNavClick(evt)}
        bind={{
            owner,
            isActive: className(style.activeNavItem)
        }}
    >
        {owner.title}
    </li>
);
