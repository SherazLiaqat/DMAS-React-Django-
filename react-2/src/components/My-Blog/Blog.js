import React from "react";
import "./Blog.css";
import blog1 from "../images/blog1.png";
import img2 from "../images/img-2.jpg";
import img4 from "../images/img-4.jpg";
import blog4 from "../images/blog4.png";
import img11 from "../images/img-11.jpg";
import img9 from "../images/img-9.Jpg";
import img12 from "../images/img-12.jpg";
import img6 from "../images/img-6.jpg";
const Blog = () => {
  return (
    <>
      <section className="container">
        <h1>BLOG</h1>
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
                    &nbsp;&nbsp;January 14, 2019
                  </span>
                  <span>2 Commets</span>
                </div>
              </div>
              <div className="post-title">
                <a href="">
                  Why should boys have all the fun? it's the women who are
                  making india an alcohol-loving contry
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  voluptas deserunt beatae adipisci iusto totam placeat corrupti
                  ipsum, tempora magnam incidunt aperiam tenetur a nobis,
                  voluptate, numquam architecto fugit. Eligendi quidem ipsam
                  ducimus minus magni illum similique veniam tempore unde?
                </p>
                <button className="btn post-btn">
                  Read More &nbsp; <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
            <hr />
            <div
              className="post-content"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="post-image">
                <div>
                  <img src={blog4} className="imgg" alt="blog1" />
                </div>
                <div className="post-info flex-row">
                  <span>
                    <i className="fas fa-user text-gray" />
                    &nbsp;&nbsp;Admin
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt text-gray" />
                    &nbsp;&nbsp;January 16, 2019
                  </span>
                  <span>7 Commets</span>
                </div>
              </div>
              <div className="post-title">
                <a href="">
                  Why should boys have all the fun? it's the women who are
                  making india an alcohol-loving contry
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  voluptas deserunt beatae adipisci iusto totam placeat corrupti
                  ipsum, tempora magnam incidunt aperiam tenetur a nobis,
                  voluptate, numquam architecto fugit. Eligendi quidem ipsam
                  ducimus minus magni illum similique veniam tempore unde?
                </p>
                <button className="btn post-btn">
                  Read More &nbsp; <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Blog;
