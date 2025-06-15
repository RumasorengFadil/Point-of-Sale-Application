import './bootstrap';
import '../css/app.css';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import axios from 'axios'; // ⬅️ Tambahkan ini jika belum
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        // ✅ Tambahkan Axios Interceptor
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                const contentType = error?.response?.headers['content-type'];
                
                if (contentType && !contentType.includes('application/json')) {
                    // Cloudflare atau server lain mengembalikan HTML
                    // → Reload paksa agar halaman verifikasi bisa tampil
                    window.location.href = error.response.config.url;
                    return;
                }

                return Promise.reject(error);
            }
        );

        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// import './bootstrap';
// import '../css/app.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { createRoot } from 'react-dom/client';
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
//     setup({ el, App, props }) {
//         const root = createRoot(el);

//         root.render(<App {...props} />);
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });
