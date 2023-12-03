import Game from './engine/game/game.js'
import { mainMenu } from './scenes/mainMenu.js'
import { fortEntrance } from './scenes/fortEntrance.js'

// This is the entrypoint for the game

// Here you instanciate a new game object
// It is exported so that scenes can access the game object
export const game = new Game()

// Add your scenes to the game object
game.addScene(mainMenu)
game.addScene(fortEntrance)

// Define your starting scene, the very first scene that runs
game.setStartScene('Main Menu')

// Run the game loop
game.Run()