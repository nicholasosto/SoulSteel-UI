/** ui.client.ts
 *  UI Client
 *  * This file initializes the UI components for the game client. Serves as the entry point for the Fusion UI framework.
 *
 * */

/* Imports ========================================= */
import Fusion from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { EquipmentPanel } from "shared/FusionUI/screens/EquipmentPanel";
import { PlayerHUD } from "shared/FusionUI/screens/PlayerHUD";

/* Screens ========================================= */
PlayerHUD();
EquipmentPanel();
