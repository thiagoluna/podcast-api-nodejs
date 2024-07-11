import * as http from "http";
import {Routes} from "./routes/routes";
import {HttpMethod} from "./utils/utils";
import * as podcastController from "./controllers/podcastController";

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
        const [baseUrl, queryString] = request.url?.split('?') ?? ["", ""];

        if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            await podcastController.getListEpisodes(request, response);
        }

        if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
            await podcastController.getEpisodesByPodcastName(request, response);
        }
    }
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server running at ${port} port`);
});
