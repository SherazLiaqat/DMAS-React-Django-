import React, { Component } from 'react';
import styles from '../App.css';
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
        <tr>
          <td>{user.title}</td>
          <td>{user.short_desc}</td>
          <td>{user.time}</td>
        </tr>
      ));
    }

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        let classes = this.state.current_page === number ? styles.active : '';

        return (
          <span key={number} className={classes} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
        );
      });
    }

    return (


      <div className={styles.app}>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>


        <div className={styles.pagination}>
          <span onClick={() => this.makeHttpRequestWithPage(-1)}>&laquo;</span>
          {p}
          <span onClick={() => this.makeHttpRequestWithPage(1)}>&raquo;</span>
        </div>

      </div>
    );
  }

}

export default App;