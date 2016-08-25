import { bindNode } from 'matreshka';

module.exports = function realDOM(element, attributes, ...children) {
    if(typeof element === 'string') {
        element = document.createElement(element)
    }

    if(attributes) {
        for(let [name, value] of Object.entries(attributes)) {
            const lowerCasedName = name.toLowerCase();
            if(
                typeof value === 'function'
                && name.indexOf('on') === 0
                && lowerCasedName in element
            ) {
                element[lowerCasedName] = value;
            } else if (name === 'className'){
                element[name] = value;
            } else if(name === 'bind') {
                const owner = value.owner;
                if(!owner) {
                    throw Error('owner is missing')
                }

                for(let [bindKey, binders] of Object.entries(value)) {
                    if(bindKey !== 'owner') {
                        if(binders && 'length' in binders) {
                            for(const binder of binders) {
                                bindNode(owner, element, bindKey, binder)
                            }
                        } else {
                            bindNode(owner, element, bindKey, binders)
                        }

                    }
                }
            } else {
                element.setAttribute(name, value);
            }
        }
    }

    for(let child of children) {
        if(typeof child === 'string') {
            child = document.createTextNode(child);
        }
        console.log(child);
        element.appendChild(child);
    }

    return element;
}
