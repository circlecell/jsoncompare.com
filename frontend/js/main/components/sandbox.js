import style from '../style.css';
import Error from './error';
import Loader from './loader';
import Settings from './settings';

export default ({ owner }) => (<main className={style.main}>
    <Settings owner={owner} />
    {owner.tabs.nodes.nav}
    {owner.tabs.nodes.sandbox}
    <Loader owner={owner} />
    <Error owner={owner} />
</main>);
