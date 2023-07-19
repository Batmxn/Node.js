import inquirer from 'inquirer';
import { youtube } from 'scrape-youtube';
await inquirer
  .prompt([
    {
        "name": "Paste YT link",
    }
  ])
  .then((answers) => {
        answers = Object.values(answers);
        answers = answers[0];
        answers = answers.toLowerCase();

        const YoutubeLink = answers;

        await youtube.search(YoutubeLink);


        await inquirer
        .prompt([
          {
              "name": "Paste YT link",
               type: "list",
               choices: [
                ".mp4"
                ".mp3"
                ".wav"
               ]
          }
        ])
        .then((answers) => {
              answers = Object.values(answers);
              answers = answers[0];
              answers = answers.toLowerCase();
      
              const YoutubeLink = answers;
      
              
        })
  })
  
  