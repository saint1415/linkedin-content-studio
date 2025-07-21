import React, { useState, useCallback } from 'react';
import { generatePost } from '../services/geminiService';
import type { PostGeneratorMode } from '../types';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import { Card } from './ui/Card';

const PostGenerator: React.FC = () => {
  const [mode, setMode] = useState<PostGeneratorMode>('topic');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedPost, setGeneratedPost] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  
  const handleGenerate = useCallback(async () => {
    if (!inputText.trim()) {
      setError('Please enter a topic or article text.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setGeneratedPost(null);
    setCopied(false);

    try {
      const post = await generatePost(
        mode === 'topic' ? inputText : '',
        mode === 'article' ? inputText : undefined
      );
      setGeneratedPost(post);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [inputText, mode]);

  const handleCopyToClipboard = () => {
    if (!generatedPost) return;
    navigator.clipboard.writeText(generatedPost).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <Card>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">1. Provide Content Source</h2>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Input Type</label>
            <div className="flex space-x-4">
              <button onClick={() => setMode('topic')} className={`flex-1 p-3 text-sm rounded-md transition ${mode === 'topic' ? 'bg-brand-blue text-white font-semibold' : 'bg-gray-700 hover:bg-gray-600'}`}>
                Simple Topic
              </button>
              <button onClick={() => setMode('article')} className={`flex-1 p-3 text-sm rounded-md transition ${mode === 'article' ? 'bg-brand-blue text-white font-semibold' : 'bg-gray-700 hover:bg-gray-600'}`}>
                Full Article Text
              </button>
            </div>
          </div>

          <Textarea 
            id="post-input"
            label={mode === 'topic' ? 'What topic do you want to post about?' : 'Paste your article text here'}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              mode === 'topic'
                ? 'e.g., The future of renewable energy in tech'
                : 'Paste the full text of your article for AI to create a post from...'
            }
            rows={10}
          />
          
          <Button onClick={handleGenerate} isLoading={isLoading} className="w-full">
            {isLoading ? 'Generating Post...' : 'Generate Post'}
          </Button>

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </Card>
      
      <Card className="flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-4">2. Your Generated Post</h2>
        <div className="bg-gray-700/50 rounded-lg p-4 h-full text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-light overflow-y-auto">
          {isLoading && (
            <div className="flex items-center justify-center h-full">
                <div role="status" className="flex justify-center items-center flex-col">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-600 animate-spin fill-brand-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0492C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <p className="text-gray-400 mt-4">Crafting your post...</p>
                </div>
            </div>
          )}
          {!isLoading && !generatedPost && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">Your generated post will appear here.</p>
            </div>
          )}
          {generatedPost}
        </div>
        {generatedPost && !isLoading && (
            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                <Button onClick={handleCopyToClipboard} className="w-full">{copied ? 'Copied!' : 'Copy Post Text'}</Button>
                <Button onClick={() => {
                  setGeneratedPost(null);
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

export default PostGenerator;
