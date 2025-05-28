import Fusion, { Computed } from "@rbxts/fusion";
import { Players } from "@rbxts/services";
const LocalPlayer = Players.LocalPlayer;

interface FustionFillBar {
	Current: Fusion.Value<number> | number;
	Max: Fusion.Value<number> | number;
	LabelText?: Computed<string> | string;
}

interface FusionResource extends FustionFillBar {
	RegenRate: Computed<number>;
}

interface ResourceBarsDTO {
	Health: FusionResource;
	Mana: FusionResource;
	Stamina: FusionResource;
}

export class PlayerResources {
	protected static readonly Health: FusionResource;
	protected static readonly Mana: FusionResource;
	protected static readonly Stamina: FusionResource;
	private static Initialized(resourceBarsDTO: ResourceBarsDTO) {}
}
