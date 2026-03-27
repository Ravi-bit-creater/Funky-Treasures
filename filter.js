document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".category-product-card");
    const categoryFilters = document.querySelectorAll('.filter-group input[type="radio"]');
    const priceFilters = document.querySelectorAll('.filter-group input[type="checkbox"]');
    const selects = document.querySelectorAll(".filter-group select");
    const clearBtn = document.querySelector(".filter-top a");

    // Find availability select specifically
    let availabilityFilter = null;
    selects.forEach((select) => {
        const group = select.closest(".filter-group");
        const heading = group ? group.querySelector("h4") : null;
        if (heading && heading.textContent.trim().toLowerCase() === "availability") {
            availabilityFilter = select;
        }
    });

    function getCheckedCategory() {
        const checked = document.querySelector('.filter-group input[type="radio"]:checked');
        return checked ? checked.value.trim() : "";
    }

    function getCheckedPriceRanges() {
        const ranges = [];
        priceFilters.forEach((cb) => {
            if (cb.checked) {
                const labelText = cb.parentElement.textContent.trim();
                ranges.push(labelText);
            }
        });
        return ranges;
    }

    function matchesPrice(price, ranges) {
        if (ranges.length === 0) return true;

        return ranges.some((range) => {
            const text = range.replace(/\s+/g, " ").trim();

            if (text.includes("Under ₹50")) {
                return price < 50;
            }

            if (text.includes("₹50 - ₹100")) {
                return price >= 50 && price <= 100;
            }

            if (text.includes("₹100 - ₹150")) {
                return price >= 100 && price <= 150;
            }

            if (text.includes("₹150+")) {
                return price >= 150;
            }

            return false;
        });
    }

    function applyFilters() {
        const selectedCategory = getCheckedCategory();
        const selectedPrices = getCheckedPriceRanges();
        const availability = availabilityFilter ? availabilityFilter.value.trim() : "All";

        products.forEach((product) => {
            const category = (product.dataset.category || "").trim();
            const price = parseInt(product.dataset.price || "0", 10);
            const stock = (product.dataset.stock || "").trim().toLowerCase();

            let show = true;

            // Category
            if (selectedCategory && category !== selectedCategory) {
                show = false;
            }

            // Price
            if (show && !matchesPrice(price, selectedPrices)) {
                show = false;
            }

            // Availability
            if (show && availability !== "All") {
                if (availability === "In Stock" && stock !== "in") {
                    show = false;
                }

                if (availability === "Out of Stock" && stock !== "out") {
                    show = false;
                }
            }

            product.style.display = show ? "" : "none";
        });
    }

    // Category listeners
    categoryFilters.forEach((radio) => {
        radio.addEventListener("change", applyFilters);
    });

    // Price listeners
    priceFilters.forEach((checkbox) => {
        checkbox.addEventListener("change", applyFilters);
    });

    // Availability listener
    if (availabilityFilter) {
        availabilityFilter.addEventListener("change", applyFilters);
    }

    // Clear All
    if (clearBtn) {
        clearBtn.addEventListener("click", (e) => {
            e.preventDefault();

            // Reset category radios
            categoryFilters.forEach((radio) => {
                radio.checked = false;
            });

            // Reset price checkboxes
            priceFilters.forEach((checkbox) => {
                checkbox.checked = false;
            });

            // Reset all selects
            selects.forEach((select) => {
                select.selectedIndex = 0;
            });

            // Show all products again
            products.forEach((product) => {
                product.style.display = "";
            });
        });
    }
});