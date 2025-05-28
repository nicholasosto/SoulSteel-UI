import Fusion from "@rbxts/fusion";
import * as Atoms from "shared/FusionUI/atoms";
import { Players } from "@rbxts/services";
import { Panel } from "shared/FusionUI";

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const { New } = Fusion;


const LeftPanel = Panel({
	Name: "LeftPanel",
	Size: new UDim2(0, 300, 1, 0),
	Position: new UDim2(0, 0, 0, 0),
	AnchorPoint: new Vector2(0, 0),
	Title: "Left Panel",
	OnClose: () => {
		print("Left Panel closed");
	},
	Children: [Atoms.AvatarFrame],
});

const AtomsGUI = New("ScreenGui")({
	Name: "AtomsGui",
	DisplayOrder: 1000,
	ResetOnSpawn: false,
	Parent: playerGui,
	IgnoreGuiInset: true,
	[Fusion.Children]: {},
});
