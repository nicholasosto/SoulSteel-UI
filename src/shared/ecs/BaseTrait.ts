export interface BaseTrait {
	kind: string;
}
export type EntityId = number | string; // Unique identifier for an entity, can be a number or string

export interface BuffTrait extends BaseTrait {
	duration: number; // Duration in seconds
	tick(dt: number, host: EntityId): void; // Called every frame while the buff is active
	onAttach(host: EntityId): void; // Called when the buff is applied
	onDetach(host: EntityId): void; // Called when the buff expires or is removed
}

export class Health implements BaseTrait {
	kind = "Health" as const; // Unique identifier for this trait
	max: number;
	current: number;

	constructor(maxHealth: number) {
		this.max = maxHealth;
		this.current = maxHealth; // Start with full health
	}

	takeDamage(amount: number): void {
		this.current = math.clamp(this.current - amount, 0, this.max);
	}

	heal(amount: number): void {
		this.current = math.clamp(this.current + amount, 0, this.max);
	}

	isAlive(): boolean {
		return this.current > 0;
	}
}
