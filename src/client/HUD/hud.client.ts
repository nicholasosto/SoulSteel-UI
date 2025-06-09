import { Children, Hydrate } from "@rbxts/fusion";
import { Players } from "@rbxts/services";
import { HUD, HydrationTemplates, PlayerGUI } from "shared/constants";
import { Health } from "shared/ecs/BaseTrait";
import { GameLabel, PlayerResources } from "shared/FusionUI";
import { HydrateResourceBar, ResourceBarType } from "shared/FusionUI/hydration/types/ResourceBar";
import { createFusionResource } from "shared/FusionUI/states/Helpers/FusionResource";

/* Local Player */
const localPlayer = Players.LocalPlayer;

/* Get Hydrations */
type HydrationType = Configuration & {
	HealthBar: ObjectValue;
	StaminaBar: ObjectValue;
	SoulPowerBar: ObjectValue;
};

/* Get the Config for Hydration */
const HydrationConfig = HUD.FindFirstChild("Hydrations") as HydrationType;

/* ================== Hydrate Resource Bars ================== */
const HealthBar = HydrateResourceBar(
	PlayerResources.HealthResource,
	HydrationConfig.HealthBar.Value as ResourceBarType,
);
const StaminaBar = HydrateResourceBar(
	PlayerResources.StaminaResource,
	HydrationConfig.StaminaBar.Value as ResourceBarType,
);
const SoulPowerBar = HydrateResourceBar(
	PlayerResources.SoulPowerResource,
	HydrationConfig.SoulPowerBar.Value as ResourceBarType,
);

/* ================== Hydrate the Menu Bar ================== */

/* Hydrate them */
