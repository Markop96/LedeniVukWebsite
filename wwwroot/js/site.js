// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.querySelectorAll('.showcapain a').forEach(anchor => {
    const collapseId = anchor.getAttribute('href'); // npr. #testCollapse
    const icons = anchor.querySelectorAll('i.bi'); // sve ikonice u tom linku

    if (!collapseId || icons.length === 0) return;

    const collapseElem = document.querySelector(collapseId);
    if (!collapseElem) return;

    // Kada se collapse OTVORI
    collapseElem.addEventListener('show.bs.collapse', () => {
        icons.forEach(icon => {
            icon.classList.remove('bi-chevron-double-down');
            icon.classList.add('bi-chevron-double-up');
        });
    });

    // Kada se collapse ZATVORI
    collapseElem.addEventListener('hide.bs.collapse', () => {
        icons.forEach(icon => {
            icon.classList.remove('bi-chevron-double-up');
            icon.classList.add('bi-chevron-double-down');
        });
    });
});

