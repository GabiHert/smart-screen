class Logger {
    log(message) {
        console.log(message);
    }

    line() {
        console.log(
            "----------------------------------------------------------------"
        );
    }

    error(err: any) {
        console.error("[ERROR]::" + JSON.stringify(err));
    }

    info(info) {
        console.info("[INFO]::" + JSON.stringify(info));
    }

    warn(warn) {
        console.log("[WARN]::" + JSON.stringify(warn));
    }
}

export default new Logger();
