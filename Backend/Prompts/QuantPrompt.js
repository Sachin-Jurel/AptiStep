const prompt = `
Generate 25 hard aptitude MCQs in pure JSON array format.
Each item: {id, question, options[4], answer}.
Include topics: Arithmetic, Algebra, Geometry, Statistics, Probability.
Example:
[{"id":1,"question":"If 3x + 5 = 20, what is the value of x?","options":["3","5","10","15"],"answer":"5"}]
Return only valid JSON, no text or code block.
`;

export default prompt;
