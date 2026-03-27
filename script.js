const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const searchData = [
    { name: "Hamper", type: "Category", link: "pages/hampers.html" },
    { name: "Scrunchies", type: "Category", link: "pages/scrunchies.html" },
    { name: "Casual Clips", type: "Category", link: "pages/casual-clips.html" },
    { name: "Trendy Clips", type: "Category", link: "pages/trendy-clips.html" },
    { name: "Kids Zone", type: "Category", link: "pages/kids-zone.html" },
    { name: "Bouquet", type: "Category", link: "pages/bouquet.html" },

    { name: "Silky Scrunchie", type: "Product", link: "pages/scrunchies.html" },

    { name: "Baby Clips", type: "Product", link: "pages/kids-zone.html" },
    { name: "Mini Butterfly", type: "Product", link: "pages/kids-zone.html" },
    { name: "Mixed Clips Variety", type: "Product", link: "pages/kids-zone.html" },
    { name: "Shiny Butterfly", type: "Product", link: "pages/kids-zone.html" },

    { name: "Daisy Clip (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Star Clip (B)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Hibiscus Clip (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Heart Clips (S)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Curvy Flower Clips (S)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Marble Flower Clips (S)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Dual Glassy Floral Clips (B)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Floral Blacky Border Clips (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Yellow Daisy (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Hearty Apple Clips (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Daisy White Clips (B)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Bi-Floral Clips (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Glassy Twist (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Shiny Twist (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Glassy Heart (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Matte-Floral Clips (B)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Tri-Floral Clips", type: "Product", link: "pages/casual-clips.html" },
    { name: "Glassy Flower (M)", type: "Product", link: "pages/casual-clips.html" },
    { name: "SunFlower Clips (S)", type: "Product", link: "pages/casual-clips.html" },
    { name: "Half Curvey Flower Clips (M)", type: "Product", link: "pages/casual-clips.html" },

    { name: "Furry Clips", type: "Product", link: "pages/trendy-clips.html" },
    { name: "Pearl Clips", type: "Product", link: "pages/trendy-clips.html" },
    { name: "Floral Twists", type: "Product", link: "pages/trendy-clips.html" },
    { name: "Shell Clips", type: "Product", link: "pages/trendy-clips.html" },
    { name: "Gold Finish Butterfly", type: "Product", link: "pages/trendy-clips.html" },
    { name: "Tulip Twists", type: "Product", link: "pages/trendy-clips.html" },
    { name: "Colourful Flower Clips", type: "Product", link: "pages/trendy-clips.html" },



    { name: "99 Combo", type: "Product", link: "pages/hampers.html" },
    { name: "149 Combo", type: "Product", link: "pages/hampers.html" },
    { name: "299 Combo", type: "Product", link: "pages/hampers.html" },

    { name: "Mini Bouquet", type: "Product", link: "pages/bouquet.html" },
    { name: "Single Floral", type: "Product", link: "pages/bouquet.html" },
    { name: "Floral with Chocolate", type: "Product", link: "pages/bouquet.html" }
];

if (openSearch) {
    openSearch.addEventListener("click", function (e) {
        e.preventDefault();
        searchModal.classList.add("active");
        searchInput.focus();
    });
}

if (closeSearch) {
    closeSearch.addEventListener("click", function () {
        searchModal.classList.remove("active");
        searchInput.value = "";
        searchResults.innerHTML = '<p class="search-placeholder">Start typing to search products...</p>';
    });
}

window.addEventListener("click", function (e) {
    if (e.target === searchModal) {
        searchModal.classList.remove("active");
        searchInput.value = "";
        searchResults.innerHTML = '<p class="search-placeholder">Start typing to search products...</p>';
    }
});

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const value = this.value.trim().toLowerCase();

        if (value === "") {
            searchResults.innerHTML = '<p class="search-placeholder">Start typing to search products...</p>';
            return;
        }

        const filtered = searchData.filter(item =>
            item.name.toLowerCase().includes(value) ||
            item.type.toLowerCase().includes(value)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = '<p class="search-placeholder">No matching results found.</p>';
            return;
        }

        searchResults.innerHTML = filtered.map(item => `
            <a href="${item.link}" class="search-result-item">
                <strong>${item.name}</strong>
                <span>${item.type}</span>
            </a>
        `).join("");
    });
}


