document.addEventListener('DOMContentLoaded', function() {
    // --- HELPERS ---
    function parseFraction(fraction) {
        if (!fraction || typeof fraction !== 'string') return 0;
        if (fraction.includes('/')) {
            const parts = fraction.split('/');
            if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[1] !== '0') {
                return parseFloat(parts[0]) / parseFloat(parts[1]);
            }
        }
        return parseFloat(fraction);
    }

    function parseIngredient(ingredientStr) {
        const units = ['cup', 'tablespoon', 'tbsp', 'teaspoon', 'tsp', 'ounce', 'oz', 'pound', 'lb', 'gram', 'g', 'kg', 'ml'];
        const unitRegex = `(${units.join('|')})s?`; // Optional 's' for plural
        const regex = new RegExp(`^([\d\.\s/]+)\s*${unitRegex}\s*(.+)`, 'i');
        const match = ingredientStr.match(regex);

        if (match) {
            const quantityStr = match[1].trim();
            const unit = match[2] ? match[2].toLowerCase() : null;
            const name = match[3].trim();

            let totalQuantity = 0;
            quantityStr.split(' ').forEach(part => {
                totalQuantity += parseFraction(part);
            });
            
            return { quantity: totalQuantity, unit: unit, name: name };
        }
        return { quantity: null, unit: null, name: ingredientStr };
    }

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
        const unparsedIngredients = new Set();

        const allIngredientStrings = Object.values(selectedRecipes).flat();

        allIngredientStrings.forEach(ingStr => {
            const parsed = parseIngredient(ingStr);
            if (parsed.quantity !== null && parsed.unit !== null) {
                const key = `${parsed.name}|${parsed.unit}`;
                if (!aggregatedIngredients.has(key)) {
                    aggregatedIngredients.set(key, { name: parsed.name, unit: parsed.unit, quantity: 0 });
                }
                aggregatedIngredients.get(key).quantity += parsed.quantity;
            } else {
                unparsedIngredients.add(parsed.name);
            }
        });

        shoppingListUl.innerHTML = '';
        if (aggregatedIngredients.size === 0 && unparsedIngredients.size === 0) {
            shoppingListP.style.display = 'block';
        } else {
            shoppingListP.style.display = 'none';
            
            aggregatedIngredients.forEach(item => {
                const li = document.createElement('li');
                // Round to 2 decimal places to handle floating point math issues
                const displayQuantity = Math.round(item.quantity * 100) / 100;
                li.textContent = `${displayQuantity} ${item.unit}${displayQuantity > 1 ? 's' : ''} ${item.name}`;
                shoppingListUl.appendChild(li);
            });

            unparsedIngredients.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                shoppingListUl.appendChild(li);
            });
        }
    }

    // --- EVENT LISTENERS ---
    if (drawerToggle && drawerContent) {
        drawerToggle.addEventListener('click', function() {
            const isHidden = drawerContent.style.display === 'none';
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
