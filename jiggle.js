function render (element, content) {
    const app = document.querySelector(element)
    if (!app) return;
    app.innerHTML = content
}

function reactive (obj) {
    const keys = Object.keys(obj);
    const reactiveObj = {}

    keys.forEach(key => {
        let value = obj[key];

        Object.defineProperty(reactiveObj, key, {
            get() {
                console.log('get', key, value);
                // tracking?
                return value
            },
            set(newValue) {
                console.log('set', key, newValue);
                if (newValue === value) return;
                value = newValue
                // trigger
            }
        })
    });

    return reactiveObj;
}