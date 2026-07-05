import { onMounted, ref } from "vue";
const emoji = ref("😀");
const isLoading = ref(false);
const copyMessage = ref("Copy emoji");
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
        const response = await fetch("https://emojihub.yurace.pro/api/random");
        if (!response.ok) {
            throw new Error("Failed to load emoji");
        }
        const data = await response.json();
        emoji.value = selectEmojiValue(data);
    }
    catch {
        emoji.value = "😅";
    }
    finally {
        isLoading.value = false;
    }
};
const copyEmoji = async () => {
    try {
        await navigator.clipboard.writeText(emoji.value);
        copyMessage.value = "Copied!";
        window.setTimeout(() => {
            copyMessage.value = "Copy emoji";
        }, 1200);
    }
    catch {
        copyMessage.value = "Copy failed";
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
/** @type {__VLS_StyleScopedClasses['emoji-display']} */ ;
/** @type {__VLS_StyleScopedClasses['emoji-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['emoji-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['emoji-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['emoji-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "emoji-page" },
});
/** @type {__VLS_StyleScopedClasses['emoji-page']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "emoji-actions" },
});
/** @type {__VLS_StyleScopedClasses['emoji-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.fetchRandomEmoji) },
    ...{ class: "secondary" },
});
/** @type {__VLS_StyleScopedClasses['secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.copyEmoji) },
    ...{ class: "primary" },
});
/** @type {__VLS_StyleScopedClasses['primary']} */ ;
(__VLS_ctx.copyMessage);
// @ts-ignore
[isLoading, emoji, fetchRandomEmoji, copyEmoji, copyMessage,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
