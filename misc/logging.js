const controller = (req, res, next) => {
  loggerCls.info('Long live rocknroll!')
  // Logs something like
  // {"level":30,"time":1551385666046,"msg":"Long live rocknroll!","pid":25,"hostname":"eb6a6c70f5c4","traceID":"9ba393f0-ec8c-4396-8092-b7e4b6f375b5","v":1}
}
