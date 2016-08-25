import style from './style.css';

export default owner => (<div>
    <ul class="tab-nav">
        {owner.simple.nodes.menuItem}
        
    </ul>

    <div>
        {owner.simple.nodes.sandbox}
    </div>
</div>)
