import { Scene, Option } from '../engine/scene/scene.js'
import { game } from '../game.js'

export const fortEntrance = new Scene(
    'Fort Entrance',
    'You stand at the entrance of the fort staring up at the ramparts, you hear no sound.',
    [
        new Option(
            "Enter the fort",
            () => {
                game.changeScene('')
            }
        )
    ]
)