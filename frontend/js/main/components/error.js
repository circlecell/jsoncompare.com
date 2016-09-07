import style from '../style.css';
import text from 'matreshka/binders/text';

export default ({ owner }) => (<div
    className={style.error}
    bind={{
        owner,
        errorText: text()
    }}
/>)
