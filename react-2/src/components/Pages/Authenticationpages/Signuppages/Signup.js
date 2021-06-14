


import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [username,setUsername]=useState("");
  const [email,setemail]=useState("");
  const [Password,setPassword]=useState("");
  const [Password2,setPassword2]=useState("");
  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [users,setusers]=useState("");

  const signupinfo = async () => {
    let formfield = new FormData();
    formfield.append("fname",firstname);
    formfield.append("lname", lastname);
    formfield.append("username",username );
    formfield.append("email",email );
    formfield.append("pass1", Password);
    formfield.append("pass2", Password2);
   
  
   await axios({
    method: "post",
    url: "http://127.0.0.1:8000/signup/",
    data: formfield,
  }).then((response) => {
    console.log(response.data);
    setusers(response.data);
    
    
  });
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        
       Welcome back!<br/> Help out the Pendamic suffering people.
        
      
        </Typography>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
           // autoComplete="name"
            //autoFocus
            type="text"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
           // autoComplete="name"
            //autoFocus
            type="text"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
           // autoComplete="name"
            //autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email "
            name="email"
           // autoComplete="name"
            //autoFocus
            type="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            //autoComplete="current-password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Password"
            type="password"
            id="password2"
            //autoComplete="current-password"
            value={Password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        
          
          
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
            onClick={signupinfo}
            
          >
            Sign Up
          </Button>
          <Grid container>
          
            <Grid item>
              <Link href="/Login" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
        
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
  }
  {/* Some Extraa work*/}
   {/*  <div className='form-content-right'>
    
    <form  className='form' >
      <h1>
        Get started with us today! Create your account by filling out the
        information below.
      </h1>
      <div className='form-inputs'>
        <label className='form-label'>Username</label>
        <input
          className='form-input'
          type='text'
          name='username'
          placeholder='Enter your username'
        
        />
      
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Email</label>
        <input
          className='form-input'
          type='email'
          name='email'
          placeholder='Enter your email'
          
        />
        
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
         
        />
       
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Confirm Password</label>
        <input
          className='form-input'
          type='password'
          name='password2'
          placeholder='Confirm your password'
         
        />
        
      </div>
    
          <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          onClick=''>
            SIGN-UP  <i class="fa fa-chevron-right"></i>
          </Button>
          </div>
      <span className='form-input-login'>
        Already have an account? Login 
        <Link
                to='/Home'
                className='nav-links'
                
              >
                LOgin
              </Link>
          
         < a href='/Home'>here</a>
      </span>
    </form>
  </div>
//Signup woork

*/}
 
