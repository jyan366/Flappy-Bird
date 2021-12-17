# Introduction
The original Flappy Bird game was released in 2013 by Dong Nguyen, once launched it immediately became a viral sensation. The game was simple – one game mode, one character and one possible play option – tap. 
The game started by tapping to make the character - a yellow bird - jump. The bird is made fly by the user through frequent tapping, with quicker tapping for up and slower tapping for down. Two tubes are randomly generated as you progress. Your score increases once you pass through the fixed gap in the middle of these. The game was simple in terms of graphics, user experience and seemingly, development. For my Milestone 2 Project I have attempted to make a replica of this game, with my own spin. 

View the live project [here](https://jyan366.github.io/Flappy-Bird/)
 
# Index
[User Experience (UX)](https://github.com/jyan366/Flappy-Bird#user-experience-ux)
 * [Project Goals](https://github.com/jyan366/Flappy-Bird#project-goals)
 * [User Stories](https://github.com/jyan366/Flappy-Bird#user-stories)
[Design](https://github.com/jyan366/Flappy-Bird#design)
 * [Colour Scheme](https://github.com/jyan366/Flappy-Bird#colour-scheme)
  * [Character](https://github.com/jyan366/Flappy-Bird#character)
 * [Background](https://github.com/jyan366/Flappy-Bird#background)
 * [Border](https://github.com/jyan366/Flappy-Bird#border)
 * [Tubes](https://github.com/jyan366/Flappy-Bird#tubes)
 * [Fonts](https://github.com/jyan366/Flappy-Bird#fonts)
[Features](https://github.com/jyan366/Flappy-Bird#features)
* [Existing Features](https://github.com/jyan366/Flappy-Bird#existing-features)
 * [Start Screen](https://github.com/jyan366/Flappy-Bird#start-screen)
 * [Game Area](https://github.com/jyan366/Flappy-Bird#game-area)
 * [The Game](https://github.com/jyan366/Flappy-Bird#the-game)
 * [Scores](https://github.com/jyan366/Flappy-Bird#scores)
 * [Audio](https://github.com/jyan366/Flappy-Bird#audio)
 * [Game Over Screen](https://github.com/jyan366/Flappy-Bird#game-over-screen)
* [Future Features](https://github.com/jyan366/Flappy-Bird#existing-featuresfuture-features)
 * [Change Backgrounds](https://github.com/jyan366/Flappy-Bird#technologies-used)
 * [Choose Characters](https://github.com/jyan366/Flappy-Bird#design)
 * [Global Scores](https://github.com/jyan366/Flappy-Bird#design)
* [Technologies Used](https://github.com/jyan366/Flappy-Bird#technologies-used)
* [Languages Used](https://github.com/jyan366/Flappy-Bird#languages-used)
* [Frameworks Used](https://github.com/jyan366/Flappy-Bird#frameworks-libraries--programs-used)
[Testing](https://github.com/jyan366/Flappy-Bird#testing)
* [Code Validators](https://github.com/jyan366/Flappy-Bird#code-validators)
* [Testing Tools](https://github.com/jyan366/Flappy-Bird#testing-tools-used)
* [Responsiveness](https://github.com/jyan366/Flappy-Bird#responsiveness)
[Deployment](https://github.com/jyan366/Flappy-Bird#deployment)
[Credits](https://github.com/jyan366/Flappy-Bird#credits)
# User experience (UX)

## Project goals
* My goal when undertaking this project was to demonstrate the key features of JavaScript, while also demonstrating my retained and developed understanding of HTML and CSS.
* From a gameplay perspective, I wanted the game to be difficult but playable, with different feedback for different events.
* I wanted the game to have one difficulty, as per the original game. The difficulty of this game is derived from the fact that it requires 100% of the users attention. In order to provide some feedback I hoped to include a response once a new high score is set.


## User stories
As a player I want:
1.	As a player, I want to be able to play the game immediately.
2.	As a player, I want to easily be able to understand the controls.
3.	As a player, I want the game to be challenging.
4.	As a player, I want to be able to restart the game. 
5.	As a player, I want to hear sounds when I jump, increase my score, get a new high score, or die. 
6.	As a player, I want to play the game on all devices and browsers.


## Design
### Colour scheme
The colours used in my version of Flappy Bird were based on the original colours of the game. I hoped for my recreation of this game to feel familiar and nostalgic for users, while maintaining a beautiful design.
 
### Character
For my character, I chose an alternative design to the original game. My character is a brown bird, with a red top hat. I found this character to be entertaining, without taking away from the simplicity of the game. You can see the original source of this image here: https://key0.cc/fr/47289-All-Photo-Png-Clipart-Flappy-Bird-Sprite-Png. 
(link to bird 2 png)

### Background
For my background, I chose to adopt the original background of the game – a blue sky with clouds. Due to my method for hit detection (which I will speak about later), I found that including the clouds in-game was too complicated. For this reason I have chosen to have the background remove the clouds while the game is running.
(link to background)

### Border
While exploring potential borders, I tried out a gold border. Once I saw this I knew it was what I was looking for. The 10px gold borders give the game an arcade feel to it, which I believe enhances user experience. 

### Tubes
For the tubes, I chose to use the same green tubes that can be found in the Mario games.

### Fonts
I used the VT323 font from Google Fonts throughout my game. The stylish font is similar to the font used in the original Flappy Bird game, and has an arcade game design. 

# Features

## Existing features

### Start screen
My Start Screen is simple, with one option to “Play Game”. This screen also includes a one line instruction on how to play.

### Game Area
* The game was created using HTML with three elements – The character, the tubes and the gap. 
* The character is an imported image of the bird within a square div.
* The tube is the length of the Game Area, however appears as two tubes due to the gap being the same colour as the background, as well as black border top and bottom of the gap.
* The gap overlays the tube and blends in with the background. Its height is randomly generated to be between the top and the bottom of the tube.

### Controlling the game
* The game can be controlled on PC by pressing space-bar or clicking the bottom of the screen. On mobile this can be done by tapping the bottom of the screen.

### The Game
* The game begins after clicking start on the first jump. This starts an infinite animation which brings the tubs from all the way right, to offscreen left. This creates the moving tubes design.
* The gravity and jumping functions simply add and take away from the top of the character. Gravity is done on an interval and jumping on command. When jumping is active gravity is inactive. 
* The hit detection, put in words, states “If the character hits the tube, but is not also hitting the gap, the game is over.”
* When the animation plays through, the scoring sound plays.

### Scores
* During the game, the player can see their current score at the top of the screen in white. If the player hits a new high score, a sound plays and the score changes from white to gold. 
* When the game ends the players score is displayed to them.
* The high score area is updated if current score is greater than the high score. 

### Audio
* For my project I decided that I would need 4 sounds. Jump, increase score, new high score and game over sounds were all found online and inserted from “free-download” sites with authorisation from the creators. Each sound is unique, and they all serve to increase user experience. 
* Jump – This sound plays when the function jump() is active.
* Score – This sound plays every time the animation iterates.
* High Score – This sound plays when the current score equals the high score, and adds pressure.
* Game Over – This sound is a trombone, and plays once the hit detection activates.

### Game Over screen
The Game Over screen shows when hit detection activates, and displays the users final score using a template literal, as well as an option to go back to the menu. 

## Future Features
### Change Backgrounds
I think a nice feature to include would be the original background, or different styled backgrounds. I ran in to an issue due to the fact that my tube div stretched the entire length of the game, and could not make the gap transparent. 
### Choose Characters
I would like to allow the user to choose between multiple characters, and perhaps have characters unlock once a score is reached.
### Global Scores
I would like to be able to keep a database of all scores achieved on this game, as well as user names. 


## Technologies used
### Languages used
HTML5
* HTML5 provides the structure and the content for my project.
CSS3
* CSS3 provides the style of the HTML5 elements.
Javascript
* JavaScript provides the interactivity of the project.

### Frameworks, libraries & programs used
Gitpod
* The GitPod is used to develop the project.
Git
* The Git was used for version control to commit to Git and push to GitHub.
GitHub
* The GitHub is used to host the project.
Google Fonts
* Google Fonts is used to provide the font VT323 for all the text that is used in the project.


## Testing
### Code validators
* HTML Validator: No errors or warnings to show. 
* CSS Validator: No errors found. 
* JS Hint: No errors found, 39 warnings.


### Testing tools used
Autoprefixer
* Autoprefixer is used to parsethe CSS and to add vendor prefixes to CSS rules.
W3C Markup Validation Service
* The W3C MarkUp Validation Service is used to check whether there were any errors in the HTML5 code.
W3C CSS validator
* The W3C CSS validator is used to check whether there were any errors in the CSS3 code.
JShint
* JShint is a JavaScript validator dat is used to check wheter there were any errors in the JavaScript code.
 
### Responsiveness
* Responsiveness of the game is tested with Chrome Dev Tools and Lightbox.
* The game has been tested across all screen sizes, and performs well on each.
* The game has been tested across all screen browsers, and performs well on each.

## Deployment
### Deployment of my project
This project is hosted in GitHub pages, to make my project visible to others.
The project is deployed via the following steps:
1.	Log in to GitHub and go to the repository.
2.	At the top of the repository, locate the Settings button and click on it.
3.	On the Settings page, scroll down to the GitHub Pages section.
4.	Select Master Branche by the source section.
5.	The page refreshes automatically.
6.	Scroll down to the GitHub Page section and the link of the website is standing in the green bar.

## Credits
### Content
All of the text within this game is my own content.
I took inspiration from several tutorials during inital development, however the finished project is unique and original.

### Tutorials
* Coding Gravity and Ball Bounce: Javascript - https://www.youtube.com/watch?v=F9LUPoH400M&t=83s
* The Easiest Flappy Bird Tutorial Ever? - https://www.youtube.com/watch?v=3SsYZDJdeXk


### Media & Audio
* All images and audio clips are taken from royalty free sites.



*Thank you to the following individuals for helping me throughout this journey*
* The support and guidance of my mentor Precious Ijege.
* The lessons from Code Institute.
* Tutor James for helping me to solve a sound issue.
