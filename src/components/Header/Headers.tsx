import './Header.scss';

function Header() {
  return (
    <div className="chat-header">
      <img
        className="chat-header_avatar"
        src="../../../public/default_avatar.png"
        alt="avatar"
      />
      <div className="chat-header_name">Sarah Winnemucca</div>
    </div>
  );
}

export default Header;
