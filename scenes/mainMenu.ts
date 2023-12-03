import { Scene, Option } from '../strix'
import { game } from '../game'

export const mainMenu = new Scene(
    'Fort Reyark', 
    `
A crow dives into the valley mist and strafes the old dirt track leading downwards towards the Denlin forest. 
Startled, it swerves with acrobatic skill to avoid an oncoming knight, failing to see him in the fog. 
The knight, making a slow rythmic progress through the valley, hums an old song to the thud of his horse's hoofs against the soft ground. 
He heads up the incline leading to a narrow pass in the hills obscured by the heavy mist in the air. 
As he draws nearer to the mountian pass, a mighty structure slowly emerges into his view. 

Fort Reyark, named after a long dead king was a sight to behold. 
Built into the mountain pass as if part of the mountains its self, it guards the only passage south into the Reylands.

Lets hope that your passage be a safe one, weary knight...
	`, 
    [
        new Option(
            "New Game",
            () => {
                game.changeScene('Fort Entrance')   
            }
        ),
        new Option(
            "Load Game",
            () => {
                game.changeScene('')   
            }
        ),
        new Option(
            "Exit Game",
            () => {
                console.clear()
                process.exit(0)
            }
        )
    ])