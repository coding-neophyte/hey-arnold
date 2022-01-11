import { screen, render } from '@testing-library/react'
import { rest } from 'msw'
import { MemoryRouter, Route } from 'react-router-dom'
import { setupServer } from 'msw/node'
import Characters from './Characters'


const server = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
        return res(ctx.json([{
            _id: '1',
            name: 'Arnold Shortman',
            image: 'www.example.com'
    },
    {
        _id: '2',
        name: 'Grandpa Phil',
        image: 'www.example.com'
    }
]));
    })
);

describe('characters test', () => {
    beforeAll(() => {
        server.listen();
    })
    afterAll(() => {
        server.close
    })

    it('should render out list of characters', async () => {
        render(
            <MemoryRouter initialEntries={['/characters']}>
                <Route path='/characters'>
                    <Characters />
                </Route>
            </MemoryRouter>
        );

        screen.getByText('Loading...')
        screen.debug()
        await screen.findByText('Arnold Shortman')
    })
})
