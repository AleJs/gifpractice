export const getGifs = async (category) => {
  const url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    category +
    "&limit=15&api_key=ne9CNRTOcFIH7aoIw00QLWQtbuMENWaM";
  const resp = await fetch(url);

  const { data } = await resp.json();

  const gif = data.map((img) => {
    return {
      id: img.id,
      img: img.images.downsized_medium.url,
      title: img.title,
    };
  });
  return gif;
};
