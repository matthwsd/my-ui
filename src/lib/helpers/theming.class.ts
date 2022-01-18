import { Attribute, Directive, ElementRef, Inject, Input, Optional } from "@angular/core";

export type ThemingVariations = "primary" | "secondary" | "danger" | "warn" | "light" | "dark";
export type ThemingAppearence = "fill" | "outline";
export const THEMING_ANIMATION_DURATION = "0.2s";

@Directive()
export abstract class Theming {

    @Input() color: ThemingVariations = "light";
    @Input() appearence: ThemingAppearence = "outline";

    readonly VARIATIONS: ThemingVariations[] = ["primary", "secondary", "danger", "warn", "light", "dark"];
    readonly APPEARENCES: ThemingAppearence[] = ["fill", "outline"];

    constructor(private readonly baseClass: string) {

    }


    getTheming(cssClass: string) {
        let themes: { cssClass: string, variation: string }[] = [];

        this.VARIATIONS.forEach(v => {
            this.APPEARENCES.forEach(a => {
                themes.push({ cssClass: `ui-${this.baseClass}__${cssClass}-${a}--${v}`, variation: v });
            })
        })
        let ngClasses: { [key: string]: boolean } = {};

        let selectedTheme = themes.find(t => t.variation == this.color && t.cssClass.includes(this.appearence));

        if (selectedTheme)
            ngClasses[selectedTheme?.cssClass] = true;

        return ngClasses;
    }

}