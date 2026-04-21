export function addInternalLinks(content) {
    return content.replace(
      /MERN Stack/gi,
      `<a href="/courses/mern-stack">MERN Stack Course</a>`
    );
  }