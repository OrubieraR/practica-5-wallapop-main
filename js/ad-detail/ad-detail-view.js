export const buildAdDetail = (tweet) => {
  
    // const updatedAt = new Date(tweet.updatedAt);
    return `
      <p>${ad.user.username}</p>
      <p>${ad.content}</p>
      <!--p>${updatedAt.toLocaleDateString()}</p-->
      <button style="display: none">Borrar Tweet</button>
    `
  }