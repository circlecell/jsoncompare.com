import style from '../style.css';
import Matreshka from 'matreshka';

const { className } = Matreshka.binders;

export default owner => (
    <li class={style.navItem} onClick={owner.onNavClick.bind(owner)} bind={{
        owner,
        isActive: className(style.activeNavItem)
    }}>
        {owner.title}
    </li>
)
