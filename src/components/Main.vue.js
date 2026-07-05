import { computed, ref } from "vue";
import { programmingQuotes } from "@/data/programmingQuotes";
const generateQuote = () => {
    isTransitioning.value = true;
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * programmingQuotes.length);
        const selectedQuote = programmingQuotes[randomIndex] ?? initialQuote;
        quote.value = selectedQuote.quote;
        author.value = selectedQuote.author;
        isTransitioning.value = false;
    }, 180);
};
const initialQuote = programmingQuotes[0] ?? {
    quote: "Keep coding.",
    author: "Developer",
};
const quote = ref(initialQuote.quote);
const author = ref(initialQuote.author);
const isDarkMode = ref(false);
const isTransitioning = ref(false);
const copied = ref(false);
const themeClass = computed(() => (isDarkMode.value ? "dark" : "light"));
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
};
const copyQuote = async () => {
    const textToCopy = `"${quote.value}" - ${author.value}`;
    try {
        await navigator.clipboard.writeText(textToCopy);
        copied.value = true;
        setTimeout(() => {
            copied.value = false;
        }, 1500);
    }
    catch {
        copied.value = false;
    }
};
generateQuote();
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['theme-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['dark']} */ ;
/** @type {__VLS_StyleScopedClasses['secondary-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['dark']} */ ;
/** @type {__VLS_StyleScopedClasses['theme-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['dark']} */ ;
/** @type {__VLS_StyleScopedClasses['secondary-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['top-row']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-row']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: (__VLS_ctx.themeClass) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "top-row" },
});
/** @type {__VLS_StyleScopedClasses['top-row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "badge" },
});
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: ({ transitioning: __VLS_ctx.isTransitioning }) },
});
/** @type {__VLS_StyleScopedClasses['transitioning']} */ ;
(__VLS_ctx.quote);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.author);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "footer-row" },
});
/** @type {__VLS_StyleScopedClasses['footer-row']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "actions" },
});
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.copyQuote) },
    ...{ class: "secondary-btn" },
});
/** @type {__VLS_StyleScopedClasses['secondary-btn']} */ ;
(__VLS_ctx.copied ? "Copied!" : "Copy");
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.generateQuote) },
});
// @ts-ignore
[themeClass, isTransitioning, quote, author, copyQuote, copied, generateQuote,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
