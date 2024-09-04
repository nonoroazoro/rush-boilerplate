import type { Button } from "./Button";

export interface ButtonClickEvent
{
    target: Button;
    command: string,
}
