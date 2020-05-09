import { display } from 'seemple/binders';
import style from '../style.css';

export default ({ owner }) => (
    <div
        className={style.loader}
        bind={{
            owner,
            loading: display()
        }}
    >
        <span className={style.loaderBracketLeft}>{'{'}</span>
        &quot;loading&quot;: true
        <span className={style.loaderBracketRight}>{'}'}</span>
    </div>
);
