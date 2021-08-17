let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    
    panel.addEventListener('click', () => {
        removeClassNames();
        panel.classList.add('active');
    })
});
function removeClassNames() {
    
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}