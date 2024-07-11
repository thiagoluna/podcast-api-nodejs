import {PodcastInterface} from "./podcastInterface";

export interface responsePodcastInterface {
    statusCode: number;
    body: PodcastInterface[];
}