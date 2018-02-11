# Workplan:

0 - Read me and planning ( 30 mins )
1 - Fork project, create empty ng app, push. ( 15 min )
2 - Add initial models ( 30  mins  )
3 - Add initial components (basic) ( 1 hr )
4 - Set up basic UI interface (mostly wireframes) ( 1 hr )
5 - Sequencer basic ( 1 hr )
6 - Add some flavor to  UI (styles and enable/disable buttons) (1 hr)
7 - Responsiveness, similar to a PO-12 ( 1 hr )
8 - Change time on the fly ( 30 mins if we begin from the start when change, ? if we need to sync up)
9 - Add velocity parameters ( 30 mins )


Those are my initial estimates. 
I don't think I'll have time to do some nice UI stuff or add responsiveness within that timeframe. 

# Installation

This is a basic angular 5 app done with angular-cli.
Cloning the project and doing an npm install after should get you going.
`ng serve` to run.


## How much time did you spend on the exercise, what parts took longer?

At the four hour mark, I think my time was evenly spent between setting up the components, setting up a very basic UI,
setting up the sub-pub with services and reworking a bit my initial "demo tracks" to accommodate some issues.

It took me longer than I though to set up my project with the rxjs imports, and my IDE stills shows some missing
dependencies although its working. Thanks Webstorm!

I also spent some time debating if I should include some css library "to save time" but ended up doing some very basic 
styles just to set the layout.

Finding the right RXJS operator to start the sequence right away also took some research time.

## What were the hard parts, what parts did you enjoy most?

Setting up the sequencer was not that hard after I got the right RXJS operator, and I think that was the one I enjoyed 
the most as I haven't used that operator before.

Prioritizing what to do on the four hours was interesting, I think the hardest part was to not get carried away
with focusing on only one area.


## Data modeling - How did you model the concepts of songs and tracks/patterns, can you explain why?

I broke it down as a series of sequences or lanes for each instrument or track. 
Each track is comprised of steps that can be turned on or off, as well as a velocity setting.
The drum machine has a set of songs and loads the one selected.

Each track will be responsible of triggering a sound if the current step is on.
The main app will turn on and off the sequencer, and each component just subscribes to the event that tells us
the active step.

 

## Simplicity vs Flexibility - How flexible is your solution? 
Can a user define patterns of different lengths? 
Can they play at the same time? 
Can the patterns be changed in real time? 
Can the velocity be set? None of these features are expected, what is needed for you to add support for these?\

- Current solution is for 16 steps, and its not really flexible on that.
- Currently is the sequencerService that gives the 'steps' from 1 to 16 but we could move that logic to each 'track' and let each track figure out when to start over.
- Patterns can change in real time.
- Velocity can be set as well, although there is no UI to change it, currently is all 100%.
- The user cannot set patterns of different lengths.



## Is your code tested? Why/why not? How would you test it (or test it better)?

Not at all. no time.
If I where to spend some time on testing, I’ll add some test to the sequencer logic as it's the core logic.


TODOS

- Save the patterns, using local storage for example. Probably needs a UI element to save explicitly.
- Nicer UI. I could spend days on this, so I decided not to. The UI right now its basically a wireframe.