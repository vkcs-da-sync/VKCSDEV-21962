export const config = {
    main: {
        projectName: 'VK Tech Docs',
        copyright: '© %year% VK Tech',
        analytics: null,
        locales: ['ru'],
        logoLink: 'https://docs.vktech.team',
    },
    breadcrumbs: {
        projectName: null,
        docsName: 'Docs',
        isDisableBaseLevel: false,
    },
    leftMenu: {
        startLevel: 2,
    },
    layout: {
        main: {
            schema: 'TILE',
            properties: {
                faq: 'FROM_MD',
            },
        },
    },
    paths: {
        basePath: '',
    },
    enablers: {
        auth: false,
        likeDislike: true,
        dislikeFeedbackForm: false,
        sentry: false,
        suggester: true,
        editOnGitOps: false,
        footerPolicyLink: false,
        autoNumberInHeaders: true,
        aiSearch: false,
    },
    translations: {
        ru: {
            'LeftMenu.BackLink': 'Все разделы',
        },
    },
};
