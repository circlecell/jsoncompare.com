import style from '../style.css';
import Error from './error';
import Loader from './loader';
import Settings from './settings';

export default ({ owner }) => (
    <div className={style.app}>
        <Settings owner={owner} />
        {owner.tabs.nodes.nav}
        {owner.tabs.nodes.sandbox}
        <Loader owner={owner} />
        <Error owner={owner} />
    </div>
);
