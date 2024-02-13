function copyToClipboard(inputId) {
    // Get the input element using the provided ID
    var copyInput = document.getElementById(inputId);

    // Check if the input element exists
    if (!copyInput) {
        console.error("Input element not found with ID: " + inputId);
        return;
    }

    // Select the text in the input
    copyInput.select();
    copyInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the input
    copyInput.blur();

    // Optionally, provide feedback to the user (you can customize this)
    alert("Copied: " + copyInput.value);
}
