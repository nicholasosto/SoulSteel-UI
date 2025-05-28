import { SoundService } from "@rbxts/services";
import { AudioId } from "shared/Assets";

function playSound(id: string) {
	const sound = new Instance("Sound");
	sound.SoundId = id;
	sound.Volume = 0.5;
	SoundService.PlayLocalSound(sound);
}

export const PlaySound = {
	Click: () => playSound(AudioId.UIControl.Click),
	Cancel: () => playSound(AudioId.UIControl.Cancel),
	Upgrade: () => playSound(AudioId.UIControl.Upgrade),
	EquipItem: () => playSound(AudioId.UIControl.EquipItem),
	LevelUp: () => playSound(AudioId.Progression.LevelUp),
	Play: (id: string) => playSound(id),
};
