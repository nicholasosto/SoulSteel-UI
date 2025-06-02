/// <reference types="@rbxts/types" />

/**
 * @file        UpgradePanel.ts
 * @module      UpgradePanel
 * @layer       Organism
 * @description Panel combining weapon art, sockets and gem inventory.
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

import Fusion from "@rbxts/fusion";
import { Panel } from "../molecules";
import { SocketGrid } from "./SocketGrid";
import { GemInventory } from "./GemInventory";

const { New, Children } = Fusion;

export interface UpgradePanelProps {
	selectedWeapon: string;
	sockets: (string | undefined)[];
	gemIds: string[];
}

/** Panel with weapon info and upgrade controls. */
export const UpgradePanel = (props: UpgradePanelProps) => {
	return Panel({
		Name: "UpgradePanel",
		Title: `Upgrade ${props.selectedWeapon}`,
		Size: new UDim2(0, 500, 0, 400),
		[Children]: {
			WeaponArt: New("Frame")({
				Name: "WeaponArt",
				Size: UDim2.fromScale(1, 0.3),
				BackgroundTransparency: 1,
			}),
			Sockets: SocketGrid({ weaponId: props.selectedWeapon, sockets: props.sockets }),
			Inventory: GemInventory({ gemIds: props.gemIds }),
		},
	});
};
