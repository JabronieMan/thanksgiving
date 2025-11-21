document.addEventListener('DOMContentLoaded', function() {
    const recipeDataElement = document.getElementById('recipe-data');
    const recipeCheckboxes = document.querySelectorAll('.recipe-checkbox');
    const shoppingListUl = document.querySelector('#shopping-list ul');
    const shoppingListP = document.querySelector('#shopping-list p');

    if (!recipeDataElement || !recipeCheckboxes.length || !shoppingListUl) {
        return;
    }

    const recipes = JSON.parse(recipeDataElement.textContent);
    let shoppingList = {};

    function updateShoppingList() {
        shoppingListUl.innerHTML = '';
        const allIngredients = Object.values(shoppingList).flat();

        if (allIngredients.length === 0) {
            shoppingListP.style.display = 'block';
        } else {
            shoppingListP.style.display = 'none';
            // Use a Set to handle duplicate ingredients
            const uniqueIngredients = new Set(allIngredients);
            uniqueIngredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                shoppingListUl.appendChild(li);
            });
        }
    }

    recipeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const recipeTitle = this.dataset.recipeTitle;
            if (this.checked) {
                if (recipes[recipeTitle] && recipes[recipeTitle].ingredients) {
                    shoppingList[recipeTitle] = recipes[recipeTitle].ingredients;
                }
            } else {
                delete shoppingList[recipeTitle];
            }
            updateShoppingList();
        });
    });

    // Initial render
    updateShoppingList();
});
