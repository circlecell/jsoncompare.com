import style from '../style.css';
import Matreshka from 'matreshka';

const { className, html } = Matreshka.binders;

export default owner => (<div>
    <span class={style.lintButton} title="Lint" onClick={() => owner.onLintButtonClick()} bind={{
        owner,
        validated: className(style.lintButtonSuccess)
    }} />
    <span class={style.clearButton} title="Clear" onClick={() => owner.onClearButtonClick()} />
    <span class={style.sizeBlock} title="Size" bind={{
        owner,
        size: html()
    }} />
    <div class={style.lintNotifier} bind={{
        owner,
        errorText: html()
    }} />
</div>)
