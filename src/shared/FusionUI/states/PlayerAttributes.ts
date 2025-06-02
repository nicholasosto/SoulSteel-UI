/// <reference types="@rbxts/types" />

/**
 * @file        PlayerAttributes.ts
 * @module      PlayerAttributes
 * @layer       State
 * @description Centralised resource slices used across the HUD.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 */

import Fusion from "@rbxts/fusion";
import { format } from "@rbxts/net/out/internal";
import { AttributeKey, ATTR_KEYS } from "shared/keys";
import { AttributesDTO } from "shared/DTO/AttributesDTO";

export type AttributeState = Record<AttributeKey, Fusion.Value<number>>;

function makeAttributeState(dto: AttributesDTO): AttributeState {
	const state = {} as AttributeState;
	(ATTR_KEYS as readonly AttributeKey[]).forEach((k) => {
		state[k] = Fusion.Value(dto[k]);
	});
	return state;
}

function addAttribute(attrState: AttributeState, key: AttributeKey, amount: number) {
	const current = attrState[key].get();
	const clamped = math.clamp(current + amount, 0, 114);
	attrState[key].set(clamped);
}

export const PlayerAttributes = makeAttributeState({
	str: 0,
	agi: 2,
	vit: 3,
	int: 4,
	lck: 5,
} as AttributesDTO);
