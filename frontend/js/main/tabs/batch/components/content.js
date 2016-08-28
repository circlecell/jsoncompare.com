import style from '../style.css';
import Matreshka from 'matreshka';

const { dropFiles, file, dragOver, className } = Matreshka.binders;

export default owner => (<div class={style.batchContent} bind={{
    owner,
    files: [dropFiles('text')/*, file('text')*/],
    dragovered: [dragOver(), className(style.dragovered)],
    'items.length': className(style.hasItems)
}}>
    {owner.items.nodes.sandbox}
    <div class={style.dndMessage}>Drop files here</div>
    <div class={style.batchButtons}>
        <h3>Drop files there, open files or add fields manually</h3>

        <button class={style.addFiles}>
            <input type="file" multiple />
            Open files
        </button>
        <button
            class={style.addField}
            onClick={evt => owner.onAddButtonClick(evt)}
        >Add field</button>
    </div>
</div>);
