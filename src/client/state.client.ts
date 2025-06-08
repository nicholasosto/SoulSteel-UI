import { createFusionResource } from "shared/FusionUI/states/Helpers/FusionResource";
import { CharacterInfoCardType } from "shared/FusionUI/hydration/types";
import { Players } from "@rbxts/services";
import { HydrationTemplates, PlayerGUI } from "shared/constants";
import Fusion, { Children, Computed, Hydrate } from "@rbxts/fusion";
import { PlayerHUD } from "shared/FusionUI/screens";
import { ResourceBars } from "shared/FusionUI/hydration/types/ResourceBar";

/* Create Fusion Resources for Player Stats */
// const Health = createFusionResource(90, 100, new Color3(0.8, 0.1, 0.1));
// const Stamina = createFusionResource(100, 100, new Color3(0.1, 0.8, 0.1));
// const SoulPower = createFusionResource(100, 100, new Color3(0.1, 0.1, 0.8));

/* Clone the CharacterInfoCard template */
const CharacterInfoCardTemplate = HydrationTemplates.WaitForChild("CharacterInfoCard") as CharacterInfoCardType;

// function SetupHumanoidConnection(humanoid: Humanoid | undefined) {
// 	if (!humanoid) {
// 		print(`No humanoid found for player: ${Players.LocalPlayer.Name}`);
// 		return;
// 	}
// 	// Set initial health
// 	Health.max.set(humanoid.MaxHealth);
// 	humanoid.HealthChanged.Connect((newHealth) => {
// 		Health.current.set(newHealth);
// 		print(`Health updated for ${Players.LocalPlayer.Name}: ${newHealth}`);
// 	});

// 	// Connect to running event for stamina
// 	humanoid.Running.Connect((speed) => {
// 		if (speed > 0) {
// 			Stamina.current.set(math.max(Stamina.current.get() - speed * 0.1, 0));
// 			print(`Stamina updated for ${Players.LocalPlayer.Name}: ${Stamina.current.get()}`);
// 		} else {
// 			Stamina.current.set(math.min(Stamina.current.get() + 0.05, Stamina.max.get()));
// 		}
// 	});

// 	humanoid.Died.Connect(() => {
// 		print(`Humanoid died for player: ${Players.LocalPlayer.Name}`);
// 		// Reset resources on death
// 		Health.current.set(Health.max.get());
// 		Stamina.current.set(Stamina.max.get());
// 		SoulPower.current.set(SoulPower.max.get());
// 	});
// }

// /* Humanoid Connection */
// const localPlayer = Players.LocalPlayer;
// if (localPlayer.Character) {
// 	const humanoid = localPlayer.Character.FindFirstChildOfClass("Humanoid");
// 	SetupHumanoidConnection(humanoid as Humanoid);
// }

// localPlayer.CharacterAdded.Connect((character) => {
// 	SetupHumanoidConnection(character.FindFirstChildOfClass("Humanoid") as Humanoid);
// 	print(`Character added for player: ${localPlayer.Name}`);
// });
const { New } = Fusion;

/* Hydration */
const CharacterInfoCard = () => {
	// Create a new instance of the CharacterInfoCard
	const hydratedInstance = Hydrate(CharacterInfoCardTemplate.Clone())({
		Name: "HydratedCharacterInfoCard",
		Position: UDim2.fromScale(0, 0),
		Parent: PlayerGUI.WaitForChild("HUD") as ScreenGui,
		[Children]: {
			ResourceBars: New("Frame")({
				Name: "ResourceBars",
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
				[Children]: {
					HealthBar: ResourceBars.Health,
					StaminaBar: ResourceBars.Stamina,
					SoulPowerBar: ResourceBars.SoulPower,
				},
			}),
			Dragger: New("UIDragDetector")({
				Name: "Dragger",
				Enabled: true,
			}),
		},
	});
};

CharacterInfoCard();
