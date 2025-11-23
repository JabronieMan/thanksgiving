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

  .recipe-list li, .schedule li, #shopping-list li {
    margin-bottom: 10px;
  }

  .day {
    margin-bottom: 20px;
  }

  #shopping-list li {
    position: relative;
  }

  .hovercard {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1;
    width: 250px;
  }

  .hovercard p {
    margin: 0 0 5px 0;
    font-weight: bold;
  }

  .hovercard ul {
    margin: 0;
    padding: 0 0 0 15px;
  }

  #shopping-list li:hover .hovercard {
    display: block;
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
        <li><strong>Potatoes</strong>: 10 lb bag
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Saffron Mashed Potatoes</li>
              <li>Once a Year Mashed Potatoes</li>
            </ul>
          </div>
        </li>
        <li><strong>Onions</strong>: 2 large yellow or white
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Whole-Roasted Turkey</li>
            </ul>
          </div>
        </li>
        <li><strong>Shallots</strong>: 2 medium
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Green Bean Casserole</li>
            </ul>
          </div>
        </li>
        <li><strong>Garlic</strong>: 3 heads
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Green Bean Casserole</li>
              <li>Buttery Pull-Apart Dinner Rolls</li>
              <li>Whole-Roasted Turkey</li>
              <li>Vegan Saffron Mashed Potatoes</li>
            </ul>
          </div>
        </li>
        <li><strong>Apples</strong>: 4 lbs
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Green Beans</strong>: 2 lbs
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Green Bean Casserole</li>
            </ul>
          </div>
        </li>
        <li><strong>Mushrooms</strong>: 1 lb
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Green Bean Casserole</li>
            </ul>
          </div>
        </li>
        <li><strong>Winter Squash</strong>: 1 small
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Limes</strong>: 2
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Lemons</strong>: 1
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
        <li><strong>Fresh Herbs</strong>: 1 bunch Sage, 1 bunch Thyme
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Whole-Roasted Turkey</li>
            </ul>
          </div>
        </li>
      </ul>
      <h3>Meat</h3>
      <ul>
        <li><strong>Turkey</strong>: 1 (12-14 lb)
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Whole-Roasted Turkey</li>
            </ul>
          </div>
        </li>
      </ul>
      <h3>Dairy &amp; Eggs</h3>
      <ul>
        <li><strong>Unsalted Butter</strong>: 2 lbs
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Buttery Pull-Apart Dinner Rolls</li>
              <li>Once a Year Mashed Potatoes</li>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Heavy Cream</strong>: 1 quart
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Classic Vanilla Ice Cream</li>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Whole Milk</strong>: 1 half-gallon
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Classic Vanilla Ice Cream</li>
              <li>Buttery Pull-Apart Dinner Rolls</li>
            </ul>
          </div>
        </li>
        <li><strong>Cream Cheese</strong>: 2 (8-ounce) packages
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Eggs</strong>: 1 dozen
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
              <li>Classic Vanilla Ice Cream</li>
            </ul>
          </div>
        </li>
      </ul>
      <h3>Vegan/Dairy-Free</h3>
      <ul>
        <li><strong>Vegan Butter/Margarine</strong>: 1 container
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Green Bean Casserole</li>
              <li>Vegan Macaroni and Cheese</li>
              <li>Vegan Saffron Mashed Potatoes</li>
            </ul>
          </div>
        </li>
        <li><strong>Plant-based Milk</strong>: 1 half-gallon
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Pie Crust</li>
              <li>Vegan Saffron Mashed Potatoes</li>
              <li>Vegan Green Bean Casserole</li>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
        <li><strong>Full-fat Coconut Milk</strong>: 2 (14-ounce) cans
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Vanilla Bean Coconut Ice Cream</li>
            </ul>
          </div>
        </li>
        <li><strong>Condensed Coconut Milk</strong>: 1 can
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Vanilla Bean Coconut Ice Cream</li>
            </ul>
          </div>
        </li>
        <li><strong>Coconut Cream</strong>: 1 carton
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Vanilla Bean Coconut Ice Cream</li>
            </ul>
          </div>
        </li>
      </ul>
      <h3>Pantry</h3>
      <ul>
        <li><strong>All-Purpose Flour</strong>: 5 lb bag
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Pie Crust</li>
              <li>Super Apple Pie</li>
              <li>Vegan Gravy</li>
              <li>Vegan Green Bean Casserole</li>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
        <li><strong>Bread Flour</strong>: 3 lb bag
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Buttery Pull-Apart Dinner Rolls</li>
            </ul>
          </div>
        </li>
        <li><strong>Sugar</strong>: 4 lb bag
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Classic Vanilla Ice Cream</li>
              <li>Vegan Pie Crust</li>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Brown Sugar</strong>: 1 bag
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Maple Syrup</strong>: 1 bottle
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Vegetable Broth</strong>: 2 quarts
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Gravy</li>
              <li>Vegan Green Bean Casserole</li>
            </ul>
          </div>
        </li>
        <li><strong>Macaroni/Elbow Pasta</strong>: 1 lb box
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
        <li><strong>Graham Crackers</strong>: 1 box
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Crispy Fried Onions</strong>: 1 large container
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Green Bean Casserole</li>
            </ul>
          </div>
        </li>
        <li><strong>Vegetable Shortening</strong>: 1 container
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Pie Crust</li>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Nutritional Yeast</strong>: 1 container
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Gravy</li>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
        <li><strong>Active Dry Yeast</strong>: 1 packet
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Buttery Pull-Apart Dinner Rolls</li>
            </ul>
          </div>
        </li>
        <li><strong>Corn Syrup</strong>: 1 bottle
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Espresso Powder</strong>: 1 jar
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Apple Cider</strong>: 1 bottle
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Apple Jelly</strong>: 1 jar
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Applejack (or Brandy)</strong>: 1 small bottle
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Dark Rum</strong>: 1 small bottle
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Vanilla Bean Coconut Ice Cream</li>
            </ul>
          </div>
        </li>
        <li><strong>Soy Sauce</strong> (or Tamari): 1 bottle
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Gravy</li>
            </ul>
          </div>
        </li>
        <li><strong>Tomato Paste</strong>: 1 small can
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
        <li><strong>Agave Nectar</strong>: 1 bottle
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
        <li><strong>Molasses</strong>: 1 jar
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Whole-Roasted Turkey</li>
            </ul>
          </div>
        </li>
        <li><strong>Dijon Mustard</strong>: 1 jar
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Gravy</li>
            </ul>
          </div>
        </li>
        <li><strong>Vegetable Oil</strong>: 1 bottle
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Buttery Pull-Apart Dinner Rolls</li>
            </ul>
          </div>
        </li>
        <li><strong>Seasoned Bread Crumbs</strong>: 1 container
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
      </ul>
      <h3>Spices &amp; Seasoning</h3>
      <ul>
        <li><strong>Kosher Salt</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Classic Vanilla Ice Cream</li>
              <li>Super Apple Pie</li>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Sea Salt</strong> (Flaky)
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Macaroni and Cheese</li>
              <li>Buttery Pull-Apart Dinner Rolls</li>
            </ul>
          </div>
        </li>
        <li><strong>Black Pepper</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Green Bean Casserole</li>
              <li>Vegan Saffron Mashed Potatoes</li>
            </ul>
          </div>
        </li>
        <li><strong>Vanilla Beans</strong>: 2
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Classic Vanilla Ice Cream</li>
              <li>Vegan Vanilla Bean Coconut Ice Cream</li>
            </ul>
          </div>
        </li>
        <li><strong>Vanilla Extract</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Vanilla Bean Coconut Ice Cream</li>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Ground Cinnamon</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Ground Ginger</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Ground Nutmeg</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Vanilla Bean Coconut Ice Cream</li>
              <li>Pumpkin Spice Latte Cheesecake</li>
            </ul>
          </div>
        </li>
        <li><strong>Grains of Paradise</strong> (optional)
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
        <li><strong>Saffron Threads</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Saffron Mashed Potatoes</li>
            </ul>
          </div>
        </li>
        <li><strong>Onion Powder</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Gravy</li>
            </ul>
          </div>
        </li>
        <li><strong>Garlic Powder</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Vegan Macaroni and Cheese</li>
            </ul>
          </div>
        </li>
        <li><strong>Tapioca Flour/Starch</strong>
          <div class="hovercard">
            <p>Used in:</p>
            <ul>
              <li>Super Apple Pie</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>

</div>
