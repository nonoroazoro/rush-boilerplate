import * as styles from "./Button.module.less";

import type { ButtonClickEvent } from "./ButtonClickEvent";

export class Button
{
    private _onClick?: (e: ButtonClickEvent) => void;
    private _command: string;
    private _button: HTMLAnchorElement;

    constructor(text: string, command: string, onClick?: (e: ButtonClickEvent) => void)
    {
        this._command = command;
        this._onClick = onClick;

        this._button = document.createElement("a");
        this._button.textContent = text;
        this._button.classList.add(styles.container);
        this._button.setAttribute("data-command", command);
        this._button.addEventListener("click", this._handleClick, true);
    }

    public render(parent: HTMLElement)
    {
        parent.appendChild(this._button);
    }

    private _handleClick = (e: MouseEvent) =>
    {
        if (this._onClick)
        {
            this._onClick({ target: this, command: this._command });
        }
        e.stopPropagation();
    };
}
