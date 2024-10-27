import * as model from "./model";


import "core-js/stable";
import "regenerator-runtime/runtime";
import recpieView from "./views/recipeView.js";
import recipeView from "./views/recipeView.js";

const recipeContainer = document.querySelector(".recipe");

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    recipeView.renderSpiner(recipeContainer);
    await model.loadRecpie(id);
    const { recipe } = model.state;
    recpieView.render(model.state.recipe);
    // const recpieView = new recipeView(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};
["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener("hashchange", showRecipes);
// window.addEventListener("load", showRecipes);
