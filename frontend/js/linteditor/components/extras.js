import className from 'matreshka/binders/classname';
import html from 'matreshka/binders/html';
import style from '../style.css';

export default ({ owner }) => (<div>
    <span
        className={style.lintButton}
        title="Lint"
        onClick={() => owner.onLintButtonClick()}
        bind={{
            owner,
            validated: className(style.lintButtonSuccess)
        }}
    />
    <span className={style.clearButton} title="Clear" onClick={() => owner.onClearButtonClick()} />
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
</div>);
