import { IconBase } from "@mr-hope/vuepress-shared/lib/client";
import { h } from "vue";
import type { FunctionalComponent } from "vue";

export const YoutubeIcon: FunctionalComponent = () =>
  h(
    IconBase,
    { name: "youtube" },
    {
      default: () => [
        h("circle", {
          cx: "512",
          cy: "512",
          r: "512",
          fill: "#DD1829",
        }),
        h("path", {
          d: "M800.305 372.2c-12.805-42.429-22.873-65.942-65.303-71.064 0 0-113.644-5.761-226.64-5.761-111.716 0-222.797 5.761-222.797 5.761-44.992 5.122-55.7 29.915-67.223 71.065 0 0-11.524 65.527-11.524 131.886 0 68.066 11.524 137.008 11.524 137.008 8.963 39.87 27.354 65.943 67.223 71.065 0 0 123.292 7.682 240.724 7.682 106.78 0 208.714-7.682 208.714-7.682 39.87-7.682 53.78-28.635 65.303-71.065 0 0 11.523-63.022 11.523-128.045 0-69.288-11.524-140.85-11.524-140.85zM448.82 619.97V393.33l174.781 113.32L448.82 619.97z",
          fill: "#fff",
        }),
      ],
    }
  );

YoutubeIcon.displayName = "YoutubeIcon";