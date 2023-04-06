import { component$ } from "@builder.io/qwik";
import { IconFile, IconMusic, IconUser } from ".";

type IconType = "user" | "music" | "file";

interface IconManagerProps {
  icon: IconType;
}

export const IconManager = component$<IconManagerProps>(({ icon }) => {
  switch (icon) {
    case "user":
      return <IconUser />;
    case "music":
      return <IconMusic />;
    case "file":
      return <IconFile />;
    default:
      return <IconMusic />;
  }
});
