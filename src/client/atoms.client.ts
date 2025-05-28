import Fusion from "@rbxts/fusion";
import * as Atoms from "shared/FusionUI/atoms";
import { Players } from "@rbxts/services";
import { WeaponImages } from "shared/Assets";
import { Panel } from "shared/FusionUI";

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const { New } = Fusion;

// Define the LeftPanel using the Panel component
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
	[Fusion.Children]: {
		IconButton: Atoms.IconButton({
			Name: "TestIconButton",
			Icon: WeaponImages.SlotBow, // Replace with a valid asset ID
			OnClick: () => {
				print("IconButton clicked");
			},
		}),
		LeftPanel: LeftPanel,
	},
});
