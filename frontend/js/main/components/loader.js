import Matreshka from 'matreshka';
import style from '../style.css';

const { display } = Matreshka.binders;

export default owner => (<div class={style.loader} bind={{
    owner,
    loading: display()
}}>
      <span class={style.loaderBracketLeft}>{'{'}</span>
    "loading": true
      <span class={style.loaderBracketRight}>{'}'}</span>
</div>)
