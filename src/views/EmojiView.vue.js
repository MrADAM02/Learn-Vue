import { onMounted, ref } from "vue";
const emoji = ref("😀");
const isLoading = ref(false);
const selectedCategory = ref("all");
const categories = ["all", "smileys", "animals", "food", "travel", "activity"];
const decodeHtmlEntity = (entity) => {
    const parser = new DOMParser();
    const decoded = parser.parseFromString(entity, "text/html").documentElement
        .textContent;
    return decoded || entity;
};
const parseUnicodeEntry = (unicodeEntry) => {
    const codepoints = unicodeEntry
        .split(/\s+/)
        .filter(Boolean)
        .map((part) => part.replace(/^U\+/i, ""));
    try {
        return String.fromCodePoint(...codepoints.map((code) => parseInt(code, 16)));
    }
    catch {
        return unicodeEntry;
    }
};
const selectEmojiValue = (item) => {
    if (!item)
        return "😀";
    if (item?.unicode?.length)
        return parseUnicodeEntry(item.unicode[0]);
    if (item?.htmlCode?.length)
        return decodeHtmlEntity(item.htmlCode[0]);
    if (item?.char)
        return item.char;
    return "😀";
};
const fetchRandomEmoji = async () => {
    isLoading.value = true;
    try {
        const url = selectedCategory.value === "all"
            ? "https://emojihub.yurace.pro/api/random"
            : `https://emojihub.yurace.pro/api/all/category/${selectedCategory.value}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to load emoji");
        }
        const data = await response.json();
        const payload = Array.isArray(data) ? data : [data];
        const randomItem = payload[Math.floor(Math.random() * payload.length)];
        emoji.value = selectEmojiValue(randomItem);
    }
    catch {
        emoji.value = "😅";
    }
    finally {
        isLoading.value = false;
    }
};
onMounted(() => {
    fetchRandomEmoji();
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['chip']} */ ;
/** @type {__VLS_StyleScopedClasses['emoji-display']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "emoji-page" },
});
/** @type {__VLS_StyleScopedClasses['emoji-page']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "category-row" },
});
/** @type {__VLS_StyleScopedClasses['category-row']} */ ;
for (const [category] of __VLS_vFor((__VLS_ctx.categories))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                return __VLS_ctx.selectedCategory = category;
                // @ts-ignore
                [categories, selectedCategory,];
            } },
        key: (category),
        ...{ class: "chip" },
        ...{ class: ({ active: __VLS_ctx.selectedCategory === category }) },
    });
    /** @type {__VLS_StyleScopedClasses['chip']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    (category);
    // @ts-ignore
    [selectedCategory,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "emoji-card" },
});
/** @type {__VLS_StyleScopedClasses['emoji-card']} */ ;
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "emoji-display" },
    });
    /** @type {__VLS_StyleScopedClasses['emoji-display']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "emoji-display" },
    });
    /** @type {__VLS_StyleScopedClasses['emoji-display']} */ ;
    (__VLS_ctx.emoji);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.fetchRandomEmoji) },
});
// @ts-ignore
[isLoading, emoji, fetchRandomEmoji,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
