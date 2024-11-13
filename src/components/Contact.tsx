'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Mail, Phone } from "lucide-react"

export default function ContactUs({ darkMode = false }: { darkMode?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className={`w-full max-w-4xl mx-auto p-6 ${darkMode ? 'dark' : ''}`}>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
                rows={4}
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark dark:text-black text-white dark:bg-primary-dark dark:hover:bg-primary"
            >
              Send Message
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300">We'd love to hear from you. Here's how you can reach us...</p>
          </div>
          <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
            <Mail className="w-5 h-5" />
            <span>parthpatidar127@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
            <Phone className="w-5 h-5" />
            <span>+91-9301917421</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
          </div>
        </div>
      </div>
    </div>
  )
}