/// <reference types="@rbxts/types" />

/**
 * @file        HydrateFrameBase.ts
 * @module      HydrateFrameBase
 * @layer       Helper
 * @description Wraps a pre‑existing **Frame** instance with Fusion reactivity
 *              (size, position, theme styling, and child injection). Use this
 *              when designers supply a .rbxl template you’d like to control
 *              declaratively instead of rebuilding from scratch.
 *
 * ╭──────────────────────────────╮
 * │  Soul Steel · UI Hydration   │
 * │  Fusion v4 · Strict TS       │
 * ╰──────────────────────────────╯
 *
 * @author        Trembus
 * @license       MIT
 * @since         0.1.0
 * @lastUpdated   2025-06-07 — Initial scaffold
 *
 * @dependencies
 *   @rbxts/fusion ^0.4.0
 *   shared/constants/Style.ts
 *
 * @composition
 *   @atoms
 *     (none – this is a wrapper helper only)
 */

import Fusion, { Hydrate, Spring, Value, Computed, Children, OnEvent, Ref, OnChange, Out } from "@rbxts/fusion";
import { CornerToken, StrokeToken } from "../theme";

/**
 * Runtime, declarative options you may pass when hydrating a designer frame.
 */
export interface HydrateFrameBaseProps {
	/** Absolute or scale‑based size. Default keeps original size. */
	size?: UDim2;
	/** Position override. */
	position?: UDim2;
	/** Corner radius in pixels (falls back to Theme). */
	cornerRadius?: number;
	/** Stroke weight in pixels (0 = no stroke, default from Theme). */
	strokeWeight?: number;
	/** Optional callback fired when the base frame is clicked. */
	onActivate?: () => void;
	/** Children injected under the frame. */
	[Children]?: Record<string, Instance>;
}

/**
 * Attach Fusion state to an existing **Frame**.
 *
 * @param sourceFrame  – The template **Frame** instance to hydrate.
 * @param props        – Reactive options / event bindings.
 * @returns The same **Frame**, now reactive.
 */
export const HydrateFrameBase = (sourceFrame: Frame, props: HydrateFrameBaseProps): Frame => {
	// Derive theme defaults lazily so they stay in sync with THEME.
	const defaultCorner = CornerToken(3);
	const defaultStroke = StrokeToken(1);

	return Hydrate(sourceFrame)({
		Size: props.size ?? sourceFrame.Size,
		Position: props.position ?? sourceFrame.Position,

		// Inject our own stylistic sub‑instances
		[Children]: {
			UICorner: defaultCorner,
			UIStroke: defaultStroke,
			...props[Children],
		},

		[OnChange("Size")]: props.onActivate,
	});
};

export default HydrateFrameBase;
