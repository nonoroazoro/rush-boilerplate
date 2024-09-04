import { Button } from "ui";
import { generateUUID } from "core";

const root = document.getElementById("root")!;
const text = document.createElement("h2");
const button = new Button(
    "Click Me",
    generateUUID(),
    (e) =>
    {
        text.innerText = `🐳 Clicked: ${e.command}`;
        console.log(`🐳 Clicked: ${e.command}`)
    }
);
button.render(root);
root.appendChild(text);
