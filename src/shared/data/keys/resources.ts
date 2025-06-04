// shared/constants/resources.ts
export const RESOURCE_KEYS = ["health", "soulpower", "stamina"] as const;
/** Literal-string union ⇒ "health" | "soulpower" | "stamina" */
export type ResourceKey = (typeof RESOURCE_KEYS)[number];

// Resource metadata
interface ResourceInfo {
	displayName: string;
	iconId: string;
	max: number; // Optional, not all resources have a max
	current: number; // Optional, current value for the resource
	regenRate?: number; // Optional, regeneration rate for the resource
}

export const ResourceMeta: Record<ResourceKey, ResourceInfo> = {
	health: { displayName: "Health", iconId: "rbxassetid://127745571044516", max: 100, current: 100 },
	soulpower: { displayName: "Soul Power", iconId: "rbxassetid://73893872719367", max: 100, current: 100 },
	stamina: { displayName: "Stamina", iconId: "rbxassetid://121291227474039", max: 100, current: 100 },
};
