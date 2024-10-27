import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const CodingSchool = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-red-300 flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },

  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-yellow-500 flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-blue-300 flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
]


const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={CodingSchool} />
    </div>
  )
}

export default WhyChooseUs
