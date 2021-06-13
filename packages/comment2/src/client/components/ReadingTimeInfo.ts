import { useLocaleConfig } from "@mr-hope/vuepress-shared/client";
import { usePageData } from "@vuepress/client";
import { computed, defineComponent, h } from "vue";
import { TimerIcon } from "./icons";
import { commentOptions, pageInfoI18n, readingTimeI18n } from "../define";

import type { ReadingTime } from "vuepress-plugin-reading-time2";
import type { VNode } from "vue";

export default defineComponent({
  name: "ReadingTimeInfo",

  components: { TimerIcon },

  setup() {
    const page = usePageData<{ readingTime: ReadingTime }>();
    const pageInfoLocale = useLocaleConfig(pageInfoI18n);
    const readingTimeLocale = useLocaleConfig(readingTimeI18n);

    const readingTime = computed(() =>
      page.value.readingTime.minutes < 1
        ? readingTimeLocale.value.minute
        : readingTimeLocale.value.time.replace(
            "$time",
            Math.round(page.value.readingTime.minutes).toString()
          )
    );

    return (): VNode | null =>
      readingTime.value
        ? h(
            "span",
            {
              class: "reading-time-info",
              ...(commentOptions.hint !== false
                ? {
                    ariaLabel: pageInfoLocale.value.readingTime,
                    "data-balloon-pos": "down",
                  }
                : {}),
            },
            [h(TimerIcon), h("span", readingTime.value)]
          )
        : null;
  },
});