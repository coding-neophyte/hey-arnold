import { render } from '@testing-library/react'
import ListCharacters from './ListCharacters'
import { MemoryRouter, Link } from 'react-router-dom'


describe('character list test', () => {
    it('should render character list', () => {

        const mockList = [
            {
                id: '1',
                name: 'Arnold Shortman',
                image: 'www.example.com'
            },

            {
                id: '2',
                name: 'Helga Pataki',
                image: 'www.example.com'
            }
        ]

        const list = render(<MemoryRouter><ListCharacters characters={mockList} /></MemoryRouter>)

        expect(list).toMatchSnapshot()

    })
})
