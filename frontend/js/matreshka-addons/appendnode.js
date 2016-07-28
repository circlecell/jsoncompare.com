import MK from 'matreshka';

MK.prototype.appendNode = function appendNode(key, selector) {
    const nodes = this.$bound(key);
    const container = this.select(selector);

    for (let i = 0; i < nodes.length; i++) {
        container.appendChild(nodes[i]);
    }

    return this;
};
