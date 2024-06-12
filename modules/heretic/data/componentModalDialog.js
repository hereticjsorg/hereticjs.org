export default [{
        type: "header",
        level: 1,
        content: "Modal Dialog",
    },
    {
        type: "paragraph",
        content: "Display modal dialog with different options and handle corresponding events.",
    },
    {
        type: "code",
        language: "html",
        content: `<hmodal\n    key="exampleModal"\n    id="exampleModal"\n    on-button-click("onExampleModalButtonClick")\n    close=true\n    cardClass="pl-3 pr-3"\n    backgroundClass="hr-hm-background-60"\n    title="exampleModalTitle"\n    actions=[\n        {\n            id: "delete",\n            label: "exampleModalDelete",\n            class: "button is-danger",\n        },\n        {\n            id: "cancel",\n            label: "exampleModalCancel",\n            class: "button is-light",\n            close: true,\n        }\n    ]>\n    <section\n        class="modal-card-body"\n        style={\n            order: "2"\n        }>\n        <t>modalWindowContentsGoesHere</t>\n    </section>\n</hmodal>`,
    },
    {
        type: "header",
        level: 2,
        content: "Settings",
    },
    {
        type: "paragraph",
        content: "The following settings might be set:",
    },
    {
        type: "table",
        content: [{
                option: "close (true/false)",
                description: "Allow to close dialog",
            }, {
                option: "cardClass (string)",
                description: "Optionally set additional class for modal card",
            },
            {
                option: "backgroundClass (string)",
                description: "Optionally set additional class for modal background",
            },
            {
                option: "title (string)",
                description: "Modal title",
            },
            {
                option: "actions (array)",
                description: "Modal dialog buttons",
            },
        ],
    },
    {
        type: "paragraph",
        content: "Modal dialog may have one or more sections in order to display content. Make sure to set order property in style 2, 3, 4 etc. for each next section.",
    },
    {
        type: "code",
        language: "js",
        content: `style={\n    order: "2"\n}`,
    },
    {
        type: "header",
        level: 2,
        content: "Events",
    },
    {
        type: "header",
        level: 3,
        content: "button-click (id)",
    },
    {
        type: "paragraph",
        content: "Emitted when dialog button is pressed.",
    },
];
