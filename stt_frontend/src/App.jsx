import { Toaster } from 'react-hot-toast'
import AppRoutes from '@/router/AppRoutes'

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen ">
      <AppRoutes />
      <Toaster
        position='bottom-right'
        toastOptions={{
          // Default styles
          style: {
            fontFamily: 'monospace',
            fontSize: '16px',
            width: '50%',
            overflow: 'hidden',
            padding: '8px 15px',
            border: '2px solid #a8a8a8',
            animation: 'toast-custom-animation 800ms ease', // 800ms for slow animation
          },
          // SUCCESS Toast
          success: {
            style: {
              background: '#e6f7ea', // Light green
              color: '#155724',       // Dark green
              border: '2px solid #858585', // Green border
            },
          },
          // ERROR Toast
          error: {
            style: {
              background: '#fae3e5', // Light red
              color: '#721c24',       // Dark red
              border: '2px solid #dc3545', // Red border
            },
          },
        }}
      />
    </div>
  )
}

export default App