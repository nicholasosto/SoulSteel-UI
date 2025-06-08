import { Players, ReplicatedStorage } from "@rbxts/services";
const Player = Players.LocalPlayer;

/* Player GUI ========================================= */
export const PlayerGUI = Player.WaitForChild("PlayerGui") as PlayerGui;

/* Screens ========================================= */
export const HUD = PlayerGUI.WaitForChild("HUD") as ScreenGui;


/* Hydration ========================================= */
export const HydrationTemplates = ReplicatedStorage.WaitForChild("HydrationTemplates") as Folder;

