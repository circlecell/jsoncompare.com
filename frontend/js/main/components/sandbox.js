import style from '../style.css';
import getLoader from './loader';
import getSettings from './settings';

export default owner => (<main class={style.main}>
    {getSettings(owner)}
    {owner.tabs.nodes.nav}
    {owner.tabs.nodes.sandbox}
    {getLoader(owner)}
</main>)
