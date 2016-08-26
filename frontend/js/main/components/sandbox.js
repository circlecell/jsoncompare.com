import style from '../style.css';

/*<div>
    <select class="reformat">
        <option value="">Keep JSON as is</option>
        <option value="beautify">Beautify on validate</option>
        <option value="minify">Minify on validate</option>
    </select>

    <button
        onClick={() => owner.onClickSave()}
        class={style.saveButton}
        data-save-text="Save"
        data-saved-text="Saved"
    ></button>
</div>*/

export default owner => (<main>
    {owner.tabs.nodes.nav}
    {owner.tabs.nodes.sandbox}
</main>)
