import attrHook from './attrhook';

export default function createElement(givenElement, attributes, ...children) {
    let element;

    if (typeof givenElement === 'string') {
        element = document.createElement(givenElement);
    } else if (typeof givenElement === 'function') {
        element = givenElement(attributes);
    } else {
        element = givenElement;
    }

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        if (child instanceof Node) {
            element.appendChild(child);
        }
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
            } else if (name !== 'owner') {
                element.setAttribute(name, value);
            }
        }
    }

    return element;
}
