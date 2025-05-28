import Fusion from "@rbxts/fusion";
import { Panel, PanelProps } from "shared/FusionUI";
import { Players } from "@rbxts/services";

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui") as PlayerGui;
const { New } = Fusion;

const TestPanelProps: PanelProps = {
	Name: "TestPanel",
	Size: new UDim2(0, 400, 0, 300),
	Position: new UDim2(0.5, -200, 0.5, -150),
	AnchorPoint: new Vector2(0.5, 0.5),
	Title: "Test Panel",
	OnClose: () => {
		print("Panel closed");
	},
};

const TestPanel = Panel(TestPanelProps);

const MAINGUI = New("ScreenGui")({
	Name: "MainGui",
	DisplayOrder: 1000,
	ResetOnSpawn: false,
	Parent: playerGui,
	IgnoreGuiInset: true,
	[Fusion.Children]: {
		TestPanel,
	},
	[Fusion.OnEvent("ChildAdded")]: (child: Instance) => {
		if (child.Name === "TestPanel") {
			print("TestPanel added to MainGui");
		}
	},
});
