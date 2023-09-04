import { generateQuestions } from "./generator.js";
import fs from 'fs';

console.log(generateQuestions("fullstack,frontend",5,5).then((res)=>{ 
  fs.writeFileSync('output.json', res);
  console.log(res);
}));

