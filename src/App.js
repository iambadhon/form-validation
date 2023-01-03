import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

function App() {
  // let [myname, setMyname] = useState(0);

  // let abc = () => {
  //   myname++;
  //   setMyname(myname);
  // };

  // useEffect(() => {
  //   console.log("Plus Hoiche");
  // }, [myname]);

  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCpassword] = useState("");
  let [usernameerr, setUserNameErr] = useState("");
  let [emailerr, setEmailErr] = useState("");
  let [passworderr, setPasswordErr] = useState("");
  let [cpassworderr, setCpasswordErr] = useState("");

  let usernamewrite = (e) => {
    setUserName(e.target.value);
    setUserNameErr("");
  };

  let emailwrite = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  let passwordwrite = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  let cpasswordwrite = (e) => {
    setCpassword(e.target.value);
    setCpasswordErr("");
  };

  let handelSubmit = (e) => {
    e.preventDefault();

    if (username == "") {
      setUserNameErr("Please give a user name");
    }
    if (email == "") {
      setEmailErr("Please give a email");
    }
    if (password == "") {
      setPasswordErr("Please give a password");
    }
    if (cpassword == "") {
      setCpasswordErr("Please give a confirm password");
    }
  };

  return (
    // <>
    //   <h1>{myname}</h1>
    //   <button onClick={abc}>click</button>
    // </>

    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={usernamewrite}
            type="text"
            placeholder="Enter user name"
          />
          {usernameerr != "" ? (
            <Form.Text className="text-muted">{usernameerr}</Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={emailwrite}
            type="email"
            placeholder="Enter email"
          />
          {emailerr != "" ? (
            <Form.Text className="text-muted">{emailerr}</Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={passwordwrite}
            type="password"
            placeholder="Password"
          />
          {passworderr != "" ? (
            <Form.Text className="text-muted">{passworderr}</Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={cpasswordwrite}
            type="password"
            placeholder="Confirm Password"
          />
          {cpassworderr != "" ? (
            <Form.Text className="text-muted">{cpassworderr}</Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Button onClick={handelSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
