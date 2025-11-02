const prompt =  `
Generate 25 basic math and aptitude MCQs in pure JSON array format.
Each item: {id, question, options[4], answer}.
Include topics: arithmetic, percentages, averages, geometry, reasoning, logic.
Example:
[{"id":1,"question":"Sum of first 50 natural numbers?","options":["1275","1250","1300","1225"],"answer":"1275"}]
Return only valid JSON, no text or code block.
`;

  export default prompt;