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
    console.error(JSON.stringify(err));
  }

  info(info) {
    console.info(JSON.stringify(info));
  }

  warn(warn) {
    console.log(JSON.stringify(warn));
  }
}

export default new Logger();
