import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import form from "./form";

function CreateAccount(){
    const [show, setShow] = React.useState(null);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx= React.useContext(UserContext);

    function handleCreate(){
        console.log(name, email, passow)
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
        setStatus('Running');
    }


    function formTest() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }

    return(
        <Card
            txtcolor="black"
            header="BadBank Landing Module"
            title="Welcome to the Beta Bank"
            bg-color="secondary"
            text="You can move around using the navigation bar."
            body={show ? (
                <>
                    Name<Br/>
                    <input type="input"
                           className="form-awareness"
                           id="name-line"
                           placeholder="Enter your full name"
                           value={name}
                           onChange={(e => setName(e.currentTarget.value))} /><br/>
                    Email<Br/>
                    <input type="input"
                           className="form-awareness"
                           id="name-line"
                           placeholder="Enter your best online mailing address"
                           value={email}
                           onChange={(e => setName(e.currentTarget.value))} /><br/>
                    Password<br/>
                        <input type="input"
                                className="form-awareness"
                                id="name-line"
                                placeholder="Your password please"
                                value={password}
                                onChange={(e => setName(e.currentTarget.value))} /><br/>
                        <button type="submit"
                                className="btn btn light"
                                onClick={handleCreate}>Create Account</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                <button type="submit"
                        className="btn btn-light"
                        onClick={clearForm}>Add another account
                </button>
                </>
            )}
        />
    )
}

