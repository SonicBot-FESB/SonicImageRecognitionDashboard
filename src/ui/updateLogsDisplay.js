const DATA_DIRECTION = {
    in: "&minus;&gt;",
    out: "&lt;&minus;",
};


function createLogParagraph(direction, data, currentTime) {
    return `
          <p class="lead fw-bold d-flex">
            <span class="${direction === DATA_DIRECTION.in ? 'text-warning' : 'text-primary'}">${direction}</span>
            <span class="ms-2 w-100">${data}</span>
            <span class="fw-bold text-muted fst-italic text-end">(${currentTime})</span>
          </p>
    `;
}

module.exports.updateLogsDisplay = function(direction, data) {
    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    const paragraph = createLogParagraph(direction, data, currentTime);

    const logsDisplay = document.querySelector("#logs-display");
    logsDisplay.innerHTML += paragraph;
    logsDisplay.scrollTop = logsDisplay.scrollHeight;
}

module.exports.clearLogsDisplay = function() {
    document.querySelector("#logs-display").innerHTML = "";
}

module.exports.DATA_DIRECTION = DATA_DIRECTION;
