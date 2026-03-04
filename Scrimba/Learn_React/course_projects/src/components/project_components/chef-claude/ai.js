// import { HfInference } from "@huggingface/inference"
import { InferenceClient } from "@huggingface/inference"

// const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)
const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`


export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.2-1B-Instruct",
            // provider: "hf-inference",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error("Detailed Error:", err.message)
        if (err.message.includes("provider")) {
            return "The AI chef is currently switching shifts. Please try again in 30 seconds.";
        }
        return "Sorry, I couldn't generate a recipe right now."
    }
}