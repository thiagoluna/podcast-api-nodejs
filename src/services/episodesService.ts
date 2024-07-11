import * as podcastRepository from "../repositories/podcastRepository";
import {IncomingMessage} from "http";
import {responsePodcastInterface} from "../interfaces/responsePodcastInterface";
import {StatusCode} from "../utils/utils";

export const listAll = async (): Promise<responsePodcastInterface>  => {
    let responseFormat: responsePodcastInterface = {
        statusCode: 0,
        body: [],
    };

    const data = await podcastRepository.podcastData();

    responseFormat.statusCode = data.length != 0 ? StatusCode.OK : StatusCode.NoContent;
    responseFormat.body = data;

    return responseFormat;
};

export const getEpisodesByPodcastName = async (request: IncomingMessage): Promise<responsePodcastInterface> => {
    let responseFormat: responsePodcastInterface = {
        statusCode: 0,
        body: [],
    };

    const podcastName = request.url?.split('?podcast=')[1] ?? "";
    const data = await podcastRepository.podcastData(podcastName);

    responseFormat.statusCode = data.length != 0 ? StatusCode.OK : StatusCode.NoContent;
    responseFormat.body = data;

    return responseFormat;
}

