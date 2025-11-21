document.addEventListener('DOMContentLoaded', function() {
    // --- DOM ELEMENTS ---
    const drawerToggle = document.getElementById('recipe-drawer-toggle');
    const drawerContent = document.getElementById('recipe-drawer-content');
    const recipeDataElement = document.getElementById('recipe-data');
    const recipeCheckboxes = document.querySelectorAll('.recipe-checkbox');
    const shoppingListUl = document.querySelector('#shopping-list ul');
    const shoppingListP = document.querySelector('#shopping-list p');

    // --- INITIALIZATION ---
    if (!recipeDataElement || !recipeCheckboxes.length || !shoppingListUl) {
        console.error("Required elements for shopping list not found.");
        return;
    }
    const recipes = JSON.parse(recipeDataElement.textContent);
    let selectedRecipes = {};

    // --- FUNCTIONS ---
    function updateShoppingList() {
        const aggregatedIngredients = new Map();
        const unquantifiedIngredients = new Set();

        const allIngredientObjects = Object.values(selectedRecipes).flat();

        allIngredientObjects.forEach(ing => {
            // Use a fallback for ingredients that might not have been structured
            if (typeof ing !== 'object' || ing === null) {
                unquantifiedIngredients.add(ing);
                return;
            }

            const { quantity, unit, name } = ing;

            // Treat ingredients with no quantity or no unit as "unquantified"
            if (!quantity || !unit) {
                const displayName = [quantity, unit, name].filter(Boolean).join(' ');
                unquantifiedIngredients.add(displayName);
                return;
            }

            const key = `${name}|${unit}`;
            if (!aggregatedIngredients.has(key)) {
                aggregatedIngredients.set(key, { name: name, unit: unit, quantity: 0 });
            }
            aggregatedIngredients.get(key).quantity += Number(quantity);
        });

        shoppingListUl.innerHTML = '';
        if (aggregatedIngredients.size === 0 && unquantifiedIngredients.size === 0) {
            shoppingListP.style.display = 'block';
        } else {
            shoppingListP.style.display = 'none';
            
            aggregatedIngredients.forEach(item => {
                const li = document.createElement('li');
                // Round to 2 decimal places to handle floating point math issues
                const displayQuantity = Math.round(item.quantity * 100) / 100;
                const pluralS = (item.unit.endsWith('s') || displayQuantity <= 1) ? '' : 's';
                li.textContent = `${displayQuantity} ${item.unit}${pluralS} ${item.name}`;
                shoppingListUl.appendChild(li);
            });

            unquantifiedIngredients.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                shoppingListUl.appendChild(li);
            });
        }
    }

    // --- EVENT LISTENERS ---
    if (drawerToggle && drawerContent) {
        drawerToggle.addEventListener('click', function() {
            const computedStyle = window.getComputedStyle(drawerContent);
            const isHidden = computedStyle.display === 'none';
            drawerContent.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Hide All Recipes' : 'Show All Recipes';
        });
    }

    recipeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const recipeTitle = this.dataset.recipeTitle;
            if (this.checked) {
                if (recipes[recipeTitle] && recipes[recipeTitle].ingredients) {
                    selectedRecipes[recipeTitle] = recipes[recipeTitle].ingredients;
                }
            } else {
                delete selectedRecipes[recipeTitle];
            }
            updateShoppingList();
        });
    });

    // --- INITIAL RENDER ---
    updateShoppingList();
});