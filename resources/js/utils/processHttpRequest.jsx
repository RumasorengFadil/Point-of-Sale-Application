import toastUtils from "./toastUtils";

export const processHttpRequest = (e, method, routeName, params) => {
    e.preventDefault();

    method(route(routeName, params), {
        onSuccess: (response) => {
             toastUtils.showSuccess(response.props.flash);
        },
        onError: (errors) => {
            toastUtils.showError(errors);
        },
    });
};
