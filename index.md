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

  .recipe-list ul, .schedule ul {
    list-style: none;
    padding: 0;
  }

  .recipe-list li, .schedule li {
    margin-bottom: 10px;
  }

  .day {
    margin-bottom: 20px;
  }

  /* Desktop styles */
  @media (min-width: 992px) {
    .page-container {
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;
    }

    #recipe-column {
      width: 250px;
      flex-shrink: 0;
    }

    #schedule-column {
      flex-grow: 1;
    }

    #shopping-list-column {
      width: 250px;
      flex-shrink: 0;
    }
  }
</style>

<div class="page-container">
  
  <div id="recipe-column" class="column">
    <h2>All Recipes</h2>
    <div class="recipe-list">
      <ul>
        {% assign sorted_recipes = site.recipes | sort: 'title' %}{% for recipe in sorted_recipes %}
          <li><a href="{{ recipe.url | relative_url }}">{{ recipe.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div id="schedule-column" class="column schedule">
    <h2>Schedule</h2>
    <div class="day">
      <h3>Saturday</h3>
      <ul>
        <li>Shopping</li>
      </ul>
    </div>
    <div class="day">
      <h3>Sunday</h3>
      <ul>
        <li>Farmers Market</li>
        <li>Classic Vanilla Ice Cream</li>
        <li>Vegan Vanilla Bean Coconut Ice Cream</li>
      </ul>
    </div>
    <div class="day">
      <h3>Monday</h3>
      <ul>
        <li>Turkey pickup</li>
        <li>Turkey dry brining</li>
        <li>Vegan Gravy</li>
      </ul>
    </div>
    <div class="day">
      <h3>Tuesday</h3>
      <ul>
        <li>Pumpkin Spice Latte Cheesecake</li>
        <li>Vegan Pie Crust (night)</li>
      </ul>
    </div>
    <div class="day">
      <h3>Wednesday</h3>
      <ul>
        <li>Dinner roll assembly</li>
        <li>Super Apple Pie</li>
        <li>Vegan Macaroni and Cheese (partially)</li>
        <li>Vegan Green Bean Casserole (prepare)</li>
      </ul>
    </div>
    <div class="day">
      <h3>Thursday - Thanksgiving</h3>
      <ul>
        <li>Dinner roll baking</li>
        <li>Once a Year Mashed Potatoes</li>
        <li>Vegan Saffron Mashed Potatoes</li>
        <li>Vegan Macaroni and Cheese (finished)</li>
        <li>Vegan Green Bean Casserole (finish)</li>
        <li>Turkey (roasting)</li>
      </ul>
    </div>
  </div>

  <div id="shopping-list-column" class="column">
    <h2>Shopping List</h2>
    <div id="shopping-list">
      <h3>Produce</h3>
      <ul>
        <li><strong>Potatoes</strong>: 10 lb bag (Yukon Gold or other mashing potatoes)</li>
        <li><strong>Onions</strong>: 2 large yellow or white</li>
        <li><strong>Shallots</strong>: 2 medium</li>
        <li><strong>Garlic</strong>: 3 heads</li>
        <li><strong>Apples</strong>: 4 lbs (Granny Smith, Honeycrisp, Braeburn, or Golden Delicious)</li>
        <li><strong>Green Beans</strong>: 2 lbs</li>
        <li><strong>Mushrooms</strong>: 1 lb (button, baby bella, or cremini)</li>
        <li><strong>Winter Squash</strong>: 1 small (or 1 can pumpkin puree)</li>
        <li><strong>Limes</strong>: 2</li>
        <li><strong>Lemons</strong>: 1</li>
        <li><strong>Fresh Herbs</strong>: 1 bunch Sage, 1 bunch Thyme</li>
      </ul>
      <h3>Meat</h3>
      <ul>
        <li><strong>Turkey</strong>: 1 (12-14 lb)</li>
      </ul>
      <h3>Dairy &amp; Eggs</h3>
      <ul>
        <li><strong>Unsalted Butter</strong>: 2 lbs</li>
        <li><strong>Heavy Cream</strong>: 1 quart</li>
        <li><strong>Whole Milk</strong>: 1 half-gallon</li>
        <li><strong>Cream Cheese</strong>: 2 (8-ounce) packages</li>
        <li><strong>Eggs</strong>: 1 dozen</li>
      </ul>
      <h3>Vegan/Dairy-Free</h3>
      <ul>
        <li><strong>Vegan Butter/Margarine</strong>: 1 container</li>
        <li><strong>Plant-based Milk</strong>: 1 half-gallon (Almond, Soy, or Rice)</li>
        <li><strong>Full-fat Coconut Milk</strong>: 2 (14-ounce) cans</li>
        <li><strong>Condensed Coconut Milk</strong>: 1 can</li>
        <li><strong>Coconut Cream</strong>: 1 carton</li>
        <li><strong>Canned Coconut Milk</strong>: 1 can</li>
      </ul>
      <h3>Pantry</h3>
      <ul>
        <li><strong>All-Purpose Flour</strong>: 5 lb bag</li>
        <li><strong>Bread Flour</strong>: 3 lb bag</li>
        <li><strong>Sugar</strong>: 4 lb bag (granulated)</li>
        <li><strong>Brown Sugar</strong>: 1 bag (light or dark)</li>
        <li><strong>Maple Syrup</strong>: 1 bottle</li>
        <li><strong>Vegetable Broth</strong>: 2 quarts (or bouillon)</li>
        <li><strong>Macaroni/Elbow Pasta</strong>: 1 lb box</li>
        <li><strong>Graham Crackers</strong>: 1 box</li>
        <li><strong>Crispy Fried Onions</strong>: 1 large container</li>
        <li><strong>Vegetable Shortening</strong>: 1 container</li>
        <li><strong>Nutritional Yeast</strong>: 1 container</li>
        <li><strong>Active Dry Yeast</strong>: 1 packet</li>
        <li><strong>Corn Syrup</strong>: 1 bottle</li>
        <li><strong>Espresso Powder</strong>: 1 jar</li>
        <li><strong>Apple Cider</strong>: 1 bottle</li>
        <li><strong>Apple Jelly</strong>: 1 jar</li>
        <li><strong>Applejack (or Brandy)</strong>: 1 small bottle</li>
        <li><strong>Dark Rum</strong>: 1 small bottle</li>
        <li><strong>Soy Sauce</strong> (or Tamari): 1 bottle</li>
        <li><strong>Tomato Paste</strong>: 1 small can</li>
        <li><strong>Agave Nectar</strong>: 1 bottle</li>
        <li><strong>Molasses</strong>: 1 jar</li>
        <li><strong>Dijon Mustard</strong>: 1 jar</li>
        <li><strong>Vegetable Oil</strong>: 1 bottle</li>
        <li><strong>Seasoned Bread Crumbs</strong>: 1 container</li>
      </ul>
      <h3>Spices &amp; Seasoning</h3>
      <ul>
        <li><strong>Kosher Salt</strong></li>
        <li><strong>Sea Salt</strong> (Flaky)</li>
        <li><strong>Black Pepper</strong> (whole or ground)</li>
        <li><strong>Vanilla Beans</strong>: 2</li>
        <li><strong>Vanilla Extract</strong></li>
        <li><strong>Ground Cinnamon</strong></li>
        <li><strong>Ground Ginger</strong></li>
        <li><strong>Ground Nutmeg</strong></li>
        <li><strong>Grains of Paradise</strong> (optional)</li>
        <li><strong>Saffron Threads</strong></li>
        <li><strong>Onion Powder</strong></li>
        <li><strong>Garlic Powder</strong></li>
        <li><strong>Tapioca Flour/Starch</strong></li>
      </ul>
    </div>
  </div>

</div>