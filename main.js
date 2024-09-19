import { GoogleGenerativeAI } from "@google/generative-ai";

async function generateAIResponse(prompt, apiKey, modelName) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: modelName });

  const result = await model.generateContent(prompt);
  return result.response.text();
}

const apiKey = 'AIzaSyA6L0PGVMZAGk8AHE-KqRmXAwwPtw2nlXs';
const modelName = 'gemini-1.5-flash';
const prompt = 'what is AI';

const response = await generateAIResponse(prompt, apiKey, modelName);
console.log(response);