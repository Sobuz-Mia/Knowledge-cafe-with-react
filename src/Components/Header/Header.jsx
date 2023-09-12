import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header>
            <div>
                <h1 className="text-5xl font-bold">Knowledge cafe</h1>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;