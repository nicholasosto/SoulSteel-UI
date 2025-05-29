/** main.client.ts */
import { Players } from "@rbxts/services";
const localPlayer = Players.LocalPlayer;

/* Connections ========================================= */

// Character Appearance Loaded
localPlayer.CharacterAppearanceLoaded.Connect(() => {
	// Initialize the UI components here
	// For example, you can create a PlayerHUD or CharacterCard
	print("Main client Character Appearance Loaded");
});
