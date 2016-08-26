import style from '../style.css';
import Matreshka from 'matreshka';

const { display } = Matreshka.binders;

export default owner => (<div class={style.flexTab} bind={{
    owner,
    isActive: display()
}}>
    {owner.nodes.content}
</div>)
