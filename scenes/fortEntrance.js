import { Scene, Option } from '../engine/scene/scene.js'
import { game } from '../game.js'

// This is how to implement a new scene
export const fortEntrance = new Scene(
    // Scene Name
    'Fort Entrance',
    // Scene Text
    'You stand at the entrance of the fort staring up at the ramparts, you hear no sound.',
    // Array of options
    [
        new Option(
            // Option text
            "Enter the fort",
            // Option Action
            () => {
                game.changeScene('')
            }
        )
    ]
)