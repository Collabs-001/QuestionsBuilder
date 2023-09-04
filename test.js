import { generateQuestions } from "./generator.js";

console.log(generateQuestions("fullstack,frontend").then((res)=>{ 
  console.log(res);
}));