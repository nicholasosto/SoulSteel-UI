import { Players } from "@rbxts/services";
import { PlayerResources } from "shared/FusionUI";

const LocalPlayer = Players.LocalPlayer;

function ConnectHumanoidHealth() {
	const character = LocalPlayer.Character;
	const humanoid = character?.FindFirstChildOfClass("Humanoid") as Humanoid;
	if (!humanoid) return;

	if (!humanoid) return;
	PlayerResources.HealthResource.max.set(humanoid.MaxHealth);
	// Connect to the Humanoid's HealthChanged event
	humanoid.HealthChanged.Connect((newHealth: number) => {
		print(`Humanoid health changed to: ${newHealth}`);
		PlayerResources.HealthResource.current.set(newHealth);
	});
	print("Connected to Humanoid HealthChanged event");
}

Players.LocalPlayer.CharacterAdded.Connect((character) => {
	// Wait for the Humanoid to be available
	const humanoid = character.WaitForChild("Humanoid") as Humanoid;
	if (humanoid) {
		ConnectHumanoidHealth();
	}
});
ConnectHumanoidHealth();
