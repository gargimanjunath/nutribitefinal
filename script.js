// Sample Data for Nutribites - Comprehensive Recipe Collection
const recipes = [
    {
        title: "Quinoa Power Bowl",
        desc: "Rich in fiber and protein with a lemon tahini dressing, roasted vegetables, and fresh herbs.",
        image: "assets/images/bhuddhabowl.jpg.png",
        tag: "Vegan",
        details: "Ingredients: quinoa, roasted vegetables, chickpeas, avocado, greens. Prep: 20 min. Enjoy warm or chilled for a hearty meal."
    },
    {
        title: "Avocado Toast",
        desc: "Whole grain bread with smashed avocado, cherry tomatoes, and a sprinkle of nutritional yeast.",
        image: "assets/images/avacado.jpg",
        tag: "Breakfast",
        details: "Ingredients: whole grain bread, ripe avocado, cherry tomatoes, lemon zest, chili flakes. Prep: 10 min. Perfect for a quick breakfast."
    },
    {
        title: "Berry Smoothie",
        desc: "A delicious mix of antioxidant-rich berries, Greek yogurt, and almond milk.",
        image: "assets/images/smoothie.jpg",
        tag: "Drink",
        details: "Ingredients: mixed berries, Greek yogurt, almond milk, honey, chia seeds. Prep: 5 min. Blend until smooth and serve chilled."
    },
    {
        title: "Grilled Chicken Salad",
        desc: "Lean grilled chicken with mixed greens, cucumber, and olive oil vinaigrette.",
        image: "assets/images/chickensalad.jpg.png",
        tag: "Protein",
        details: "Ingredients: grilled chicken breast, mixed greens, cucumber, cherry tomatoes, vinaigrette. Prep: 15 min. A balanced protein-rich lunch."
    },
    {
        title: "Buddha Bowl",
        desc: "Chickpeas, sweet potato, kale, and tahini sauce for a complete meal.",
        image: "assets/images/bhuddhabowl.jpg.png",
        tag: "Vegan",
        details: "Ingredients: chickpeas, sweet potato, kale, quinoa, tahini sauce. Prep: 25 min. Customize with seasonal veggies for freshness."
    },
    {
        title: "Baked Salmon",
        desc: "Wild-caught salmon baked with lemon, herbs, and served with roasted broccoli.",
        image: "assets/images/salmon.jpg.png",
        tag: "Seafood",
        details: "Ingredients: salmon fillet, lemon, garlic, herbs, broccoli. Prep: 30 min. Serve with quinoa or brown rice."
    },
    {
        title: "Green Detox Juice",
        desc: "Fresh spinach, apple, ginger, and lemon juice packed with nutrients.",
        image: "assets/images/juice.jpg.png",
        tag: "Drink",
        details: "Ingredients: spinach, green apple, ginger, lemon, cucumber. Prep: 8 min. Best enjoyed immediately for maximum nutrients."
    },
    {
        title: "Vegetable Stir-fry",
        desc: "Colorful mix of broccoli, peppers, and carrots with garlic and ginger.",
        image: "assets/images/fry.jpg.png",
        tag: "Vegan",
        details: "Ingredients: broccoli, bell peppers, carrots, garlic, ginger, soy sauce. Prep: 15 min. Quick, flavorful, and loaded with veggies."
    },
    {
        title: "Greek Yogurt Parfait",
        desc: "Creamy Greek yogurt layered with granola, berries, and honey.",
        image: "assets/images/yogurt.jpg.png",
        tag: "Breakfast",
        details: "Ingredients: Greek yogurt, granola, fresh berries, honey, nuts. Prep: 8 min. A delicious and protein-packed breakfast option."
    }
];

function generatePlaceholderImage(title, color1 = '#81c784', color2 = '#388e3c') {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="520" viewBox="0 0 800 520">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${color1}" />
                    <stop offset="100%" stop-color="${color2}" />
                </linearGradient>
            </defs>
            <rect width="800" height="520" fill="url(#grad)" rx="30" />
            <text x="50%" y="45%" fill="#ffffff" font-family="Segoe UI, sans-serif" font-size="44" font-weight="700" text-anchor="middle">${title}</text>
            <text x="50%" y="60%" fill="#ffffff" opacity="0.85" font-family="Segoe UI, sans-serif" font-size="24" text-anchor="middle">Healthy Recipes</text>
        </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

const placeholderColors = [
    ['#81c784', '#388e3c'],
    ['#66bb6a', '#2e7d32'],
    ['#aed581', '#558b2f'],
    ['#8bc34a', '#33691e'],
    ['#9ccc65', '#558b2f'],
    ['#7cb342', '#33691e']
];

recipes.forEach((recipe, index) => {
    if (!recipe.image) {
        const colors = placeholderColors[index % placeholderColors.length];
        recipe.image = generatePlaceholderImage(recipe.title, colors[0], colors[1]);
    }
});

const grid = document.getElementById('recipe-grid');
const modal = document.getElementById('recipe-modal');
const modalTag = document.getElementById('modal-tag');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalDetails = document.getElementById('modal-details');

// Function to display recipes dynamically
function displayRecipes() {
    grid.innerHTML = "";
    recipes.forEach((recipe, index) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="card-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="card-content">
                <span class="tag">${recipe.tag}</span>
                <h3>${recipe.title}</h3>
                <p>${recipe.desc}</p>
                <button class="btn" onclick="openRecipeModal('${recipe.title}')">View Recipe</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Open the recipe details modal
function openRecipeModal(title) {
    const recipe = recipes.find((item) => item.title === title);
    if (!recipe) return;

    modalTag.textContent = recipe.tag;
    modalTitle.textContent = recipe.title;
    modalDesc.textContent = recipe.desc;
    modalDetails.textContent = recipe.details;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}

// Close the recipe details modal
function closeRecipeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}

// Smooth scroll to recipes section
function scrollToRecipes() {
    document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
}

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeRecipeModal();
    }
});

// Run the function when the page loads
window.addEventListener('load', displayRecipes);