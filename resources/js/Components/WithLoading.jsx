const withLoading =
    ({
        SpinnerWithLabel,
        Overlay,
        LoadingWrapper = ({children}) => <div>{children}</div>,
    }) =>
    (WrappedComponent) => {
        return function EnhancedComponent({ isLoading, ...props }) {
            if (isLoading) {
                return (
                    <LoadingWrapper>
                        <div className="relative flex items-center justify-center w-full h-full">
                            {Overlay && <Overlay />}
                            {SpinnerWithLabel && <SpinnerWithLabel />}
                        </div>
                    </LoadingWrapper>
                );
            }
            return <WrappedComponent {...props} />;
        };
    };

export default withLoading;
