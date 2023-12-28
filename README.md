## Explore the Structure: 
 |-- index.html
 |-- style.css
 |-- script.js
 |-- README.md


 
    -  index.html: Main HTML file for your project.
    -  style.css: CSS file for styling.
    -  script.js: JavaScript file for scripting logic.
    - README.md: Documentation for your project.





## JavaScript:

   # Fetch Data:
        Uses fetch to retrieve data from a Shopify JSON file.
        The JSON data is assumed to have a structure with categories and products within those categories.

   # Data Processing:
        Prints categories and assigns a flattened array of all products to the allProducts variable.
        Calls the displayAllProducts function to initially show all products.

   # Display All Products Function:
        Constructs HTML for each product in the allProducts array.
        Updates the content of the '.wrap-3 .row' element with the generated HTML.

   # Category Click Event Listeners:
        Listens for clicks on category buttons ('Men', 'Women', 'Kids').
        Calls the showProducts function with the selected category and the fetched data.

     Show Products Function:
        Filters products based on the selected category and updates the displayed products.
        Constructs HTML for each product in the filtered array.
        Updates the content of the '.wrap-3 .row' element with the generated HTML.

## Product Display:

    Each product is displayed within a box with an image, product information, price, and an "Add to Cart" button ( add to cart button is dummy button).


    # Project deployed on netlify 

   ## project link : ""