import { Scene } from '../scene/scene'

export default class Game {

    // Map of scenes that make up the game
    scenes: Map<string, Scene> = new Map()

    // Tracks the current active scene
    currentScene: Scene | undefined

    // Define the entry scene for the game
    setStartScene(sceneName: string) {
        this.currentScene = this.scenes.get(sceneName)
    }

    // Add a scene to the game object
    addScene(scene: Scene) {
        this.scenes.set(`${scene.name}`, scene)
    }

    // Swtich to another scene
    changeScene(sceneName: string) {
        this.currentScene = this.scenes.get(sceneName)
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