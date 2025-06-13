import path from 'path';
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
    },
    dedupe: ['react', 'react-dom', 'styled-components'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'styled-components'],
  },
};
