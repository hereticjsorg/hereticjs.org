export default [{
        type: "header",
        level: 1,
        content: "Form Builder",
    },
    {
        type: "paragraph",
        content: "Form Builder component (hform) allows you to dynamically build and validate your forms.",
    },
    {
        type: "paragraph",
        content: "Usage example:",
    },
    {
        type: "code",
        language: "html",
        content: `<hform
    key="exampleForm"
    id="exampleForm"
    data=formData
    on-button-click("onFormButtonClick")
    on-form-submit("onFormSubmit")
    on-mount-complete("onFormMountComplete")/>`,
    },
    {
        type: "header",
        level: 2,
        content: "Data",
    },
    {
        type: "paragraph",
        content: "In order to build form data, you need to pass the data object. It contains everything the component needs to build and process form data:",
    },
    {
        type: "code",
        language: "js",
        content: `// Import icons from Material Design Icons package\nconst {\n    mdiPencilOutline,\n    mdiTrashCanOutline,\n} = require("@mdi/js");\n// Require form validator utilities library\nconst utils = require("#lib/formValidatorUtils");\nexport default class {\n    // Pass translation function to the constructor\n    constructor(t) {\n        this.t = t || (id => id);\n        // Form data object\n        this.data = {\n            form: [],\n        };\n        // Extract validation data from form\n        this.validationData = utils.getValidationData(this.data.form);\n    }\n\n    // Getter: return form data\n    getData() {\n        return this.data;\n    }\n\n    // Return validation schema for Ajv\n    getValidationSchema() {\n        return {\n            type: "object",\n            properties: this.validationData.validationSchema,\n        };\n    }\n\n    // Returns an array of form data in flat mode\n    getFieldsFlat() {\n        return this.validationData.fieldsFlat;\n    }\n\n    // Get object of available field areas\n    getFieldsArea() {\n        return this.validationData.fieldsArea;\n    }\n\n    // Process value based on cell data\n    processTableCell(id, row) {\n        return row[id]\n    }\n\n    // Allow to change the mode (view/edit)\n    isModeChangeAllowed() {\n        return false;\n    }\n\n    // Get form tabs array\n    // When "id" is set to _default, no tabs are displayed\n    getTabs() {\n        return [{\n            id: "_default",\n            label: "",\n        }];\n    }\n\n    // Which tabs should be displayed on first render\n    getTabsStart() {\n        return ["_default"];\n    }\n\n    // History configuration\n    getHistoryConfig() {\n        return {\n            enabled: true, // Is history enabled\n            list: \`/api/\${moduleConfig.id}/history/list\`, // List endpoint\n        };\n    }\n\n    // Fields with restricted access (array of strings)\n    getRestrictedFields() {\n        return [];\n    }\n\n    // Areas with restricted access (array of strings)\n    getRestrictedAreas() {\n        return [];\n    }\n\n    // When received, this hard-coded value means "access denied"\n    getMagicStringAccessDenied() {\n        return "WP0eX1QaOvhNWEgYa8Nx1X2f";\n    }\n}`,
    },
    {
        type: "paragraph",
        content: "Form data property has the following structure:",
    },
    {
        type: "code",
        language: "json",
        content: `form [ { area }, { area }, ...]`,
    },
    {
        type: "paragraph",
        content: "Each area may contain one or more group of fields and may have it's own label and styling when necessary.",
    },
    {
        type: "paragraph",
        content: "The following field types are available:",
    },
    {
        type: "header",
        level: 3,
        content: "text",
    },
    {
        type: "paragraph",
        content: "Used to display a text input field.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "firstName", // Unique field ID\n    type: "text", // Field type\n    label: this.t("firstName"), // Field label\n    mandatory: true, // Mandatory flag\n    validation: { // Ajv validation schema\n        type: ["string"],\n    },\n    sortable: true, // Is field sortable? (used by mtable)\n    searchable: true, // Is field searchable (used by mtable)\n    css: "hr-hf-field-large", // Field wrapper styling used to set field width\n    column: true, // Should this field be displayed as column (used by mtable)\n    createIndex: true, // Should this field be indexed in database (used by mtable)\n    autoFocus: true, // Should this field be focused on first render?\n    hidden: false, // Don't show this field as a table column by default (used by mtable)\n    convert: "integer", // When set, result value will be converted to integer\n    maskedOptions: { // IMask options for masked fields\n        mask: Number,\n        min: 1,\n        max: 99,\n    },\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "textarea",
    },
    {
        type: "paragraph",
        content: "Used to display a text area field.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "message", // Unique field ID\n    type: "text", // Field type\n    label: this.t("message"), // Field label\n    mandatory: false, // Mandatory flag\n    validation: { // Ajv validation schema\n        type: ["string"],\n    },\n    sortable: true, // Is field sortable? (used by mtable)\n    searchable: true, // Is field searchable (used by mtable)\n    css: "hr-hf-field-large", // Field wrapper styling used to set field width\n    column: true, // Should this field be displayed as column (used by mtable)\n    createIndex: true, // Should this field be indexed in database (used by mtable)\n    autoFocus: true, // Should this field be focused on first render?\n    hidden: false, // Don't show this field as a table column by default (used by mtable)\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "select",
    },
    {
        type: "paragraph",
        content: "Used to display a select input field.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "chapter", // Unique field ID\n    type: "select", // Field type\n    label: this.t("chapter"), // Field label\n    mandatory: false, // Mandatory flag\n    validation: { // Ajv validation schema\n        type: ["string", "null"],\n        enum: [null, "", "example1", "example2"],\n    },\n    options: [{ // List of options (value and label)\n        value: "",\n        label: "—"\n    }, {\n        value: "example1",\n        label: this.t("example1"),\n    }, {\n        value: "example2",\n        label: this.t("example2"),\n    }],\n    defaultValue: "", // Default value on form render\n    sortable: true, // Is field sortable? (used by mtable)\n    searchable: true, // Is field searchable (used by mtable)\n    css: "hr-hf-field-large", // Field wrapper styling used to set field width\n    column: true, // Should this field be displayed as column (used by mtable)\n    createIndex: true, // Should this field be indexed in database (used by mtable)\n    autoFocus: false, // Should this field be focused on first render?\n    hidden: false, // Don't show this field as a table column by default (used by mtable)\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "date",
    },
    {
        type: "paragraph",
        content: "Used to display a date picker input field. Result value is stored as UNIX timestamp.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "hireDate", // Unique field ID\n    type: "date", // Field type\n    label: this.t("hireDate"), // Field label\n    validation: { // Ajv validation schema\n        type: ["integer", "null"],\n    },\n    convert: "integer", // When set, result value will be converted to integer\n    sortable: true, // Is field sortable? (used by mtable)\n    searchable: true, // Is field searchable? (used by mtable)\n    css: "hr-hf-field-date", // Field wrapper styling used to set field width\n    column: true, // Should this field be displayed as column (used by mtable)\n    createIndex: true, // Should this field be indexed in database (used by mtable)\n    hidden: true, // Don't show this field as a table column by default (used by mtable)\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "column",
    },
    {
        type: "paragraph",
        content: "Used to represent a table column by mtable component, not rendered as form field.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "id", // Unique field ID\n    type: "column", // Field type\n    label: this.t("id"), // Field label\n    sortable: true, // Is field sortable? (used by mtable)\n    column: true, // Should this field be displayed as column (used by mtable)\n    createIndex: true,  // Should this field be indexed in database (used by mtable)\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "div",
    },
    {
        type: "paragraph",
        content: "Used to display a DIV element and then render its content programmatically.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "salaryStatus", // Unique field ID\n    type: "div", // Field type\n    label: this.t("salaryStatus"), // Field label\n    validation: {}, // Validation (ignored)\n    css: "hr-hf-field-large",  // Field wrapper styling used to set field width\n    divClass: "input is-justify-content-center", // Element styling\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "log",
    },
    {
        type: "paragraph",
        content: "Used to display key-value fields combined with date, might be useful to display different event logs.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "salaryLog", // Unique field ID\n    type: "log", // Field type\n    label: this.t("salaryLog"), // Field label\n    mandatory: false, // Mandatory flag\n    validation: { // Ajv validation schema\n        type: ["array", "null"],\n        items: {\n            type: "object",\n            properties: {\n                uid: {\n                    type: "string",\n                    pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",\n                },\n                logValue: {\n                    type: ["string", "null"],\n                    maxLength: 32,\n                },\n                logStatus: {\n                    type: "string",\n                    enum: ["planned", "negotiation", "done"],\n                },\n                logComments: {\n                    type: ["string", "null"],\n                    maxLength: 2048,\n                },\n                logDate: {\n                    type: ["integer", "null"],\n                }\n            },\n            required: ["uid"],\n        },\n        minItems: 0,\n        uniqueItems: false,\n    },\n    options: [{ // List of options for logStatus\n        value: "planned",\n        label: this.t("logValue.planned"),\n    }, {\n        value: "negotiation",\n        label: this.t("logValue.negotiation"),\n    }, {\n        value: "done",\n        label: this.t("logValue.done"),\n    }],\n    defaultOption: "planned", // Default logStatus option\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "files",
    },
    {
        type: "paragraph",
        content: "Used to upload files to server.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "attachments", // Unique field ID\n    type: "files", // Field type\n    label: this.t("attachments"), // Field label\n    buttonLabel: this.t("select"), // Select button label\n    multiple: true, // Allow to upload multiple files\n    validation: { // Validation\n        minCount: 0, // Min. count of files\n        maxCount: 10, // Max. count of files\n        maxSize: 5096000, // Max. file size\n    },\n    download: "/api/example/download", // URL used to download files\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "wysiwyg",
    },
    {
        type: "paragraph",
        content: "Used to display a WYSIWYG editor.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "comments", // Unique field ID\n    type: "wysiwyg", // Field type\n    label: this.t("notes"), // Field label\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "buttons",
    },
    {
        type: "paragraph",
        content: "Display form buttons.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "buttons", // Unique field ID\n    type: "buttons",  // Field type\n    items: [{\n        id: "btnSubmit", // Unique button ID\n        type: "submit", // Button type (submit, button etc.)\n        label: this.t("signIn"), // Button label\n        css: "button is-primary mt-3" // List of button classes\n    }],\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "tags",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "groups", // Unique field ID\n    type: "tags", // Field type\n    label: this.t("groups"), // Field label\n    mandatory: false, // Mandatory flag\n    validation: { // Ajv validation schema\n        type: ["array", "null"],\n        items: {\n            type: "string",\n            minLength: 2,\n            maxLength: 32,\n        },\n        minItems: 0,\n        uniqueItems: true,\n    },\n    enumValues: [], // List of pre-defined values\n    enumUnique: true, // Every value should be unique\n    enumOnly: true, // Only allow pre-defined values\n    enumButton: true, // Show button to open dialog to select pre-defined values\n    enumDropdown: false, // Show drop-down menu for selecting pre-defined values\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "keyValue",
    },
    {
        type: "paragraph",
        content: "Used to display key-value selection field.",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "data", // Unique field ID\n    type: "keyValue", // Field type\n    label: this.t("data"), // Field label\n    mandatory: false, // Mandatory flag\n    validation: { // Ajv validation schema\n        type: ["array", "null"],\n        items: {\n            type: "object",\n            properties: {\n                uid: {\n                    type: "string",\n                    pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",\n                },\n                id: {\n                    type: "string",\n                    maxLength: 32,\n                },\n                type: {\n                    type: "string",\n                    maxLength: 32,\n                },\n                value: {\n                    oneOf: [{\n                        type: "string",\n                        maxLength: 1024,\n                    }, {\n                        type: "boolean",\n                    }, {\n                        type: "null",\n                    }]\n                },\n            },\n            required: ["uid", "id", "type"],\n        },\n        minItems: 0,\n        uniqueItems: false,\n    },\n    css: "hr-hf-field-medium",\n}`,
    },
    {
        type: "header",
        level: 2,
        content: "Events",
    },
    {
        type: "paragraph",
        content: "The following events are emitted by the form builder component.",
    },
    {
        type: "header",
        level: 3,
        content: "mount-complete ()",
    },
    {
        type: "paragraph",
        content: "This event is emitted when all fields are rendered and settled on view.",
    },
    {
        type: "header",
        level: 3,
        content: "mode-change (mode)",
    },
    {
        type: "paragraph",
        content: "Emitted when user changes form mode. Possible mode values: view, edit.",
    },
    {
        type: "header",
        level: 3,
        content: "form-submit ()",
    },
    {
        type: "paragraph",
        content: "Emitted when form is submitted.",
    },
    {
        type: "header",
        level: 3,
        content: "button-click (data)",
    },
    {
        type: "paragraph",
        content: "Emitted when form button is pressed. Data object:",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "buttonId", // Button ID\n    type: "button", // Button type (button, submit etc.)\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "request-history (data)",
    },
    {
        type: "paragraph",
        content: "Emitted when history is requested by user. Data object:",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    page: 1,\n}`,
    },
    {
        type: "header",
        level: 3,
        content: "restore-history (id)",
    },
    {
        type: "paragraph",
        content: "Emitted when history element with id needs to be restored.",
    },
    {
        type: "header",
        level: 3,
        content: "delete-history (id)",
    },
    {
        type: "paragraph",
        content: "Emitted when history element with id needs to be deleted.",
    },
    {
        type: "header",
        level: 3,
        content: "value-change (data)",
    },
    {
        type: "paragraph",
        content: "Emitted when field value changes. Data object:",
    },
    {
        type: "code",
        language: "js",
        content: `{\n    id: "fieldId", // Field ID\n    type: "text", // Field Type\n    value: "example" // Field Value\n}`,
    },
];
