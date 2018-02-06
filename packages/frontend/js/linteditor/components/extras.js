import className from 'matreshka/binders/classname';
import html from 'matreshka/binders/html';
import style from '../style.css';

export default ({ owner }) => (
    <div>
        <span
            className={style.lintButton}
            onClick={() => owner.onLintButtonClick()}
            bind={{
                owner,
                validated: className(style.lintButtonSuccess)
            }}
        >Lint
        </span>
        <span className={style.clearButton} onClick={() => owner.onClearButtonClick()}>
        Clear
        </span>
        <span
            className={style.sizeBlock}
            title="Size"
            bind={{
                owner,
                size: html()
            }}
        />
        <div
            className={style.lintNotifier}
            bind={{
                owner,
                errorText: html()
            }}
        />
    </div>
);
