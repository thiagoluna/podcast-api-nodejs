import fs from "fs";
import path from "path";
import {PodcastInterface} from "../interfaces/podcastInterface";

const pathData = path.join(__dirname, "../repositories/podcast.json")

export const podcastData = async (podcastName?: string): Promise<PodcastInterface[]> => {
    const data = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(data);

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastInterface) => podcast.podcastName === podcastName);
    }

    return jsonFile;
};