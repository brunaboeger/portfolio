export const definePriorityClass = (priority) => {
  if (!priority) {
    return;
  }

  if (priority == "principal") {
    return "is-principal";
  }

  if (priority == "secondary") {
    return "is-secondary";
  }

  return "is-third";
};
