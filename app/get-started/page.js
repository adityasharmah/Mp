"use client";
// Import React and useState
import React, { useState } from "react";
// Import your custom styles
import styles from "../../style";
// Import Navbar and Footer components
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

// InputOutput component
const InputOutput = () => {
  // State for input text
  const [inputText, setInputText] = useState("");
  // State for output text
  const [outputText, setOutputText] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Handle button click to generate questions
  const handleButtonClick = () => {
    // Implement your logic to generate questions from the inputText
    const generatedQuestions = generateQuestions(inputText);
    // Set the generated questions to the outputText
    setOutputText(generatedQuestions);
  };

  // Handle button click to clear output
  const handleClearButtonClick = () => {
    setOutputText(""); // Clear the outputText
  };

  // Example function to generate questions (replace with your logic)
  const generateQuestions = (text) => {
    const sentences = text.split(". "); // Split by period and space
    const questions = sentences.map(
      (sentence, index) => `Q${index + 1}: ${sentence}?`
    );
    return questions.join("\n"); // Join questions with line breaks
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {/* Render Navbar component */}
            <Navbar />
            <div className="text-center text-white my-4">
              {/* Heading for the page */}
              <h2 className="text-3xl font-bold">
                XamQgen: Question Generator
              </h2>
            </div>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          {/* Box containing input and output sections */}
          <div className={`${styles.boxWidth} flex justify-between space-x-4`}>
            {/* Input Section */}
            <div className="flex-1 p-4 bg-gray-100 rounded-md">
              <label className="block mb-2">
                Passage:
                <textarea
                  value={inputText}
                  onChange={handleInputChange}
                  className="w-full h-96 border border-gray-300 p-2 rounded-md"
                />
              </label>
              <div className="border-t border-gray-300 my-2" />
              {/* Button to generate questions */}
              <button
                onClick={handleButtonClick}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
              >
                Generate Questions
              </button>
            </div>
            {/* Output Section */}
            <div className="flex-1 p-4 bg-gray-100 rounded-md">
              <label className="block mb-2">
                Generated Questions:
                <textarea
                  value={outputText}
                  readOnly
                  className="w-full h-96 border border-gray-300 p-2 rounded-md"
                />
              </label>
              {/* Button to clear output */}
              <button
                onClick={handleClearButtonClick}
                className="mt-4 bg-gray-500 text-white p-2 rounded-md hover:bg-gray-700"
              >
                Clear Output
              </button>
            </div>
          </div>
        </div>
        <div className="pt-20">
          {/* Render Footer component */}
          <Footer />
        </div>
      </main>
    </div>
  );
};

// Export the component
export default InputOutput;
