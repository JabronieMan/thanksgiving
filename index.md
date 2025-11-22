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
      </ul>
    </div>
    <div class="day">
      <h3>Thursday - Thanksgiving</h3>
      <ul>
        <li>Dinner roll baking</li>
        <li>Once a Year Mashed Potatoes</li>
        <li>Vegan Saffron Mashed Potatoes</li>
        <li>Vegan Macaroni and Cheese (finished)</li>
        <li>Vegan Green Bean Casserole</li>
        <li>Turkey (roasting)</li>
      </ul>
    </div>
  </div>

  <div id="shopping-list-column" class="column">
    <h2>Shopping List</h2>
    <p>Coming soon...</p>
  </div>

</div>