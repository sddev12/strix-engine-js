import { Scene } from '../scene/scene'

export default class Game {

    // Map of scenes that make up the game
    scenes = new Map()

    // Tracks the current active scene
    currentScene: Scene

    // Define the entry scene for the game
    setStartScene(scene: string) {
        this.currentScene = this.scenes.get(scene)
    }

    // Add a scene to the game object
    addScene(scene: Scene) {
        this.scenes.set(`${scene.name}`, scene)
    }

    // Swtich to another scene
    changeScene(scene: string) {
        this.currentScene = this.scenes.get(scene)
    }

    // Run the game loop
    Run() {
        while (true) {
            console.clear()
            if (this.currentScene) {
                this.currentScene.Run()
            } else {
                console.log('ERROR: No scene set. Exiting Game')
                break
            }
        }
    }
}