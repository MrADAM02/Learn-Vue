import { ref } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Main.vue";
const mainRef = ref(null);
const handleGenerate = () => {
    mainRef.value?.generateQuote();
};
const handleToggleTheme = () => {
    mainRef.value?.toggleTheme();
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
const __VLS_0 = Header;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onGenerate': {} },
    ...{ 'onToggleTheme': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onGenerate': {} },
    ...{ 'onToggleTheme': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.generate} */
    onGenerate: (__VLS_ctx.handleGenerate),
};
const __VLS_7 = {
    /** @type {typeof __VLS_5.toggleTheme} */
    onToggleTheme: (__VLS_ctx.handleToggleTheme),
};
var __VLS_3;
var __VLS_4;
const __VLS_8 = Main;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
    ref: "mainRef",
}));
const __VLS_10 = __VLS_9({
    ref: "mainRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_13;
var __VLS_11;
const __VLS_15 = Footer;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
var __VLS_14 = __VLS_13;
// @ts-ignore
[handleGenerate, handleToggleTheme,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
