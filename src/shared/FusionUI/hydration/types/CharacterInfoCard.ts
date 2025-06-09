export type CharacterInfoCardType = Frame & {
	ResourceBarsContainer: Frame & {
		Health: Frame & {
			Foreground: Frame & {
				UIGradient: UIGradient;
				ImageLabel: ImageLabel;
			};
			CasingFrame: ImageLabel & {
				TextLabel: TextLabel;
			};
			ImageLabel: ImageLabel;
		};
		Stamina: Frame & {
			Foreground: Frame & {
				UIGradient: UIGradient;
				ImageLabel: ImageLabel;
			};
			CasingFrame: ImageLabel & {
				TextLabel: TextLabel;
			};
			ImageLabel: ImageLabel;
		};
		UIPadding: UIPadding;
		UIListLayout: UIListLayout;
		SoulPower: Frame & {
			Foreground: Frame & {
				UIGradient: UIGradient;
				ImageLabel: ImageLabel;
			};
			CasingFrame: ImageLabel & {
				TextLabel: TextLabel;
			};
			ImageLabel: ImageLabel;
		};
	};
	UIGradient: UIGradient;
	UIListLayout: UIListLayout;
	UICorner: UICorner;
	AvatarFrame: Frame & {
		UIAspectRatioConstraint: UIAspectRatioConstraint;
		AvatarImage: ImageLabel;
		AvatarFrameImage: ImageLabel;
		BackgroundImage: ImageLabel;
	};
	PackageLink: PackageLink;
};
