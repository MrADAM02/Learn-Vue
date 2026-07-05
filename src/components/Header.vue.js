import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
const route = useRoute();
const pageTitles = {
    "/": "Quote generator",
    "/emoji": "Emoji generator",
};
const title = computed(() => pageTitles[route.path] ?? "App generator");
const navItems = [
    { label: "Quotes", to: "/" },
    { label: "Emoji", to: "/emoji" },
];
const isActive = (path) => route.path === path;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-links']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "topbar" },
});
/** @type {__VLS_StyleScopedClasses['topbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "brand-block" },
});
/** @type {__VLS_StyleScopedClasses['brand-block']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "brand-mark" },
});
/** @type {__VLS_StyleScopedClasses['brand-mark']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
(__VLS_ctx.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "nav-links" },
    'aria-label': "Primary",
});
/** @type {__VLS_StyleScopedClasses['nav-links']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.navItems))) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        key: (item.to),
        to: (item.to),
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.isActive(item.to) }) },
    }));
    const __VLS_2 = __VLS_1({
        key: (item.to),
        to: (item.to),
        ...{ class: "nav-link" },
        ...{ class: ({ active: __VLS_ctx.isActive(item.to) }) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    /** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    const { default: __VLS_5 } = __VLS_3.slots;
    (item.label);
    // @ts-ignore
    [title, navItems, isActive,];
    var __VLS_3;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
