import Fusion from "@rbxts/fusion";
import * as Atoms from "shared/FusionUI/atoms";
import * as Organisms from "shared/FusionUI/organisms";
import { Players } from "@rbxts/services";
import { Panel } from "shared/FusionUI";

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const { New } = Fusion;

const Center = {
	Position: new UDim2(0.5, 0, 0.5, 0),
	AnchorPoint: new Vector2(0.5, 0.5),
};

const smallFrame = () =>
	New("Frame")({
		Name: "SmallFrame",
		Size: UDim2.fromOffset(100, 100),
		BackgroundColor3: new Color3(0.8, 0.8, 0.8),
		BackgroundTransparency: 0.5,
		[Fusion.Children]: [
			Atoms.IconButton({
				Name: "DummyButton",
				OnClick: () => {
					print("Dummy Button clicked in Small Frame");
				},
				Icon: Atoms.IconAssets.Attribute.Dexterity,
			}),
			New("TextLabel")({
				Text: "Small Frame",
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
				TextColor3: new Color3(0, 0, 0),
				TextScaled: true,
			}),
		],
	});

const BaseFrameTest = Atoms.BaseFrame({
	Name: "BaseFrameTest",
	Size: UDim2.fromOffset(300, 200),
	Position: new UDim2(0.5, 0, 0.5, 0),
	AnchorPoint: new Vector2(0.5, 0.5),
	BackgroundColor3: new Color3(0.2, 0.2, 0.2),
	Children: [
		Atoms.Lists.VerticalList([
			Organisms.CharacterCard({
				Name: Fusion.Value("Test Character"),
				Level: Fusion.Value(1),
			}),
			smallFrame(),
			smallFrame(),
			smallFrame(),
			Atoms.IconButton({
				Name: "TestButton",
				OnClick: () => {
					print("Test Button clicked in Base Frame");
				},
				Icon: Atoms.IconAssets.Attribute.Strength,
				Size: UDim2.fromOffset(50, 50),
				Position: new UDim2(0.5, 0, 0.5, 0),
				AnchorPoint: new Vector2(0.5, 0.5),
			}),
		]),
	],
});

const HudPanelTest = Panel({
	Name: "LeftPanel",
	Size: UDim2.fromOffset(500, 600),
	...Center,
	Title: "Left Panel",
	OnClose: () => {
		print("Left Panel closed");
	},
	Children: [BaseFrameTest],
});

const AtomsGUI = New("ScreenGui")({
	Name: "AtomsGui",
	DisplayOrder: 1000,
	ResetOnSpawn: false,
	Parent: playerGui,
	IgnoreGuiInset: true,
	[Fusion.Children]: {
		Panel: HudPanelTest,
	},
	[Fusion.OnEvent("ChildAdded")]: (child: Instance) => {
		if (child.Name === "AtomsGui") {
			print("AtomsGui added to PlayerGui");
		}
	},
});
