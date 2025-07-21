
export interface LinkedInImageOption {
  label: string;
  value: '1:1' | '16:9' | '9:16' | '4:3' | '3:4';
  description: string;
}

export type ArtworkGeneratorMode = 'description' | 'article';
export type PostGeneratorMode = 'topic' | 'article';
