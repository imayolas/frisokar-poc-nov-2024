// Goal
// - Given a public tender offer
// - Given a list of products

import { sys_prompt } from "./sis_prompt";
import { tender_offer } from "./tender_offer";

// Path
// - Build the prompt

import { createOpenAI, openai } from '@ai-sdk/openai';
import { generateText, streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

async function main() {
  
  

  const {text, usage,  ...rest} = await generateText({
    model: openai('o1-preview'),
    messages: [
      {role: "user", content: sys_prompt},
      {role: "user", content: tender_offer}
    ],
  });

  console.log("REST", rest)

  return {text, usage}
}

main().then(console.log).catch(console.error).finally(() => process.exit())