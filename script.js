document.getElementById("submitGrades").addEventListener("click", function() {
    const knowledgeUnderstanding = document.getElementById("knowledgeUnderstanding").value;
    const investigation = document.getElementById("investigation").value;
    const communication = document.getElementById("communication").value;
    const criticalThinking = document.getElementById("criticalThinking").value;

    // Construct the data object to send to the server
    const data = {
        knowledgeUnderstanding: knowledgeUnderstanding,
        investigation: investigation,
        communication: communication,
        criticalThinking: criticalThinking
    };

    // Make the request to the server-side endpoint
    fetch('/generate_feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Output the response from your server to the feedback div
        document.getElementById("feedback").innerText = data.feedback;
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
        document.getElementById("feedback").innerText = 'An error occurred while generating feedback.';
    });
});