const productData = {
    // SCRUNCHIES
    "silky-scrunchie": {
        name: "Silky Scrunchie",
        code: "SKU: SILKY-SCR-001",
        price: "₹45.00",
        image: "../images/products/plain-scrunchie.jpg",
        shortDesc: "Soft, stretchy, and gentle on your hair — your perfect everyday scrunchie.",
        description: "✨ Soft, stretchy, and gentle on your hair — your perfect everyday scrunchie. Made from premium satin fabric that prevents hair breakage and reduces frizz.",
        material: "Satin",
        categoryName: "Scrunchies",
        categoryLink: "scrunchies.html",
        colors: [
            { code: "#f5f5f5", name: "White", inStock: true },
            { code: "#e8d6b8", name: "Beige", inStock: false },
            { code: "#f4df53", name: "Yellow", inStock: true },
            { code: "#f59e0b", name: "Orange", inStock: true },
            { code: "#ef4444", name: "Red", inStock: false },
            { code: "#ec4899", name: "Pink", inStock: true },
            { code: "#111827", name: "Black", inStock: true },
            { code: "#3b82f6", name: "Blue", inStock: true },
            { code: "#a855f7", name: "Purple", inStock: false }
        ],
        sizes: ["S", "M", "L", "XL"],
        related: []
    },

    // HAMPERS
    "99-combo": {
        name: "99 Combo",
        code: "SKU: HAMP-99-001",
        price: "₹99.00",
        image: "../images/products/swan-garden-hamper.jpg",
        shortDesc: "Perfect mix of clips for all hairstyles. Great value combo!",
        description: "✨ A stylish combo set including multiple clip sizes for everyday and special styling. Perfect for gifting or treating yourself!",
        material: "Plastic / Metal Alloy",
        categoryName: "Hamper Boxes",
        categoryLink: "hampers.html",
        includes: [
            "1 Big Size Clip",
            "1 Medium Size Clip",
            "2 Small Size Clips",
            "2 Mini Clips"
        ],
        colors: [
            { code: "#f5f5f5", name: "White", inStock: true },
            { code: "#f4df53", name: "Yellow", inStock: true },
            { code: "#ec4899", name: "Pink", inStock: true },
            { code: "#111827", name: "Black", inStock: true },
            { code: "#3b82f6", name: "Blue", inStock: true }
        ],
        usage: ["Daily wear", "Party styling", "Kids & adults use"],
        related: ["mystery-box"]
    },

    "mystery-box": {
        name: "Mystery Box",
        code: "SKU: HAMP-MYST-002",
        price: "₹299.00",
        image: "../images/products/bunny-bliss-hamper.jpg",
        shortDesc: "Mystery Clip Box filled with our best-selling & trending clips!",
        description: "✨ Surprise yourself or a loved one with our Mystery Box! Packed with our best-selling and trending clips. Perfect for gifting or treating yourself to a delightful surprise.",
        material: "Assorted",
        categoryName: "Hamper Boxes",
        categoryLink: "hampers.html",
        colors: [],
        sizes: ["One Size"],
        related: ["99-combo"]
    },

    // BOUQUET
    "mini-bouquet": {
        name: "Mini Bouquet",
        code: "SKU: BOUQ-MINI-001",
        price: "₹100.00",
        image: "../images/products/mini-bouquet.jpg",
        shortDesc: "A compact bouquet perfect for cute gifting moments.",
        description: "✨ A charming mini bouquet perfect for cute gifting moments, small celebrations, or just because! Beautifully arranged with care.",
        material: "Paper Floral Wrap",
        categoryName: "Bouquet",
        categoryLink: "bouquet.html",
        colors: [],
        sizes: ["One Size"],
        related: ["single-floral", "floral-chocolate"]
    },

    "single-floral": {
        name: "Single Floral",
        code: "SKU: BOUQ-SINGLE-002",
        price: "₹150.00",
        image: "../images/products/gift-bouquet.jpg",
        shortDesc: "Beautiful single floral arrangement for elegant gifting.",
        description: "✨ A beautiful single floral arrangement that speaks volumes. Perfect for expressing love, gratitude, or simply brightening someone's day.",
        material: "Floral Wrap",
        categoryName: "Bouquet",
        categoryLink: "bouquet.html",
        colors: [],
        sizes: ["One Size"],
        related: ["mini-bouquet", "floral-chocolate"]
    },

    "floral-chocolate": {
        name: "Floral with Chocolate",
        code: "SKU: BOUQ-CHOC-003",
        price: "₹200.00",
        image: "../images/products/tulip-bouquet.jpg",
        shortDesc: "Delightful combination of flowers and chocolates.",
        description: "✨ A delightful combination of beautiful flowers and sweet chocolates. The perfect gift for someone special!",
        material: "Floral Wrap",
        categoryName: "Bouquet",
        categoryLink: "bouquet.html",
        colors: [],
        sizes: ["One Size"],
        related: ["mini-bouquet", "single-floral"]
    },

    // KIDS ZONE
    "baby-clips": {
        name: "Baby Clips",
        code: "SKU: KIDS-BABY-001",
        price: "₹65.00",
        image: "../images/products/matte-clips.jpg",
        shortDesc: "Soft and safe clips designed for little ones.",
        description: "✨ Soft and safe clips designed especially for little ones. Gentle on delicate hair and adorable for any occasion.",
        material: "Plastic",
        categoryName: "Kids Zone",
        categoryLink: "kids-zone.html",
        colors: [],
        sizes: ["Mini"],
        related: ["mini-butterfly", "mixed-clips", "shiny-butterfly"]
    },

    "mini-butterfly": {
        name: "Mini Butterfly",
        code: "SKU: KIDS-BUTTER-002",
        price: "₹75.00",
        image: "../images/products/everyday-clips.jpg",
        shortDesc: "Cute mini butterfly clips for playful styling.",
        description: "✨ Adorable mini butterfly clips that add a touch of whimsy to any hairstyle. Perfect for kids who love playful accessories!",
        material: "Plastic",
        categoryName: "Kids Zone",
        categoryLink: "kids-zone.html",
        colors: [],
        sizes: ["Mini"],
        related: ["baby-clips", "mixed-clips", "shiny-butterfly"]
    },

    "mixed-clips": {
        name: "Mixed Clip Variety",
        code: "SKU: KIDS-MIX-003",
        price: "₹55.00",
        image: "../images/products/mini-casual-clips.jpg",
        shortDesc: "Assorted clips in a variety of styles and colors.",
        description: "✨ A fun variety pack of clips in different styles and colors. Great for mixing and matching with any outfit!",
        material: "Plastic",
        categoryName: "Kids Zone",
        categoryLink: "kids-zone.html",
        colors: [],
        sizes: ["Assorted"],
        related: ["baby-clips", "mini-butterfly", "shiny-butterfly"]
    },

    "shiny-butterfly": {
        name: "Shiny Butterfly",
        code: "SKU: KIDS-SHINY-004",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Sparkling butterfly clips that catch the light.",
        description: "✨ Sparkling butterfly clips that catch the light beautifully. Adds a touch of glamour to any hairstyle!",
        material: "Plastic",
        categoryName: "Kids Zone",
        categoryLink: "kids-zone.html",
        colors: [],
        sizes: ["Small"],
        related: ["baby-clips", "mini-butterfly", "mixed-clips"]
    },

    // CASUAL CLIPS - ALL 20 PRODUCTS
    "daisy-clip-m": {
        name: "Daisy Clip (M)",
        code: "SKU: CAS-DAISY-M-001",
        price: "₹65.00",
        image: "../images/products/matte-clips.jpg",
        shortDesc: "Charming daisy design for everyday casual wear.",
        description: "✨ Charming daisy clip that adds a touch of nature to your everyday look. Perfect for casual outings!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["White", "Yellow", "Pink", "Purple"],
        sizes: ["Medium"],
        related: ["star-clip-b", "hibiscus-clip-m", "heart-clip-s"]
    },

    "star-clip-b": {
        name: "Star Clip (B)",
        code: "SKU: CAS-STAR-B-002",
        price: "₹75.00",
        image: "../images/products/everyday-clips.jpg",
        shortDesc: "Playful star-shaped clip for a fun accent.",
        description: "✨ Playful star-shaped clip that adds a fun celestial accent to any hairstyle. Great for casual and festive looks!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Gold", "Silver", "Rose Gold"],
        sizes: ["Big"],
        related: ["daisy-clip-m", "hibiscus-clip-m", "heart-clip-s"]
    },

    "hibiscus-clip-m": {
        name: "Hibiscus Clip (M)",
        code: "SKU: CAS-HIBI-M-003",
        price: "₹55.00",
        image: "../images/products/mini-casual-clips.jpg",
        shortDesc: "Tropical hibiscus flower clip for a vibrant look.",
        description: "✨ Vibrant hibiscus flower clip that brings tropical vibes to your hairstyle. Perfect for summer days!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Red", "Pink", "Orange", "Yellow"],
        sizes: ["Medium"],
        related: ["daisy-clip-m", "star-clip-b", "heart-clip-s"]
    },

    "heart-clip-s": {
        name: "Heart Clips (S)",
        code: "SKU: CAS-HEART-S-004",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Sweet heart-shaped clip for a romantic touch.",
        description: "✨ Sweet heart-shaped clip that adds a romantic touch to any outfit. Perfect for date nights or everyday wear!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Red", "Pink", "White", "Gold"],
        sizes: ["Small"],
        related: ["daisy-clip-m", "star-clip-b", "hibiscus-clip-m"]
    },

    "curvy-flower-clip": {
        name: "Curvy Flower Clips (S)",
        code: "SKU: CAS-CURVY-005",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Elegant curvy flower design for a graceful look.",
        description: "✨ Beautiful curvy flower clips with a graceful, feminine design. Perfect for adding elegance to any hairstyle!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Pastel Pink", "Lavender", "Mint Green", "Peach"],
        sizes: ["Small"],
        related: ["marble-flower-clip", "dual-glassy-floral", "floral-blacky-border"]
    },

    "marble-flower-clip": {
        name: "Marble Flower Clips (S)",
        code: "SKU: CAS-MARBLE-006",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Trendy marble-patterned flower clips.",
        description: "✨ Stylish marble-patterned flower clips that combine modern design with floral beauty. A contemporary accessory!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["White Marble", "Black Marble", "Pink Marble", "Blue Marble"],
        sizes: ["Small"],
        related: ["curvy-flower-clip", "dual-glassy-floral", "floral-blacky-border"]
    },

    "dual-glassy-floral": {
        name: "Dual Glassy Floral Clips (B)",
        code: "SKU: CAS-DUALGLASS-007",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Double flower design with glossy finish.",
        description: "✨ Beautiful dual floral clips with a glossy, glassy finish. Two flowers in one for a stunning look!",
        material: "Plastic / Glass Finish",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Clear", "Pink", "Blue", "Purple"],
        sizes: ["Big"],
        related: ["curvy-flower-clip", "marble-flower-clip", "floral-blacky-border"]
    },

    "floral-blacky-border": {
        name: "Floral Blacky Border Clips (M)",
        code: "SKU: CAS-BLACKY-008",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Floral clips with elegant black border detail.",
        description: "✨ Stunning floral clips featuring an elegant black border that makes the design pop. Perfect for adding contrast!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["White/Black", "Pink/Black", "Yellow/Black", "Blue/Black"],
        sizes: ["Medium"],
        related: ["curvy-flower-clip", "marble-flower-clip", "dual-glassy-floral"]
    },

    "yellow-daisy": {
        name: "Yellow Daisy (M)",
        code: "SKU: CAS-YDAISY-009",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Bright yellow daisy for a cheerful look.",
        description: "✨ Sunny yellow daisy clips that bring warmth and happiness to any hairstyle. Perfect for brightening your day!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Yellow", "Golden Yellow", "Sunflower Yellow"],
        sizes: ["Medium"],
        related: ["hearty-apple-clip", "daisy-white-clip", "bi-floral-clip"]
    },

    "hearty-apple-clip": {
        name: "Hearty Apple Clips (M)",
        code: "SKU: CAS-APPLE-010",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Cute heart and apple combination design.",
        description: "✨ Adorable clips featuring a sweet heart and apple combination. Perfect for a playful, cute look!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Red", "Green", "Pink"],
        sizes: ["Medium"],
        related: ["yellow-daisy", "daisy-white-clip", "bi-floral-clip"]
    },

    "daisy-white-clip": {
        name: "Daisy White Clips (B)",
        code: "SKU: CAS-WHITED-011",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Classic white daisy clips for timeless elegance.",
        description: "✨ Classic white daisy clips that never go out of style. Elegant and versatile for any occasion!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["White", "Cream", "Ivory"],
        sizes: ["Big"],
        related: ["yellow-daisy", "hearty-apple-clip", "bi-floral-clip"]
    },

    "bi-floral-clip": {
        name: "Bi-Floral Clips (M)",
        code: "SKU: CAS-BIFLORAL-012",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Two-tone floral design for a unique look.",
        description: "✨ Unique bi-floral clips featuring two different flower styles combined. A distinctive accessory for the fashion-forward!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Pink/White", "Blue/White", "Purple/White", "Red/White"],
        sizes: ["Medium"],
        related: ["yellow-daisy", "hearty-apple-clip", "daisy-white-clip"]
    },

    "glassy-twist": {
        name: "Glassy Twist (M)",
        code: "SKU: CAS-GTWIST-013",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Twisted design with glossy glassy finish.",
        description: "✨ Elegant twisted clips with a beautiful glassy finish that catches the light. Modern and sophisticated!",
        material: "Plastic / Glass Finish",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Clear", "Rose", "Blue", "Green"],
        sizes: ["Medium"],
        related: ["shiny-twist", "glassy-heart", "glassy-flower"]
    },

    "shiny-twist": {
        name: "Shiny Twist (M)",
        code: "SKU: CAS-STWIST-014",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Shiny twisted design for a glamorous look.",
        description: "✨ Gorgeous twisted clips with a brilliant shiny finish. Adds instant glamour to any hairstyle!",
        material: "Plastic / Metallic Finish",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Gold", "Silver", "Rose Gold", "Copper"],
        sizes: ["Medium"],
        related: ["glassy-twist", "glassy-heart", "glassy-flower"]
    },

    "glassy-heart": {
        name: "Glassy Heart (M)",
        code: "SKU: CAS-GHEART-015",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Heart-shaped clip with glossy glassy finish.",
        description: "✨ Beautiful heart-shaped clips with a stunning glassy finish. Perfect for expressing love and affection!",
        material: "Plastic / Glass Finish",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Red", "Pink", "Clear", "Purple"],
        sizes: ["Medium"],
        related: ["glassy-twist", "shiny-twist", "glassy-flower"]
    },

    "glassy-flower": {
        name: "Glassy Flower (M)",
        code: "SKU: CAS-GFLOWER-016",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Floral clip with glossy glassy finish.",
        description: "✨ Delicate flower clips with a beautiful glassy finish. Elegant and eye-catching for any occasion!",
        material: "Plastic / Glass Finish",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Clear", "Pink", "Blue", "Lavender"],
        sizes: ["Medium"],
        related: ["glassy-twist", "shiny-twist", "glassy-heart"]
    },

    "tri-floral-clip": {
        name: "Tri-Floral Clips",
        code: "SKU: CAS-TRIFLORAL-017",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Three-flower design for a fuller floral look.",
        description: "✨ Stunning tri-floral clips featuring three flowers in one design. Makes a bold and beautiful statement!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Pink/White/Yellow", "Blue/White/Purple", "Red/White/Pink"],
        sizes: ["One Size"],
        related: ["bi-floral-clip", "matte-floral-clip", "sunflower-clip"]
    },

    "matte-floral-clip": {
        name: "Matte-Floral Clips (B)",
        code: "SKU: CAS-MATTE-018",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Floral clips with elegant matte finish.",
        description: "✨ Sophisticated floral clips with a modern matte finish. Understated elegance for everyday wear!",
        material: "Plastic / Matte Finish",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Matte Black", "Matte Pink", "Matte Blue", "Matte White"],
        sizes: ["Big"],
        related: ["tri-floral-clip", "sunflower-clip", "half-curvy-flower"]
    },

    "sunflower-clip": {
        name: "SunFlower Clips (S)",
        code: "SKU: CAS-SUNFLWR-019",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Bright and cheerful sunflower design.",
        description: "✨ Radiant sunflower clips that bring sunshine to any hairstyle. A cheerful accessory for nature lovers!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Yellow", "Golden Yellow", "Orange"],
        sizes: ["Small"],
        related: ["tri-floral-clip", "matte-floral-clip", "half-curvy-flower"]
    },

    "half-curvy-flower": {
        name: "Half Curvey Flower Clips (M)",
        code: "SKU: CAS-HALFCURV-020",
        price: "₹85.00",
        image: "../images/products/soft-tone-clips.jpg",
        shortDesc: "Unique half-curvy flower design for modern style.",
        description: "✨ Unique half-curvy flower clips with an asymmetrical design. Modern and trendy for fashion-forward individuals!",
        material: "Plastic",
        categoryName: "Casual Clips",
        categoryLink: "casual-clips.html",
        colors: ["Pink", "Purple", "Blue", "Coral"],
        sizes: ["Medium"],
        related: ["curvy-flower-clip", "tri-floral-clip", "sunflower-clip"]
    },

    // TRENDY CLIPS
    "furry-clips": {
        name: "Furry Clips",
        code: "SKU: TRENDY-FUR-001",
        price: "₹95.00",
        image: "../images/products/butterfly-clips.jpg",
        shortDesc: "Soft and trendy furry clips for a cozy style.",
        description: "✨ Soft and trendy furry clips that add texture and warmth to your hairstyle. A must-have fashion accessory!",
        material: "Fabric / Plastic",
        categoryName: "Trendy Clips",
        categoryLink: "trendy-clips.html",
        colors: [],
        sizes: ["One Size"],
        related: ["pearl-clips", "floral-twist", "shell-clips"]
    },

    "pearl-clips": {
        name: "Pearl Clips",
        code: "SKU: TRENDY-PEARL-002",
        price: "₹110.00",
        image: "../images/products/pearl-clips.jpg",
        shortDesc: "Elegant pearl-adorned clips for a sophisticated look.",
        description: "✨ Elegant pearl-adorned clips that add a sophisticated touch to any hairstyle. Perfect for weddings, parties, or special occasions!",
        material: "Plastic / Pearl",
        categoryName: "Trendy Clips",
        categoryLink: "trendy-clips.html",
        colors: [],
        sizes: ["One Size"],
        related: ["furry-clips", "floral-twist", "shell-clips"]
    },

    "floral-twist": {
        name: "Floral Twist",
        code: "SKU: TRENDY-FLORAL-003",
        price: "₹125.00",
        image: "../images/products/korean-trend-clips.jpg",
        shortDesc: "Twisted floral design for a modern trendy look.",
        description: "✨ Unique twisted floral design that combines elegance with modern trends. A versatile accessory for any occasion!",
        material: "Plastic",
        categoryName: "Trendy Clips",
        categoryLink: "trendy-clips.html",
        colors: [],
        sizes: ["One Size"],
        related: ["furry-clips", "pearl-clips", "shell-clips"]
    },

    "shell-clips": {
        name: "Shell Clips",
        code: "SKU: TRENDY-SHELL-004",
        price: "₹135.00",
        image: "../images/products/statement-clips.jpg",
        shortDesc: "Beach-inspired shell clips for a coastal vibe.",
        description: "✨ Beautiful shell-inspired clips that bring coastal charm to your hairstyle. Perfect for beach days or summer fashion!",
        material: "Plastic / Metal",
        categoryName: "Trendy Clips",
        categoryLink: "trendy-clips.html",
        colors: [],
        sizes: ["One Size"],
        related: ["furry-clips", "pearl-clips", "floral-twist"]
    },

    "gold-butterfly": {
        name: "Gold Finish Butterfly",
        code: "SKU: TRENDY-GOLD-005",
        price: "₹135.00",
        image: "../images/products/statement-clips.jpg",
        shortDesc: "Elegant gold finish butterfly clip for a premium look.",
        description: "✨ Elegant gold finish butterfly clip that adds a premium, sophisticated touch to any hairstyle. Perfect for special occasions!",
        material: "Metal Alloy",
        categoryName: "Trendy Clips",
        categoryLink: "trendy-clips.html",
        colors: [],
        sizes: ["One Size"],
        related: ["furry-clips", "pearl-clips", "tulip-twist"]
    },

    "tulip-twist": {
        name: "Tulip Twist",
        code: "SKU: TRENDY-TULIP-006",
        price: "₹135.00",
        image: "../images/products/statement-clips.jpg",
        shortDesc: "Twisted tulip design for a fresh floral look.",
        description: "✨ Fresh tulip twist design that brings springtime charm to your hairstyle. A beautiful accessory for any season!",
        material: "Plastic",
        categoryName: "Trendy Clips",
        categoryLink: "trendy-clips.html",
        colors: [],
        sizes: ["One Size"],
        related: ["furry-clips", "pearl-clips", "gold-butterfly"]
    },

    "colorful-flower": {
        name: "Colourful Flower Clip",
        code: "SKU: TRENDY-COLOR-007",
        price: "₹135.00",
        image: "../images/products/statement-clips.jpg",
        shortDesc: "Vibrant colorful flower clip for a playful accent.",
        description: "✨ Vibrant colorful flower clip that adds a playful, cheerful accent to any hairstyle. Perfect for making a statement!",
        material: "Plastic",
        categoryName: "Trendy Clips",
        categoryLink: "trendy-clips.html",
        colors: [],
        sizes: ["One Size"],
        related: ["furry-clips", "floral-twist", "tulip-twist"]
    }
};
function loadDynamicProductPage() {
    const params = new URLSearchParams(window.location.search);
    const item = params.get("item");

    if (!item || !productData[item]) return;

    const product = productData[item];

    const productName = document.getElementById("productName");
    const productCode = document.getElementById("productCode");
    const productPrice = document.getElementById("productPrice");
    const productImage = document.getElementById("productImage");
    const productShortDesc = document.getElementById("productShortDesc");
    const productMaterial = document.getElementById("productMaterial");
    const productDescription = document.getElementById("productDescription");
    const productCategoryLink = document.getElementById("productCategoryLink");
    const productBreadcrumbName = document.getElementById("productBreadcrumbName");
    const productColors = document.getElementById("productColors");
    const productSizes = document.getElementById("productSizes");
    const whatsappBtn = document.getElementById("whatsappBtn");
    const relatedProducts = document.getElementById("relatedProducts");

    if (!productName) return;

    productName.textContent = product.name;
    document.title = `${product.name} | Funky Teasures`;
    productCode.textContent = product.code;
    productPrice.textContent = product.price;
    productImage.src = product.image;
    productImage.alt = product.name;
    productShortDesc.textContent = `✨ ${product.shortDesc}`;
    productMaterial.textContent = product.material;
    productDescription.textContent = product.description;
    productCategoryLink.textContent = product.categoryName;
    productCategoryLink.href = product.categoryLink;
    productBreadcrumbName.textContent = product.name;

    productColors.innerHTML = product.colors.map(color => `
        <span 
            class="dynamic-color-dot ${color.inStock ? '' : 'out-of-stock-color'}" 
            style="background:${color.code}"
            title="${color.inStock ? 'Available' : 'Out of Stock'}"
        ></span>
    `).join("");

    productSizes.innerHTML = product.sizes.map(size => `
        <button type="button">${size}</button>
    `).join("");

    whatsappBtn.href = `https://wa.me/919363620112?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`;

    if (relatedProducts) {
        relatedProducts.innerHTML = product.related.map(key => {
            const related = productData[key];
            if (!related) return "";
            return `
                <a href="product.html?item=${key}" class="related-product-item">
                    <img src="${related.image}" alt="${related.name}">
                    <h4>${related.name}</h4>
                    <p>${related.price}</p>
                </a>
            `;
        }).join("");
    }

    const qtyInput = document.getElementById("qtyInput");
    const qtyMinus = document.getElementById("qtyMinus");
    const qtyPlus = document.getElementById("qtyPlus");

    if (qtyMinus && qtyPlus && qtyInput) {
        qtyMinus.addEventListener("click", () => {
            let value = parseInt(qtyInput.value, 10);
            if (value > 1) qtyInput.value = value - 1;
        });

        qtyPlus.addEventListener("click", () => {
            let value = parseInt(qtyInput.value, 10);
            qtyInput.value = value + 1;
        });
    }
}

