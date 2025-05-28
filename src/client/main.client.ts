import Fusion from "@rbxts/fusion";
import { Players } from "@rbxts/services";

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const { New } = Fusion;

const MAINGUI = New("ScreenGui")({
	Name: "MainGui",
	DisplayOrder: 1000,
	ResetOnSpawn: false,
	Parent: playerGui,
	IgnoreGuiInset: true,
	[Fusion.Children]: {},
	[Fusion.OnEvent("ChildAdded")]: (child: Instance) => {
		if (child.Name === "TestPanel") {
			print("TestPanel added to MainGui");
		}
	},
});
