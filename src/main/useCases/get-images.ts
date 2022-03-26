import logger from "../domain/utils/logger";
import Images from "./images";

class GetImages {
    get(imageName: string) {
        logger.info({event: "GetImagesPath.get", details: "Process started", imageName})

        if (Images[imageName]) {
            return Images[imageName]
        } else {
            return Images["Loading"]
        }

    }
}

export default new GetImages()