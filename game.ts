import Game from './strix'
import { mainMenu } from './game/scenes/mainMenu'
import { fortEntrance } from './game/scenes/fortEntrance'
import exitGame from './game/defaultOptions/exitGame'

// This is the entrypoint for the game

// Here you instanciate a new game object
// It is exported so that scenes can access the game object
export const game = new Game()

// Add default options
game.addDefaultOption('exit', exitGame)

// Add your scenes to the game object
game.addScene(mainMenu)
game.addScene(fortEntrance)

// Define your starting scene, the very first scene that runs
game.setStartScene('Fort Reyark')

// Run the game loop
game.Run()