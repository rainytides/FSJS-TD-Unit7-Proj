// Photo component for displaying an image
const Photo = ({ data: { server, id, secret, title } }) => (
  <li>
    <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
  </li>
);

export default Photo;