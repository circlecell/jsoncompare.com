import MK from 'matreshka';

MK.prototype.appendNode = function appendNode(key, selector) {
    const nodes = this.$bound(key);
    const container = typeof selector === 'string'
        && !~selector.indexOf('<')
        && (~selector.indexOf(':sandbox') || ~selector.indexOf(':bound'))
        ? this.select(selector)
        : MK.$(selector)[0];

    for (let i = 0; i < nodes.length; i++) {
        container.appendChild(nodes[i]);
    }

    return this;
};
