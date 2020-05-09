import { prop } from 'seemple/binders';
import style from '../style.css';

export default ({ owner }) => (
    <div className={style.settings}>
        <input
            type="checkbox"
            id="sort_alphabetically"
            bind={{ owner, sortAlphabetically: {} }}
        />
        {' '}
        <label htmlFor="sort_alphabetically">Sort alphabetically via jsonabc</label>
        {' '}
        &nbsp;
        <select bind={{ owner, reformat: {} }}>
            <option value="none">Keep JSON as is</option>
            <option value="beautify_tabs">Beautify (tabs)</option>
            <option value="beautify_2">Beautify (2 spaces)</option>
            <option value="beautify_4">Beautify (4 spaces)</option>
            <option value="minify">Minify on validate</option>
        </select>

        <button
            type="button"
            onClick={() => owner.onClickSave()}
            className={style.saveButton}
            data-save-text="Save"
            data-saved-text="Saved"
            bind={{
                owner,
                saved: prop('disabled')
            }}
        />

        <button
            type="button"
            onClick={() => owner.onClickFullscreen()}
            className={style.fullscreenButton}
            bind={{
                owner,
                fullscreen: {
                    getValue: null,
                    setValue(value, { node }) {
                    // eslint-disable-next-line no-param-reassign
                        node.textContent = value ? 'Exit Fullscreen' : 'Fullscreen Editor';
                    }
                }
            }}
        />
    </div>
);
