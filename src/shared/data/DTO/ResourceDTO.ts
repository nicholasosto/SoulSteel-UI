import { Computed, Value } from "@rbxts/fusion";

export interface ResourceDTO {
	
	Current: Value<number> | number;
	Max: Value<number> | number;
}

export interface ResourceBarsDTO {
	Health: ResourceDTO;
	Mana: ResourceDTO;
	Stamina: ResourceDTO;
}
