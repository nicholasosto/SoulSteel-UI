import Fusion from "@rbxts/fusion";

const { Value, Computed } = Fusion;

export class PlayerInfoState {
	// Player's name
	public static Name: Fusion.Value<string> = Fusion.Value("Default Name");
	// Player's level
	public static Level: Fusion.Value<number> = Fusion.Value(1);
	// Player's health
	public static Experience: Fusion.Value<number> = Fusion.Value(0);
	public static MaxExperience = Fusion.Value(100);
}
