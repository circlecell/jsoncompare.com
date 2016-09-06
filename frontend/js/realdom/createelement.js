import attrHook from './attrhook';

module.exports = function createElement(givenElement, attributes, ...children) {
    let element;

    if (typeof givenElement === 'string') {
        element = document.createElement(givenElement);
    } else if (typeof givenElement === 'function') {
        element = givenElement(attributes);
    } else {
        element = givenElement;
    }

    if (attributes) {
        for (let i = 0, keys = Object.keys(attributes); i < keys.length; i++) {
            const name = keys[i];
            const value = attributes[name];
            const lowerCasedName = name.toLowerCase();

            if (attrHook[name]) {
                attrHook[name](element, value, name);
            } else if (
                typeof value === 'function'
                && name.indexOf('on') === 0
                && lowerCasedName in element
            ) {
                element[lowerCasedName] = value;
            } else {
                element.setAttribute(name, value);
            }
        }
    }

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        if (!(child instanceof Node)) {
            throw Error(`RealDOM JSX can not contain ${typeof child}`);
        }

        element.appendChild(child);
    }

    return element;
};
