import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [title, setTitle] = useState(true);
  const [activeTab, setActiveTab] = useState("description");
  const [review, setReview] = useState({
    firstName: "",
    lastName: "",
    reviewDate: new Date().toLocaleDateString(),
    rating: "★★★★★",
    comment: "",
  });
  const [addReview, setAddReview] = useState([]);

  const handleTab = (tabTitle) => {
    setActiveTab(tabTitle);
    setTitle(tabTitle === "description");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReviewData = (e) => {
    e.preventDefault();
    if (!review.firstName || !review.lastName || !review.comment) {
      alert("Please enter all details!");
    } else {
      setAddReview([...addReview, review]);
      setReview({
        firstName: "",
        lastName: "",
        reviewDate: new Date().toLocaleDateString(),
        rating: "★★★★★",
        comment: "",
      });
    }
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "description" ? "selectedTab" : ""
          }`}
          onClick={() => handleTab("description")}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "reviews" ? "selectedTab" : ""
          }`}
          onClick={() => handleTab("reviews")}
        >
          Reviews
        </div>
      </div>
      <div className="descriptionbox-description">
        {title ? (
          <div>
            <h2>Product description</h2>
            <p>
              An e-commerce website is an online platform that allows businesses
              to showcase and sell their products or services to customers
              worldwide. It offers a seamless shopping experience with features
              like product catalogs, secure payment gateways, and easy checkout
              processes. Users can browse categories, compare prices, and read
              reviews before making a purchase. Many e-commerce websites also
              provide personalized recommendations, order tracking, and customer
              support for enhanced convenience.
            </p>
            <p>
              An e-commerce website is a digital marketplace that enables users
              to shop for products or services online from the comfort of their
              homes. It typically features intuitive navigation, detailed
              product descriptions, and high-quality images for an engaging
              shopping experience.{" "}
            </p>
          </div>
        ) : (
          <div className="reviews-container">
            <h2>Customer Reviews</h2>
            <div className="review">
              <div className="review-header">
                <h3>John Doe</h3>
                <span className="review-date">Reviewed on 2/25/2025</span>
              </div>
              <p className="review-text">
                <span className="rating">★★★★★</span>
                This dress is a showstopper! The fabric is soft and breathable,
                and the stitching is flawless. I've received so many compliments
                wearing it. Worth every penny!
              </p>
            </div>
            <div className="review">
              <div className="review-header">
                <h3>Jane Smith</h3>
                <span className="review-date">Reviewed on 11/16/2024</span>
              </div>
              <p className="review-text">
                <span className="rating">★★★★☆</span>
                Good quality but the size was a bit smaller than expected. The
                material is high-quality, and it fits perfectly. The color is
                exactly as shown, and it's super comfortable for all-day wear.
                Highly recommend!
              </p>
            </div>
            {addReview?.map((item, index) => {
              return (
                <div key={index} className="review">
                  <div className="review-header">
                    <h3>
                      {item?.firstName} {item?.lastName}
                    </h3>
                    <span className="review-date">
                      Reviewed on {item?.reviewDate}
                    </span>
                  </div>
                  <p className="review-text">
                    <span className="rating">{item?.rating}</span>
                    {item?.comment}
                  </p>
                </div>
              );
            })}
            <form className="review-form" onSubmit={handleReviewData}>
              <h3>Leave a Review</h3>
              <div className="review-form-inputs">
                <input
                  name="firstName"
                  value={review.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  name="lastName"
                  value={review.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <textarea
                name="comment"
                value={review.comment}
                onChange={handleChange}
                placeholder="Write your review here..."
              ></textarea>
              <button type="submit">Submit Review</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
