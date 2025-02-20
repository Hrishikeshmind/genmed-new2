export default function Hero() {
  return (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Making Healthcare
          <br />
          Accessible and Affordable
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Locate nearby Jana Aushadhi Kendras, compare medicine prices, and get AI-powered
          prescription assistance all in one place.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Find Nearby Stores
          </button>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50">
            Compare Prices
          </button>
        </div>
      </div>
    </div>
  );
}
