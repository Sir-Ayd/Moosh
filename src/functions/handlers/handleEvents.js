const fs = require('fs');
const { connection } = require('mongoose')
module.exports = (client) => {
    client.handleEvents = async () => {
        const eventsFolders = fs.readdirSync(`./src/events`);
        for (const folder of eventsFolders) {
            const eventsFiles = fs
                .readdirSync(`./src/events/${folder}`)
                .filter((file) => file.endsWith('.js'));
            switch (folder) {
                case "client":
                    for (const file of eventsFiles) {
                        const event = require(`../../events/client/${file}`);
                        if (event.once) client.once(event.name, (...args) => event.execute(...args, client))
                        else client.on(event.name, (...args) => event.execute(...args, client));
                    }
                    break;

                case "mongo":
                    for (const file of eventsFiles) {
                        const event = require(`../../events/mongo/${file}`)
                        if (event.once) connection.once(event.name, (...args) => event.execute(...args, client))
                        else connection.on(event.name, (...args) => event.execute(...args, client));
                    }
                    break;


                default:
                    break;
            }
        }
    }
}