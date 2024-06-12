export default [{
        type: "header",
        level: 1,
        content: "Table Builder",
    },
    {
        type: "paragraph",
        content: "Table Builder component (hflextable) allows you to dynamically display table data.",
    },
    {
        type: "paragraph",
        content: `<i>Note:</i> a deprecated version of the dynamic table htable using the "table" tag is also available.`,
    },
    {
        type: "paragraph",
        content: "Usage example:",
    },
    {
        type: "code",
        language: "html",
        content: `<hflextable \n    key=\`\${moduleConfig.id}List\`\n    id=\`\${moduleConfig.id}List\`\n    data=formData\n    on-top-button-click("onTopButtonClick")\n    on-action-button-click("onActionButtonClick")\n    on-unauthorized("onUnauthorized")\n    headers={}/>`,
    },
    {
        type: "header",
        level: 2,
        content: "Data",
    },
    {
        type: "paragraph",
        content: "In order to render table, you need to pass the data object. It contains everything the component needs to build tanle form data:",
    },
    {
        type: "code",
        language: "js",
        content: `// Import icons from Material Design Icons package\nconst {\n    mdiPencilOutline,\n    mdiTrashCanOutline,\n    mdiAccountPlusOutline,\n} = require("@mdi/js");\n// Require form validator utilities library\nconst utils = require("#lib/formValidatorUtils");\n\nexport default class {\n    // Pass translation function to the constructor\n    constructor(t) {\n        this.t = t || (id => id);\n        // Form data object\n        this.data = {\n            form: [],\n        };\n    }\n\n    // Getter: return form data\n    getData() {\n        return this.data;\n    }\n\n    // Returns an array of form data in flat mode\n    getFieldsFlat() {\n        return this.validationData.fieldsFlat;\n    }\n\n    // Get table columns (used for mtable component)\n    getTableColumns() {\n        return Object.fromEntries(Object.entries(this.validationData.fieldsFlat).filter(([, value]) => ["text", "select", "column", "date", "div"].indexOf(value.type) > -1));\n    }\n\n    // Get default sort column (used for mtable component)\n    getTableDefaultSortColumn() {\n        return {\n            id: "example",\n            direction: 1, // 1 = asc, 2 = desc\n        };\n    }\n\n    // Is action column enabled\n    isActionColumn() {\n        return true;\n    }\n\n    // Is checkbox column enabled\n    isCheckboxColumn() {\n        return this.checkboxColumn;\n    }\n\n    // Get buttons for action column\n    getActions() {\n        return [{\n            id: "edit", // Button ID\n            label: this.t("edit"), // Button label\n            icon: mdiPencilOutline, // Icon\n        }, {\n            id: "delete", // Button ID\n            label: this.t("delete"), // Button label\n            icon: mdiTrashCanOutline, // Icon\n            danger: true, // Red button\n        }];\n    }\n\n    // Get top buttons\n    getTopButtons() {\n        return [{\n            id: "newItem", // Button ID\n            label: this.t("newItem"), // Button label\n            icon: mdiAccountPlusOutline, // Icon\n        }, {\n            id: "delete", // Button ID\n            label: this.t("deleteSelected"), // Button label\n            icon: mdiTrashCanOutline, // Icon\n            danger: true, // Red button\n        }];\n    }\n\n    // Get data loading configuration (for mtable component)\n    getTableLoadConfig() {\n        return {\n            url: \`/api/\${moduleConfig.id}/list\`,\n        };\n    }\n\n    // Get bulk edit configuration (for mtable component)\n    getTableBulkUpdateConfig() {\n        return {\n            url: \`/api/\${moduleConfig.id}/bulkSave\`,\n        };\n    }\n\n    // Get table export configuration (for mtable component)\n    getTableExportConfig() {\n        return {\n            url: \`/api/\${moduleConfig.id}/export\`,\n            download: \`/api/\${moduleConfig.id}/download\`,\n        };\n    }\n\n    // Get recycle bin configuration (for mtable component)\n    getRecycleBinConfig() {\n        return {\n            enabled: true, // Is recycle bin enabled\n            title: "label", // Field ID used to display in confirmation dialog\n            id: "id", // Id field\n            url: {\n                list: \`/api/\${moduleConfig.id}/recycleBin/list\`, // List endpoint\n                restore: \`/api/\${moduleConfig.id}/recycleBin/restore\`, // Restore endpoint\n                delete: \`/api/\${moduleConfig.id}/recycleBin/delete\`, // Delete endpoint\n            },\n        };\n    }\n\n    // Get item delete configuration\n    getTableDeleteConfig() {\n        return {\n            url: \`/api/\${moduleConfig.id}/delete\`, // Delete endpoint\n            titleId: "id", // Field ID used to display in confirmation dialog\n        };\n    }\n\n    // Process value based on cell data\n    processTableCell(id, row) {\n        return row[id]\n    }\n}`,
    },
    {
        type: "paragraph",
        content: "Form data property structure and its elements are described in Form Builder manual.",
    },
    {
        type: "header",
        level: 2,
        content: "Events",
    },
    {
        type: "paragraph",
        content: "The following events are emitted by the table component.",
    },
    {
        type: "header",
        level: 3,
        content: "load-complete (data)",
    },
    {
        type: "paragraph",
        content: "This event is emitted when data from server is loaded successfully.",
    },
    {
        type: "header",
        level: 3,
        content: "unauthorized ()",
    },
    {
        type: "paragraph",
        content: "Emitted when receiving 403 error from server.",
    },
    {
        type: "header",
        level: 3,
        content: "top-button-click (id)",
    },
    {
        type: "paragraph",
        content: "Emitted when top button is pressed.",
    },
    {
        type: "header",
        level: 3,
        content: "action-button-click (data)",
    },
    {
        type: "paragraph",
        content: "Emitted when action button is pressed. data object:",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    buttonId: "buttonId", // Button ID\n    itemId: "button", // Table row ID\n}`,
    },
];
