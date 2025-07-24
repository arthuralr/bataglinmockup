'use server';

/**
 * @fileOverview A property description generator AI agent.
 *
 * - generatePropertyDescription - A function that handles the property description generation process.
 * - GeneratePropertyDescriptionInput - The input type for the generatePropertyDescription function.
 * - GeneratePropertyDescriptionOutput - The return type for the generatePropertyDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePropertyDescriptionInputSchema = z.object({
  propertyType: z.string().describe('The type of property (e.g., house, apartment, condo).'),
  location: z.string().describe('The location of the property (city, neighborhood).'),
  numberOfBedrooms: z.number().describe('The number of bedrooms in the property.'),
  numberOfBathrooms: z.number().describe('The number of bathrooms in the property.'),
  squareFootage: z.number().describe('The square footage of the property.'),
  keyFeatures: z.string().describe('A comma-separated list of key features of the property (e.g., hardwood floors, updated kitchen, large backyard).'),
  targetAudience: z.string().describe('The target audience for the property (e.g., young professionals, families, retirees).'),
});
export type GeneratePropertyDescriptionInput = z.infer<typeof GeneratePropertyDescriptionInputSchema>;

const GeneratePropertyDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated property description.'),
});
export type GeneratePropertyDescriptionOutput = z.infer<typeof GeneratePropertyDescriptionOutputSchema>;

export async function generatePropertyDescription(input: GeneratePropertyDescriptionInput): Promise<GeneratePropertyDescriptionOutput> {
  return generatePropertyDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePropertyDescriptionPrompt',
  input: {schema: GeneratePropertyDescriptionInputSchema},
  output: {schema: GeneratePropertyDescriptionOutputSchema},
  prompt: `You are a real estate agent specializing in writing property descriptions.

  Write an engaging and informative property description for the following property, targeting the specified audience.  The description should be approximately 200-300 words.

  Property Type: {{{propertyType}}}
  Location: {{{location}}}
  Number of Bedrooms: {{{numberOfBedrooms}}}
  Number of Bathrooms: {{{numberOfBathrooms}}}
  Square Footage: {{{squareFootage}}}
  Key Features: {{{keyFeatures}}}
  Target Audience: {{{targetAudience}}}
  `,
});

const generatePropertyDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePropertyDescriptionFlow',
    inputSchema: GeneratePropertyDescriptionInputSchema,
    outputSchema: GeneratePropertyDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
