/// <reference types="@rbxts/types" />

/**
 * @file        ResourceBar.ts
 * @module      ResourceBar
 * @layer       Atom
 * @description Fusion atom representing a generic resource bar.
 *
 * ╭───────────────────────────────╮
 * │  Soul Steel · Coding Guide    │
 * │  Fusion v4 · Strict TS · ECS  │
 * ╰───────────────────────────────╯
 *
 * @author       Trembus
 * @license      MIT
 * @since        0.1.0
 * @lastUpdated  2025-05-29 by Codex – Header update
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 */

import { FillBarBase, FillBarBaseProps } from "./FillBarBase";
import Fusion, { Computed } from "@rbxts/fusion";

interface ResourceBarProps extends FillBarBaseProps {
	RegenRate?: Fusion.Computed<number> | number;
}
export function ResourceBar(props: ResourceBarProps) {
	const { Current, Max, LabelText, RegenRate } = props;

	const instance = FillBarBase({
		Current,
		Max,
		LabelText: LabelText
			? Computed(() => `${LabelText.get()} (${Current.get()}/${Max.get()})`)
			: Computed(() => `${Current.get()}/${Max.get()}`),
		Name: props.Name ?? "ResourceBar",
		Height: props.Height ?? 25,
	});

	if (RegenRate !== undefined) {
		instance.Name = `${instance.Name} (Regen: ${RegenRate})`;
	}

	return instance;
}
