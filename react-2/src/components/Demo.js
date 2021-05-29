import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import styles from '../App.css';
import blog1 from "../components/images/blog1.png";
//import  Pagination from './News/Pagination';
let p=0;
class App extends Component {


  state = {
    users: null,
    total: null,
    per_page: null,
    current_page: 1
  }


  componentDidMount() {
    this.makeHttpRequestWithPage(1);
  }


  makeHttpRequestWithPage = async pageNumber => {
    const response = await fetch(`http://127.0.0.1:8000/bloghome/${p+pageNumber}`);
    p=p+pageNumber;

    const data = await response.json();
console.log(data);
    this.setState({
      users: data,
      total: 2,
      per_page: 5,
      current_page: 1
    });
  }

  render() {

    let users, renderPageNumbers;

    if (this.state.users !== null) {
      users = this.state.users.map(user => (
        <div className="site-content">
       
        <div className="posts">

          <div
            className="post-content"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="post-image">
              <div>
                <img src={blog1} className="imgg" alt="blog1" />
              </div>
              <div className="post-info flex-row">
                <span>
                  <i className="fas fa-user text-gray" />
                  &nbsp;&nbsp;Admin
                </span>
                <span>
                  <i className="fas fa-calendar-alt text-gray" />
                  &nbsp;&nbsp;{user.time}
                </span>
                <span>2 Commets</span>
              </div>
            </div>
            <div className="post-title">
              <a href="">
              {user.title}
              </a>
              <p>
              {user.short_desc}
              </p>
              <button className="btn post-btn">
                Read More &nbsp; <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
          <hr />
         
        </div>
       
        
        </div>
      ));
    }

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        let classes = this.state.current_page === number ? 'active' : '';

        return (
          <span key={number} className={classes} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
        );
      });
    }

    return (


    <div>
            {users}
         
            

        <section className="pagination flex-row">
            <a href="#" onClick={() => this.makeHttpRequestWithPage(-1)}>
              <i className="fas fa-chevron-left" />
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(1)} className="pages">
              {p+1}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(2)} className="pages">
            {p+2}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(3)} className="pages">
            {p+3}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(1)}>
              <i className="fas fa-chevron-right" />
            </a>
            
          </section>
      </div>
    );
  }

}

export default App;