function render (element, content) {
    const app = document.querySelector(element)
    if (!app) return;
    app.innerHTML = content
}