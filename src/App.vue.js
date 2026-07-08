import { computed, ref } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
const isDarkMode = ref(false);
const themeClass = computed(() => isDarkMode.value ? "dark-theme" : "light-theme");
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (['theme-shell', __VLS_ctx.themeClass]) },
});
/** @type {__VLS_StyleScopedClasses['theme-shell']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "app-frame" },
});
/** @type {__VLS_StyleScopedClasses['app-frame']} */ ;
const __VLS_0 = Header;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onToggleTheme': {} },
    isDarkMode: (__VLS_ctx.isDarkMode),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onToggleTheme': {} },
    isDarkMode: (__VLS_ctx.isDarkMode),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = {
    /** @type {typeof __VLS_5.toggleTheme} */
    onToggleTheme: (__VLS_ctx.toggleTheme),
};
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "app-shell" },
});
/** @type {__VLS_StyleScopedClasses['app-shell']} */ ;
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.RouterView | typeof __VLS_components.RouterView} */
RouterView;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
{
    const { default: __VLS_12 } = __VLS_10.slots;
    const [{ Component }] = __VLS_vSlot(__VLS_12);
    const __VLS_13 = (Component);
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        isDarkMode: (__VLS_ctx.isDarkMode),
    }));
    const __VLS_15 = __VLS_14({
        isDarkMode: (__VLS_ctx.isDarkMode),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    // @ts-ignore
    [themeClass, isDarkMode, isDarkMode, toggleTheme,];
    __VLS_10.slots['' /* empty slot name completion */];
}
var __VLS_10;
const __VLS_18 = Footer;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({}));
const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
