import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

import { App } from '../App'

test('renders menu with two links to switch between Top Songs and Top Albums', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <App />
        </Router>
    );

    expect(screen.getByText(/Top 100 Albums/i)).toBeInTheDocument()
    expect(screen.getByText(/Top 100 Songs/i)).toBeInTheDocument()
});

test('navigates to Top Songs', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <App />
        </Router>
    );

    const topSongsButton = screen.getByText(/Top 100 Songs/i);
    fireEvent.click(topSongsButton);

    const topSongsHeader = screen.getByText(/Top Songs/i);
    expect(topSongsHeader).toBeInTheDocument()
})

test('navigates to Top Songs and go back to Top Albums', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <App />
        </Router>
    );

    const topSongsButton = screen.getByText(/Top 100 Songs/i);
    fireEvent.click(topSongsButton);
    const topSongsHeader = screen.getByText(/Top Songs/i);
    expect(topSongsHeader).toBeInTheDocument()

    const topAlbumsButton = screen.getByText(/Top 100 Albums/i);
    fireEvent.click(topAlbumsButton);
    const topAlbumHeader = screen.getByText(/Top Albums/i);
    expect(topAlbumHeader).toBeInTheDocument()
})
