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
  .recipe-list ul, .shopping-list-generator ul {
    list-style: none;
    padding: 0;
  }
  .recipe-list li, .shopping-list-generator li {
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
  #recipe-drawer-content {
    display: none; /* Hidden by default */
  }
  .toggle-button {
    cursor: pointer;
    background: #f0f0f0;
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin-bottom: 10px;
    display: inline-block;
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

<div id="recipe-drawer">
  <button id="recipe-drawer-toggle" class="toggle-button">Show All Recipes</button>
  <div id="recipe-drawer-content" class="recipe-list">
    <ul>
      {% for recipe in site.recipes %}
        <li><a href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>

<hr>

<div class="container">
  <aside class="drawer shopping-list-generator">
    <h2>Shopping List Generator</h2>
    <p>Select recipes to add their ingredients to the shopping list.</p>
    <div id="recipe-checkbox-list">
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

<script src="{{ '/assets/js/shopping-list.js' | relative_url }}"></script>
