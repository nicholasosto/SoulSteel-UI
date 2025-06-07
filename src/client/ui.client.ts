/** ui.client.ts
 *  UI Client
 *  * This file initializes the UI components for the game client. Serves as the entry point for the Fusion UI framework.
 *
 * */

/* Imports ========================================= */
import Fusion from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { TestScreen } from "shared/FusionUI/screens";

const PlayerGUI = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;
const DummyScreen = PlayerGUI.WaitForChild("DUMMY") as ScreenGui;

DummyScreen.Enabled = false; // Disable the dummy screen if it exists
/* Screens ========================================= */
//PlayerHUD();
//EquipmentPanel();
TestScreen();
//WeaponUpgradeScreen();
