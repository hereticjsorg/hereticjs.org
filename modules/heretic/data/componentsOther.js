export default [{
        type: "header",
        level: 1,
        content: "Admin Panel",
    },
    {
        type: "paragraph",
        content: "Admin panel component provides a wrapper around your Admin Panel module to display navigation menu, language switch etc.",
    },
    {
        type: "paragraph",
        content: "Usage:",
    },
    {
        type: "code",
        language: "html",
        content: `<hadmin>\n    <content/>\n</hadmin>`,
    },
    {
        type: "Calendar",
        level: 1,
        content: "Admin Panel",
    },
    {
        type: "paragraph",
        content: "Calendar component is used to display calendar. It's also available as a part of Form Builder.",
    },
    {
        type: "paragraph",
        content: "Usage:",
    },
    {
        type: "code",
        language: "html",
        content: `<hcalendar\n    key="exampleCalendar"\n    on-date-change("onCalendarDateChange")/>`,
    },
    {
        type: "Loading Spinner",
        level: 1,
        content: "Admin Panel",
    },
    {
        type: "paragraph",
        content: "Display full-screen loading spinner:",
    },
    {
        type: "code",
        language: "html",
        content: `<hloading key="loading"/>`,
    },
    {
        type: "paragraph",
        content: `Display loading spinner ("dots"):`,
    },
    {
        type: "code",
        language: "html",
        content: `<hloading-dots/>`,
    },
    {
        type: "header",
        level: 1,
        content: "Notification",
    },
    {
        type: "paragraph",
        content: `Display notification messages on top of the page.`,
    },
    {
        type: "paragraph",
        content: `Usage:`,
    },
    {
        type: "code",
        language: "html",
        content: `<hnotify \n    key="notifyExample"/>`,
    },
    {
        type: "header",
        level: 2,
        content: "Methods",
    },
    {
        type: "paragraph",
        content: `Use show method to display notification messages:`,
    },
    {
        type: "code",
        language: "js",
        content: `this.getComponent("notifyExample").show(window.__heretic.t("notificationMessage"), "is-danger");`,
    },
    {
        type: "paragraph",
        content: `Use classes from Bulma in order to have different styling for your notifications.`,
    },
    {
        type: "header",
        level: 1,
        content: "Pagination",
    },
    {
        type: "paragraph",
        content: `Display pagination bar in order to display multiple pages of content.`,
    },
    {
        type: "paragraph",
        content: `Usage:`,
    },
    {
        type: "code",
        language: "html",
        content: `<hpagination\n    data=paginationData\n    currentPage=state.currentPage\n    on-page-click("onExamplePageClick")/>`,
    },
    {
        type: "header",
        level: 2,
        content: "Pagination Data",
    },
    {
        type: "paragraph",
        content: `Pagination data is a simple array of numbers and "...".`,
    },
    {
        type: "code",
        language: "js",
        content: `[1, 2, 3, "...", 14, 15]`,
    },
    {
        type: "paragraph",
        content: `Example method to generate pagination data (in this example, current page is set by currentPage, total number of pages is set by totalPages):`,
    },
    {
        type: "code",
        language: "js",
        content: `generatePagination(currentPage, totalPages) {\n    const center = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];\n    const filteredCenter = center.filter((p) => p > 1 && p < totalPages);\n    // includeThreeLeft\n    if (currentPage === 5) {\n        filteredCenter.unshift(2);\n    }\n    // includeThreeRight\n    if (currentPage === totalPages - 4) {\n        filteredCenter.push(totalPages - 1);\n    }\n    // includeLeftDots\n    if (currentPage > 5) {\n        filteredCenter.unshift("...");\n    }\n    // includeRightDots\n    if (currentPage < totalPages - 4) {\n        filteredCenter.push("...");\n    }\n    // Finalize\n    const pagination = [1, ...filteredCenter, totalPages];\n    if (pagination.join(",") === "1,1") {\n        pagination.pop();\n    }\n    // Return pagination data\n    return pagination;\n}`,
    },
    {
        type: "header",
        level: 1,
        content: "Translation Component",
    },
    {
        type: "paragraph",
        content: `Translation component is used to translate strings using key-value dictionaries. Read more about internationalization here.`,
    },
    {
        type: "paragraph",
        content: `Usage:`,
    },
    {
        type: "code",
        language: "js",
        content: `<t>translationKey</t>`
    },
    {
        type: "paragraph",
        content: `You may use any attributes which could be applied to &lt;span/&gt; tag like class etc.`,
    },
    {
        type: "header",
        level: 1,
        content: "WYSIWYG Editor",
    },
    {
        type: "paragraph",
        content: `WYSIWYG implies a user interface that allows you edit documents very similar to the end result while the document is being created.`,
    },
    {
        type: "paragraph",
        content: `Usage:`,
    },
    {
        type: "code",
        language: "js",
        content: `<hwysiwyg\n    key="sampleWysiwyg"\n    id=input.id\n    on-value-change("onWYSIWYGValueChange")\n    formId="formId"/>`,
    },
];
