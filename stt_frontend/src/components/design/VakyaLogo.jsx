import VakyaLogoImage from "../../assets/VakyaLogo.svg";

export const VakyaLogoComponent = ({ className = "" }) => {
    return (
            <img
                src={VakyaLogoImage}
                alt="Vakya Logo"
                className={`block brightness-125 border-[.5px] ${className}`}
            />
    );
};