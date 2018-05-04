"use strict";

{
let total = 0;
let scale = ("On a scale of 1—10, ");
let questions = [
  "how friendly are you? (10 = a friend to all, 1 = preferably you're alone)",
  "how well do you know how to fly? (10 = like a bird, 1 = like a rock)",
  "what level of mastery are you in Dejarik? (10 = a master, 1 = never heard of it)",
  "rate your fear of the Galactic Empire (10 = deathly afraid, 1 = fearless)."];
  for (let i = 0; i < questions.length; i++) {
    total += Number(prompt(`${scale}${questions[i]}`));
  }

  if (total > 35) {
    console.log(`You scored ${total} out of 40! You and Chewbacca will be the best of friends.`);
  } else if (total > 25 && total <= 35) {
    console.log(`You scored ${total} out of 40. You'd be pretty alright for Chewbacca.`);
  } else {
    console.log(`You scored ${total} out of 40. Chewbacca would probably rip your arms off.`);
  }
  }
