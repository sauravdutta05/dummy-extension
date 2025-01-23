import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    matches: ["https://*/*"],
    all_frames: true
}

window.addEventListener("load", () => {
    console.log("Dummy Extension is running")
})