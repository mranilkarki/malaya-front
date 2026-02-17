import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  // const { messages } = await req.json();

  // console.log('Received messages:', messages);

  // const result = await streamText({
  //   model: google('gemini-2.5-flash'), 
  //   messages,
  //   system: `You are a helpful travel assistant for MalayaGlobe. 
    
  //   Our available packages:
  //   1. Bali Beach Escape - 5 days/4 nights, $1200, includes beachfront hotel, airport transfers, daily breakfast
  //   2. Nepal Trekking Adventure - 7 days/6 nights, $950, includes guide, permits, tea house accommodation
  //   3. Thailand Island Hopping - 6 days/5 nights, $1400, includes boat transfers, 3 islands, snorkeling
    
  //   Help customers find the perfect package based on their preferences, budget, and travel dates. 
  //   Ask relevant questions to understand their needs and make personalized recommendations.`,
  // });

  // return result.toDataStreamResponse();
}
