class GetUserAccordingIdUC {
  execute(request, response) {
    const { user } = request;

    return response.json(user);
  }
}

module.exports = new GetUserAccordingIdUC();
