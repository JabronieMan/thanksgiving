---
layout: default
title: Home
---

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .drawer {
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  .main-content {
    width: 100%;
  }
  .recipe-list ul {
    list-style: none;
    padding: 0;
  }
  .recipe-list li {
    margin-bottom: 10px;
  }
  #shopping-list ul {
    list-style: none;
    padding: 0;
  }
  #shopping-list li {
    padding: 5px 0;
    border-bottom: 1px solid #eee;
  }
  @media (min-width: 768px) {
    .drawer {
      width: 300px;
      padding-right: 20px;
      border-right: 1px solid #ccc;
      border-bottom: 0;
      margin-bottom: 0;
    }
    .main-content {
      padding-left: 20px;
      width: calc(100% - 320px);
    }
  }
</style>

<div class="container">
  <aside class="drawer">
    <h2>Recipes</h2>
    <div id="recipe-list-container" class="recipe-list">
      <ul>
        {% for recipe in site.recipes %}
          <li>
            <label>
              <input type="checkbox" class="recipe-checkbox" data-recipe-title="{{ recipe.title | escape }}">
              {{ recipe.title }}
            </label>
          </li>
        {% endfor %}
      </ul>
    </div>
  </aside>
  <main class="main-content">
    <h2>Shopping List</h2>
    <div id="shopping-list">
      <p>Select recipes from the list to see the required ingredients.</p>
      <ul></ul>
    </div>
  </main>
</div>

<script id="recipe-data" type="application/json">
  {
    {% for recipe in site.recipes %}
      "{{ recipe.title | escape }}": {
        "ingredients": {{ recipe.ingredients | jsonify }}
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  }
</script>

<script src="/assets/js/shopping-list.js"></script>