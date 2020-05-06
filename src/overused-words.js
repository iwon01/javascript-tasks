const story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ['really', 'very', 'basically'];

const unnecessaryWords = ['extremely', 'literally', 'actually' ];

//1
let storyWords = story.split(' ') 

//2
console.log('\n', `There are ${storyWords.length} total words.`);

//3
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
// console.log(betterWords);

//4
let overusedCounts = storyWords
  .filter(word => overusedWords.includes(word))
  .reduce((counts, word) => {
    if(word in counts) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
    return counts;
  }, {});


//5
let sentencesCount = storyWords
  .filter(word => word.includes('.') || word.includes('!'))
  .length;

//6
console.log('\n', 
  `There are ${storyWords.length} total words.`,
  `There are ${sentencesCount} sentences.`,
  `Overused words count : ${JSON.stringify(overusedCounts)}.`
);

//7
console.log('\n', betterWords.join(' '));

//8.1
let overusedCounter = {};
let copyStoryWords = storyWords.slice(0);

for(let i in copyStoryWords) {
  if(overusedWords.includes(copyStoryWords[i]) && copyStoryWords[i] in overusedCounter) {
    overusedCounter[copyStoryWords[i]]++;
    if(overusedCounter[copyStoryWords[i]] % 2 === 0) {
      copyStoryWords[i] = '';
    }
  } else {
    overusedCounter[copyStoryWords[i]] = 1;
  }
}
let overusedAdjusted = copyStoryWords.filter(word => word.length).join(' ');
console.log('\n', overusedAdjusted);

//8.2
let wordCounts = storyWords
  .map(word => word.toLowerCase().replace(/[.,!]/, ''))
  .reduce((counts, word) => {
    if(word in counts) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
    return counts;
  }, {});

let max = 0, maxWord = '';
for(let word in wordCounts) {
  if(wordCounts[word] > max) {
    max = wordCounts[word];
    maxWord = word;
  }
}

console.log('\n', `The word that appears the most is '${maxWord}' appearing '${max}' times.`);

//8.3
let overusedReplaced = storyWords
  .map(word => {
    if(overusedWords.includes(word)) {
      return 'ABSOLUTELY';
    } else {
      return word;
    }
  }).join(' ');

console.log('\n', overusedReplaced);