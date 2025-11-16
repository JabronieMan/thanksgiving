# Thanksgiving Recipe Collection

This project is a collection of Thanksgiving recipes, presented as a single-page web application.

## Project Structure

*   `index.html`: The main file for the website. It contains all the recipes and the logic to display them in a tabbed interface.
*   `recipes/`: This directory contains the individual recipe files in markdown format. The content of these files is embedded within the `index.html` file.
*   `README.md`: This file, providing an overview of the project.

## How it Works

The `index.html` file uses the [Showdown](https://github.com/showdownjs/showdown) library to convert the markdown content from the `recipes/` directory into HTML at runtime. The recipes are displayed in a tabbed interface for easy navigation.

## Development

To add or edit a recipe, you need to:

1.  Modify the markdown content directly within the `index.html` file, inside the `<div id="markdown-content">` element. Each recipe is in its own `<div data-recipe="...">`.
2.  Alternatively, you can edit the individual markdown files in the `recipes/` directory, and then update the content in the `index.html` file to match.

This setup is designed to be simple and self-contained, with no build process required.