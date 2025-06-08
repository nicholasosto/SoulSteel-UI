import Fusion, { Computed } from "@rbxts/fusion";
import { CharacterInfoCardType } from "../types";
import { HydrationTemplates, PlayerGUI } from "shared/constants";
import { createFusionResource } from "shared/FusionUI/states/Helpers/FusionResource";

/* References */
const characterInfoCardTemplate = HydrationTemplates.WaitForChild("CharacterInfoCard") as CharacterInfoCardType;

/* Replace with State Slice */
const FHealth = {
	Current: Fusion.Value(10),
	Max: Fusion.Value(100),
	RegenRate: Fusion.Value(1),
};
const HealthPercent = Computed(() => UDim2.fromScale(FHealth.Current.get() / FHealth.Max.get(), 1));

const FStamina = {
	Current: Fusion.Value(100),
	Max: Fusion.Value(100),
	RegenRate: Fusion.Value(1),
};

const FSoulPower = {
	Current: Fusion.Value(50),
	Max: Fusion.Value(100),
	RegenRate: Fusion.Value(1),
};

const dummy = createFusionResource(200, 500, new Color3(0.1, 0.1, 0.8));
export const CharacterInfoCard = () => {
	// Bind the resource bars to the state slices
	const hydratedInstance = Fusion.Hydrate(characterInfoCardTemplate.Clone())({
		Name: "HydfratedCard",
		Position: UDim2.fromScale(0, 0),
	});

	const HealthBar = hydratedInstance.ResourceBarsContainer.Health;
	const StaminaBar = hydratedInstance.ResourceBarsContainer.Stamina;
	const SoulPowerBar = hydratedInstance.ResourceBarsContainer.SoulPower;

	Fusion.Hydrate(HealthBar.Foreground)({
		Size: Computed(() => UDim2.fromScale(dummy.current.get() / dummy.max.get(), 1)),
	});

	task.spawn(() => {
		while (FSoulPower.Current.get() < FSoulPower.Max.get()) {
			FHealth.Current.set(math.random(0, FHealth.Max.get()));
			wait(0.5); // Simulate time passing for regeneration
			print(`Health: ${FHealth.Current.get()}/${FHealth.Max.get()}`);
		}
	});

	return hydratedInstance;
};
