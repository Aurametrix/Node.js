module.exports = function (inputParams) {
  return {
    contentType: 'text/html',
    content: `<html><body>
     <div style="color: ${inputParams.color}">
     Hello there!
     </div>`
  };
};
