function t(r){if(isNaN(r))throw new Error("Input must be a valid number.");return r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}export{t as f};
