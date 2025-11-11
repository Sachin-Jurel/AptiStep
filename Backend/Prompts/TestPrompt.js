const prompt =  `
Generate 25 hard aptitude MCQs in pure JSON array format.
Each item: {id, question, options[4], answer}.
Include topics: Quantitative, logical Reasoning, Verbal Ability, Data Interpretation, General Knowledge, Computer Awareness.
Example:
[{"id":1,"question":"Sum of first 50 natural numbers?","options":["1275","1250","1300","1225"],"answer":"1275"}]
Return only valid JSON, no text or code block.
`;

const Quantprompt = `
Generate 25 hard aptitude MCQs in pure JSON array format.
Each item: {id, question, options[4], answer}.
Include topics: Arithmetic, Algebra, Geometry, Statistics, Probability.
Example:
[{"id":1,"question":"If 3x + 5 = 20, what is the value of x?","options":["3","5","10","15"],"answer":"5"}]
Return only valid JSON, no text or code block.
`;

const logicalprompt = `
Generate 25 hard logical reasoning MCQs in pure JSON array format.
Each item: {id, question, options[4], answer}.
Include topics: Pattern Recognition, Analytical Reasoning, Syllogism, Blood Relations, Direction Sense.
Example:
[{"id":1,"question":"If all roses are flowers and some flowers fade quickly, which of the following is true?","options":["All flowers are roses","Some roses fade quickly","No roses fade quickly","Some flowers are not roses"],"answer":"Some roses fade quickly"}]
Return only valid JSON, no text or code block.
`;

export default {  prompt, Quantprompt, logicalprompt};