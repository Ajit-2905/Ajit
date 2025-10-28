import React from "react";
//import "./About.css"; // optional custom styles

export default function AboutUs() {
  return (
    <>
    <div
        className="about-banner text-center text-white d-flex align-items-center justify-content-center"
        style={{ background: `url(${process.env.PUBLIC_URL + "/rings-bg.jpg"}) center/cover no-repeat`,
        height: "300px",
    }}
        >
          
        </div>

      {/* Content Section */}
      <div className="container py-5">
        <p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.8" }}>
          Established in the year 1994, Ajit Jewell in Pattan Kodoli,
          Kolhapur is a Silver Ornaments Manufacturers in the
          Kolhapur. This well-known establishment acts as a one-stop destination
          servicing customers both local and from other parts of Kolhapur.
        </p>

        <p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.8" }}>
          Over the course of its journey, this business has established a firm
          foothold in its industry. The belief that customer satisfaction is as
          important as their products and services, have helped this
          establishment garner a vast base of customers, which continues to grow
          by the day. This business employs individuals that are dedicated
          towards their respective roles and put in a lot of effort to achieve
          the common vision and larger goals of the company.
        </p>

        <p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.8" }}>
          In the near future, this business aims to expand its line of products
          and services and cater to a larger client base. In Kolhapur, this
          establishment occupies a prominent location in Pattan Kodoli. It is an
          effortless task in commuting to this establishment as there are
          various modes of transport readily available. It is at Mahaveer Colony, 
          Shahu Nagar, Pattan Kodoli, which makes it easy for first-time visitors
          in locating this establishment.
        </p>

        <p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.8" }}>
          It is known to provide top service in the following categories:
          Ring Manufacturers, Silver Coin Manufacturers, Silver Jewellery
          Manufacturers, Silver Jewellery Showrooms, Silver Momento
          Manufacturers, Silver Polishing Services, Silver Jewellery Wholesalers,
          Silver Payal Manufacturers.
        </p>
      </div>
    </>
  );
}
