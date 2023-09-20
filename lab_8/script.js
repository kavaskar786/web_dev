const productList = document.getElementById("product-list");
        const searchInput = document.getElementById("search");
        const sortSelect = document.getElementById("sort");

        let productsData = [];

        // Function to fetch and display products
        function fetchProducts() {
            fetch("https://cynthiaesthermetilda.github.io/Xhrdemo/products.json")
                .then(response => response.json())
                .then(data => {
                    productsData = data;
                    renderProducts();
                })
                .catch(error => console.error("Error fetching data:", error));
        }

        // Function to render products based on current data
        function renderProducts() {
            const filteredProducts = filterProducts(productsData, searchInput.value);
            const sortedProducts = sortProducts(filteredProducts, sortSelect.value);

            productList.innerHTML = ""; // Clear the existing list

            sortedProducts.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.name;

                const productName = document.createElement("h2");
                productName.textContent = product.name;

                const productDescription = document.createElement("p");
                productDescription.textContent = product.description;

                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

                productDiv.appendChild(productImage);
                productDiv.appendChild(productName);
                productDiv.appendChild(productDescription);
                productDiv.appendChild(productPrice);

                productList.appendChild(productDiv);
            });
        }

        // Function to filter products based on search input
        function filterProducts(products, searchText) {
            return products.filter(product =>
                product.name.toLowerCase().includes(searchText.toLowerCase()) ||
                product.description.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        // Function to sort products
        function sortProducts(products, sortBy) {
            if (sortBy === "name") {
                return [...products].sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortBy === "price") {
                return [...products].sort((a, b) => a.price - b.price);
            }
        } 

        // Event listeners
        searchInput.addEventListener("input", renderProducts);
        sortSelect.addEventListener("change", renderProducts);

        // Fetch products when the page loads
        fetchProducts();