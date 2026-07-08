import { onMounted, ref } from "vue";
const logo = ref("");
const name = ref("");
const title = ref("");
const description = ref("");
const isLoading = ref(false);
const copyMessage = ref("Copy URL");
const fetchRandomLogo = async () => {
    isLoading.value = true;
    try {
        const res = await fetch("https://www.logotypes.dev/random/data");
        if (!res.ok)
            throw new Error("Network");
        const data = await res.json();
        logo.value = data.logo ?? "";
        name.value = data.name ?? "";
        title.value = data.example_title ?? "";
        description.value = data.example_description ?? "";
    }
    catch {
        logo.value = "";
        name.value = "Unavailable";
        title.value = "";
        description.value = "";
    }
    finally {
        isLoading.value = false;
    }
};
const copyUrl = async () => {
    try {
        await navigator.clipboard.writeText(logo.value);
        copyMessage.value = "Copied!";
        setTimeout(() => (copyMessage.value = "Copy URL"), 1200);
    }
    catch {
        copyMessage.value = "Copy failed";
    }
};
onMounted(fetchRandomLogo);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['logo-preview']} */ ;
/** @type {__VLS_StyleScopedClasses['skeleton-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['skeleton-ring']} */ ;
/** @type {__VLS_StyleScopedClasses['skeleton-line']} */ ;
/** @type {__VLS_StyleScopedClasses['skeleton-line']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-card']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-shell logo-page" },
});
/** @type {__VLS_StyleScopedClasses['page-shell']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-page']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-heading" },
});
/** @type {__VLS_StyleScopedClasses['page-heading']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "page-title" },
});
/** @type {__VLS_StyleScopedClasses['page-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "page-subtitle" },
});
/** @type {__VLS_StyleScopedClasses['page-subtitle']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "page-card logo-card" },
});
/** @type {__VLS_StyleScopedClasses['page-card']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-preview" },
});
/** @type {__VLS_StyleScopedClasses['logo-preview']} */ ;
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "skeleton-card" },
        'aria-hidden': "true",
    });
    /** @type {__VLS_StyleScopedClasses['skeleton-card']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "skeleton-graphic" },
    });
    /** @type {__VLS_StyleScopedClasses['skeleton-graphic']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "skeleton-badge" },
    });
    /** @type {__VLS_StyleScopedClasses['skeleton-badge']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "skeleton-ring" },
    });
    /** @type {__VLS_StyleScopedClasses['skeleton-ring']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "skeleton-bars" },
    });
    /** @type {__VLS_StyleScopedClasses['skeleton-bars']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "skeleton-line short" },
    });
    /** @type {__VLS_StyleScopedClasses['skeleton-line']} */ ;
    /** @type {__VLS_StyleScopedClasses['short']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "skeleton-line" },
    });
    /** @type {__VLS_StyleScopedClasses['skeleton-line']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "skeleton-line narrow" },
    });
    /** @type {__VLS_StyleScopedClasses['skeleton-line']} */ ;
    /** @type {__VLS_StyleScopedClasses['narrow']} */ ;
}
else if (__VLS_ctx.logo) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.logo),
        alt: (__VLS_ctx.name),
    });
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "placeholder" },
    });
    /** @type {__VLS_StyleScopedClasses['placeholder']} */ ;
}
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "logo-meta" },
    });
    /** @type {__VLS_StyleScopedClasses['logo-meta']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "meta-skeleton meta-name" },
    });
    /** @type {__VLS_StyleScopedClasses['meta-skeleton']} */ ;
    /** @type {__VLS_StyleScopedClasses['meta-name']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "meta-skeleton meta-title" },
    });
    /** @type {__VLS_StyleScopedClasses['meta-skeleton']} */ ;
    /** @type {__VLS_StyleScopedClasses['meta-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "meta-skeleton meta-desc" },
    });
    /** @type {__VLS_StyleScopedClasses['meta-skeleton']} */ ;
    /** @type {__VLS_StyleScopedClasses['meta-desc']} */ ;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "logo-meta" },
    });
    /** @type {__VLS_StyleScopedClasses['logo-meta']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
        ...{ class: "brand-name" },
    });
    /** @type {__VLS_StyleScopedClasses['brand-name']} */ ;
    (__VLS_ctx.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "brand-title" },
    });
    /** @type {__VLS_StyleScopedClasses['brand-title']} */ ;
    (__VLS_ctx.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "brand-desc" },
    });
    /** @type {__VLS_StyleScopedClasses['brand-desc']} */ ;
    (__VLS_ctx.description);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-actions" },
});
/** @type {__VLS_StyleScopedClasses['logo-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.fetchRandomLogo) },
    ...{ class: "button-secondary" },
});
/** @type {__VLS_StyleScopedClasses['button-secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: (__VLS_ctx.logo),
    target: "_blank",
    rel: "noreferrer",
    ...{ class: "button-link" },
});
/** @type {__VLS_StyleScopedClasses['button-link']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.copyUrl) },
    ...{ class: "button-primary" },
});
/** @type {__VLS_StyleScopedClasses['button-primary']} */ ;
(__VLS_ctx.copyMessage);
// @ts-ignore
[isLoading, isLoading, logo, logo, logo, name, name, title, description, fetchRandomLogo, copyUrl, copyMessage,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
