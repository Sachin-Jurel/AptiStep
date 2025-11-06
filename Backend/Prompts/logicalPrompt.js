const prompt = `
Generate 25 hard logical reasoning MCQs in pure JSON array format.
Each item: {id, question, options[4], answer}.
Include topics: Pattern Recognition, Analytical Reasoning, Syllogism, Blood Relations, Direction Sense.
Example:
[{"id":1,"question":"If all roses are flowers and some flowers fade quickly, which of the following is true?","options":["All flowers are roses","Some roses fade quickly","No roses fade quickly","Some flowers are not roses"],"answer":"Some roses fade quickly"}]
Return only valid JSON, no text or code block.
`;

export default prompt;

