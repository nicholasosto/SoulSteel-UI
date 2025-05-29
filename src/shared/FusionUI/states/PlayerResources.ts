import Fusion, { Computed } from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { createFusionResource } from "./Helpers/FusionResource";
const LocalPlayer = Players.LocalPlayer;

export class PlayerResources {
	public static HealthResource = createFusionResource(1, 100, new Color3(0.8, 0.1, 0.1));
	public static SoulPowerResource = createFusionResource(50, 100, new Color3(0.1, 0.1, 0.8));
	public static StaminaResource = createFusionResource(75, 100, new Color3(0.1, 0.8, 0.1));
}
