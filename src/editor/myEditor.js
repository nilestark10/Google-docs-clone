import React, { useRef } from "react";
import Editor from "./editor";
import { customUndoIcon, customRedoIcon, customLinkIcon, customAddImageIcon, customOutdentIcon, customIndentIcon, customClearFormatIcon } from "../icons/icons";


export default function MyEditor() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <Editor
            onInit={(editor) => (editorRef.current = editor)}
            init={{
                height: 840,
                width: 1920,
                menubar: 'file edit view insert format tools help',
                statusbar: false,
                branding: false,
                toolbar_persist: true,
                promotion: false,
                plugins: [
                    "advlist",
                    "anchor",
                    "autolink",
                    "help",
                    "image",
                    "link",
                    "lists",
                    "searchreplace",
                    "table",
                    "wordcount",
                ],
                font_size_formats: "8 9 10 11 12 14 18 24 30 36 48 60 72 96",
                toolbar:
                    "myUndoButton myRedoButton print spellchecker formatpainter fullscreen | blocks | " +
                    " fontfamily |" +
                    "fontsizeinput|" +
                    "bold italic underline forecolor backcolor | myLinkButton myImageLinkButton | Alignment lineheight |" +
                    "checklist bullist numlist | myOutdentButton myIndentButton | " +
                    "myClearFormatButton",
                setup: (editor) => {

                    /* example, adding a group toolbar button */
                    editor.ui.registry.addGroupToolbarButton('alignment', {
                        icon: 'align-left',
                        tooltip: 'Alignment',
                        items: 'alignleft aligncenter alignright | alignjustify'
                    });

                    editor.ui.registry.addIcon('custom-undo-icon', customUndoIcon());
                    editor.ui.registry.addIcon('custom-redo-icon', customRedoIcon());
                    editor.ui.registry.addIcon('custom-link-icon', customLinkIcon());
                    editor.ui.registry.addIcon('custom-image-icon', customAddImageIcon());
                    editor.ui.registry.addIcon('custom-outdent-icon', customOutdentIcon());
                    editor.ui.registry.addIcon('custom-indent-icon', customIndentIcon());
                    editor.ui.registry.addIcon('custom-clear-format-icon', customClearFormatIcon());

                    editor.ui.registry.addButton('myUndoButton', {
                        icon: 'custom-undo-icon',
                        tooltip: 'Undo',
                        onAction: () => {
                            editor.execCommand('undo');
                        },
                    });
                    editor.ui.registry.addButton('myRedoButton', {
                        icon: 'custom-redo-icon',
                        tooltip: 'Redo',
                        onAction: () => {
                            editor.execCommand('Redo');
                        },
                    });
                    editor.ui.registry.addButton('myLinkButton', {
                        icon: 'custom-link-icon',
                        tooltip: 'Insert link',
                        onAction: () => {
                            editor.execCommand('mceLink');
                        },
                    });
                    editor.ui.registry.addButton('myImageLinkButton', {
                        icon: 'custom-image-icon',
                        tooltip: 'Insert image',
                        onAction: () => {
                            editor.execCommand('mceImage');
                        },
                    });
                    editor.ui.registry.addButton('myOutdentButton', {
                        icon: 'custom-outdent-icon',
                        tooltip: 'Decrease indent',
                        onAction: () => {
                            editor.execCommand('outdent');
                        },
                    });
                    editor.ui.registry.addButton('myIndentButton', {
                        icon: 'custom-indent-icon',
                        tooltip: 'Increase indent',
                        onAction: () => {
                            editor.execCommand('indent');
                        },
                    });
                    editor.ui.registry.addButton('myClearFormatButton', {
                        icon: 'custom-clear-format-icon',
                        tooltip: 'Clear formatting',
                        onAction: () => {
                            editor.execCommand('removeformat');
                        },
                    });


                },
                content_style:
                    "body { font - family:Helvetica,Arial,sans-serif; font-size:14px; margin: 20px; backgound-color:black !important }",
            }}
        />

    )
}