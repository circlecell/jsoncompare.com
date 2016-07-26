import MK from 'matreshka';

MK.prototype.appendNode = function (key, selector) {
    const nodes = this.$bound(key),
        container = this.select(selector);

    for (let i = 0; i < nodes.length; i++) {
        container.appendChild(nodes[i]);
    }

    return this;
};
