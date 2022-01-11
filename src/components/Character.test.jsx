import { screen, render } from '@testing-library/react'
import Character from './Character'


describe('character test', () =>{
    it('should render character component', () =>{
        const mockCharacter = {
            name: 'Arnold Shortman',
            image: 'www.example.com',
        }

        const charComponent = render(<Character name={mockCharacter.name} image={mockCharacter.image} />)

        expect(charComponent).toMatchSnapshot();
    })
})
