import { html } from '../../node_modules/lit-html/lit-html.js';

import { getAllRecipes } from '../data/recipe.js';
import { navigate } from '../nav.js';

const catalogTemplate = (recipes) => html`
<section id="catalog-view">
    ${recipes.map(recipePreview)}
</section>
`;

const recipePreview = ({ name, img, _id }) => html`
<article class="preview" @click=${() => navigate('details', _id)}>
    <div class="title">
        <h2>${name}</h2>
    </div>
    <div class="small">
        <img src=${img}>
    </div>
</article>`;

export async function showCatalogView(ctx) {
    ctx.render(html`<p style="color: white">Loading...</p>`);

    const recipes = await getAllRecipes();

    ctx.render(catalogTemplate(recipes));
}

/*
<p style="color: white">Loading...</p>

<article class="preview">
    <div class="title">
        <h2>Title</h2>
    </div>
    <div class="small">
        <img src="assets/lasagna.jpg">
    </div>
</article>
*/

/*
<article>
    <h2>Title</h2>
    <div class="band">
        <div class="thumb">
            <img src="assets/lasagna.jpg">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
                <li>Ingredient 4</li>
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis
            reprehenderit pariatur aut dolor exercitationem impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem odit officiis numquam
            corrupti? Quam.</p>
    </div>
</article>
*/