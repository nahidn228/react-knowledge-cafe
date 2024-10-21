import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-screen-xl mx-auto m-4 p-4 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" srcSet="" />
    </header>
  );
};

export default Header;
