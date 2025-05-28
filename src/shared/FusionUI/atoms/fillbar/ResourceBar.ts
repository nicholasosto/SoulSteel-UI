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
