import Navbar from '../compnent/Navbar'; 
import Footer from '../compnent/Footer';

const deals = [
  {
    name: "Pizza + Drink Special",
    description: "Get a large pizza with any drink at a discounted price. Perfect for a meal combo!",
    price: "RS. 1500",
    imageUrl: "/deal1.jpg",
  },
  {
    name: "Family Feast Deal",
    description: "Order two large pizzas and get a free Couldrink side of garlic bread!",
    price: "RS. 2500",
    imageUrl: "/deal2.jpg",
  },
  {
    name: "Combo Deal",
    description: "Choose any medium pizza and pasta together at an unbeatable price.",
    price: "RS. 1100",
    imageUrl: "/deal3.jpg",
  },
  {
    name: "Tandoori Combo",
    description: "Get a large Tandoori pizza and a side of spicy wings at a special discounted price.",
    price: "RS. 1700",
    imageUrl: "/deal4.jpg",
  },
  {
    name: "Cheese Lover's Deal",
    description: "For all cheese lovers! Get a large cheese pizza and a creamy pasta at an amazing price.",
    price: "RS. 1600",
    imageUrl: "/deal5.jpg",
  },
  {
    name: "Veggie Feast",
    description: "A veggie lover's dream: two large veggie pizzas with a side of garlic bread.",
    price: "RS. 2200",
    imageUrl: "/deal6.jpg",
  },
  {
    name: "BBQ Party Deal",
    description: "Enjoy a large BBQ 2 pizza and , along with souce , perfect for a party!",
    price: "RS. 2100",
    imageUrl: "/deal7.jpg",
  },
  {
    name: "Afghani Chicken Special",
    description: "Get an Afghani Chicken pizza and a spicy pasta at a special combo price.",
    price: "RS. 1800",
    imageUrl: "/deal8.jpg",
  },

  {
    name: "Double Pizza Feast",
    description: "Get two large pizzas of your choice at a discounted price for sharing with friends.",
    price: "RS. 3000",
    imageUrl: "/deal10.jpg",
  },
  {
    name: "Spicy Sensation",
    description: "For spice lovers! A spicy pizza with extra hot wings at an unbeatable price.",
    price: "RS. 1800",
    imageUrl: "/deal11.jpg",
  },  
  {
    name: "frozen dessert pizza",
    description: "Chocoholics take note, a frozen dessert pizza has just hit shelves",
    price: "RS. 800",
    imageUrl: "/deal12.jpg",
  },
  {
    name: "Dessert Combo",
    description: "Indulge in a sweet dessert combo: Get a chocolate lava cake and a cold drink.",
    price: "RS. 800",
    imageUrl: "/deal9.jpg",
  },
];

const DealPage = () => (
  <div>
    <Navbar />
    <main className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Exclusive Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded shadow text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={deal.imageUrl}
              alt={deal.name}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{deal.name}</h2>
            <p className="text-gray-700">{deal.description}</p>
            <div className="mt-2">
              <p className="text-red-600 font-bold">Price: {deal.price}</p>
            </div>
            <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              Get This Deal
            </button>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default DealPage;
