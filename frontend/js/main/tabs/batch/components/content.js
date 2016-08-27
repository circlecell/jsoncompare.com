import style from '../style.css';
import Matreshka from 'matreshka';

const { dropFiles, file, dragOver, className } = Matreshka.binders;

export default owner => (<div class={style.batchContent} bind={{
    owner,
    files: [dropFiles('text'), file('text')],
    dragovered: [dragOver(), className(style.dragovered)],
    'items.length': className(style.hasItems)
}}>
    <div class={style.dndMessage}>DROPA|I FILE HERE</div>
    {owner.items.nodes.sandbox}
</div>);
