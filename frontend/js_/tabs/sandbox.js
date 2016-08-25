import style from './tabs.css';

export default owner => (
    <main>
        <ul class="tab-nav">
            <li data-tab="simple" class="tab-nav-item">Simple</li>
            <li data-tab="batch" class="tab-nav-item">Batch</li>
            <li data-tab="diff" class="tab-nav-item">Merge</li>
            <li style="flex: 1;">
                <select class="reformat">
                    <option value="">Keep JSON as is</option>
                    <option value="beautify">Beautify on validate</option>
                    <option value="minify">Minify on validate</option>
                </select>

                <button class="save button-primary" style="float:right;" data-save-text="Save" data-saved-text="Saved"></button>
            </li>
        </ul>

        <div class={style.tabs} bind={{ owner, container: null }}></div>
    </main>
)
