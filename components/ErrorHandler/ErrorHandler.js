class ErrorHandler {
  render(error) {
    const html = `
      <div class="error">
        <div class="error__wrapper">
          <h3 class="error__heading">${error || "Whoops"}</h3>
          <p class="error__text">
            Попробуйте перезагрузить страницу или зайти позже
          </p>
        </div>
      </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorHandler = new ErrorHandler();
