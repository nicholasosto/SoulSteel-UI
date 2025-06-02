### Weapon-Upgrade UI: Gem-Socket Drag-and-Drop

*(Fusion v4 · Atomic Design · TypeScript)*

---

## 1 · Conceptual Layers

| Layer           | Component             | Responsibility                                                             | Typical Props / State                            |   |
| --------------- | --------------------- | -------------------------------------------------------------------------- | ------------------------------------------------ | - |
| **Atom**        | `GemIcon`             | 50–64 px square image + rarity border                                      | `gemId`, `rarity`, `isGhost`                     |   |
|                 | `SocketBackdrop`      | Ring, hex, or slot-shaped frame that glows when valid                      | `isHighlighted`, `isEmpty`                       |   |
|                 | `DragGhost`           | Semi-transparent clone that follows cursor                                 | `gemId`                                          |   |
| **Molecule**    | `SocketButton`        | `SocketBackdrop` + optional `GemIcon` child; acts as drop target           | `socketIndex`, `gem?`                            |   |
|                 | `InventoryGem`        | Draggable `GemIcon` inside inventory grid                                  | —                                                |   |
| **Organism**    | `SocketGrid`          | Fixed-layout row of sockets for the selected weapon                        | `weaponId`, `sockets`                            |   |
|                 | `GemInventory`        | Paginated / scroll grid of player gems                                     | `gemIds`                                         |   |
|                 | `UpgradePanel`        | Weapon art + `SocketGrid` + `GemInventory` + stat preview + “Apply” button | `selectedWeapon`                                 |   |
| **Screen**      | `WeaponUpgradeScreen` | Modal overlay; mounts `UpgradePanel` and pushes blur                       | —                                                |   |
| **State Slice** | `DragStore`           | Global \`Value\<DragData                                                   | nil>`; holds `gemId`, `originType`, `originRef\` | — |

---

## 2 · Drag-and-Drop Flow

```mermaid
flowchart LR
    A[MouseButton1Down on Gem] --> B[DragStore.set({ gemId, origin })]
    B --> C[Create DragGhost in TopLayer]
    C --> D[Mouse movement updates DragGhost.Position]
    D --> E[MouseEnter/Leave on SocketButton highlights valid drops]
    E --> F[MouseButton1Up]
    F -->|over valid socket| G[Swap gem <-> socket; DragStore.set(nil)]
    F -->|else| H[Return gem to origin; DragStore.set(nil); destroy ghost]
```

* **Central idea:** one *observable* store (`Value<DragData|null>`) drives every reaction:

  * DragGhost’s visibility & position
  * Socket highlight (`Computed(() => drag && drag.gemId && socketEmpty)`)
  * Drop handling.

---

## 3 · Minimal TypeScript Sketch

```ts
// drag-store.ts
export interface DragData {
    gemId: string;
    originType: "inventory" | "socket";
    originIndex: number;
}
export const dragStore = Value<DragData | undefined>(undefined);

// DragGhost.tsx
export const DragGhost = () => {
    const pos = Value(new UDim2()); // follow cursor
    const ghostGem = Computed(() => dragStore.get()?.gemId);

    const conn = game.GetService("UserInputService").InputChanged.Connect(i => {
        if (i.UserInputType === Enum.UserInputType.MouseMovement)
            pos.set(UDim2.fromOffset(i.Position.X, i.Position.Y));
    });

    // Ghost disappears when dragStore becomes undefined
    Observer(dragStore, v => !v && conn.Disconnect());

    return New("ImageLabel")({
        Visible: Computed(() => ghostGem !== undefined),
        Position: pos,
        Size: UDim2.fromOffset(48, 48),
        Image: Computed(() => ghostGem ? GemAssets[ghostGem] : ""),
        ZIndex: 50,
        BackgroundTransparency: 1,
        AnchorPoint: new Vector2(0.5, 0.5),
    });
};
```

```ts
// SocketButton.tsx
interface Props { socketIndex: number; gem?: string }
export const SocketButton = (props: Props) => {
    const isHighlighted = Computed(() => {
        const drag = dragStore.get();
        return drag !== undefined && props.gem === undefined; // empty & something dragged
    });

    return New("ImageButton")({
        Size: UDim2.fromOffset(64, 64),
        Image: props.gem ? GemAssets[props.gem] : "rbxassetid://socketRing",
        ImageColor3: Computed(() => isHighlighted.get() ? Color3.fromRGB(0,255,140) : Color3.new(1,1,1)),
        [OnEvent("MouseButton1Up")] = () => {
            const drag = dragStore.get();
            if (!drag || props.gem) return;
            GemService.attachGemToSocket(drag.gemId, props.socketIndex);
            dragStore.set(undefined);
        },
    });
};
```

*InventoryGem* is symmetrical—on `MouseButton1Down` it sets the `dragStore`, and on mouse-up outside sockets it cancels.

---

## 4 · UX Details & Theme Tokens

| Aspect        | Suggestion                                                                  |
| ------------- | --------------------------------------------------------------------------- |
| Gem rarity    | Border glow + subtle particle burst on successful socket                    |
| Invalid drop  | Shake socket + low-pitch error “thunk”                                      |
| Stat preview  | Show diff panel that updates via `Computed(() => pendingBuildStats())`      |
| Socket states | **Empty**, **Filled**, **Locked** (greyed) — drive via style tokens         |
| Keyboard nav  | Optional: `Tab` cycles sockets → `Enter` picks slot → arrow keys move ghost |

---

## 5 · Testing Checklist

1. **Drag lifecycle**: start-drag, cancel (ESC / right-click), drop success.
2. **Edge cases**:

   * Dragging while panel closes → cleanup DragGhost.
   * Attempt to drop same gem twice (server reject).
3. **Mobile**: long-press to pick up, second tap to drop.
4. **Performance**: \~0 GC churn; reuse DragGhost instance.

---

### Take-away

* **Single generic drag store** keeps all participants loosely coupled.
* Build with **Atoms → Molecules → Organisms** so sockets, gems, and preview reuse styling tokens.
* Treat gems as data (id, icon, rarity); treat sockets as *stateful placeholders* that subscribe to weapon data.

