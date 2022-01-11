import { screen, render } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import CharacterDetail from './CharacterDetail'

const server = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/:id', (req, res, ctx) => {
        return res(ctx.json({
            name: 'Arnold Shortman',
            image: 'www.example.com'
        }));
    })
);

describe('character detail test', () => {
    beforeAll(() => {
        server.listen();
    })
    afterAll(() => {
        server.close();
    })

    it('should render single character', async () => {
        render(
            <MemoryRouter>
                <Route>
                    <CharacterDetail />
                </Route>
            </MemoryRouter>
        );

        screen.getByText('Loading...')

        await screen.findByText('Arnold Shortman')
    })
})
