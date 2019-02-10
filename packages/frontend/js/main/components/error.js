import text from 'matreshka/binders/text';
import style from '../style.css';

export default ({ owner }) => (
    <div
        className={style.error}
        bind={{
            owner,
            errorText: text()
        }}
    />
);
