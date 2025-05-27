const axios = require('axios');

module.exports = {
    config: {
        name: "animequote",
        aliases: ['animefact', 'animequote'],
        author: "Hassan",
        version: "1.0",
        shortDescription: "Get a random anime quote",
        longDescription: "Retrieve a random anime quote using the Anime Quote API.",
        category: "fun",
        guide: {
            vi: "",
            en: ""
        }
    },

    onStart: async function ({ message }) {
        try {
            const url = 'https://h-anime-quote-api.vercel.app/anime-quote';
            const response = await axios.get(url);
            const quoteData = response.data.data;

            const anime = quoteData.anime.name;
            const character = quoteData.character.name;
            const quote = quoteData.content;

            return message(`📜 **Anime Quote**\n\n"${quote}"\n\n- ${character} (${anime})`);
        } catch (error) {
            console.error(error);
            return message("Sorry, there was an error fetching the anime quote.");
        }
    }
}