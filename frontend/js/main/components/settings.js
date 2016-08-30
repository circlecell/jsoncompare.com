import style from '../style.css';
import Matreshka from 'matreshka';

const { className } = Matreshka.binders;

export default owner => (<div class={style.settings}>
    <select bind={{ owner, reformat: {} }}>
        <option value="">Keep JSON as is</option>
        <option value="beautify">Beautify on validate</option>
        <option value="minify">Minify on validate</option>
    </select>

    <button
        onClick={() => owner.onClickSave()}
        class={style.saveButton}
        data-save-text="Save"
        data-saved-text="Saved"
        bind={{
            owner,
            saved: className('disabled')
        }}
    ></button>
</div>);
