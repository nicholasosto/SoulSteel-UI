import { makeHello } from "shared/module";
import { Players, Workspace } from "@rbxts/services";
//import { PlayerClass } from "./Player/PlayerClass";
print(makeHello("main.server.ts"));

function CreatePlayerClass(player: Player) {
	// This function would create a player class instance, but for now, we just print the player's name.
	print(`Creating player class for: ${player.Name}`);

	//return playerClass;
}

Players.PlayerAdded.Connect((player) => {
	print(`Player added: ${player.Name}`);
	CreatePlayerClass(player);

	player.CharacterAdded.Connect((character) => {
		print(`Character added for player: ${player.Name}`);
		const damageBlock = new Instance("Part");
		damageBlock.Name = "DamageBlock";
		damageBlock.Size = new Vector3(4, 1, 4);
		damageBlock.Position = character.PrimaryPart?.Position.add(new Vector3(0, 5, 0)) || new Vector3(0, 5, 0);
		damageBlock.Anchored = true;
		damageBlock.Parent = Workspace;
		damageBlock.Touched.Connect((hit: BasePart) => {
			if (hit.Parent && hit.Parent.IsA("Model") && hit.Parent.FindFirstChild("Humanoid")) {
				const humanoid = hit.Parent.FindFirstChild("Humanoid") as Humanoid;
				if (humanoid) {
					humanoid.TakeDamage(10);
					print(`Damage dealt to ${hit.Parent.Name}`);
				}
			}
		});
	});
});
