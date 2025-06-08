import { makeHello } from "shared/module";
import { Players, Workspace } from "@rbxts/services";
print(makeHello("main.server.ts"));

Players.PlayerAdded.Connect((player) => {
	print(`Player added: ${player.Name}`);

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
