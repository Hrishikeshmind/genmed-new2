export default function Testimonials() {
  const reviews = [
    {
      text: "Found affordable medicines for my parents. The price comparison feature helped me save significantly.",
      author: "Rajesh Kumar",
      location: "Delhi"
    },
    {
      text: "The store locator made it so easy to find Jana Aushadhi Kendras near me. Highly recommended!",
      author: "Priya Singh",
      location: "Mumbai"
    },
    {
      text: "Great platform for finding generic alternatives. The prescription upload feature is very convenient.",
      author: "Ankit Patel",
      location: "Ahmedabad"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <div className="font-semibold text-primary">{review.author}</div>
              <div className="text-gray-500 text-sm">{review.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
