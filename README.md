# Thanksgiving Recipe Collection

This project is a collection of Thanksgiving recipes, powered by Jekyll and made interactive with client-side JavaScript.

## Project Structure

*   `_config.yml`: Jekyll's main configuration file.
*   `_layouts/`: Contains HTML templates for `default` and `recipe` pages.
*   `_recipes/`: A Jekyll collection containing individual recipe files in markdown format. Each file's front matter includes an `ingredients` list.
*   `index.md`: The main page of the site. It contains the layout for the interactive features and includes the necessary Liquid templating to generate the data.
*   `assets/js/shopping-list.js`: Client-side JavaScript that handles all interactive logic, including the recipe drawer and the shopping list generator.
*   `README.md`: This file.

## How it Works

This site uses Jekyll to build the static pages and client-side JavaScript to provide an interactive experience.

1.  **Jekyll Build:** Jekyll processes the markdown files, using the layouts in `_layouts/` to create the individual recipe pages and the main index page.
2.  **Data Embedding:** On the main page (`index.md`), Jekyll's Liquid templating language is used to embed all recipe ingredient data into a JSON object, making it accessible to the client-side script.
3.  **Interactive Features (JavaScript):** The `assets/js/shopping-list.js` script handles two main features on the homepage:
    *   **Recipe Drawer:** A toggle button to show and hide a list of links to all individual recipe pages.
    *   **Shopping List Generator:** A list of recipes with checkboxes that, when selected, dynamically populates a master shopping list.
4.  **Deployment:** When changes are pushed to GitHub, GitHub Pages automatically runs the Jekyll build and deploys the resulting static site (HTML, CSS, and JS).

## Homepage Features

The main page is split into two interactive sections:

### Recipe Drawer

At the top of the page, there is a **"Show All Recipes"** button. Clicking this will expand a drawer containing direct links to each individual recipe page, allowing for easy navigation.

### Shopping List Generator

This section consists of two parts:
1.  **Recipe Selection:** A list of all recipes, each with a checkbox.
2.  **Shopping List:** A content area that displays the aggregated ingredients.

When you check a box next to a recipe, its ingredients are automatically added to the shopping list. The list updates in real-time and only shows the unique set of ingredients from all selected recipes.

## Adding New Recipes

1.  Create a new markdown file in the `_recipes/` directory.
2.  Add the required "front matter" to the top of the file, including a `title` and an `ingredients` list.
    ```yaml
    ---
    layout: recipe
    title: Your Recipe Title Here
    ingredients:
      - Ingredient 1
      - Ingredient 2
    ---
    ```
3.  Write your recipe content below the front matter.
4.  Commit and push your changes. The new recipe will automatically appear in the recipe drawer and the shopping list generator.

## Local Development (Optional)

To preview your site locally:

1.  **Install Jekyll:** Follow the official guide at [jekyllrb.com](https://jekyllrb.com/docs/installation/).
2.  **Serve the site:** In your terminal, run `bundle exec jekyll serve`.
3.  Open your browser to `http://localhost:4000`.
