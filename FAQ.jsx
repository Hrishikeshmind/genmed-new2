export default function FAQ() {
  const questions = [
    {
      question: "What is Jana Aushadhi Kendra?",
      answer: "Government-led initiative providing quality generic medicines at affordable prices."
    },
    {
      question: "How do I find the nearest store?",
      answer: "Use our store locator feature with real-time availability and directions."
    },
    {
      question: "Are generic medicines safe?",
      answer: "Yes, they contain same active ingredients as branded medicines and are approved by DCGI."
    },
    {
      question: "How much can I save on medicines?",
      answer: "Typically 50-90% compared to branded medicines prices."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {questions.map((item, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
