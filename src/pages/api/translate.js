export default async function handler(req, res) {
  if (req.method === "POST") {
    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
      return res.status(400).json({ error: "Invalid request payload" });
    }

    try {
      const apiKey = process.env.CLOUD_TRANSLATION_API_KEY;

      // Log the API key (Remove this in production!)
      console.log("API Key:", apiKey);

      if (!apiKey) {
        throw new Error("API Key is missing. Check environment variables.");
      }

      const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
        }),
      });

      const data = await response.json();

      if (
        data.data &&
        data.data.translations &&
        data.data.translations.length > 0
      ) {
        const translatedText = data.data.translations[0].translatedText;
        res.status(200).json({ translatedText });
      } else {
        console.error("Translation API returned unexpected data:", data);
        throw new Error("No translation data returned.");
      }
    } catch (error) {
      console.error("Translation API error:", error);
      res
        .status(500)
        .json({ error: "Failed to translate text", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
