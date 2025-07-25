// lib/useLoadNiceSelect.js
import { useEffect } from 'react';

export const useLoadNiceSelect = () => {
  useEffect(() => {
    // Only run on the client
    if (typeof window !== 'undefined') {
      const loadScripts = async () => {
        if (!window.jQuery) {
          await import('jquery');
        }

        // Dynamically load jQuery and nice-select
        const script = document.createElement('script');
        script.src = '/assets/js/plugins/nice-select.min.js';
        script.onload = () => {
          const $ = window.$ || window.jQuery;
          $('.nice-select').niceSelect();
        };
        document.body.appendChild(script);
      };

      loadScripts();
    }
  }, []);
};
