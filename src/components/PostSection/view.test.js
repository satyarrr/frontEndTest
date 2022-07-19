import { render, screen } from '@testing-library/react';
import PostSection from './view';
import userEvent from '@testing-library/user-event'

test('renders Post Section', async () => {
    render(<PostSection/>)

});