import { display } from 'seemple/binders';
import style from '../style.css';

export default ({ owner }) => (
    <div
        className={style.flexTab}
        bind={{
            owner,
            isActive: display()
        }}
    >
        {owner.nodes.content}
    </div>
);
