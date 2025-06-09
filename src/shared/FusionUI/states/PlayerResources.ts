/// <reference types="@rbxts/types" />

/**
 * @file        PlayerResources.ts
 * @module      PlayerResources
 * @layer       State
 * @description Centralised resource slices used across the HUD.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */

import Fusion from "@rbxts/fusion";
import { createFusionResource } from "./Helpers/FusionResource";

export class PlayerResources {
	public static HealthResource = createFusionResource("Health", 75, 100, new Color3(0.8, 0.1, 0.1));
	public static SoulPowerResource = createFusionResource("Soul", 75, 100, new Color3(0.1, 0.1, 0.8));
	public static StaminaResource = createFusionResource("Stamina", 75, 100, new Color3(0.1, 0.8, 0.1));
}
