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
            } else {
                element.setAttribute(name, value);
            }
        }
    }

    for(let child of children) {
        if(typeof child === 'string') {
            child = document.createTextNode(child);
        }
        element.appendChild(child);
    }

    return element;
}
