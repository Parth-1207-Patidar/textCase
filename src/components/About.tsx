'use client'

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const aboutSections = [
  {
    title: "Our Mission",
    content: "Our mission is to provide innovative solutions that empower businesses and individuals to achieve their full potential in the digital world."
  },
  {
    title: "Our Team",
    content: "We are a diverse group of passionate professionals, including developers, designers, and strategists, all dedicated to delivering excellence in every project we undertake."
  },
  {
    title: "Our Values",
    content: "Innovation, integrity, and customer-centricity are at the core of everything we do. We believe in pushing boundaries while maintaining the highest ethical standards."
  },
  {
    title: "Our History",
    content: "Founded in 2010, we've grown from a small startup to a leading tech company, consistently adapting to the ever-changing digital landscape and needs of our clients."
  }
]

export default function AboutAccordion({ darkMode = false }: { darkMode?: boolean }) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  return (
    <div className={`w-full max-w-4xl mx-auto p-6 ${darkMode ? 'dark' : ''}`}>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Us</h2>
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="space-y-4">
        {aboutSections.map((section, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <AccordionTrigger 
              onClick={() => toggleItem(`item-${index}`)}
              className={`flex text-center justify-between items-center w-full p-4 text-left text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                openItems.includes(`item-${index}`) ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
            >
              <span className="text-lg font-semibold">{section.title}</span>
              
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
              {section.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}