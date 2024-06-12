export const BASE_URL = import.meta.env.VITE_API_URL;

export const PATH = {
    main: "/",
    aboutArchive: "aboutArchive",
    management: "management",
    managementMore: "managementMore/:id",
    npa: "npa",
    services: "services",
    faq: "faq",
    contacts: "contacts",
    publications: "publications",
    detailPublication: "publications/:id",
    photo: "photo",
    detailPhoto: "photo/:id",
    video: "video",
    detailArchivePhoto: "photo/archive/:id",
    search: "search",
    notFound: "*"
};