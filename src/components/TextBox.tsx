'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

export default function TextForm({ darkMode = false }: { darkMode?: boolean }) {
  const [text, setText] = useState("")

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const transformText = (transformation: (text: string) => string) => {
    setText(transformation(text))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied to clipboard")
    }).catch(err => {
      console.error('Failed to copy text: ', err)
    })
  }

  return (
    <div className={`w-full max-w-4xl mx-auto p-6 ${darkMode ? 'dark' : ''}`}>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Text Transformer</h3>
        <Textarea
          rows={8}
          className="w-full p-3 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:border-primary"
          onChange={handleTextChange}
          value={text}
          placeholder="Enter your text here"
        />
        <div className="flex flex-wrap gap-2">
          <Button 
            onClick={() => transformText(t => t.toUpperCase())}
            className="bg-primary hover:bg-primary-dark text-white dark:bg-primary-dark dark:text-black dark:hover:bg-primary"
          >
            Upper
          </Button>
          <Button 
            onClick={() => transformText(t => t.toLowerCase())}
            className="bg-primary hover:bg-primary-dark text-white dark:bg-primary-dark dark:text-black dark:hover:bg-primary"
          >
            Lower
          </Button>
          <Button 
            onClick={() => transformText(t => t.charAt(0).toUpperCase() + t.slice(1))}
            className="bg-primary hover:bg-primary-dark text-white dark:bg-primary-dark dark:text-black dark:hover:bg-primary"
          >
            Capital
          </Button>
          <Button 
            onClick={handleCopy}
            className="bg-primary hover:bg-primary-dark text-white dark:bg-primary-dark dark:text-black dark:hover:bg-primary"
          >
            Copy
          </Button>
          <Button 
            onClick={() => setText("")}
            className="bg-primary hover:bg-primary-dark text-white dark:bg-primary-dark dark:text-black dark:hover:bg-primary"
          >
            Clear
          </Button>
        </div>
        <div className="mt-4 text-gray-700 dark:text-gray-300">
          <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
          <p>{(0.008 * text.split(/\s+/).filter(word => word.length > 0).length).toFixed(2)} Minutes read</p>
        </div>
      </div>
    </div>
  )
}