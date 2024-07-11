import {IncomingMessage, ServerResponse} from "http";
import * as episodesService from "../services/episodesService";
import {responsePodcastInterface} from "../interfaces/responsePodcastInterface";

export const getListEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content: responsePodcastInterface = await episodesService.listAll();

    response.writeHead(content.statusCode, {'Content-Type': "application/json"});
    response.write(JSON.stringify(content.body));
    response.end();
};

export const getEpisodesByPodcastName = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content:responsePodcastInterface = await episodesService.getEpisodesByPodcastName(request);

    response.writeHead(content.statusCode, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(content.body));
    response.end();
}
