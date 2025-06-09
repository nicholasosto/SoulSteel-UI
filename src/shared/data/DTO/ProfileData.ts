import { AttributeKey, ATTR_KEYS } from "shared/data/keys";
import { ResourceKey } from "../keys/resources";

export type AttributesDTO = Record<AttributeKey, number>;
export type ResourcesDTO = Record<ResourceKey, number>;

export type PlayerDTO = {
	id: number;
	name: string;
	attributes: AttributesDTO;
	resources: ResourcesDTO;
	position: Vector3;
	inventory: string[]; // Assuming inventory is an array of item IDs
};
