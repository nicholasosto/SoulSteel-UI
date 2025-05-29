import Fusion from "@rbxts/fusion";

const { Value, Computed } = Fusion;

export class PlayerInfoState {
	// Player's name
	public Name: Fusion.Value<string> = Fusion.Value("Default Name");
	// Player's level
	public Level: Fusion.Value<number> = Fusion.Value(1);
	// Player's health
	public Experience: Fusion.Value<number> = Fusion.Value(0);
	public MaxExperience = Fusion.Computed(() => this.Level.get() * 114);
}
