import { IconBase } from "@mr-hope/vuepress-shared/lib/client";
import { h } from "vue";
import type { FunctionalComponent } from "vue";

export const LinkedinIcon: FunctionalComponent = () =>
  h(
    IconBase,
    { name: "linkedin" },
    {
      default: () => [
        h("circle", {
          cx: "512",
          cy: "512",
          r: "512",
          fill: "#4376B1",
        }),
        h("path", {
          d: "M838.301 555.94v225.157h-130.54V571.03c0-52.746-18.847-88.766-66.112-88.766-36.069 0-57.496 24.25-66.959 47.732-3.436 8.391-4.322 20.045-4.322 31.814v219.277h-130.55s1.752-355.784 0-392.613h130.56v55.637c-.263.438-.633.867-.867 1.285h.866v-1.285c17.349-26.694 48.287-64.856 117.651-64.856 85.884 0 150.273 56.114 150.273 176.685zm-535.05-356.72c-44.655 0-73.87 29.314-73.87 67.826 0 37.695 28.368 67.855 72.157 67.855h.847c45.532 0 73.842-30.16 73.842-67.855-.866-38.512-28.31-67.825-72.975-67.825zM237.14 781.098h130.5V388.474h-130.5v392.623z",
          fill: "#F1F2F2",
        }),
      ],
    }
  );

LinkedinIcon.displayName = "LinkedinIcon";