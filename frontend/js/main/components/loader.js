import display from 'matreshka/binders/display';
import style from '../style.css';

export default ({ owner }) => (<div
    className={style.loader}
    bind={{
        owner,
        loading: display()
    }}
>
    <span className={style.loaderBracketLeft}>{'{'}</span>
    "loading": true
    <span className={style.loaderBracketRight}>{'}'}</span>
</div>);
