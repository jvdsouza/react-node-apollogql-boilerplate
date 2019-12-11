const pong = (req, resp) => {
    return resp.status(200).json("pong");
}

module.exports = pong;