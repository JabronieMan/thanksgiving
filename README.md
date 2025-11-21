# Thanksgiving Recipe Collection

This project is a collection of Thanksgiving recipes, now powered by Jekyll for easy management and deployment on GitHub Pages.

## Project Structure

*   `_config.yml`: Jekyll's main configuration file, defining site-wide settings and collections.
*   `_layouts/`: Contains HTML templates for the site.
    *   `default.html`: The base layout providing the overall structure and styling.
    *   `recipe.html`: A specific layout for rendering individual recipe pages.
*   `_recipes/`: This directory is a Jekyll collection containing individual recipe files in markdown format. Each file includes YAML front matter for metadata.
*   `index.md`: The main page of the site, which dynamically lists all recipes from the `_recipes` collection.
*   `README.md`: This file, providing an overview of the project.

## How it Works (Jekyll & GitHub Pages)

This site leverages Jekyll, a static site generator, which is natively supported by GitHub Pages.

1.  **Markdown to HTML:** Jekyll takes the markdown files in `_recipes/` and `index.md`, processes them using the specified layouts (`recipe.html`, `default.html`), and converts them into static HTML pages.
2.  **Dynamic Index:** The `index.md` file uses Jekyll's Liquid templating to automatically generate a list of all recipes, linking to their respective pages. This means you no longer need to manually update the main page when adding new recipes.
3.  **Deployment:** When changes are pushed to the GitHub repository, GitHub Pages automatically builds the Jekyll site and deploys the generated HTML, CSS, and other assets.

## Adding New Recipes

To add a new recipe:

1.  Create a new markdown file (e.g., `new-recipe.md`) inside the `_recipes/` directory.
2.  At the top of the new file, add Jekyll "front matter" (a YAML block) like this:
    ```yaml
    ---
    layout: recipe
    title: Your Recipe Title Here
    ---
    ```
3.  Below the front matter, write your recipe content using markdown, following the existing structure (e.g., `### Ingredients`, `### Instructions`).
4.  Commit and push your changes. GitHub Pages will automatically rebuild the site, and your new recipe will appear on the home page.

## Local Development (Optional)

To preview your site locally before pushing to GitHub:

1.  **Install Jekyll:** Follow the official Jekyll installation guide: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)
2.  **Serve the site:** Navigate to the project root in your terminal and run:
    ```bash
    bundle exec jekyll serve
    ```
    This will build the site and serve it at `http://localhost:4000` (or another port if 4000 is in use).
