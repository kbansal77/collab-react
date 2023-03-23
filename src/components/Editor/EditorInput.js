import React from "react";
import Configration from "./Configration";

import EditorJS from "@editorjs/editorjs";

const EditorInput = () => {
    const editor = new EditorJS(Configration);
    return (
        <div>
            <div id="editor"></div>
        </div>
    );
};

export default EditorInput;
