import style from '../style.css';
import Matreshka from 'matreshka';

const { className } = Matreshka.binders;

export default owner => (
    <li class={style.navItem} onClick={evt => owner.onNavClick(evt)} bind={{
        owner,
        isActive: className(style.activeNavItem)
    }}>
        {owner.title}
    </li>
)
