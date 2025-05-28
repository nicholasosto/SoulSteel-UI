import { Computed, Value } from "@rbxts/fusion";

export interface ResourceDTO {
	Current: Value<number> | number;
	Max: Value<number> | number;
	LabelText?: Computed<string> | string;
	RegenRate?: Computed<number> | number;
	Name?: string;
	Height?: number;
}

export interface ResourceBarsDTO {
	Health: ResourceDTO;
	Mana: ResourceDTO;
	Stamina: ResourceDTO;
}
