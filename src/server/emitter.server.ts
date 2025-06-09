// import { ResourceRemotes } from "shared/Net/remotes";
// import { ResourceBarsDTO } from "shared/data/DTO";
// import { Players } from "@rbxts/services";

// const GetResources = ResourceRemotes.Server.Get("GetResources");
// const UpdatePlayerResources = ResourceRemotes.Server.Get("UpdatePlayerResources");

// const resourceBarsDTO: ResourceBarsDTO = {
// 	Health: {
// 		Current: 100,
// 		Max: 100,
// 		LabelText: "Health",
// 		RegenRate: 1,
// 	},
// 	Mana: {
// 		Current: 50,
// 		Max: 100,
// 		LabelText: "Mana",
// 		RegenRate: 0.5,
// 	},
// 	Stamina: {
// 		Current: 75,
// 		Max: 100,
// 		LabelText: "Stamina",
// 		RegenRate: 0.75,
// 	},
// };

// // Callback for the server to get the resources
// ResourceRemotes.Server.Get("GetResources").SetCallback(() => {
// 	return resourceBarsDTO;
// });

// // Connect the server event to update player resources
// Players.PlayerAdded.Connect((player) => {
// 	// Send the initial resource data to the player when they join
// 	player.CharacterAdded.Connect(() => {
// 		print(`Player ${player.Name} has joined the game. Sending initial resources.`);
// 		UpdatePlayerResources.SendToPlayer(player, resourceBarsDTO);
// 	});
// });
