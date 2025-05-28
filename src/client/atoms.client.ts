import Fusion from "@rbxts/fusion";
import * as Atoms from "shared/FusionUI/atoms";
import { Players } from "@rbxts/services";
import { WeaponImages } from "shared/Assets";

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const { New } = Fusion;

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
	},
	[Fusion.OnEvent("ChildAdded")]: (child: Instance) => {
		if (child.Name === "TestPanel") {
			print("TestPanel added to MainGui");
		}
	},
});
