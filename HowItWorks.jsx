export default function HowItWorks() {
  const steps = [
  
    {
      title: "Compare Prices",
      description: "Compare prices across different stores and find the best deals"
    },
    {
      title: "Find Nearby Stores",
      description: "Locate the nearest Jana Aushadhi Kendra with real-time"
    },
    {
      title: "Save Time & Money",
      description: "Get your medicines at the most affordable prices, hassle-free"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-accent mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
