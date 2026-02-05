
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the ECO-GREEN Youth Group Assistant. 
        Your goal is to help youth in Kaloleni with career advice, environmental sustainability tips, 
        and information about the organization's services (Landscaping, Waste Management, Home Cleaning). 
        Keep responses professional, encouraging, and community-focused. 
        Mention the organization's values: Youth Empowerment, Mental Health Advocacy, and Capacity Building.`,
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't process that. Please try again or contact our team directly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently resting. Please reach out to us via WhatsApp!";
  }
};
