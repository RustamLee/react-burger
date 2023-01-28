export const date = (time: string) => {
  return new Date(Date.parse(time)).toLocaleString("ru", {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: "short",
  })
}
