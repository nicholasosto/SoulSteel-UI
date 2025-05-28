import Fusion, { Computed } from "@rbxts/fusion";
import { Players } from "@rbxts/services";

export class PlayerResources {
	protected static readonly HealthPercent = Computed(() => {
		const player = Players.LocalPlayer;
		if (player.Character === undefined) {
			return 0;
		}
		const humanoid = player.Character.FindFirstChildOfClass("Humanoid");
		if (humanoid === undefined) {
			return 0;
		}
		return humanoid.Health / humanoid.MaxHealth;
	});
}
