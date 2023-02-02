async (clipboardContentString) => {
        try {
          const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer YOUR API KEY HERE"
            },
            body: JSON.stringify({
              model: "text-davinci-003",
              prompt: `${clipboardContentString}.`,
              temperature: 0,
              max_tokens: 256
            })
          });
          const data = await response.json();
          const text = data.choices[0].text;
        return `${clipboardContentString} ${text}`;
        } catch (error) {
          return "Error"
        }
      }
