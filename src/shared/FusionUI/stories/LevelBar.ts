/// <reference types="@rbxts/types" />

import Fusion from "@rbxts/fusion";

/**
 * @file        LevelBar.ts
 * @module      LevelBar
 * @layer       Organism
 * @description Scrollable grid of the player's gems.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-06-07 by Trembus – Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */
const { New, Children } = Fusion;
New("Frame")({
	Name: "LevelBar",
	BackgroundTransparency: 1,
	Position: UDim2.fromScale(0.5, 0.5),
	Size: UDim2.fromOffset(150, 25),

	[Children]: [
		New("Frame")({
			Name: "Extras",
			BackgroundTransparency: 1,
			Size: UDim2.fromScale(1, 1),
			ZIndex: 3,

			[Children]: [
				New("Frame")({
					Name: "Image",
					AnchorPoint: new Vector2(0.300000012, 0.5),
					BackgroundTransparency: 1,
					Position: UDim2.fromScale(1, 0.5),
					Size: UDim2.fromScale(1, 1.75),

					[Children]: [
						New("UIAspectRatioConstraint")({
							Name: "UIAspectRatioConstraint",
							DominantAxis: Enum.DominantAxis.Height,
						}),

						New("ImageLabel")({
							Name: "ImageLabel",
							AnchorPoint: new Vector2(0.5, 0.5),
							BackgroundTransparency: 1,
							Image: "rbxassetid://11953907093",
							Position: UDim2.fromScale(0.5, 0.5),
							Size: UDim2.fromScale(1, 1),
							ZIndex: 2,

							[Children]: [
								New("UIGradient")({
									Name: "UIGradient",
									Color: new ColorSequence([
										new ColorSequenceKeypoint(0, Color3.fromRGB(107, 227, 249)),
										new ColorSequenceKeypoint(1, Color3.fromRGB(65, 145, 242)),
									]),
									Rotation: 90,
								}),
							],
						}),

						New("ImageLabel")({
							Name: "ImageLabel-Stroke",
							AnchorPoint: new Vector2(0.5, 0.5),
							BackgroundTransparency: 1,
							Image: "rbxassetid://11953907093",
							ImageColor3: Color3.fromRGB(5, 25, 68),
							Position: new UDim2(0.5, 1, 0.5, 2),
							Size: UDim2.fromScale(1.04, 1.04),
						}),

						New("Frame")({
							Name: "Text",
							BackgroundTransparency: 1,
							Size: UDim2.fromScale(1, 1),
							ZIndex: 3,

							[Children]: [
								New("TextLabel")({
									Name: "TextLabel",
									AnchorPoint: new Vector2(0.5, 0.449999988),
									BackgroundTransparency: 1,
									FontFace: new Font("rbxasset://fonts/families/LuckiestGuy.json"),
									Position: UDim2.fromScale(0.5, 0.5),
									Size: UDim2.fromScale(1, 1),
									Text: "3",
									TextColor3: new Color3(1, 1, 1),
									TextSize: 20,
									ZIndex: 2,

									[Children]: [
										New("UIStroke")({
											Name: "UIStroke",
										}),

										New("UITextSizeConstraint")({
											Name: "UITextSizeConstraint",
											MinTextSize: 9,
										}),
									],
								}),
							],
						}),
					],
				}),
			],
		}),

		New("Frame")({
			Name: "Background",
			BackgroundTransparency: 1,
			Size: UDim2.fromScale(1, 1),

			[Children]: [
				New("Frame")({
					Name: "Shadow",
					BackgroundColor3: new Color3(),
					BackgroundTransparency: 0.8,
					Size: new UDim2(1, 0, 1, 3),

					[Children]: [
						New("UICorner")({
							Name: "UICorner",
							CornerRadius: new UDim(0, 4),
						}),
					],
				}),

				New("Frame")({
					Name: "Color",
					BackgroundColor3: Color3.fromRGB(15, 42, 115),
					Size: UDim2.fromScale(1, 1),
					ZIndex: 2,

					[Children]: [
						New("UICorner")({
							Name: "UICorner",
							CornerRadius: new UDim(0, 4),
						}),

						New("UIStroke")({
							Name: "UIStroke ",
							ApplyStrokeMode: Enum.ApplyStrokeMode.Border,
						}),
					],
				}),
			],
		}),

		New("Frame")({
			Name: "Foreground",
			BackgroundTransparency: 1,
			Size: UDim2.fromScale(1, 1),
			ZIndex: 2,

			[Children]: [
				New("Frame")({
					Name: "Bar",
					AnchorPoint: new Vector2(1, 0),
					BackgroundTransparency: 1,
					Position: UDim2.fromScale(1, 0),
					Size: UDim2.fromScale(0.5, 1),

					[Children]: [
						New("Frame")({
							Name: "Color",
							BackgroundTransparency: 1,
							Size: UDim2.fromScale(1, 1),

							[Children]: [
								New("Frame")({
									Name: "Bottom",
									AnchorPoint: new Vector2(0.5, 1),
									BackgroundColor3: new Color3(1, 1, 1),
									Position: UDim2.fromScale(0.5, 1),
									Size: UDim2.fromScale(1, 0.7),

									[Children]: [
										New("UIGradient")({
											Name: "UIGradient",
											Color: new ColorSequence([
												new ColorSequenceKeypoint(0, Color3.fromRGB(33, 127, 254)),
												new ColorSequenceKeypoint(1, Color3.fromRGB(38, 159, 255)),
											]),
											Rotation: 90,
										}),

										New("UICorner")({
											Name: "UICorner",
											CornerRadius: new UDim(0, 4),
										}),
									],
								}),

								New("Frame")({
									Name: "Top",
									AnchorPoint: new Vector2(0.5, 0),
									BackgroundColor3: Color3.fromRGB(46, 185, 254),
									Position: UDim2.fromScale(0.5, 0),
									Size: UDim2.fromScale(1, 0.5),
									ZIndex: 2,

									[Children]: [
										New("UICorner")({
											Name: "UICorner",
											CornerRadius: new UDim(0, 4),
										}),
									],
								}),
							],
						}),
					],
				}),

				New("Frame")({
					Name: "Divisions",
					BackgroundTransparency: 1,
					Size: UDim2.fromScale(1, 1),
					Visible: false,
					ZIndex: 2,

					[Children]: [
						New("Frame")({
							Name: "Line-10",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 1,
							Position: UDim2.fromScale(0.1, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),

						New("Frame")({
							Name: "Line-20",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 2,
							Position: UDim2.fromScale(0.2, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),

						New("Frame")({
							Name: "Line-30",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 3,
							Position: UDim2.fromScale(0.3, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),

						New("Frame")({
							Name: "Line-40",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 4,
							Position: UDim2.fromScale(0.4, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),

						New("Frame")({
							Name: "Line-50",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 5,
							Position: UDim2.fromScale(0.5, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),

						New("Frame")({
							Name: "Line-60",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 6,
							Position: UDim2.fromScale(0.6, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),

						New("Frame")({
							Name: "Line-70",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 7,
							Position: UDim2.fromScale(0.7, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),

						New("Frame")({
							Name: "Line-80",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 8,
							Position: UDim2.fromScale(0.8, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),

						New("Frame")({
							Name: "Line-90",
							BackgroundColor3: new Color3(),
							BorderColor3: Color3.fromRGB(27, 42, 53),
							BorderSizePixel: 0,
							LayoutOrder: 9,
							Position: UDim2.fromScale(0.9, 0),
							Size: new UDim2(0, 1, 1, 0),
						}),
					],
				}),
			],
		}),

		New("TextLabel")({
			Name: "TextLabel",
			AnchorPoint: new Vector2(0.5, 0.449999988),
			BackgroundTransparency: 1,
			FontFace: new Font("rbxasset://fonts/families/LuckiestGuy.json"),
			Position: UDim2.fromScale(0.5, 0.5),
			Size: UDim2.fromScale(1, 1),
			Text: "PROGRESS",
			TextColor3: new Color3(1, 1, 1),
			TextSize: 17,
			ZIndex: 2,

			[Fusion.Children]: [
				New("UIStroke")({
					Name: "UIStroke",
				}),

				New("UITextSizeConstraint")({
					Name: "UITextSizeConstraint",
					MinTextSize: 9,
				}),
			],
		}),
	],
});
