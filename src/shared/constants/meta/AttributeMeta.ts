// shared/constants/AttributeMeta.ts
import { AttributeKey } from "shared/constants/keys";

interface AttributeInfo {
	displayName: string;
	iconId: string; // rbxassetid://…
	min: number;
	max: number;
}

export const ATTRIBUTE_META: Record<AttributeKey, AttributeInfo> = {
	str: { displayName: "Strength", iconId: "rbxassetid://123", min: 1, max: 999 },
	agi: { displayName: "Agility", iconId: "rbxassetid://456", min: 1, max: 999 },
	vit: { displayName: "Vitality", iconId: "rbxassetid://789", min: 1, max: 999 },
	int: { displayName: "Intellect", iconId: "rbxassetid://012", min: 1, max: 999 },
};
