import { SoundService } from "@rbxts/services";

const AudioId = {
	UIControl: {
		Click: "rbxassetid://9119720940",
		Cancel: "rbxassetid://127376394635062",
		Upgrade: "rbxassetid://9085317509",
		EquipItem: "rbxassetid://85188753846582",
	},

	Progression: {
		LevelUp: "rbxassetid://92353385304048",
	},
};

function playSound(id: string) {
	const sound = new Instance("Sound");
	sound.SoundId = id;
	sound.Volume = 0.5;
	SoundService.PlayLocalSound(sound);
	while (sound.Playing) {
		wait(0.1); // Wait for the sound to finish playing
	}
	sound.Destroy(); // Clean up the sound instance
}

export const PlaySound = {
	Click: () => playSound(AudioId.UIControl.Click),
	Cancel: () => playSound(AudioId.UIControl.Cancel),
	Upgrade: () => playSound(AudioId.UIControl.Upgrade),
	EquipItem: () => playSound(AudioId.UIControl.EquipItem),
	LevelUp: () => playSound(AudioId.Progression.LevelUp),
	Play: (id: string) => playSound(id),
};
