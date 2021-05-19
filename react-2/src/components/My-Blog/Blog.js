import React from "react";
import "./Blog.css";
import blog1 from "../images/blog1.png";
import img2 from "../images/img-2.jpg";
import img4 from "../images/img-4.jpg";
import blog4 from "../images/blog4.png";

class Blog extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url =
      "http://127.0.0.1:8000/bloghome/1";
    const response = await fetch(url);
    const data = await response.json();


    this.setState({ person: data, loading: false });
  }
  render()
    {
     
      if (this.state.loading) {
        return <div className="loading"> Loading...</div>;
      }
  
      if (!this.state.person) {
        return <div>didn't get a person</div>;
      }
      const elements = [0, 1, 2, 3, 4];
    return(
      <>
     
    
    
      <section className="container">
        
        <h1>BLOG</h1>
        <div className="site-content">
        {elements.map((i, index) => {
  return (
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
                    &nbsp;&nbsp;{this.state.person[i].time}
                  </span>
                  
                </div>
              </div>
              <div className="post-title">
                <a href="">
                {this.state.person[i].title}
                </a>
                <p>
                {this.state.person[i].short_desc}
                </p>
    
                <button className="btn post-btn">
                  Read More &nbsp; <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
            <hr />
                      </div>
                      );
                    })}
          <aside className="sidebar">
            <div className="category">
              <h2>Category</h2>
              <ul className="category-list">
                <li
                  className="list-items"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <a href="#">Software</a>
                  <span>(05)</span>
                </li>
                <li
                  className="list-items"
                  data-aos="fade-left"
                  data-aos-delay={200}
                >
                  <a href="#">Techonlogy</a>
                  <span>(02)</span>
                </li>
                <li
                  className="list-items"
                  data-aos="fade-left"
                  data-aos-delay={300}
                >
                  <a href="#">Lifestyle</a>
                  <span>(07)</span>
                </li>
                <li
                  className="list-items"
                  data-aos="fade-left"
                  data-aos-delay={400}
                >
                  <a href="#">Shopping</a>
                  <span>(01)</span>
                </li>
                <li
                  className="list-items"
                  data-aos="fade-left"
                  data-aos-delay={500}
                >
                  <a href="#">Food</a>
                  <span>(08)</span>
                </li>
              </ul>
            </div>

            <div className="popular-post">
              <h2>Recent Post</h2>
              <div
                className="post-content1"
                data-aos="flip-up"
                data-aos-delay={200}
              >
                <div className="post-image1">
                  <div>
                    <img src={img2} className="imgg" alt="blog1" />
                  </div>
                  <div className="post-info flex-row">
                    <span>
                      <i className="fas fa-calendar-alt text-gray" />
                      &nbsp;&nbsp;January 14, 2019
                    </span>
                  </div>
                </div>
                <div className="posts-title">
                  <a href="#">
                    New data recording system to better analyse road accidents
                  </a>
                </div>
              </div>
            </div>
            <div className="popular-tags">
              <h2>Popular Tags</h2>
              <br />
              <div className="tags flex-row">
                <span className="tag" data-aos="flip-up" data-aos-delay={100}>
                  Software
                </span>
                <span className="tag" data-aos="flip-up" data-aos-delay={200}>
                  technology
                </span>
                <span className="tag" data-aos="flip-up" data-aos-delay={300}>
                  travel
                </span>
                <br />
                <br />
                <span className="tag" data-aos="flip-up" data-aos-delay={400}>
                  illustration
                </span>
                <span className="tag" data-aos="flip-up" data-aos-delay={500}>
                  design
                </span>

                <span className="tag" data-aos="flip-up" data-aos-delay={600}>
                  lifestyle
                </span>
                <br />
                <br />
                <span className="tag" data-aos="flip-up" data-aos-delay={700}>
                  love
                </span>
                <span className="tag" data-aos="flip-up" data-aos-delay={800}>
                  project
                </span>
              </div>
            </div>
          </aside>
          <div className="pagination flex-row">
            <a href="#">
              <i className="fas fa-chevron-left" />
            </a>
            <a href="#" className="pages">
              1
            </a>
            <a href="#" className="pages">
              2
            </a>
            <a href="#" className="pages">
              3
            </a>
            <a href="#">
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </section>
    
    
  

  </>  );
}} 

export default Blog;
