# Thanksgiving Recipe Collection

This project is a collection of Thanksgiving recipes, formatted for easy viewing and deployment on GitHub Pages using Jekyll.

## Project Structure

*   `_config.yml`: The main configuration file for the Jekyll site. It sets the theme, title, and other site-wide settings.
*   `_posts/`: This directory contains the recipe files, each formatted as a markdown file with a specific naming convention (`YYYY-MM-DD-title.md`) and Jekyll front matter.
*   `_layouts/`: This directory contains the HTML layouts for the site, including `default.html` for the base template and `post.html` for individual recipe pages.
*   `index.html`: The home page of the site, which lists all the recipes from the `_posts` directory.
*   `README.md`: This file, providing an overview of the project and instructions for development.

## Development Workflow

This project uses Jekyll to manage recipes as posts. To add, edit, or delete a recipe, follow these guidelines:

### Adding a New Recipe

1.  Create a new markdown file in the `_posts` directory.
2.  Name the file using the `YYYY-MM-DD-your-recipe-title.md` format (e.g., `2025-11-17-green-bean-casserole.md`).
3.  Add the following front matter to the top of the file:
    ```yaml
    ---
    layout: post
    title: "Your Recipe Title"
    ---
    ```
4.  Write the recipe content in markdown below the front matter.

### Editing a Recipe

To edit an existing recipe, simply open the corresponding markdown file in the `_posts` directory and make your changes.

### Deleting a Recipe

To delete a recipe, remove its markdown file from the `_posts` directory.

## Deployment

This project is set up for automatic deployment to GitHub Pages. Any changes pushed to the `main` branch will trigger a new build and deployment of the site.

## Interacting with this Project using an Agentic System

This project is designed to be easily managed by an agentic system. The following are key interaction points:

*   **Recipe Management:** The agent can add, edit, or delete recipes by creating, modifying, or deleting markdown files in the `_posts` directory. The agent should be instructed to follow the file naming and front matter conventions.
*   **Configuration:** The agent can modify the site's theme, title, and other settings by editing the `_config.yml` file.
*   **Layouts:** The agent can change the site's appearance by editing the HTML and Liquid templates in the `_layouts` directory.

By leveraging this structure, an agentic system can efficiently manage the content and presentation of this recipe collection.
