import PrimaryButton from "./PrimaryButton";

export default function ButtonLoadingWrapper({ children }) {
    return (
        <PrimaryButton className="w-full bg-primary">
            {children}
        </PrimaryButton>
    );
}
