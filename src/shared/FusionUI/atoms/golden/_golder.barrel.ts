/**
 * @file        index.ts
 * @module      UILibrary
 * @barrel      true
 * @layerMap    Atoms, Molecules
 * @description Unified export surface for all public UI components.
 *
 * …
 *
 * @exports
 *  @atoms
 * *    AttributeIcon - Displays an attribute icon, typically for player stats or abilities.
 * * *    ValueLabel - Displays a value label, typically for stats or attributes from state slices.
 * * *    GameLabel - Displays a game label, text label pre-formatted for game-specific use.
 * * *    StepButton - Displays a step button, incrementing or decrementing a value.
 */

export * from "./AttributeIcon";
export * from "./ValueLabel";
export * from "./GameLabel";
export * from "./StepButton";