loadDynamicProductPage();



/* ================= FEEDBACK PAGE ================= */
const feedbackList = document.getElementById("feedbackList");
const feedbackApiUrl = "https://script.google.com/macros/s/AKfycbwyZaScj-J2DAtZQBancTS7NjzSeDySvuoYxLwZXwwVfUz4MCesq0jkjl-v0w3LCnIhgA/exec";

async function loadFeedbacks() {
    if (!feedbackList) return;

    try {
        const response = await fetch(feedbackApiUrl);
        const data = await response.json();

        if (!data || data.length === 0) {
            feedbackList.innerHTML = `<div class="no-feedback">No feedback posted yet. Be the first to share your experience 💖</div>`;
            return;
        }

        feedbackList.innerHTML = data
            .slice()
            .reverse()
            .map(item => `
                <div class="feedback-card">
                    <h4>${item.name || "Customer"}</h4>
                    <div class="feedback-stars">${"★".repeat(Number(item.rating || 0))}${"☆".repeat(5 - Number(item.rating || 0))}</div>
                    <p>${item.message || ""}</p>
                </div>
            `).join("");
    } catch (error) {
        console.log("Load error:", error);
        feedbackList.innerHTML = `<div class="no-feedback">Unable to load feedback right now.</div>`;
    }
}

loadFeedbacks();


