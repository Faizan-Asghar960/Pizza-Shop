import Navbar from '../compnent/Navbar'; // Corrected component path
import Footer from '../compnent/Footer';

const menuItems = [
  {
    name: "Behari-Tikka Pizza",
    description: "A delicious fusion of spicy Behari tikka marinated chicken, fresh onions, and herbs, served on a classic pizza base.",
    prices: {
      large: "RS. 650",
      medium: "RS. 450",
      small: "RS. 300",
    },
    imageUrl: "/Behari tikka.jpg", // Image ka path
  },
  {
    name: "Chicken-Fajita Pizza",
    description: "A zesty pizza loaded with grilled chicken, bell peppers, and onions, topped with a blend of cheeses for a delightful experience.",
    prices: {
      large: "RS. 650",
      medium: "RS. 450",
      small: "RS. 300",
    },
    imageUrl: "/chekan-fajita.jpg", // Image ka path
  },
  {
    name: "Spicy-Sicilian Pizza",
    description: "A fiery delight with spicy sausage, olives, and mozzarella cheese, this pizza brings the heat straight from Sicily.",
    prices: {
      large: "RS. 650",
      medium: "RS. 450",
      small: "RS. 300",
    },
    imageUrl: "/spicy-sicilian.jpg", // Image ka path
  }, 
  {
    name: "Tandoori-Hot Pizza",
    description: "A bold pizza topped with tandoori chicken, fresh cilantro, and a touch of yogurt, delivering a unique blend of flavors.",
    prices: {
      large: "RS. 650",
      medium: "RS. 450",
      small: "RS. 300",
    },
    imageUrl: "/Tandoori-Hot.jpg", // Image ka path
  },
  {
    name: "BBQ-Creamy Sensation Pizza",
    description: "This pizza features a rich BBQ sauce, creamy cheese, and tender chicken, providing a taste explosion in every bite.",
    prices: {
      large: "RS. 700",
      medium: "RS. 500",
      small: "RS. 350",
    },
    imageUrl: "/BBQ-Creamy sensation.jpg", // Image ka path
  },
  {
    name: "Chicken-Afghani Pizza",
    description: "A delightful combination of Afghani spices and grilled chicken, topped with a mix of fresh vegetables and cheese.",
    prices: {
      large: "RS. 650",
      medium: "RS. 450",
      small: "RS. 300",
    },
    imageUrl: "/chicken-Afghani.jpg", // Image ka path
  },
  {
    name: "Veggie-Lover Pizza",
    description: "A garden-fresh pizza loaded with seasonal vegetables, olives, and a generous amount of cheese for veggie enthusiasts.",
    prices: {
      large: "RS. 650",
      medium: "RS. 450",
      small: "RS. 300",
    },
    imageUrl: "/veggie-Lover.jpg", // Image ka path
  },
  {
    name: "Cheese-Lover Pizza",
    description: "For cheese lovers, this pizza is topped with a variety of cheeses that melt together for a creamy, rich flavor.",
    prices: {
      large: "RS. 650",
      medium: "RS. 450",
      small: "RS. 300",
    },
    imageUrl: "/Cheese-Lover.jpg", // Image ka path
  },
  {
    name: "Chekan-Pepperoni Pizza",
    description: "A pepperoni-packed pizza with a crispy crust, topped with mozzarella cheese and a hint of Italian herbs.",
    prices: {
      large: "RS. 650",
      medium: "RS. 450",
      small: "RS. 300",
    },
    imageUrl: "/Chekan-Pepperoni.jpg", // Image ka path
  },
  {
    name: "Malai-Botti Pizza",
    description: "Succulent malai chicken pieces marinated in creamy spices, served on a pizza with fresh herbs and cheese.",
    prices: {
      large: "RS. 700",
      medium: "RS. 500",
      small: "RS. 350",
    },
    imageUrl: "/Malai-Botti.jpg", // Image ka path
  },
  {
    name: "Cream-Pasta",
    description: "A rich and creamy pasta dish made with fresh ingredients, perfect as a side or a main course.",
    prices: {
      large: "RS. 750",
      medium: "RS. 550",
      small: "RS. 350",
    },
    imageUrl: "/Cream-Pasta.jpg", // Image ka path
  },
  {
    name: "Spicy-Pasta",
    description: "This pasta is infused with spicy flavors and topped with fresh herbs, providing a perfect kick for spice lovers.",
    prices: {
      large: "RS. 700",
      medium: "RS. 500",
      small: "RS. 300",
    },
    imageUrl: "/Spicy-pasta.jpg", // Image ka path
  },
  // Aur items yahan add kar sakte ho
];

const Menu = () => (
  <div>
    <Navbar />
    <main className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-32 object-cover rounded mb-4 transition-transform duration-500 hover:scale-110"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <div className="mt-2">
              <p className="text-red-600 font-bold">Large: {item.prices.large}</p>
              <p className="text-red-600 font-bold">Medium: {item.prices.medium}</p>
              <p className="text-red-600 font-bold">Small: {item.prices.small}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Menu;
