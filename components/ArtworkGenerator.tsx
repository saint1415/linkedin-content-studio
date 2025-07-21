import React, { useState, useCallback } from 'react';
import { generateImage, summarizeForImagePrompt } from '../services/geminiService';
import { LINKEDIN_IMAGE_OPTIONS } from '../constants';
import type { LinkedInImageOption, ArtworkGeneratorMode } from '../types';
import { Button } from './ui/Button';
import { Select } from './ui/Select';
import { Textarea } from './ui/Textarea';
import { Card } from './ui/Card';

const ArtworkGenerator: React.FC = () => {
  const [mode, setMode] = useState<ArtworkGeneratorMode>('description');
  const [inputText, setInputText] = useState('');
  const [imageDimension, setImageDimension] = useState<LinkedInImageOption['value']>(LINKEDIN_IMAGE_OPTIONS[0].value);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [finalPrompt, setFinalPrompt] = useState<string>('');

  const handleGenerate = useCallback(async () => {
    if (!inputText.trim()) {
      setError('Please enter a description or article text.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setGeneratedImage(null);
    setFinalPrompt('');

    try {
      let promptForImage = inputText;
      if (mode === 'article') {
        const summarizedPrompt = await summarizeForImagePrompt(inputText);
        setFinalPrompt(summarizedPrompt);
        promptForImage = summarizedPrompt;
      } else {
        setFinalPrompt(inputText);
      }
      
      const imageUrl = await generateImage(promptForImage, imageDimension);
      setGeneratedImage(imageUrl);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [inputText, imageDimension, mode]);
  
  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `linkedin-artwork-${Date.now()}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const aspectRatioClasses: { [key: string]: string } = {
    '1:1': 'aspect-square',
    '16:9': 'aspect-video',
    '9:16': 'aspect-[9/16]',
    '4:3': 'aspect-[4/3]',
    '3:4': 'aspect-[3/4]',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <Card>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">1. Configure Your Artwork</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Input Type</label>
            <div className="flex space-x-4">
              <button onClick={() => setMode('description')} className={`flex-1 p-3 text-sm rounded-md transition ${mode === 'description' ? 'bg-brand-blue text-white font-semibold' : 'bg-gray-700 hover:bg-gray-600'}`}>
                Simple Description
              </button>
              <button onClick={() => setMode('article')} className={`flex-1 p-3 text-sm rounded-md transition ${mode === 'article' ? 'bg-brand-blue text-white font-semibold' : 'bg-gray-700 hover:bg-gray-600'}`}>
                Full Article Text
              </button>
            </div>
          </div>
          
          <Textarea 
            id="artwork-input"
            label={mode === 'description' ? 'Describe the image you want' : 'Paste your article text here'}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              mode === 'description'
                ? 'e.g., An abstract image representing global financial growth'
                : 'Paste the full text of your article for AI to summarize into an image concept...'
            }
          />

          <Select
            id="image-dimension"
            label="Image Dimensions"
            value={imageDimension}
            onChange={(e) => setImageDimension(e.target.value as LinkedInImageOption['value'])}
          >
            {LINKEDIN_IMAGE_OPTIONS.map(opt => (
              <option key={opt.label} value={opt.value}>{opt.label} - {opt.description}</option>
            ))}
          </Select>
          
          <Button onClick={handleGenerate} isLoading={isLoading} className="w-full">
            {isLoading ? 'Generating...' : 'Generate Artwork'}
          </Button>

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </Card>
      
      <Card className="flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-4">2. Your Generated Artwork</h2>
        <div className={`w-full bg-gray-700/50 rounded-lg flex items-center justify-center p-4 ${aspectRatioClasses[imageDimension] || 'aspect-square'}`}>
          {isLoading && (
            <div className="text-center">
              <div role="status" className="flex justify-center items-center">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-600 animate-spin fill-brand-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0492C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-4 text-gray-400">Generating your amazing artwork...</p>
              {mode === 'article' && finalPrompt && (
                <p className="mt-2 text-xs text-gray-500 italic">Based on prompt: "{finalPrompt}"</p>
              )}
            </div>
          )}
          {!isLoading && !generatedImage && (
            <div className="text-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2" />
              </svg>
              <p className="mt-2">Your generated image will appear here</p>
            </div>
          )}
          {generatedImage && (
            <img src={generatedImage} alt="Generated artwork for LinkedIn" className="rounded-lg object-contain w-full h-full" />
          )}
        </div>

        {generatedImage && !isLoading && (
            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                <Button onClick={handleDownload} className="w-full">
                  Download Image
                </Button>
                <Button onClick={() => {
                  setGeneratedImage(null);
                  setFinalPrompt('');
                  setError(null);
                }} variant="secondary" className="w-full">
                    Start Over
                </Button>
            </div>
        )}
      </Card>
    </div>
  );
};

export default ArtworkGenerator;
