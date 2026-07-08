import { computed, onMounted, ref } from "vue";
import { programmingQuotes } from "@/data/programmingQuotes";
const props = defineProps();
const initialQuote = programmingQuotes[0] ?? {
    quote: "Keep coding.",
    author: "Developer",
};
const quote = ref(initialQuote.quote);
const author = ref(initialQuote.author);
const isTransitioning = ref(false);
const copied = ref(false);
const themeClass = computed(() => (props.isDarkMode ? "dark" : "light"));
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
onMounted(() => {
    generateQuote();
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
/** @type {__VLS_StyleScopedClasses['quote-header']} */ ;
/** @type {__VLS_StyleScopedClasses['quote-card']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: (['page-shell', 'quote-shell', __VLS_ctx.themeClass]) },
});
/** @type {__VLS_StyleScopedClasses['page-shell']} */ ;
/** @type {__VLS_StyleScopedClasses['quote-shell']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "quote-header" },
});
/** @type {__VLS_StyleScopedClasses['quote-header']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "badge" },
});
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "quote-card" },
    'aria-live': "polite",
});
/** @type {__VLS_StyleScopedClasses['quote-card']} */ ;
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
    ...{ class: "button-secondary" },
});
/** @type {__VLS_StyleScopedClasses['button-secondary']} */ ;
(__VLS_ctx.copied ? "Copied!" : "Copy");
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.generateQuote) },
    ...{ class: "button-primary" },
});
/** @type {__VLS_StyleScopedClasses['button-primary']} */ ;
// @ts-ignore
[themeClass, isTransitioning, quote, author, copyQuote, copied, generateQuote,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
