# strix JS

A game engine in JavaScript for text based adventure games.
Still very early in development

## Engine
All files for the engine are in the strix folder.
Outside of that is an example game I am using to test and design the engine. 

## What is currently implemented?
Strix provides the Game and Scene classes. 

### Game
The Game class is the 'global' game object.
This is where al game state is stored. It's also responsible for the game loop. 

<hr>

#### Properties
`scenes: Map<string, Scene>`

A list of all scenes that make up the game

<br>

`currentScene: Scene | undefined`

The currently active scene

<br>

`defaultOptions: Map<string, Action>`

Map of all default options for the game

<hr>

#### Methods
`addDefaultOption(command: string, action: Action)`

Allows you to add a defined default opton to the game

<br>

`setStartScene(sceneName: string)`

Define the starting scene of the game

This is the scene that runs when the game is started, usually a main menu

<br>

`addScene(scene: Scene)`

Add a scene to the game

<br>

`changeScene(sceneName: string)`

Change the current scene

Used for switching between scenes

<br>

`Run()`

Runs the game loop