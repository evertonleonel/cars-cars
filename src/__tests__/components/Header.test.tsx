import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('<Heade />', () => {
  it('renders learn react link', () => {
    render(<Header />);
    const logoWebSite = screen.getByRole('img');
    expect(logoWebSite).toBeInTheDocument();
  });
});
