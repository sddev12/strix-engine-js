import Game from './engine/game/game.js'
import { mainMenu } from './scenes/mainMenu.js'
import { fortEntrance } from './scenes/fortEntrance.js'

export const game = new Game()

game.addScene(mainMenu)
game.addScene(fortEntrance)
game.setStartScene('Main Menu')
game.Run()