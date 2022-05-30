import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'

it('Should have username and password field, and also a submit button', () => {
    render(<LoginForm />)

    const usernameField = screen.getByLabelText(/username/i)
    const passwordField = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/submit/i)

    expect(usernameField).toBeInTheDocument()
    expect(passwordField).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
})

it('Should allow to user to submit the credentials', () => {
    const submit = jest.fn()
    render(<LoginForm  submit={submit}/>)

    const usernameField = screen.getByLabelText(/username/i)
    const passwordField = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/submit/i)
    
    userEvent.type(usernameField, 'test')
    userEvent.type(passwordField, 'password')
    userEvent.click(submitButton)

    expect(submit).toHaveBeenCalledWith({
        username: 'test',
        password: 'password'
    })

})