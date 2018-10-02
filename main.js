const doCommand = (value) => {
    switch (value) {
        case 'createLink':
            // you can replace alerts and get the values from a modal
            const link = prompt('Please enter the link');
            if (link) {
                document.execCommand(value, false, link);
            }
            break;
        case 'unlink':
            document.execCommand(value, false, null);
            break;
        case 'redo':
        case 'undo':
            document.execCommand(value, false, null);
            break;
        default:
            const btnName = `.${value}-btn`;
            const classStyle = document.querySelector(btnName).className;
            if (classStyle.indexOf('nz-isactive') !== -1) {
                document.querySelector(btnName).className = classStyle.replace('nz-isactive', '');
            } else {
                document.querySelector(btnName).className = `${classStyle} nz-isactive`;
            }
            document.execCommand(value, null, false);
    }
}

const save = () => {
    const textcontent = document.querySelector('.nz-content-body').innerHTML.toString();
    console.log(`You just typed: ${textcontent}`);
}

const cancel = () => {
    // reset the contents to an empty string
    document.querySelector('.nz-content-body').innerHTML = '';
}