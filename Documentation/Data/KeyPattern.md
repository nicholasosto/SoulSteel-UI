# Key Pattern Overview

The Data Folder is a central repository for all game data that is not directly tied to player accounts or character states. It contains static information that can be shared across sessions and players, such as item definitions, skill attributes, and game settings.
This data is used by both the client and server to ensure consistency in gameplay mechanics, UI displays, and game logic.

## Key Patterns for Data Folder

| Priority   | Domain (🔑 Key)                                   | Why it deserves the pattern                                            | Typical Meta you’d store                                     |
| ---------- | ------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| **✅ Must** | **Attribute** (`AttributeKey`)                    | Already done—base stats drive combat, XP screens, tooltips, DataStores | `displayName`, `iconId`, `min/max`, color, description       |
| **✅ Must** | **Damage / Element Types** (`DamageTypeKey`)      | Shared by weapons, spells, resistances, debuffs, VFX colors            | `displayName`, `iconId`, `particleId`, color, weakness chart |
| **✅ Must** | **Equipment Slots** (`EquipSlotKey`)              | Used by DTOs, UI slots, server-side validation, gem sockets            | `displayName`, `iconId`, `maxItems`, bodyAttachment          |
| **✅ Must** | **Soul Gem Qualities / Grades** (`GemQualityKey`) | Controls drop tables, gem artwork glow, upgrade costs                  | `tierName`, `borderFrameId`, `effectMultiplier`              |
| **✅ Must** | **Item Rarity Tiers** (`ItemRarityKey`)           | Colors in loot pop-ups, drop chances, crafting costs                   | `color`, `borderImage`, `dropWeight`, SFX                    |
| **✅ Must** | **Domains / Factions** (`DomainKey`)              | Blood vs. Decay etc.—affects banners, PvP logic, zone buffs            | `displayName`, `primaryColor`, `crestImage`, soundtrackId    |
