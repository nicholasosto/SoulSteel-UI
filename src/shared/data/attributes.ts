// shared/constants/Attributes.ts
export const ATTR_KEYS = ["str", "agi", "vit", "int", "lck"] as const;
/** Literal-string union ⇒ "str" | "agi" | … */
export type AttributeKey = (typeof ATTR_KEYS)[number];

interface AttributeMeta {
	displayName: string;
	iconId: string;
	min: number;
	max: number;
}

export type AttributesMap = Record<AttributeKey, number>;

export interface AttributesDTO extends AttributesMap {
	// This interface extends the AttributesMap to include all attributes
	AvailablePoints: number; // Total available points for distribution
	SpentPoints: number; // Total points spent on attributes
}

export const AttributesMeta: Record<AttributeKey, AttributeMeta> = {
	str: { displayName: "Strength", iconId: "rbxassetid://127745571044516", min: 1, max: 999 },
	agi: { displayName: "Agility", iconId: "rbxassetid://73893872719367", min: 1, max: 999 },
	vit: { displayName: "Vitality", iconId: "rbxassetid://121291227474039", min: 1, max: 999 },
	int: { displayName: "Intellect", iconId: "rbxassetid://107600003376684", min: 1, max: 999 },
	lck: { displayName: "Luck", iconId: "rbxassetid://114767496083209", min: 1, max: 999 },
};

export const DefaultAttributes: AttributesDTO = {
	str: 10,
	agi: 10,
	vit: 10,
	int: 10,
	lck: 10,
	AvailablePoints: 5, // Starting with 5 points to distribute
	SpentPoints: 0, // No points spent initially
};
