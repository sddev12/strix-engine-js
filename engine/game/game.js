import { Scene } from '../scene/scene.js'

export default class Game {

    // Map of scenes that make up the game
    Scenes = new Map()

    // Tracks the current active scene
    CurrentScene = new Scene()

    // Define the entry scene for the game
    setStartScene(scene) {
        this.CurrentScene = this.Scenes.get(scene)
    }

    // Add a scene to the game object
    addScene(scene) {
        this.Scenes.set(`${scene.Name}`, scene)
    }

    // Swtich to another scene
    changeScene(scene) {
        this.CurrentScene = this.Scenes.get(scene)
    }

    // Run the game loop
    Run() {
        while (true) {
            console.clear()
            if (this.CurrentScene) {
                this.CurrentScene.Run()
            } else {
                console.log('ERROR: No scene set. Exiting Game')
                break
            }
        }
    }
}