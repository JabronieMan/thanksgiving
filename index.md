---
layout: default
title: Home
---

<style>
  /* Mobile-first styles */
  .page-container {
    display: flex;
    flex-direction: column;
  }

  .column {
    width: 100%;
    padding: 10px;
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
    margin-top: 10px;
  }

  .toggle-button {
    cursor: pointer;
    background: #f0f0f0;
    border: 1px solid #ccc;
    padding: 5px 10px;
    display: inline-block;
  }

  /* Desktop styles */
  @media (min-width: 992px) {
    .page-container {
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;
    }

    #drawer-column {
      width: 250px;
      flex-shrink: 0;
    }

    #generator-column {
      width: 250px;
      flex-shrink: 0;
    }

    #list-column {
      flex-grow: 1;
    }
  }
</style>

<div class="page-container">
  
  <div id="drawer-column" class="column">
    <button id="recipe-drawer-toggle" class="toggle-button">Show All Recipes</button>
    <div id="recipe-drawer-content" class="recipe-list">
      <ul>
        {% for recipe in site.recipes %}
          <li><a href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div id="generator-column" class="column">
    <div class="shopping-list-generator">
      <h2>Shopping List Generator</h2>
      <p>Select recipes to create a shopping list.</p>
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
    </div>
  </div>

  <div id="list-column" class="column">
    <h2>Ingredients</h2>
    <div id="shopping-list">
      <p>Select recipes from the generator to see the required ingredients.</p>
      <ul></ul>
    </div>
  </div>

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
