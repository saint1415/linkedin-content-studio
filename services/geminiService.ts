
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { LINKEDIN_IMAGE_OPTIONS } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const safetyPrompt = `
  This image is for a professional social media platform (LinkedIn).
  It must be strictly copyright-safe. Do not include any existing characters, logos, brands, or identifiable real people.
  The style should be modern, professional, and abstract or illustrative. Avoid photorealism unless specifically asked.
  The overall tone should be positive and business-appropriate.
`;

export const generateImage = async (
  prompt: string,
  aspectRatio: typeof LINKEDIN_IMAGE_OPTIONS[number]['value']
): Promise<string> => {
  try {
    const fullPrompt = `${prompt}. ${safetyPrompt}`;
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: fullPrompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: aspectRatio,
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    } else {
      throw new Error('Image generation failed, no images returned.');
    }
  } catch (error) {
    console.error('Error generating image with Gemini:', error);
    throw new Error('Failed to generate image. Please check the console for details.');
  }
};

export const summarizeForImagePrompt = async (articleText: string): Promise<string> => {
  try {
    const prompt = `Summarize the following article text into a short, descriptive phrase (5-10 words) that captures its core theme. This phrase will be used to generate an image. Focus on concepts, not specific details. Article: "${articleText}"`;
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: { thinkingConfig: { thinkingBudget: 0 } }
    });
    return response.text.trim();
  } catch (error) {
    console.error('Error summarizing text:', error);
    throw new Error('Failed to summarize text for image generation.');
  }
};

export const generatePost = async (topic: string, articleText?: string): Promise<string> => {
  const systemInstruction = `You are an expert LinkedIn content creator. Your goal is to write engaging, professional posts. Posts should be well-structured with clear paragraphs, use 3-5 relevant hashtags, and have a call-to-action or engaging question at the end. The tone should be authoritative yet approachable.`;
  
  const userPrompt = articleText
    ? `Create a LinkedIn post based on the following article text. Summarize the key insights and present them in a compelling way.\n\nArticle: """${articleText}"""`
    : `Create a LinkedIn post about the following topic: "${topic}"`;
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
            systemInstruction
        }
    });
    return response.text.trim();
  } catch (error) {
    console.error('Error generating LinkedIn post:', error);
    throw new Error('Failed to generate post.');
  }
};
