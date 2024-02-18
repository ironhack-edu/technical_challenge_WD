const handleServerError = (res, error) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
};

const handleNotFoundError = (res) => {
    res.status(404).json({ error: 'Not Found' });
};

module.exports = { handleServerError, handleNotFoundError };