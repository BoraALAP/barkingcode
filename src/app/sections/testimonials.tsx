import React from 'react'

export const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
                <div className="font-semibold">Client Name</div>
              </div>
            ))}
          </div>
        </section>
  )
}
