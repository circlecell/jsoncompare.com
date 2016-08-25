export default owner => (<main>
    <div>
        <select class="reformat">
            <option value="">Keep JSON as is</option>
            <option value="beautify">Beautify on validate</option>
            <option value="minify">Minify on validate</option>
        </select>

        <button onClick={() => owner.onClickSave()} class="save button-primary" style="float:right;" data-save-text="Save" data-saved-text="Saved"></button>
    </div>
    {owner.tabs.nodes.sandbox}
</main>)
