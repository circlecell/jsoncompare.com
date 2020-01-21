import { className } from 'seemple/binders';
import style from '../style.css';

export default ({ owner }) => (
    <li
        className={style.navItem}
        onClick={(evt) => owner.onNavClick(evt)}
        bind={{
            owner,
            isActive: className(style.activeNavItem)
        }}
    >
        {owner.title}
        <span className={style.help}>
            <span className={style.helpIcon} />
            <span className={style.tooltip}>
                {owner.description}
            </span>
        </span>
    </li>
);
