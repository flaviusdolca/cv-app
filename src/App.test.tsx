import { render, waitFor, screen } from '@testing-library/react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
test('renders layout', async () => {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <></>,
        },
      ]
    },

  ]);
  render(<RouterProvider router={router} />);
  await waitFor(() => expect(screen.getByText(/Home/i)).toBeInTheDocument());
});
