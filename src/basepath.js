// Detect Base Path From `location.href`
const basepath = window.location.href.startsWith('https://neos21.github.io/practice-riot') ? '/practice-riot' : '';
console.log(`basepath : [${basepath}]`);

export default basepath;
