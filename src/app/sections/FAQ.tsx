import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export const FAQ = () => {
  const faq = [
    {
      question: 'How Does Your Subscription Model Work?',
      answer:
        'Think of our subscription model as your favorite Netflix plan, but instead of movies, you get top-notch design and development services. Choose the package that fits your needs, submit your requests through our sleek Typeform, and let our creative wizards handle the rest. Whether you’re looking to spruce up your mobile app or overhaul your website, we deliver quality without the long-term commitment. And yes, you can pause or cancel anytime—no awkward goodbyes required!',
    },
    {
      question: 'What Services Are Included in the Design Package?',
      answer:
        'Our Design Package is like a Swiss Army knife for your digital needs. From crafting stunning mobile and web product designs to perfecting your UI/UX, we’ve got you covered. Need no-code development to bring your ideas to life without writing a single line of code? Done. Plus, enjoy perks like production-ready designs, speedy revisions, strategic kick-off calls, and unlimited requests and revisions. It’s all the design goodness you need, wrapped up with a bow (and a dash of creativity)!',
    },
    {
      question: 'What Makes Your Full-Service Package So Special?',
      answer:
        'Our Full-Service Package is the superhero cape your business didn’t know it needed. It includes everything from our Design Package and then some—think Webflow and Framer development, seamless team integration, daily project updates, and end-to-end support from the first sketch to the final handoff. Plus, you get priority support, one-on-one async communication, and all the branding and React/React Native development magic. It’s like having a design and development dream team at your beck and call!',
    },
    {
      question: 'How Does Your Subscription Model Work?',
      answer:
        'Think of our subscription model as your favorite Netflix plan, but instead of movies, you get top-notch design and development services. Choose the package that fits your needs, submit your requests through our sleek Typeform, and let our creative wizards handle the rest. Whether you’re looking to spruce up your mobile app or overhaul your website, we deliver quality without the long-term commitment. And yes, you can pause or cancel anytime—no awkward goodbyes required!',
    },

    {
      question: 'What Services Are Included in the Design Package?',
      answer:
        'Our Design Package is like a Swiss Army knife for your digital needs. From crafting stunning mobile and web product designs to perfecting your UI/UX, we’ve got you covered. Need no-code development to bring your ideas to life without writing a single line of code? Done. Plus, enjoy perks like production-ready designs, speedy revisions, strategic kick-off calls, and unlimited requests and revisions. It’s all the design goodness you need, wrapped up with a bow (and a dash of creativity)!',
    },

    {
      question: 'What Makes Your Full-Service Package So Special?',
      answer:
        'Our Full-Service Package is the superhero cape your business didn’t know it needed. It includes everything from our Design Package and then some—think Webflow and Framer development, seamless team integration, daily project updates, and end-to-end support from the first sketch to the final handoff. Plus, you get priority support, one-on-one async communication, and all the branding and React/React Native development magic. It’s like having a design and development dream team at your beck and call!',
    },

    {
      question: 'Can I Upgrade or Downgrade My Subscription Plan?',
      answer:
        'Absolutely! Our subscription plans are as flexible as a yoga instructor. Whether you need to scale up your services during a busy season or scale down when things are a bit quieter, you can upgrade or downgrade your plan anytime. No rigid contracts or awkward negotiations—just straightforward adjustments to fit your evolving needs. Flexibility is our middle name (not literally, but you get the idea).',
    },

    {
      question:
        'How Quickly Can I Expect to Receive My Designs or Developments?',
      answer:
        'We’re all about speed without sacrificing quality. For our Design Package, you can expect your designs within an average of 48 hours, with revisions taking just 1-2 days. Need it faster? Our Full-Service Package comes with priority delivery to keep your projects moving at lightning speed. Whether it’s a last-minute tweak or a major overhaul, we hustle to get you what you need, when you need it—no cape required.',
    },

    {
      question: 'What Happens If I’m Not Satisfied with the Deliverables?',
      answer:
        'Your satisfaction is our top priority, and we’re not happy until you are. If something doesn’t quite hit the mark, just let us know! With unlimited revisions, we’ll tweak, refine, and polish until it’s perfect. Think of us as your design BFFs—always here to help you shine. And if you ever need to take a step back, remember you can pause or cancel anytime. No hard feelings, promise!',
    },
    {
      question:
        'How Do You Ensure the Quality of Your Designs and Developments?',
      answer:
        'Quality is our secret sauce, and we don’t skimp on it. Our team of seasoned designers and developers are passionate about what they do, bringing expertise and creativity to every project. We follow industry best practices, conduct thorough testing, and keep the lines of communication open to ensure everything meets your high standards. It’s like having a quality control team that actually enjoys their job!',
    },

    {
      question:
        'What Tools and Platforms Do You Use for Collaboration and Project Management?',
      answer:
        'We believe in using the best tools to keep things smooth and stylish. From Typeform for easy request submissions and Notion for organized project management to Slack for real-time chats, we’ve got all the bases covered. Plus, our designs live in Figma, ensuring that developers get clean, dev-ready files and interactive prototypes. It’s a tech-savvy ecosystem designed to make collaboration as easy as pie—yum!',
    },

    {
      question: 'Do You Offer Custom Solutions or Only Fixed Packages?',
      answer:
        'We offer both! Our fixed subscription packages are perfect for businesses looking for reliable, ongoing design and development support. But if you have unique needs that don’t quite fit into a standard package, we’re more than happy to tailor a custom solution just for you. Whether you need a little extra branding magic or a whole lot of React development, we can create a package that’s as unique as your business. Let’s get creative together!',
    },

    {
      question: 'How Do I Get Started with Barking Code?',
      answer:
        'Getting started is easier than teaching your dog a new trick (and probably more fun too). Simply choose the package that best fits your needs, hit the Book a Call button to schedule a strategic kick-off call, and fill out our Typeform to submit your first request. From there, our team jumps into action, delivering top-quality designs and developments while keeping you in the loop every step of the way. Ready to unleash your project? We thought so!',
    },
  ]
  return (
    <section className="container mx-auto px-4 py-20 grid md:grid-cols-3 gap-8">
      <div className=" max-w-md gap-4 flex flex-col justify-start items-start">
        <h2 className="text-3xl font-bold  text-center">FAQ</h2>
        <p className="text-secondary font-semibold max-w-sm">
          Contact us if you have more questions
        </p>
        <Button>Reach out</Button>
      </div>
      <div className="md:col-span-2 space-y-8 ">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left gap-2">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
