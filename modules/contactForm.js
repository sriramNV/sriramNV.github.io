export function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');

    if (!form || !statusEl) return;

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Add a submitting status message
        statusEl.textContent = 'Sending...';
        statusEl.className = 'status-submitting';

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                statusEl.textContent = "Thanks for your message! I'll get back to you soon.";
                statusEl.className = 'status-success';
                form.reset();
            } else {
                const data = await response.json();
                statusEl.textContent = data.message || 'Oops! There was a problem submitting your form.';
                statusEl.className = 'status-error';
            }
        } catch (error) {
            statusEl.textContent = 'Oops! There was a network error.';
            statusEl.className = 'status-error';
        }
    }

    form.addEventListener('submit', handleSubmit);
}