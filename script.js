document.getElementById("submitGrades").addEventListener("click", function() {
    const knowledgeUnderstanding = document.getElementById("knowledgeUnderstanding").value;
    const investigation = document.getElementById("investigation").value;
    const communication = document.getElementById("communication").value;
    const criticalThinking = document.getElementById("criticalThinking").value;

    const data = {
        prompt: `Generate feedback for a student based on the following grades:\n` +
                `Knowledge and Understanding: ${knowledgeUnderstanding}\n` +
                `Investigation: ${investigation}\n` +
                `Communication: ${communication}\n` +
                `Critical Thinking: ${criticalThinking}\n`,
        temperature: 0.7,
        max_tokens: 150
    };

    fetch("https://api.openai.com/v1/engines/davinci/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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" // Replace with your API key
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("feedback").innerText = data.choices[0].text.trim();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
