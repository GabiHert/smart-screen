import * as ScreenOrientation from "expo-screen-orientation";

class ChangeScreenOrientation {
    async lockHorizontal() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }
}

export default new ChangeScreenOrientation()