import { render } from '../node_modules/lit-html/lit-html.js';

const main = document.querySelector('main');
const nav = document.querySelector('nav');

let views = {};

export function showView(view) {
    main.replaceChildren(view);
}

export function navigate(id, ...params) {
    const view = views[id];

    if (typeof view == 'function') {
        view({
            render: renderMain
        }, ...params);
    }
}

export function initNav(iniViews) {
    views = iniViews;

    nav.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.id;

        navigate(id);
    });
}

export function link(ref, callback) {
    ref.addEventListener('click', e => {
        e.preventDefault();

        callback();
    })
}

function renderMain(content) {
    render(content, main);
}