function copyToClipboard() {
    // Get the input element
    var copyInput = document.getElementById("copyInput");

    // Select the text in the input
    copyInput.select();
    copyInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the input
    copyInput.blur();

    // Optionally, provide feedback to the user (you can customize this)
    alert("Text copied to clipboard: " + copyInput.value);
}
