import PrincipalLogo from '../assets/images/AF_EkaMotos_Principal.svg';

export const Layout = ({ children }) => {
  return (
    <>
      <header className="c-header">
        <div className="image-container">
          <img src={PrincipalLogo} alt="Logo EKA motos" />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
