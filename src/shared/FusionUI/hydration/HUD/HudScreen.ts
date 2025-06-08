import Fusion from "@rbxts/fusion";

import { PlayerGUI } from "shared/constants";
import { CharacterInfoCard } from "./CharacterInfoCard";

const { New, Children, Hydrate } = Fusion;

export const HudScreen = () => {
	return New("ScreenGui")({
		Name: "HudScreen",
		ResetOnSpawn: false,
		IgnoreGuiInset: true,
		AutoLocalize: false,
		ZIndexBehavior: Enum.ZIndexBehavior.Sibling,
		Parent: PlayerGUI,
		[Children]: {
			HudContainer: New("Frame")({
				Name: "HudContainer",
				Size: UDim2.fromScale(1, 1),
				BackgroundTransparency: 1,
				[Children]: {
					TopLeft: New("Frame")({
						Name: "TopLeft",
						Size: UDim2.fromScale(0.25, 0.5),
						Position: UDim2.fromScale(0, 0),
						BackgroundTransparency: 0.9,
						[Children]: {
							Layout: New("UIListLayout")({
								SortOrder: Enum.SortOrder.LayoutOrder,
								FillDirection: Enum.FillDirection.Vertical,
								HorizontalAlignment: Enum.HorizontalAlignment.Left,
								VerticalAlignment: Enum.VerticalAlignment.Top,
								Padding: new UDim(0, 10),
							}),
							Dragger: New("UIDragDetector")({
								Name: "Dragger",
								Enabled: true,
							}),
							Spacer: New("Frame")({
								Name: "Spacer",
								Size: UDim2.fromOffset(0, 50),
								BackgroundTransparency: 1,
								LayoutOrder: -1,
							}),
							CharacterInfoCard: CharacterInfoCard(),
							MenuBar: New("Frame")({
								Name: "MenuBar",
								Size: UDim2.fromScale(1, 0.1),
								BackgroundColor3: Color3.fromRGB(50, 50, 50),
								BackgroundTransparency: 0.5,
								LayoutOrder: 5,
								[Children]: {
									Dragger: New("UIDragDetector")({
										Name: "Dragger",
										Enabled: true,
									}),
									MenuLabel: New("TextLabel")({
										Name: "MenuLabel",
										Text: "Menu",
										TextColor3: Color3.fromRGB(255, 255, 255),
										TextSize: 18,
										Font: Enum.Font.GothamBold,
										BackgroundTransparency: 1,
										Size: UDim2.fromScale(1, 1),
										TextXAlignment: Enum.TextXAlignment.Center,
									}),
								},
							}),
						},
					}),
					TopRight: New("Frame")({
						Name: "TopRight",
						Size: UDim2.fromScale(0.25, 0.1),
						Position: UDim2.fromScale(0.75, 0),
						BackgroundTransparency: 1,
						[Children]: {
							// Placeholder for future content
							GameLabel: New("TextLabel")({
								Name: "GameLabel",
								Text: "Game Name",
								TextColor3: Color3.fromRGB(255, 255, 255),
								TextSize: 24,
								Font: Enum.Font.GothamBold,
								BackgroundTransparency: 1,
								Size: UDim2.fromScale(1, 1),
								TextXAlignment: Enum.TextXAlignment.Center,
							}),
						},
					}),
					Bottom: New("Frame")({
						Name: "Bottom",
						Size: UDim2.fromScale(1, 0.1),
						Position: UDim2.fromScale(0, 0.9),
						BackgroundTransparency: 1,
						[Children]: {
							// Placeholder for future content
							Background: New("Frame")({
								Name: "Background",
								Size: UDim2.fromScale(1, 1),
								BackgroundColor3: Color3.fromRGB(0, 0, 0),
								BackgroundTransparency: 0.5,
							}),
						},
					}),
				},
			}),
		},
	});
};
