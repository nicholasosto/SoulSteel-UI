/// <reference types="@rbxts/types" />

import { SlotButton } from "shared/FusionUI";

/**
 * @file        Button.ts
 * @module      ButtonIcon
 * @layer       Atom
 * @description Mapping of Button IDs to image asset IDs.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.2.0
 * @lastUpdated  2025-05-29 by Codex – Initial creation
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

export const MenuButtonIcon: Record<string, string> = {
	CharacterPanel: "rbxassetid://100274464430589",
	EquipmentPanel: "rbxassetid://132702292243603",
	TeleportPanel: "rbxassetid://127118741571164",
	SetttingsPanel: "rbxassetid://122289639886993",
	FriendsPanel: "rbxassetid://95069877371395",
};

export const ControlButtonIcon: Record<string, string> = {
	Increase: "rbxassetid://102421835119714",
	Decrease: "rbxassetid://78091115085992",
	Close: "rbxassetid://91437543746962",
	TripleArrow: "rbxassetid://109760688890484",
};

export * as AbilityButtonIcon from "./ability";
export * as SlotButtonIcon from "./slots";
