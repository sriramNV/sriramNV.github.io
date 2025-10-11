export function initCopyToClipboard() {
    const copyButton = document.getElementById('copy-email-button');
    const emailSpan = document.getElementById('email-address');

    if (!copyButton || !emailSpan) return;

    copyButton.addEventListener('click', () => {
        const email = emailSpan.textContent;
        navigator.clipboard.writeText(email).then(() => {
            // Provide visual feedback
            const originalText = copyButton.dataset.tooltipText;
            copyButton.setAttribute('data-tooltip-text', 'Copied!');

            // Reset the tooltip text after a delay
            setTimeout(() => {
                copyButton.setAttribute('data-tooltip-text', originalText);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy email: ', err);
            // Optionally, provide an error message to the user
            copyButton.setAttribute('data-tooltip-text', 'Failed to copy!');
        });
    });
}