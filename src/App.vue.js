import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Main.vue";
const route = useRoute();
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
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "app-shell" },
});
/** @type {__VLS_StyleScopedClasses['app-shell']} */ ;
if (__VLS_ctx.route.path === '/emoji') {
    let __VLS_8;
    /** @ts-ignore @type { | typeof __VLS_components.RouterView} */
    RouterView;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({}));
    const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
else {
    const __VLS_13 = Main;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        ref: "mainRef",
    }));
    const __VLS_15 = __VLS_14({
        ref: "mainRef",
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    var __VLS_18;
    var __VLS_16;
}
const __VLS_20 = Footer;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
// @ts-ignore
var __VLS_19 = __VLS_18;
// @ts-ignore
[handleGenerate, handleToggleTheme, route,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
